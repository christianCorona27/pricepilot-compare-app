const comparisonData = [
  {
    id: "airpods-pro-2",
    name: "Apple AirPods Pro 2 (USB-C)",
    type: "product",
    category: "Earbuds",
    matchMode: "Same item",
    notes: "Direct same-item comparison across major retailers with price snapshots and extra deal layers.",
    keywords: ["airpods", "apple", "earbuds", "usb-c", "amazon", "best buy", "walmart", "target"],
    providers: [
      {
        name: "Amazon",
        subtitle: "Sold by Amazon",
        billing: "one-time",
        regularPrice: 249.99,
        currentPrice: 199.99,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: {
          student: { value: 0.05, requirements: ["Student verification may be required at checkout."] },
          senior: null,
          service: { value: 0.08, requirements: ["Military discount eligibility depends on account enrollment."] }
        },
        coupons: [
          {
            label: "Clip 10% device coupon",
            type: "percent",
            value: 0.1,
            combinable: true,
            requirements: ["Coupon must be clipped on the product page.", "One use per account while stock lasts."]
          }
        ],
        dealRequirements: ["Ships free with standard delivery.", "Coupon availability can change during the day."],
        history: [
          { date: "2026-01-10", price: 239.99 },
          { date: "2026-02-08", price: 229.99 },
          { date: "2026-02-28", price: 219.99 },
          { date: "2026-03-19", price: 209.99 },
          { date: "2026-04-02", price: 199.99 },
          { date: "2026-04-15", price: 199.99 }
        ]
      },
      {
        name: "Best Buy",
        subtitle: "BlueTag member pricing",
        billing: "one-time",
        regularPrice: 249.99,
        currentPrice: 204.99,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: {
          student: { value: 0.07, requirements: ["Student deal requires verified Best Buy student account."] },
          senior: null,
          service: { value: 0.05, requirements: ["Military appreciation pricing appears during select promo windows."] }
        },
        coupons: [
          {
            label: "$15 rewards coupon",
            type: "fixed",
            value: 15,
            combinable: false,
            requirements: ["Coupon usually requires Best Buy account rewards balance."]
          }
        ],
        dealRequirements: ["Store pickup can unlock same-day inventory.", "Some discounts are online-account only."],
        history: [
          { date: "2026-01-10", price: 249.99 },
          { date: "2026-02-08", price: 239.99 },
          { date: "2026-02-28", price: 229.99 },
          { date: "2026-03-19", price: 214.99 },
          { date: "2026-04-02", price: 204.99 },
          { date: "2026-04-15", price: 204.99 }
        ]
      },
      {
        name: "Walmart",
        subtitle: "Marketplace and in-store eligible",
        billing: "one-time",
        regularPrice: 249.99,
        currentPrice: 208,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: {
          student: null,
          senior: null,
          service: { value: 0.06, requirements: ["Military discount availability varies by seller participation."] }
        },
        coupons: [
          {
            label: "$10 app-only coupon",
            type: "fixed",
            value: 10,
            combinable: true,
            requirements: ["Coupon must be redeemed in the Walmart app.", "Some sellers exclude electronics coupons."]
          }
        ],
        dealRequirements: ["App-only coupons can require signed-in checkout."],
        history: [
          { date: "2026-01-10", price: 244 },
          { date: "2026-02-08", price: 232 },
          { date: "2026-02-28", price: 224 },
          { date: "2026-03-19", price: 214 },
          { date: "2026-04-02", price: 208 },
          { date: "2026-04-15", price: 208 }
        ]
      },
      {
        name: "Target",
        subtitle: "Target Circle eligible offer",
        billing: "one-time",
        regularPrice: 249.99,
        currentPrice: 209.99,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: {
          student: { value: 0.05, requirements: ["Target Circle student verification required."] },
          senior: null,
          service: { value: 0.1, requirements: ["Target Circle military appreciation pricing runs on eligible items."] }
        },
        coupons: [
          {
            label: "Circle 5% electronics offer",
            type: "percent",
            value: 0.05,
            combinable: false,
            requirements: ["Must save Target Circle offer before checkout."]
          }
        ],
        dealRequirements: ["Military promotions may be seasonal."],
        history: [
          { date: "2026-01-10", price: 249.99 },
          { date: "2026-02-08", price: 239.99 },
          { date: "2026-02-28", price: 229.99 },
          { date: "2026-03-19", price: 214.99 },
          { date: "2026-04-02", price: 209.99 },
          { date: "2026-04-15", price: 209.99 }
        ]
      }
    ]
  },
  {
    id: "switch-oled",
    name: "Nintendo Switch OLED",
    type: "product",
    category: "Gaming",
    matchMode: "Same item",
    notes: "Tracks the standard white dock model and compares coupon plus membership pricing.",
    keywords: ["switch", "nintendo", "oled", "gaming console"],
    providers: [
      {
        name: "Amazon",
        subtitle: "Sold by Amazon",
        billing: "one-time",
        regularPrice: 349.99,
        currentPrice: 329.99,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: {
          student: null,
          senior: null,
          service: { value: 0.05, requirements: ["Military pricing depends on account offer enrollment."] }
        },
        coupons: [
          { label: "$20 console coupon", type: "fixed", value: 20, combinable: false, requirements: ["Coupon usually expires quickly on console deals."] }
        ],
        dealRequirements: ["High-demand inventory can change during checkout."],
        history: [
          { date: "2026-01-10", price: 349.99 },
          { date: "2026-02-08", price: 349.99 },
          { date: "2026-02-28", price: 339.99 },
          { date: "2026-03-19", price: 334.99 },
          { date: "2026-04-02", price: 329.99 },
          { date: "2026-04-15", price: 329.99 }
        ]
      },
      {
        name: "Best Buy",
        subtitle: "Standard retail listing",
        billing: "one-time",
        regularPrice: 349.99,
        currentPrice: 339.99,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: {
          student: { value: 0.04, requirements: ["Student discount may exclude first-party gaming hardware."] },
          senior: null,
          service: null
        },
        coupons: [],
        dealRequirements: ["Console coupons are usually restricted."],
        history: [
          { date: "2026-01-10", price: 349.99 },
          { date: "2026-02-08", price: 349.99 },
          { date: "2026-02-28", price: 349.99 },
          { date: "2026-03-19", price: 344.99 },
          { date: "2026-04-02", price: 339.99 },
          { date: "2026-04-15", price: 339.99 }
        ]
      },
      {
        name: "Walmart",
        subtitle: "Online plus local pickup",
        billing: "one-time",
        regularPrice: 349.99,
        currentPrice: 334,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: null, senior: null, service: null },
        coupons: [
          { label: "$15 gaming coupon", type: "fixed", value: 15, combinable: true, requirements: ["App coupon availability is limited by account and seller."] }
        ],
        dealRequirements: ["Pickup inventory can beat ship-to-home stock."],
        history: [
          { date: "2026-01-10", price: 348 },
          { date: "2026-02-08", price: 346 },
          { date: "2026-02-28", price: 339 },
          { date: "2026-03-19", price: 336 },
          { date: "2026-04-02", price: 334 },
          { date: "2026-04-15", price: 334 }
        ]
      },
      {
        name: "Target",
        subtitle: "Target Circle cardless offer",
        billing: "one-time",
        regularPrice: 349.99,
        currentPrice: 339.99,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: {
          student: null,
          senior: null,
          service: { value: 0.1, requirements: ["Target Circle military offer is seasonal and not always stackable."] }
        },
        coupons: [],
        dealRequirements: ["Military event timing matters for the best Target price."],
        history: [
          { date: "2026-01-10", price: 349.99 },
          { date: "2026-02-08", price: 349.99 },
          { date: "2026-02-28", price: 344.99 },
          { date: "2026-03-19", price: 339.99 },
          { date: "2026-04-02", price: 339.99 },
          { date: "2026-04-15", price: 339.99 }
        ]
      }
    ]
  },
  {
    id: "tv-65-qled",
    name: "Samsung 65-inch QLED TV",
    type: "product",
    category: "TV",
    matchMode: "Same item",
    notes: "Tracks a consistent 65-inch QLED SKU to compare retail sale prices, coupons, and extra discounts.",
    keywords: ["tv", "television", "samsung", "qled", "65 inch"],
    providers: [
      {
        name: "Amazon",
        subtitle: "Prime-eligible listing",
        billing: "one-time",
        regularPrice: 997.99,
        currentPrice: 847.99,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: null, senior: null, service: { value: 0.07, requirements: ["Military offer availability varies by day."] } },
        coupons: [
          { label: "Clip $50 TV coupon", type: "fixed", value: 50, combinable: true, requirements: ["Coupon usually appears only on select colors or bundles."] }
        ],
        dealRequirements: ["Room-of-choice delivery can change final total outside this comparison."],
        history: [
          { date: "2026-01-10", price: 997.99 },
          { date: "2026-02-08", price: 949.99 },
          { date: "2026-02-28", price: 897.99 },
          { date: "2026-03-19", price: 879.99 },
          { date: "2026-04-02", price: 857.99 },
          { date: "2026-04-15", price: 847.99 }
        ]
      },
      {
        name: "Best Buy",
        subtitle: "Member Week pricing",
        billing: "one-time",
        regularPrice: 999.99,
        currentPrice: 829.99,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: { value: 0.05, requirements: ["Student pricing may exclude premium televisions."] }, senior: null, service: null },
        coupons: [
          { label: "$75 rewards certificate", type: "fixed", value: 75, combinable: false, requirements: ["Requires rewards certificate balance in account."] }
        ],
        dealRequirements: ["TV setup services are not included in the listed price."],
        history: [
          { date: "2026-01-10", price: 999.99 },
          { date: "2026-02-08", price: 949.99 },
          { date: "2026-02-28", price: 899.99 },
          { date: "2026-03-19", price: 859.99 },
          { date: "2026-04-02", price: 839.99 },
          { date: "2026-04-15", price: 829.99 }
        ]
      },
      {
        name: "Walmart",
        subtitle: "Marketplace plus local delivery",
        billing: "one-time",
        regularPrice: 979,
        currentPrice: 844,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: null, senior: null, service: null },
        coupons: [],
        dealRequirements: ["Seller matters for warranty support and return windows."],
        history: [
          { date: "2026-01-10", price: 969 },
          { date: "2026-02-08", price: 929 },
          { date: "2026-02-28", price: 889 },
          { date: "2026-03-19", price: 859 },
          { date: "2026-04-02", price: 849 },
          { date: "2026-04-15", price: 844 }
        ]
      },
      {
        name: "Target",
        subtitle: "Target Circle offer eligible",
        billing: "one-time",
        regularPrice: 999.99,
        currentPrice: 859.99,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: null, senior: null, service: { value: 0.1, requirements: ["Military event pricing is time-limited."] } },
        coupons: [
          { label: "Circle $40 home theater coupon", type: "fixed", value: 40, combinable: false, requirements: ["Offer must be saved to Circle account."] }
        ],
        dealRequirements: ["Store delivery surcharges are not modeled here."],
        history: [
          { date: "2026-01-10", price: 999.99 },
          { date: "2026-02-08", price: 959.99 },
          { date: "2026-02-28", price: 899.99 },
          { date: "2026-03-19", price: 879.99 },
          { date: "2026-04-02", price: 869.99 },
          { date: "2026-04-15", price: 859.99 }
        ]
      }
    ]
  },
  {
    id: "internet-1-gig",
    name: "1 Gig Home Internet",
    type: "service",
    category: "Internet",
    matchMode: "Equivalent plan",
    notes: "Equivalent-plan comparison across major providers. Requirements matter because autopay, equipment, and service area change the real bill.",
    keywords: ["internet", "fiber", "1 gig", "wifi", "broadband"],
    providers: [
      {
        name: "AT&T Fiber",
        subtitle: "1000 Mbps plan",
        billing: "monthly",
        regularPrice: 85,
        currentPrice: 75,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: {
          student: { value: 0.08, requirements: ["Student offer requires active student verification."] },
          senior: null,
          service: { value: 0.1, requirements: ["Military pricing requires account verification."] }
        },
        coupons: [
          { label: "$5 autopay bill credit", type: "fixed", value: 5, combinable: true, requirements: ["Autopay and paperless billing required."] }
        ],
        dealRequirements: ["Availability depends on service address.", "Taxes and equipment fees may vary by market."],
        history: [
          { date: "2026-01-10", price: 85 },
          { date: "2026-02-08", price: 80 },
          { date: "2026-02-28", price: 80 },
          { date: "2026-03-19", price: 75 },
          { date: "2026-04-02", price: 75 },
          { date: "2026-04-15", price: 75 }
        ]
      },
      {
        name: "Spectrum",
        subtitle: "Internet Gig plan",
        billing: "monthly",
        regularPrice: 89.99,
        currentPrice: 79.99,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: {
          student: { value: 0.05, requirements: ["Student pricing requires proof of enrollment and address availability."] },
          senior: { value: 0.08, requirements: ["Senior savings may require 65+ verification in select markets."] },
          service: null
        },
        coupons: [
          { label: "$10 12-month promo", type: "fixed", value: 10, combinable: false, requirements: ["New customers only.", "Usually requires autopay enrollment."] }
        ],
        dealRequirements: ["Promotional rate may expire after 12 months.", "Equipment and install charges can vary."],
        history: [
          { date: "2026-01-10", price: 89.99 },
          { date: "2026-02-08", price: 84.99 },
          { date: "2026-02-28", price: 84.99 },
          { date: "2026-03-19", price: 79.99 },
          { date: "2026-04-02", price: 79.99 },
          { date: "2026-04-15", price: 79.99 }
        ]
      },
      {
        name: "Verizon 5G Home",
        subtitle: "Home Plus tier",
        billing: "monthly",
        regularPrice: 80,
        currentPrice: 70,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: {
          student: { value: 0.1, requirements: ["Student discount requires mobile or home eligibility verification."] },
          senior: null,
          service: { value: 0.15, requirements: ["Military pricing requires active or veteran verification."] }
        },
        coupons: [
          { label: "$10 mobile bundle credit", type: "fixed", value: 10, combinable: true, requirements: ["Requires eligible Verizon wireless line."] }
        ],
        dealRequirements: ["Performance depends on 5G coverage at service address.", "Bundle pricing requires existing Verizon service."],
        history: [
          { date: "2026-01-10", price: 80 },
          { date: "2026-02-08", price: 75 },
          { date: "2026-02-28", price: 75 },
          { date: "2026-03-19", price: 70 },
          { date: "2026-04-02", price: 70 },
          { date: "2026-04-15", price: 70 }
        ]
      },
      {
        name: "Xfinity",
        subtitle: "Gigabit plan",
        billing: "monthly",
        regularPrice: 90,
        currentPrice: 80,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: {
          student: null,
          senior: { value: 0.06, requirements: ["Senior pricing may depend on regional promo availability."] },
          service: { value: 0.08, requirements: ["Military pricing depends on current campaign eligibility."] }
        },
        coupons: [
          { label: "$5 paperless credit", type: "fixed", value: 5, combinable: true, requirements: ["Autopay and paperless billing required."] }
        ],
        dealRequirements: ["Promotional pricing may require 12-month agreement.", "Equipment charges can change the real total."],
        history: [
          { date: "2026-01-10", price: 90 },
          { date: "2026-02-08", price: 85 },
          { date: "2026-02-28", price: 85 },
          { date: "2026-03-19", price: 80 },
          { date: "2026-04-02", price: 80 },
          { date: "2026-04-15", price: 80 }
        ]
      }
    ]
  },
  {
    id: "cloud-storage-2tb",
    name: "2TB Cloud Storage",
    type: "service",
    category: "Cloud storage",
    matchMode: "Equivalent plan",
    notes: "Equivalent 2TB personal storage plans. Coupons are usually bundle credits or first-year promotions.",
    keywords: ["cloud", "storage", "2tb", "google one", "dropbox", "icloud", "onedrive"],
    providers: [
      {
        name: "Google One",
        subtitle: "2TB annual plan",
        billing: "yearly",
        regularPrice: 99.99,
        currentPrice: 89.99,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: { value: 0.1, requirements: ["Student pricing can require an eligible school email."] }, senior: null, service: null },
        coupons: [],
        dealRequirements: ["Annual billing required for current price."],
        history: [
          { date: "2026-01-10", price: 99.99 },
          { date: "2026-02-08", price: 94.99 },
          { date: "2026-02-28", price: 94.99 },
          { date: "2026-03-19", price: 89.99 },
          { date: "2026-04-02", price: 89.99 },
          { date: "2026-04-15", price: 89.99 }
        ]
      },
      {
        name: "Dropbox",
        subtitle: "Plus 2TB annual",
        billing: "yearly",
        regularPrice: 119.88,
        currentPrice: 95.88,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: { value: 0.15, requirements: ["Education pricing can require institution verification."] }, senior: null, service: null },
        coupons: [
          { label: "15% first-year promo", type: "percent", value: 0.15, combinable: false, requirements: ["New subscribers only."] }
        ],
        dealRequirements: ["Promo usually applies to annual prepaid billing only."],
        history: [
          { date: "2026-01-10", price: 119.88 },
          { date: "2026-02-08", price: 109.88 },
          { date: "2026-02-28", price: 109.88 },
          { date: "2026-03-19", price: 99.88 },
          { date: "2026-04-02", price: 95.88 },
          { date: "2026-04-15", price: 95.88 }
        ]
      },
      {
        name: "Microsoft 365",
        subtitle: "Family with 6TB pooled storage",
        billing: "yearly",
        regularPrice: 129.99,
        currentPrice: 99.99,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: { value: 0.2, requirements: ["Student Microsoft pricing depends on school eligibility."] }, senior: null, service: { value: 0.1, requirements: ["Military pricing may depend on account campaigns."] } },
        coupons: [],
        dealRequirements: ["Family plan includes Office apps and more storage than a pure 2TB plan."],
        history: [
          { date: "2026-01-10", price: 129.99 },
          { date: "2026-02-08", price: 119.99 },
          { date: "2026-02-28", price: 109.99 },
          { date: "2026-03-19", price: 104.99 },
          { date: "2026-04-02", price: 99.99 },
          { date: "2026-04-15", price: 99.99 }
        ]
      },
      {
        name: "iCloud+",
        subtitle: "2TB monthly plan",
        billing: "monthly",
        regularPrice: 9.99,
        currentPrice: 9.99,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: null, senior: null, service: null },
        coupons: [],
        dealRequirements: ["Requires Apple account and iCloud-compatible devices for the best experience."],
        history: [
          { date: "2026-01-10", price: 9.99 },
          { date: "2026-02-08", price: 9.99 },
          { date: "2026-02-28", price: 9.99 },
          { date: "2026-03-19", price: 9.99 },
          { date: "2026-04-02", price: 9.99 },
          { date: "2026-04-15", price: 9.99 }
        ]
      }
    ]
  }
];

