import { getAlertsStore, sendWatchNotifications, type WatchSubscription } from "./lib/alerts.mts";

export default async () => {
  const store = getAlertsStore();
  const { blobs } = await store.list({ prefix: "subscription/" });

  for (const blob of blobs) {
    const subscription = await store.get(blob.key, { type: "json" }) as WatchSubscription | null;
    if (!subscription) {
      continue;
    }

    if (subscription.currentPrice > subscription.targetPrice) {
      continue;
    }

    if (subscription.lastNotifiedPrice === subscription.currentPrice) {
      continue;
    }

    const notificationSummary = await sendWatchNotifications(subscription);
    if (!notificationSummary.emailSent && !notificationSummary.textSent) {
      continue;
    }

    subscription.lastNotifiedAt = new Date().toISOString();
    subscription.lastNotifiedPrice = subscription.currentPrice;
    subscription.updatedAt = subscription.lastNotifiedAt;
    await store.setJSON(blob.key, subscription);
  }
};

export const config = {
  schedule: "@hourly"
};
