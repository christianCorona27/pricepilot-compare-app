import { readPublicProductPage, parsePrice } from "./lib/page-reader.mts";
import {
  buildTrackerKey,
  getPriceTrackerStore,
  isValidEmail,
  jsonResponse,
  getTrackerCurrentPrice,
  sendPriceAlertEmail,
  type PriceTracker
} from "./lib/alerts.mts";

function cleanText(value?: string | null, fallback = "") {
  const cleaned = String(value || "")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned || fallback;
}

function publicTrackerPayload(tracker: PriceTracker) {
  return {
    id: tracker.id,
    url: tracker.url,
    hostname: tracker.hostname,
    title: tracker.title,
    description: tracker.description,
    image: tracker.image,
    currency: tracker.currency,
    targetPrice: tracker.targetPrice,
    currentPrice: getTrackerCurrentPrice(tracker),
    lastConfidence: tracker.lastConfidence,
    status: tracker.status,
    updatedAt: tracker.updatedAt,
    lastCheckedAt: tracker.lastCheckedAt,
    lastError: tracker.lastError,
    failureCount: tracker.failureCount || 0,
    priceHistory: Array.isArray(tracker.priceHistory) ? tracker.priceHistory : []
  };
}

async function handleGet(req: Request) {
  const requestUrl = new URL(req.url);
  const id = String(requestUrl.searchParams.get("id") || "").trim();
  const email = String(requestUrl.searchParams.get("email") || "").trim().toLowerCase();

  if (!id.startsWith("tracker/") || !isValidEmail(email)) {
    return jsonResponse({ error: "Tracker id and matching email are required." }, 400);
  }

  const store = getPriceTrackerStore();
  const tracker = await store.get(id, { type: "json" }) as PriceTracker | null;

  if (!tracker) {
    return jsonResponse({ error: "Tracker not found." }, 404);
  }

  if (String(tracker.email || "").toLowerCase() !== email) {
    return jsonResponse({ error: "Tracker email does not match." }, 403);
  }

  return jsonResponse({ ok: true, tracker: publicTrackerPayload(tracker) });
}

async function handlePost(req: Request) {
  const payload = await req.json().catch(() => null);
  if (!payload) {
    return jsonResponse({ error: "Invalid JSON payload." }, 400);
  }

  const url = String(payload.url || "").trim();
  const email = String(payload.email || "").trim().toLowerCase();
  const targetPrice = parsePrice(payload.targetPrice);
  const confirmedPrice = parsePrice(payload.confirmedPrice);

  if (!isValidEmail(email)) {
    return jsonResponse({ error: "Enter a valid email address for price alerts." }, 400);
  }
  if (!targetPrice || targetPrice <= 0) {
    return jsonResponse({ error: "Enter a target price greater than 0." }, 400);
  }

  let page;
  try {
    page = await readPublicProductPage(url);
  } catch (error) {
    return jsonResponse({ error: error instanceof Error ? error.message : "Unable to read that URL." }, 400);
  }

  if (!page.ok) {
    return jsonResponse({ error: page.message || "Unable to read that product page." }, 422);
  }

  if (!page.price || page.price <= 0) {
    return jsonResponse({
      error: "SmartSave could not find a reusable price on this page. Try a public product page that exposes price metadata."
    }, 422);
  }
  const currentPrice = confirmedPrice && Math.abs(confirmedPrice - page.price) < 0.01 ? confirmedPrice : page.price;

  const now = new Date().toISOString();
  const title = cleanText(payload.confirmedTitle, page.title || page.hostname || "Tracked product");
  const id = buildTrackerKey(page.url, email);
  const tracker: PriceTracker = {
    id,
    url: page.url,
    hostname: page.hostname,
    title,
    description: cleanText(page.description),
    image: cleanText(page.image),
    currency: page.currency || "USD",
    targetPrice,
    email,
    currentPrice,
    lastConfidence: page.confidence,
    status: "tracking",
    createdAt: now,
    updatedAt: now,
    lastCheckedAt: now,
    lastAlertedAt: null,
    lastAlertedPrice: null,
    lastError: null,
    failureCount: 0,
    priceHistory: [{ date: now, price: currentPrice }]
  };

  if (getTrackerCurrentPrice(tracker) <= tracker.targetPrice) {
    const emailSent = await sendPriceAlertEmail(tracker);
    if (emailSent) {
      tracker.status = "alerted";
      tracker.lastAlertedAt = now;
      tracker.lastAlertedPrice = tracker.currentPrice;
    }
  }

  const store = getPriceTrackerStore();
  await store.setJSON(id, tracker);

  return jsonResponse({
    ok: true,
    trackerId: id,
    tracker: publicTrackerPayload(tracker),
    immediateMatch: getTrackerCurrentPrice(tracker) <= tracker.targetPrice,
    emailConfigured: Boolean(Netlify.env.get("RESEND_API_KEY") && Netlify.env.get("ALERT_FROM_EMAIL")),
    message: getTrackerCurrentPrice(tracker) <= tracker.targetPrice
      ? "Tracker saved. The current price already meets the target, so SmartSave attempted an immediate email alert."
      : "Tracker saved. SmartSave will re-check this public product page on the scheduled backend sweep."
  });
}

export default async (req: Request) => {
  if (req.method === "GET") {
    return handleGet(req);
  }

  if (req.method === "POST") {
    return handlePost(req);
  }

  return jsonResponse({ error: "Method not allowed." }, 405);
};

export const config = {
  path: "/api/track-url"
};