const STORAGE_KEY = "pricepilot-tracked-catalog-v2";
const providerPalette = {
  Amazon: "#ffb74d",
  "Best Buy": "#7db0ff",
  Walmart: "#8dd8ab",
  Target: "#ff8a80",
  "AT&T Fiber": "#80cbc4",
  Spectrum: "#f7b267",
  "Verizon 5G Home": "#cf93d9",
  Xfinity: "#aed581",
  "Google One": "#81d4fa",
  Dropbox: "#90caf9",
  "Microsoft 365": "#ffcc80",
  "iCloud+": "#b39ddb"
};

const defaultProviderVisibility = {
  Amazon: true,
  "Best Buy": true,
  Walmart: true,
  Target: true,
  "AT&T Fiber": true,
  Spectrum: true,
  "Verizon 5G Home": true,
  Xfinity: true,
  "Google One": true,
  Dropbox: true,
  "Microsoft 365": true,
  "iCloud+": true
};

const state = {
  items: [],
  activeFilter: "all",
  searchTerm: "",
  sortBy: "final-asc",
  selectedId: null,
  applyCoupons: true,
  profile: {
    student: false,
    senior: false,
    service: false
  },
  providerVisibility: { ...defaultProviderVisibility }
};

const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const filterButtons = Array.from(document.querySelectorAll(".filter-chip"));
const providerToggles = Array.from(document.querySelectorAll(".provider-toggle"));
const studentToggle = document.querySelector("#studentToggle");
const seniorToggle = document.querySelector("#seniorToggle");
const serviceToggle = document.querySelector("#serviceToggle");
const couponToggle = document.querySelector("#couponToggle");
const jumpToSearchBtn = document.querySelector("#jumpToSearchBtn");
const resetDataBtn = document.querySelector("#resetDataBtn");

