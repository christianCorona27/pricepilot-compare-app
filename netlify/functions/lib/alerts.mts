import { getDeployStore, getStore } from "@netlify/blobs";

export interface WatchSubscription {
  id: string;
  itemId: string;
  itemName: string;
  itemCategory: string;
  billing: string;
  targetPrice: number;
  currentPrice: number;
  bestProviderName: string;
  zipCode: string;
  email?: string;
  text?: string;
  profile: {
    student: boolean;
    senior: boolean;
    service: boolean;
  };
  createdAt: string;
  updatedAt: string;
  lastNotifiedAt?: string | null;
  lastNotifiedPrice?: number | null;
}

function getEnv(name: string) {
  return Netlify.env.get(name) || "";
}

export function getAlertsStore() {
  if (Netlify.context?.deploy?.context === "production") {
    return getStore("pricepilot-alerts", { consistency: "strong" });
  }

  return getDeployStore("pricepilot-alerts");
}

export function buildSubscriptionKey(itemId: string, email?: string, text?: string) {
  const contact = [email?.toLowerCase().trim(), text?.replace(/[^\d]/g, "")]
    .filter(Boolean)
    .join("-");

  const safeContact = (contact || "browser-only").replace(/[^a-z0-9-]/gi, "-").slice(0, 80);
  return `subscription/${itemId}-${safeContact}`;
}

export function jsonResponse(payload: unknown, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8"
    }
  });
}

function buildAlertMessage(subscription: WatchSubscription) {
  const priceText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: subscription.currentPrice % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2
  }).format(subscription.currentPrice);

  const targetText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: subscription.targetPrice % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2
  }).format(subscription.targetPrice);

  return {
    subject: `${subscription.itemName} hit your PricePilot target`,
    text: `${subscription.itemName} is now ${priceText} from ${subscription.bestProviderName}, which meets your target of ${targetText}.`,
    html: `<p><strong>${subscription.itemName}</strong> is now <strong>${priceText}</strong> from ${subscription.bestProviderName}.</p><p>Your target was ${targetText}.</p>`
  };
}

export async function sendEmailNotification(subscription: WatchSubscription) {
  if (!subscription.email) {
    return false;
  }

  const apiKey = getEnv("RESEND_API_KEY");
  const fromEmail = getEnv("ALERT_FROM_EMAIL");
  if (!apiKey || !fromEmail) {
    return false;
  }

  const message = buildAlertMessage(subscription);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [subscription.email],
      subject: message.subject,
      html: message.html,
      text: message.text
    })
  });

  return response.ok;
}

export async function sendTextNotification(subscription: WatchSubscription) {
  if (!subscription.text) {
    return false;
  }

  const accountSid = getEnv("TWILIO_ACCOUNT_SID");
  const authToken = getEnv("TWILIO_AUTH_TOKEN");
  const fromNumber = getEnv("TWILIO_FROM_NUMBER");

  if (!accountSid || !authToken || !fromNumber) {
    return false;
  }

  const message = buildAlertMessage(subscription);
  const basicAuth = Buffer.from(`${accountSid}:${authToken}`).toString("base64");
  const body = new URLSearchParams({
    To: subscription.text,
    From: fromNumber,
    Body: message.text
  });

  const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body
  });

  return response.ok;
}

export async function sendWatchNotifications(subscription: WatchSubscription) {
  const [emailSent, textSent] = await Promise.all([
    sendEmailNotification(subscription),
    sendTextNotification(subscription)
  ]);

  return {
    emailSent,
    textSent
  };
}
