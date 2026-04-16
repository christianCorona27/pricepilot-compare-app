import {
  buildSubscriptionKey,
  getAlertsStore,
  jsonResponse,
  sendWatchNotifications,
  type WatchSubscription
} from "./lib/alerts.mts";

export default async (req: Request) => {
  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed." }, 405);
  }

  const payload = await req.json().catch(() => null);
  if (!payload) {
    return jsonResponse({ error: "Invalid JSON payload." }, 400);
  }

  const email = String(payload.email || "").trim();
  const text = String(payload.text || "").trim();

  if (!email && !text) {
    return jsonResponse({ error: "Provide an email or text number to create a backend alert." }, 400);
  }

  const currentPrice = Number(payload.currentPrice);
  const targetPrice = Number(payload.targetPrice);
  if (!payload.itemId || !payload.itemName || !Number.isFinite(currentPrice) || !Number.isFinite(targetPrice)) {
    return jsonResponse({ error: "Missing required watch details." }, 400);
  }

  const id = buildSubscriptionKey(String(payload.itemId), email, text);
  const now = new Date().toISOString();
  const subscription: WatchSubscription = {
    id,
    itemId: String(payload.itemId),
    itemName: String(payload.itemName),
    itemCategory: String(payload.itemCategory || "Unknown"),
    billing: String(payload.billing || "one-time"),
    targetPrice,
    currentPrice,
    bestProviderName: String(payload.bestProviderName || "Unknown provider"),
    zipCode: String(payload.zipCode || ""),
    email: email || undefined,
    text: text || undefined,
    profile: {
      student: Boolean(payload.profile?.student),
      senior: Boolean(payload.profile?.senior),
      service: Boolean(payload.profile?.service)
    },
    createdAt: now,
    updatedAt: now,
    lastNotifiedAt: null,
    lastNotifiedPrice: null
  };

  const store = getAlertsStore();
  let notificationSummary = {
    emailSent: false,
    textSent: false
  };

  if (subscription.currentPrice <= subscription.targetPrice) {
    notificationSummary = await sendWatchNotifications(subscription);
    if (notificationSummary.emailSent || notificationSummary.textSent) {
      subscription.lastNotifiedAt = now;
      subscription.lastNotifiedPrice = subscription.currentPrice;
    }
  }

  await store.setJSON(id, subscription);

  return jsonResponse({
    ok: true,
    subscriptionId: id,
    immediateMatch: subscription.currentPrice <= subscription.targetPrice,
    notificationSummary,
    message:
      subscription.currentPrice <= subscription.targetPrice
        ? "Subscription saved. The current price already meets the target, so backend notifications were attempted immediately."
        : "Subscription saved. Scheduled backend checks can notify this contact when the tracked price falls to the target."
  });
};

export const config = {
  path: "/api/watch-alerts"
};
