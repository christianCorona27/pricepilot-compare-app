import { getLocalProviderMatches, normalizeZipCode } from "./lib/provider-directory.mts";
import { jsonResponse } from "./lib/alerts.mts";

export default async (req: Request) => {
  const url = new URL(req.url);
  const zipCode = normalizeZipCode(url.searchParams.get("zip"));

  if (zipCode.length !== 5) {
    return jsonResponse({ error: "A valid 5-digit ZIP code is required." }, 400);
  }

  const matchedProviders = getLocalProviderMatches(zipCode);
  const vehicleProviders = matchedProviders.filter((provider) => provider.kind === "vehicle");
  const homeProviders = matchedProviders.filter((provider) => provider.kind === "home");

  return jsonResponse({
    zipCode,
    matchedProviders,
    vehicleProviders,
    homeProviders,
    summary: matchedProviders.length
      ? `Matched ${vehicleProviders.length} dealership options and ${homeProviders.length} lender options near ${zipCode}.`
      : `No local dealership or lender matches were found for ${zipCode} in this seeded directory yet.`
  });
};

export const config = {
  path: "/api/local-match"
};