const catalogList = document.querySelector("#catalogList");
const providerGrid = document.querySelector("#providerGrid");
const selectedTitle = document.querySelector("#selectedTitle");
const selectedDescription = document.querySelector("#selectedDescription");
const selectedBadges = document.querySelector("#selectedBadges");
const historyChart = document.querySelector("#historyChart");
const historyLegend = document.querySelector("#historyLegend");
const historyNote = document.querySelector("#historyNote");
const liveRequirementsText = document.querySelector("#liveRequirementsText");
const dataModeNote = document.querySelector("#dataModeNote");

const catalogCardTemplate = document.querySelector("#catalogCardTemplate");
const providerCardTemplate = document.querySelector("#providerCardTemplate");

const summaryNodes = {
  lowestValue: document.querySelector("#lowestPriceValue"),
  lowestDetail: document.querySelector("#lowestPriceDetail"),
  savingsValue: document.querySelector("#largestSavingsValue"),
  savingsDetail: document.querySelector("#largestSavingsDetail"),
  historyValue: document.querySelector("#historyWindowValue"),
  historyDetail: document.querySelector("#historyWindowDetail")
};
function saveTrackedCatalog() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(comparisonData));
}

function loadTrackedCatalog() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveTrackedCatalog();
      return structuredClone(comparisonData);
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : structuredClone(comparisonData);
  } catch (error) {
    console.warn("Unable to load tracked catalog.", error);
    return structuredClone(comparisonData);
  }
}

