import type { Config } from "@netlify/functions";
import { readPublicProductPage } from "./lib/page-reader.mts";
import {
  getPriceTrackerStore,
  getTrackerCurrentPrice,
  sendPriceAlertEmail,
  type PriceTracker
} from "./lib/alerts.mts";

const MAX_TRACKERS_PER_RUN = 25;
const MAX_HISTORY_POINTS = 40;

function appendHistory(tracker: PriceTracker, price: number, checkedAt: string) {
  if (!Array.isArray(tracker.priceHistory)) {
    tracker.priceHistory = [];
  }

  tracker.priceHistory.push({ date: checkedAt, price });
  tracker.priceHistory = tracker.priceHistory.slice(-MAX_HISTORY_POINTS);
}

function markRefreshFailure(tracker: PriceTracker, checkedAt: string, status: "price-missing" | "source-error", message: string) {
  tracker.status = status;
  tracker.updatedAt = checkedAt;
  tracker.lastCheckedAt = checkedAt;
  tracker.lastError = message;
  tracker.failureCount = (tracker.failureCount || 0) + 1;
}

async function refreshTracker(blobKey: string) {
  const store = getPriceTrackerStore();
  const tracker = await store.get(blobKey, { type: "json" }) as PriceTracker | null;
  if (!tracker) {
    return { refreshed: false, alerted: false, reason: "missing-tracker" };
  }

  const checkedAt = new Date().toISOString();

  try {
    const page = await readPublicProductPage(tracker.url);

    if (!page.ok || !page.price) {
      markRefreshFailure(
        tracker,
        checkedAt,
        page.ok ? "price-missing" : "source-error",
        page.message || "The page did not expose a readable price."
      );
      await store.setJSON(blobKey, tracker);
      return { refreshed: false, alerted: false, reason: tracker.status };
    }

    tracker.title = page.title || tracker.title;
    tracker.description = page.description || tracker.description;
    tracker.image = page.image || tracker.image;
    tracker.currency = page.currency || tracker.currency;
    tracker.currentPrice = page.price;
    tracker.lastPrice = page.price;
    tracker.lastConfidence = page.confidence;
    tracker.status = "tracking";
    tracker.updatedAt = checkedAt;
    tracker.lastCheckedAt = checkedAt;
    tracker.lastError = null;
    tracker.failureCount = 0;
    appendHistory(tracker, page.price, checkedAt);

    const currentPrice = getTrackerCurrentPrice(tracker);
    const alreadyAlertedForPrice = tracker.lastAlertedPrice === currentPrice;
    let alerted = false;

    if (currentPrice <= tracker.targetPrice && !alreadyAlertedForPrice) {
      const emailSent = await sendPriceAlertEmail(tracker);
      if (emailSent) {
        tracker.status = "alerted";
        tracker.lastAlertedAt = checkedAt;
        tracker.lastAlertedPrice = currentPrice;
        alerted = true;
      }
    }

    await store.setJSON(blobKey, tracker);
    return { refreshed: true, alerted, reason: "ok" };
  } catch (error) {
    markRefreshFailure(
      tracker,
      checkedAt,
      "source-error",
      error instanceof Error ? error.message : "Unknown scheduled refresh error."
    );
    await store.setJSON(blobKey, tracker);
    console.warn(`SmartSave tracker refresh failed for ${blobKey}:`, error);
    return { refreshed: false, alerted: false, reason: "exception" };
  }
}

export default async () => {
  const store = getPriceTrackerStore();
  const { blobs } = await store.list({ prefix: "tracker/" });
  let processed = 0;
  let refreshed = 0;
  let alerted = 0;
  let failed = 0;

  for (const blob of blobs) {
    if (processed >= MAX_TRACKERS_PER_RUN) {
      break;
    }
    processed += 1;

    try {
      const result = await refreshTracker(blob.key);
      if (result.refreshed) {
        refreshed += 1;
      }
      if (result.alerted) {
        alerted += 1;
      }
      if (!result.refreshed && result.reason !== "missing-tracker") {
        failed += 1;
      }
    } catch (error) {
      failed += 1;
      console.warn(`SmartSave skipped tracker ${blob.key} after storage failure:`, error);
    }
  }

  console.log(`SmartSave price sweep processed ${processed} tracker(s): ${refreshed} refreshed, ${alerted} alerted, ${failed} failed.`);
};

export const config: Config = {
  schedule: "@hourly"
};
