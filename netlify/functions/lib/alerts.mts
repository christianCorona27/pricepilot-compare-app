import { getDeployStore, getStore } from "@netlify/blobs";

export interface PricePoint {
  date: string;
  price: number;
}

export interface PriceTracker {
  id: string;
  url: string;
  hostname: string;
  title: string;
  description: string;
  image: string;
  currency: string;
  targetPrice: number;
  email: string;
  currentPrice: number;
  lastPrice?: number;
  lastConfidence: "high" | "medium" | "low";
  status: "tracking" | "manual-start" | "price-missing" | "source-error" | "alerted";
  createdAt: string;
  updatedAt: string;
  lastCheckedAt: string;
  lastAlertedAt?: string | null;
  lastAlertedPrice?: number | null;
  lastError?: string | null;
  failureCount?: number;
  priceHistory: PricePoint[];
}

function getEnv(name: string) {
  return Netlify.env.get(name) || "";
}

export function getPriceTrackerStore() {
  if (Netlify.context?.deploy?.context === "production") {
    return getStore("smartsave-price-trackers", { consistency: "strong" });
  }

  return getDeployStore("smartsave-price-trackers");
}

export function buildTrackerKey(url: string, email: string) {
  const encoded = Buffer.from(`${email.toLowerCase().trim()}|${url.trim()}`).toString("base64url");
  return `tracker/${encoded.slice(0, 160)}`;
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function jsonResponse(payload: unknown, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8"
    }
  });
}

function formatCurrency(value: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2
  }).format(value);
}

export function getTrackerCurrentPrice(tracker: PriceTracker) {
  const currentPrice = Number(tracker.currentPrice);
  if (Number.isFinite(currentPrice)) {
    return currentPrice;
  }

  // Legacy trackers created before the schema used lastPrice instead.
  const legacyPrice = Number(tracker.lastPrice);
  return Number.isFinite(legacyPrice) ? legacyPrice : 0;
}

function buildAlertMessage(tracker: PriceTracker) {
  const priceText = formatCurrency(getTrackerCurrentPrice(tracker), tracker.currency);
  const targetText = formatCurrency(tracker.targetPrice, tracker.currency);
  const safeTitle = tracker.title.replace(/[<>]/g, "");
  const safeUrl = tracker.url.replace(/"/g, "&quot;");

  return {
    subject: `${tracker.title} hit your SmartSave target`,
    text: `${tracker.title} is now ${priceText}, which meets your target of ${targetText}. Check it here: ${tracker.url}`,
    html: `<p><strong>${safeTitle}</strong> is now <strong>${priceText}</strong>, which meets your target of ${targetText}.</p><p><a href="${safeUrl}">Open the product page</a></p>`
  };
}

export async function sendPriceAlertEmail(tracker: PriceTracker) {
  const apiKey = getEnv("RESEND_API_KEY");
  const fromEmail = getEnv("ALERT_FROM_EMAIL");

  if (!apiKey || !fromEmail || !tracker.email) {
    return false;
  }

  const message = buildAlertMessage(tracker);
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [tracker.email],
        subject: message.subject,
        html: message.html,
        text: message.text
      })
    });

    return response.ok;
  } catch (error) {
    console.warn(`SmartSave email alert failed for tracker ${tracker.id}:`, error);
    return false;
  }
}