function hydrateState() {
  state.items = loadTrackedCatalog();
  const firstItem = state.items[0];
  state.selectedId = firstItem ? firstItem.id : null;
}

function getBillingSuffix(billing) {
  if (billing === "monthly") {
    return "/mo";
  }
  if (billing === "yearly") {
    return "/yr";
  }
  return "";
}

function formatCurrency(value, billing = "one-time") {
  if (!Number.isFinite(value)) {
    return "--";
  }

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2
  }).format(value);

  return `${formatted}${getBillingSuffix(billing)}`;
}

function formatPercent(value) {
  return `${Math.round(value * 100)}% off`;
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(new Date(dateString));
}

function daysBetween(startDate, endDate) {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  return Math.round((end - start) / (1000 * 60 * 60 * 24));
}

function applyCoupon(price, coupon) {
  if (!coupon) {
    return price;
  }

  if (coupon.type === "percent") {
    return price * (1 - coupon.value);
  }

  if (coupon.type === "fixed") {
    return Math.max(0, price - coupon.value);
  }

  return price;
}

function getMembershipOptions(provider) {
  const options = [];

  if (state.profile.student && provider.discounts.student) {
    options.push({ key: "student", ...provider.discounts.student });
  }
  if (state.profile.senior && provider.discounts.senior) {
    options.push({ key: "senior", ...provider.discounts.senior });
  }
  if (state.profile.service && provider.discounts.service) {
    options.push({ key: "service", ...provider.discounts.service });
  }

  return options;
}

