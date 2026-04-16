export type ProviderKind = "vehicle" | "home";

export interface ProviderDirectoryEntry {
  name: string;
  kind: ProviderKind;
  city: string;
  state: string;
  areaLabel: string;
  zipPrefixes: string[];
  notes: string;
}

export interface LocalProviderMatch extends ProviderDirectoryEntry {
  matchedZip: string;
  matchType: "exact" | "prefix";
  score: number;
}

const providerDirectory: ProviderDirectoryEntry[] = [
  {
    name: "Capital City Toyota",
    kind: "vehicle",
    city: "Round Rock",
    state: "TX",
    areaLabel: "Austin metro",
    zipPrefixes: ["733", "78613", "78641", "78660", "78664", "78665", "787"],
    notes: "Best fit for Austin and Round Rock ZIP codes."
  },
  {
    name: "Hill Country Toyota",
    kind: "vehicle",
    city: "San Marcos",
    state: "TX",
    areaLabel: "Hays and Comal corridor",
    zipPrefixes: ["78130", "78610", "78640", "78656", "78666"],
    notes: "Good match for San Marcos, Kyle, and New Braunfels shoppers."
  },
  {
    name: "Northside Toyota",
    kind: "vehicle",
    city: "San Antonio",
    state: "TX",
    areaLabel: "San Antonio metro",
    zipPrefixes: ["780", "781", "782"],
    notes: "Best fit for San Antonio area ZIP codes."
  },
  {
    name: "Lone Star Mortgage",
    kind: "home",
    city: "Austin",
    state: "TX",
    areaLabel: "Central Texas",
    zipPrefixes: ["733", "780", "781", "782", "786", "787"],
    notes: "Broad Central Texas mortgage coverage."
  },
  {
    name: "River City Bank",
    kind: "home",
    city: "Austin",
    state: "TX",
    areaLabel: "Austin metro",
    zipPrefixes: ["733", "78613", "78660", "78664", "78665", "787"],
    notes: "Strong match for Austin and nearby suburban ZIP codes."
  },
  {
    name: "Hill Country Credit Union",
    kind: "home",
    city: "San Marcos",
    state: "TX",
    areaLabel: "Hill Country corridor",
    zipPrefixes: ["78130", "78155", "78610", "78640", "78666"],
    notes: "Good fit for Hays County and surrounding areas."
  }
];

export function normalizeZipCode(value: string | null): string {
  return (value || "").trim().replace(/[^\d]/g, "").slice(0, 5);
}

function getMatchScore(zipCode: string, entry: ProviderDirectoryEntry) {
  let bestPrefix = "";

  for (const prefix of entry.zipPrefixes) {
    if (zipCode.startsWith(prefix) && prefix.length > bestPrefix.length) {
      bestPrefix = prefix;
    }
  }

  if (!bestPrefix) {
    return null;
  }

  return {
    matchedZip: zipCode,
    matchType: bestPrefix.length === 5 ? "exact" : "prefix",
    score: bestPrefix.length * 10
  };
}

export function getLocalProviderMatches(zipCode: string) {
  const normalizedZip = normalizeZipCode(zipCode);
  if (normalizedZip.length !== 5) {
    return [];
  }

  return providerDirectory
    .map((entry) => {
      const match = getMatchScore(normalizedZip, entry);
      if (!match) {
        return null;
      }

      return {
        ...entry,
        ...match
      } satisfies LocalProviderMatch;
    })
    .filter((entry): entry is LocalProviderMatch => Boolean(entry))
    .sort((a, b) => b.score - a.score || a.kind.localeCompare(b.kind) || a.name.localeCompare(b.name));
}
