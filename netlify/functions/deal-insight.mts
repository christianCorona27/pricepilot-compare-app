import { jsonResponse } from "./lib/page-reader.mts";

interface DealInsightPayload {
  title?: string;
  hostname?: string;
  price?: number;
  targetPrice?: number | null;
}

function cleanText(value?: string | null, fallback = "") {
  const cleaned = String(value || "")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned || fallback;
}

function parsePrice(value: unknown) {
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric > 0 ? numeric : null;
}

function retailerNameFromHost(hostname: string) {
  const host = hostname.replace(/^www\./, "");
  const first = host.split(".")[0] || host;
  return first
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ") || host;
}

function buildCouponQueries(title: string, hostname: string) {
  const retailer = retailerNameFromHost(hostname);
  const shortTitle = title.split(/[|–—-]/)[0].trim() || title;
  return [
    `${shortTitle} promo code`,
    `${retailer} coupon 2026`,
    `${shortTitle} sale ${retailer}`
  ].slice(0, 3);
}

function fallbackInsight(payload: Required<Pick<DealInsightPayload, "title" | "hostname">> & DealInsightPayload) {
  const target = parsePrice(payload.targetPrice);
  const price = parsePrice(payload.price);
  if (target && price) {
    const realistic = target >= price * 0.75;
    return realistic
      ? `Your target of $${target.toFixed(2)} looks realistic for this item. Track it and wait for a clean drop.`
      : `Your target of $${target.toFixed(2)} is aggressive for this item. SmartSave can still watch for a larger drop.`;
  }
  return "Price detected. Set a target and SmartSave will watch for a better time to buy.";
}

function parseJsonObject(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    return match ? JSON.parse(match[0]) : null;
  }
}

async function buildOpenAiInsight(payload: Required<Pick<DealInsightPayload, "title" | "hostname">> & DealInsightPayload) {
  const apiKey = Netlify.env.get("OPENAI_API_KEY") || "";
  if (!apiKey) {
    return null;
  }

  const model = "gpt-4o-mini";
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      max_output_tokens: 220,
      input: [
        {
          role: "developer",
          content: [
            {
              type: "input_text",
              text: "You write concise shopping insights. Do not claim access to live coupon databases, private price histories, or exact future sales. Return only JSON with keys insight and couponQueries. insight must be one short sentence. couponQueries must be 3 search query strings."
            }
          ]
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: JSON.stringify({
                title: payload.title,
                retailer: retailerNameFromHost(payload.hostname),
                hostname: payload.hostname,
                detectedPrice: payload.price ?? null,
                targetPrice: payload.targetPrice ?? null,
                currentYear: 2026
              })
            }
          ]
        }
      ],
      text: {
        format: { type: "json_object" }
      }
    })
  });

  if (!response.ok) {
    return null;
  }

  const result = await response.json();
  const outputText = result.output_text
    || result.output?.flatMap((item: any) => item.content || [])
      .map((content: any) => content.text || "")
      .join("")
    || "";
  return parseJsonObject(outputText);
}

export default async (req: Request) => {
  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed." }, 405);
  }

  const body = await req.json().catch(() => null) as DealInsightPayload | null;
  if (!body) {
    return jsonResponse({ error: "Invalid JSON payload." }, 400);
  }

  const title = cleanText(body.title);
  const hostname = cleanText(body.hostname);
  const price = parsePrice(body.price);
  const targetPrice = parsePrice(body.targetPrice);

  if (!title || !hostname) {
    return jsonResponse({ error: "Title and source are required." }, 400);
  }

  let aiResult = null;
  try {
    aiResult = await buildOpenAiInsight({ title, hostname, price: price ?? undefined, targetPrice });
  } catch (error) {
    console.warn("SmartSave OpenAI insight failed:", error);
  }

  const fallbackQueries = buildCouponQueries(title, hostname);
  return jsonResponse({
    ok: true,
    configured: Boolean(Netlify.env.get("OPENAI_API_KEY")),
    source: aiResult ? "openai" : "fallback",
    insight: cleanText(aiResult?.insight, fallbackInsight({ title, hostname, price: price ?? undefined, targetPrice })),
    couponQueries: Array.isArray(aiResult?.couponQueries) && aiResult.couponQueries.length
      ? aiResult.couponQueries.map((query: string) => cleanText(query)).filter(Boolean).slice(0, 3)
      : fallbackQueries
  });
};

export const config = {
  path: "/api/deal-insight"
};