function chooseBestScenario(provider) {
  const membershipOptions = [{ key: null, value: 0, requirements: [] }, ...getMembershipOptions(provider)];
  const coupons = state.applyCoupons ? provider.coupons : [];
  const scenarios = [];

  membershipOptions.forEach((membership) => {
    const membershipPrice = provider.currentPrice * (1 - membership.value);
    scenarios.push({
      finalPrice: membershipPrice,
      membership,
      coupon: null,
      stackNote: membership.key ? `${membership.key} discount applied` : "No extra discount applied"
    });

    coupons.forEach((coupon) => {
      const couponOnlyPrice = applyCoupon(provider.currentPrice, coupon);
      scenarios.push({
        finalPrice: couponOnlyPrice,
        membership: { key: null, value: 0, requirements: [] },
        coupon,
        stackNote: `${coupon.label} applied`
      });

      if (membership.key && coupon.combinable) {
        const stackedPrice = applyCoupon(membershipPrice, coupon);
        scenarios.push({
          finalPrice: stackedPrice,
          membership,
          coupon,
          stackNote: `${membership.key} discount + ${coupon.label}`
        });
      }
    });
  });

  return scenarios.reduce((best, current) => (current.finalPrice < best.finalPrice ? current : best));
}

function getProviderComparison(provider, item) {
  const chosen = chooseBestScenario(provider);
  const savings = provider.regularPrice - chosen.finalPrice;
  const currentMarkdown = provider.currentPrice - chosen.finalPrice;
  const historyLow = Math.min(...provider.history.map((point) => point.price));
  const historyHigh = Math.max(...provider.history.map((point) => point.price));

  return {
    ...provider,
    itemId: item.id,
    itemName: item.name,
    type: item.type,
    category: item.category,
    matchMode: item.matchMode,
    finalPrice: chosen.finalPrice,
    membership: chosen.membership,
    coupon: chosen.coupon,
    savings,
    currentMarkdown,
    stackNote: chosen.stackNote,
    historyLow,
    historyHigh,
    requirements: [
      ...provider.dealRequirements,
      ...(chosen.membership.requirements || []),
      ...(chosen.coupon?.requirements || [])
    ]
  };
}

function getVisibleProviderComparisons(item) {
  return item.providers
    .filter((provider) => state.providerVisibility[provider.name] !== false)
    .map((provider) => getProviderComparison(provider, item))
    .sort((a, b) => a.finalPrice - b.finalPrice || b.savings - a.savings);
}

function getFilteredItems() {
  const search = state.searchTerm.trim().toLowerCase();

  return state.items
    .map((item) => {
      const providers = getVisibleProviderComparisons(item);
      const searchable = [item.name, item.category, item.matchMode, item.notes, ...item.keywords].join(" ").toLowerCase();
      const matchesFilter = state.activeFilter === "all" || item.type === state.activeFilter;
      const matchesSearch = !search || searchable.includes(search) || providers.some((provider) => provider.name.toLowerCase().includes(search));
      return {
        ...item,
        providerComparisons: providers,
        matches: matchesFilter && matchesSearch && providers.length > 0
      };
    })
    .filter((item) => item.matches)
    .sort((a, b) => {
      const aBest = a.providerComparisons[0];
      const bBest = b.providerComparisons[0];
      switch (state.sortBy) {
        case "markdown-desc":
          return (bBest?.savings || 0) - (aBest?.savings || 0);
        case "providers-desc":
          return b.providerComparisons.length - a.providerComparisons.length;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "final-asc":
        default:
          return (aBest?.finalPrice || Number.MAX_SAFE_INTEGER) - (bBest?.finalPrice || Number.MAX_SAFE_INTEGER);
      }
    });
}

function ensureSelectedItem(filteredItems) {
  if (!filteredItems.length) {
    state.selectedId = null;
    return null;
  }

  const selected = filteredItems.find((item) => item.id === state.selectedId) || filteredItems[0];
  state.selectedId = selected.id;
  return selected;
}

function updateSummary(filteredItems) {
  const providerPool = filteredItems.flatMap((item) => item.providerComparisons);

  if (!providerPool.length) {
    summaryNodes.lowestValue.textContent = "$0.00";
    summaryNodes.lowestDetail.textContent = "No matching providers in this view";
    summaryNodes.savingsValue.textContent = "$0.00";
    summaryNodes.savingsDetail.textContent = "Try enabling more providers";
    summaryNodes.historyValue.textContent = "0 days";
    summaryNodes.historyDetail.textContent = "Waiting for history points";
    return;
  }

  const cheapest = providerPool.reduce((best, current) => (current.finalPrice < best.finalPrice ? current : best));
  const biggestSavings = providerPool.reduce((best, current) => (current.savings > best.savings ? current : best));
  const allDates = providerPool.flatMap((provider) => provider.history.map((point) => point.date)).sort();
  const windowDays = daysBetween(allDates[0], allDates[allDates.length - 1]);

  summaryNodes.lowestValue.textContent = formatCurrency(cheapest.finalPrice, cheapest.billing);
  summaryNodes.lowestDetail.textContent = `${cheapest.name} for ${cheapest.itemName}`;
  summaryNodes.savingsValue.textContent = formatCurrency(biggestSavings.savings, biggestSavings.billing);
  summaryNodes.savingsDetail.textContent = `${biggestSavings.name} has the widest markdown`;
  summaryNodes.historyValue.textContent = `${windowDays} days`;
  summaryNodes.historyDetail.textContent = `${formatDate(allDates[0])} to ${formatDate(allDates[allDates.length - 1])}`;
}
function renderCatalog(filteredItems) {
  catalogList.innerHTML = "";

  if (!filteredItems.length) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent = "No tracked items match this search and provider mix yet. Try another keyword or enable more sources.";
    catalogList.appendChild(emptyState);
    return;
  }

  const fragment = document.createDocumentFragment();

  filteredItems.forEach((item) => {
    const best = item.providerComparisons[0];
    const card = catalogCardTemplate.content.firstElementChild.cloneNode(true);
    card.classList.toggle("is-active", item.id === state.selectedId);
    card.querySelector(".catalog-title").textContent = item.name;
    card.querySelector(".catalog-type").textContent = item.type;
    card.querySelector(".catalog-subtitle").textContent = `${item.category} � ${item.matchMode}`;
    card.querySelector(".catalog-best").textContent = formatCurrency(best.finalPrice, best.billing);
    card.querySelector(".catalog-regular").textContent = `Regular ${formatCurrency(best.regularPrice, best.billing)}`;
    card.querySelector(".catalog-note").textContent = `${best.name} � ${best.stackNote}`;
    card.querySelector(".catalog-pill").textContent = `Save ${formatCurrency(best.savings, best.billing)}`;
    card.querySelector(".catalog-count").textContent = `${item.providerComparisons.length} providers`;

    const metaNode = card.querySelector(".catalog-meta");
    [item.matchMode, `Updated ${formatDate(best.lastChecked)}`].forEach((label) => {
      const pill = document.createElement("span");
      pill.className = "meta-pill";
      pill.textContent = label;
      metaNode.appendChild(pill);
    });

    const selectItem = () => {
      state.selectedId = item.id;
      renderApp();
    };

    card.addEventListener("click", selectItem);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectItem();
      }
    });

    fragment.appendChild(card);
  });

  catalogList.appendChild(fragment);
}

function buildBadge(text) {
  const badge = document.createElement("span");
  badge.className = "meta-pill";
  badge.textContent = text;
  return badge;
}

function renderSelectedItem(item) {
  if (!item) {
    selectedTitle.textContent = "Select a tracked item";
    selectedDescription.textContent = "Search above to inspect current comparison results, coupon stacking, deal requirements, and price history.";
    selectedBadges.innerHTML = "";
    providerGrid.innerHTML = '<div class="empty-state">Provider detail will appear here once a tracked item is selected.</div>';
    historyNote.textContent = "Price history will appear once a tracked item is selected.";
    historyLegend.innerHTML = "";
    historyChart.innerHTML = "";
    return;
  }

  selectedTitle.textContent = item.name;
  selectedDescription.textContent = item.notes;
  selectedBadges.innerHTML = "";
  [item.category, item.matchMode, `${item.providerComparisons.length} providers active`].forEach((label) => {
    selectedBadges.appendChild(buildBadge(label));
  });

  renderHistoryChart(item.providerComparisons);
  renderProviders(item.providerComparisons);
}

function renderProviders(providers) {
  providerGrid.innerHTML = "";

  if (!providers.length) {
    providerGrid.innerHTML = '<div class="empty-state">No providers available for this tracked item with the current source filters.</div>';
    return;
  }

  const fragment = document.createDocumentFragment();

  providers.forEach((provider, index) => {
    const card = providerCardTemplate.content.firstElementChild.cloneNode(true);
    card.querySelector(".provider-name").textContent = provider.name;
    card.querySelector(".provider-rank").textContent = `#${index + 1}`;
    card.querySelector(".provider-subtitle").textContent = `${provider.subtitle} � Updated ${formatDate(provider.lastChecked)}`;
    card.querySelector(".provider-status").textContent = provider.status;
    card.querySelector(".provider-regular").textContent = formatCurrency(provider.regularPrice, provider.billing);
    card.querySelector(".provider-current").textContent = formatCurrency(provider.currentPrice, provider.billing);
    card.querySelector(".provider-final").textContent = formatCurrency(provider.finalPrice, provider.billing);
    card.querySelector(".provider-breakdown").textContent = provider.stackNote;

    const metaNode = card.querySelector(".provider-meta");
    const metaValues = [
      `Current markdown ${formatCurrency(provider.currentMarkdown, provider.billing)}`,
      `Total markdown ${formatCurrency(provider.savings, provider.billing)}`,
      `History low ${formatCurrency(provider.historyLow, provider.billing)}`,
      `History high ${formatCurrency(provider.historyHigh, provider.billing)}`
    ];

    if (provider.membership.key) {
      metaValues.unshift(`${provider.membership.key} ${formatPercent(provider.membership.value)}`);
    }
    if (provider.coupon) {
      metaValues.unshift(provider.coupon.label);
    }

    metaValues.forEach((text) => {
      const pill = document.createElement("span");
      pill.className = "meta-pill";
      pill.textContent = text;
      metaNode.appendChild(pill);
    });

    const requirementsList = card.querySelector(".requirements-list");
    provider.requirements.forEach((requirement) => {
      const itemNode = document.createElement("li");
      itemNode.textContent = requirement;
      requirementsList.appendChild(itemNode);
    });

    fragment.appendChild(card);
  });

  providerGrid.appendChild(fragment);
}

function renderHistoryChart(providers) {
  historyChart.innerHTML = "";
  historyLegend.innerHTML = "";

  if (!providers.length) {
    historyNote.textContent = "No history available for this view.";
    return;
  }

  const allPoints = providers.flatMap((provider) => provider.history);
  const values = allPoints.map((point) => point.price);
  const minPrice = Math.min(...values);
  const maxPrice = Math.max(...values);
  const dates = providers[0].history.map((point) => point.date);
  const width = 920;
  const height = 280;
  const padding = { top: 20, right: 24, bottom: 46, left: 62 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const valueToY = (value) => {
    if (maxPrice === minPrice) {
      return padding.top + chartHeight / 2;
    }
    const ratio = (value - minPrice) / (maxPrice - minPrice);
    return padding.top + chartHeight - ratio * chartHeight;
  };

  const indexToX = (index) => padding.left + (chartWidth / Math.max(1, dates.length - 1)) * index;

  const createSvg = (tag, attributes = {}) => {
    const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
    return node;
  };

  historyChart.appendChild(createSvg("rect", { x: 0, y: 0, width, height, fill: "transparent" }));

  [0, 0.5, 1].forEach((step) => {
    const price = minPrice + (maxPrice - minPrice) * step;
    const y = valueToY(price);
    historyChart.appendChild(createSvg("line", {
      x1: padding.left,
      y1: y,
      x2: width - padding.right,
      y2: y,
      stroke: "rgba(246, 240, 232, 0.12)",
      "stroke-width": 1
    }));

    const label = createSvg("text", {
      x: padding.left - 10,
      y: y + 4,
      fill: "rgba(246, 240, 232, 0.72)",
      "font-size": 12,
      "text-anchor": "end"
    });
    label.textContent = formatCurrency(price).replace("/mo", "").replace("/yr", "");
    historyChart.appendChild(label);
  });

  dates.forEach((date, index) => {
    const x = indexToX(index);
    const text = createSvg("text", {
      x,
      y: height - 12,
      fill: "rgba(246, 240, 232, 0.72)",
      "font-size": 12,
      "text-anchor": "middle"
    });
    text.textContent = formatDate(date);
    historyChart.appendChild(text);
  });

  providers.forEach((provider) => {
    const color = providerPalette[provider.name] || "#f6f0e8";
    const pathData = provider.history
      .map((point, index) => `${index === 0 ? "M" : "L"} ${indexToX(index)} ${valueToY(point.price)}`)
      .join(" ");

    historyChart.appendChild(createSvg("path", {
      d: pathData,
      fill: "none",
      stroke: color,
      "stroke-width": 3,
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }));

    provider.history.forEach((point, index) => {
      historyChart.appendChild(createSvg("circle", {
        cx: indexToX(index),
        cy: valueToY(point.price),
        r: 4,
        fill: color
      }));
    });

    const legendItem = document.createElement("span");
    legendItem.className = "history-legend-item";
    legendItem.style.color = color;
    legendItem.innerHTML = `<span class="history-swatch"></span>${provider.name}`;
    historyLegend.appendChild(legendItem);
  });

  historyNote.textContent = `${formatDate(dates[0])} to ${formatDate(dates[dates.length - 1])} � ${providers.length} providers visible`;
}
function renderApp() {
  const filteredItems = getFilteredItems();
  const selectedItem = ensureSelectedItem(filteredItems);
  updateSummary(filteredItems);
  renderCatalog(filteredItems);
  renderSelectedItem(selectedItem);
  dataModeNote.textContent = `Source mode: ${Object.values(state.providerVisibility).filter(Boolean).length} provider adapters enabled in this comparison view.`;
  liveRequirementsText.textContent = "To go live, connect server-side adapters for supported retailer APIs, store dated snapshots in your own backend, and only expose safe results to the browser.";
}

function attachEvents() {
  searchInput.addEventListener("input", (event) => {
    state.searchTerm = event.target.value;
    renderApp();
  });

  sortSelect.addEventListener("change", (event) => {
    state.sortBy = event.target.value;
    renderApp();
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.activeFilter = button.dataset.filter;
      filterButtons.forEach((entry) => {
        const active = entry === button;
        entry.classList.toggle("active", active);
        entry.setAttribute("aria-pressed", String(active));
      });
      renderApp();
    });
  });

  providerToggles.forEach((toggle) => {
    toggle.addEventListener("change", (event) => {
      state.providerVisibility[event.target.value] = event.target.checked;
      renderApp();
    });
  });

  studentToggle.addEventListener("change", (event) => {
    state.profile.student = event.target.checked;
    renderApp();
  });

  seniorToggle.addEventListener("change", (event) => {
    state.profile.senior = event.target.checked;
    renderApp();
  });

  serviceToggle.addEventListener("change", (event) => {
    state.profile.service = event.target.checked;
    renderApp();
  });

  couponToggle.addEventListener("change", (event) => {
    state.applyCoupons = event.target.checked;
    renderApp();
  });

  jumpToSearchBtn.addEventListener("click", () => {
    document.querySelector("#searchSection").scrollIntoView({ behavior: "smooth", block: "start" });
    searchInput.focus();
  });

  resetDataBtn.addEventListener("click", () => {
    window.localStorage.removeItem(STORAGE_KEY);
    hydrateState();
    renderApp();
  });
}

function init() {
  hydrateState();
  attachEvents();
  renderApp();
}

init();
