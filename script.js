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

const STORAGE_KEY = "smartsave-tracked-catalog-v1";
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

const defaultProviderVisibility = comparisonData
  .flatMap((item) => item.providers.map((provider) => provider.name))
  .reduce((visibilityMap, providerName) => {
    visibilityMap[providerName] = true;
    return visibilityMap;
  }, {});

Object.assign(providerPalette, {
  "Northside Toyota": "#f48fb1",
  "Capital City Toyota": "#ce93d8",
  "Hill Country Toyota": "#80deea",
  "Lone Star Mortgage": "#90caf9",
  "River City Bank": "#ffab91",
  "Hill Country Credit Union": "#a5d6a7"
});

comparisonData.push(
  {
    id: "organic-strawberries",
    name: "Organic Strawberries 16 oz",
    type: "product",
    category: "Grocery",
    matchMode: "Same item",
    notes: "Perishable grocery tracking with reorder suggestions, sale alerts, and bulk-break comparison.",
    keywords: ["strawberries", "fruit", "grocery", "perishable", "fresh", "produce"],
    reorder: { cadenceDays: 7, reminderWindowDays: 2, saleThreshold: 4.49, perishability: "High" },
    bulkTiers: [
      { minQty: 2, label: "2 for $9", effectivePrice: 4.5 },
      { minQty: 4, label: "4 for $16", effectivePrice: 4 }
    ],
    providers: [
      {
        name: "Amazon",
        subtitle: "Amazon Fresh eligible",
        billing: "one-time",
        regularPrice: 5.99,
        currentPrice: 4.99,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: null, senior: null, service: null },
        coupons: [{ label: "Fresh 5% basket coupon", type: "percent", value: 0.05, combinable: true, requirements: ["Applies on eligible fresh orders only."] }],
        dealRequirements: ["Fresh delivery minimum may apply.", "Local availability affects same-day delivery."],
        history: [
          { date: "2026-01-10", price: 5.99 },
          { date: "2026-02-08", price: 5.49 },
          { date: "2026-02-28", price: 4.99 },
          { date: "2026-03-19", price: 4.79 },
          { date: "2026-04-02", price: 4.99 },
          { date: "2026-04-15", price: 4.99 }
        ]
      },
      {
        name: "Walmart",
        subtitle: "Pickup and delivery",
        billing: "one-time",
        regularPrice: 5.46,
        currentPrice: 4.74,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: null, senior: { value: 0.05, requirements: ["Senior grocery savings vary by local store program."] }, service: null },
        coupons: [{ label: "$1 produce basket coupon", type: "fixed", value: 1, combinable: true, requirements: ["Requires minimum produce spend."] }],
        dealRequirements: ["Quality and inventory may vary by store."],
        history: [
          { date: "2026-01-10", price: 5.46 },
          { date: "2026-02-08", price: 5.12 },
          { date: "2026-02-28", price: 4.88 },
          { date: "2026-03-19", price: 4.66 },
          { date: "2026-04-02", price: 4.74 },
          { date: "2026-04-15", price: 4.74 }
        ]
      },
      {
        name: "Target",
        subtitle: "Target Circle grocery",
        billing: "one-time",
        regularPrice: 5.29,
        currentPrice: 4.89,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: null, senior: null, service: { value: 0.05, requirements: ["Military appreciation grocery offer must be active in Circle."] } },
        coupons: [],
        dealRequirements: ["Circle grocery offers rotate weekly."],
        history: [
          { date: "2026-01-10", price: 5.29 },
          { date: "2026-02-08", price: 5.09 },
          { date: "2026-02-28", price: 4.99 },
          { date: "2026-03-19", price: 4.79 },
          { date: "2026-04-02", price: 4.89 },
          { date: "2026-04-15", price: 4.89 }
        ]
      }
    ]
  },
  {
    id: "paper-towels-12pk",
    name: "Paper Towels 12-Pack",
    type: "product",
    category: "Household",
    matchMode: "Same item",
    notes: "Household essentials example with quantity-break pricing and reorder planning.",
    keywords: ["paper towels", "bulk", "household", "consumables", "reorder"],
    reorder: { cadenceDays: 30, reminderWindowDays: 5, saleThreshold: 18.99, perishability: "Low" },
    bulkTiers: [
      { minQty: 2, label: "Buy 2 save 10%", effectivePrice: 18.9 },
      { minQty: 4, label: "Buy 4 save 15%", effectivePrice: 17.85 }
    ],
    providers: [
      {
        name: "Amazon",
        subtitle: "Subscribe & Save eligible",
        billing: "one-time",
        regularPrice: 22.99,
        currentPrice: 20.99,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: null, senior: null, service: null },
        coupons: [{ label: "Subscribe & Save 5%", type: "percent", value: 0.05, combinable: true, requirements: ["Requires Subscribe & Save enrollment."] }],
        dealRequirements: ["Subscription can be canceled after shipment if desired."],
        history: [
          { date: "2026-01-10", price: 22.99 },
          { date: "2026-02-08", price: 21.99 },
          { date: "2026-02-28", price: 21.49 },
          { date: "2026-03-19", price: 20.99 },
          { date: "2026-04-02", price: 20.99 },
          { date: "2026-04-15", price: 20.99 }
        ]
      },
      {
        name: "Walmart",
        subtitle: "Store pickup",
        billing: "one-time",
        regularPrice: 21.97,
        currentPrice: 19.97,
        status: "Live-ready snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: null, senior: null, service: null },
        coupons: [{ label: "$2 household coupon", type: "fixed", value: 2, combinable: true, requirements: ["App coupon on participating household essentials."] }],
        dealRequirements: ["Bulk shelf inventory varies by local store."],
        history: [
          { date: "2026-01-10", price: 21.97 },
          { date: "2026-02-08", price: 20.97 },
          { date: "2026-02-28", price: 20.47 },
          { date: "2026-03-19", price: 19.97 },
          { date: "2026-04-02", price: 19.97 },
          { date: "2026-04-15", price: 19.97 }
        ]
      }
    ]
  },
  {
    id: "rav4-xle-local",
    name: "Toyota RAV4 XLE AWD",
    type: "product",
    category: "Vehicle",
    matchMode: "Same vehicle trim",
    notes: "Local dealership-style comparison with sale price, financing APR, and buyer-program discounts.",
    keywords: ["car", "toyota", "rav4", "dealership", "apr", "auto loan", "vehicle"],
    providers: [
      {
        name: "Northside Toyota",
        subtitle: "Austin area dealership",
        billing: "one-time",
        regularPrice: 35640,
        currentPrice: 34990,
        status: "Local dealership snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: { value: 0.01, requirements: ["College grad or student rebate documentation required."] }, senior: null, service: { value: 0.015, requirements: ["Military rebate proof required."] } },
        coupons: [{ label: "$500 dealer cash", type: "fixed", value: 500, combinable: false, requirements: ["Dealer cash typically cannot stack with all APR promos."] }],
        dealRequirements: ["Price excludes TTL and dealer fees.", "Vehicle must be in local stock."],
        aprOffers: [
          { label: "60 months", apr: 4.9, requirements: ["Tier 1 credit required."] },
          { label: "72 months", apr: 5.9, requirements: ["Tier 1-2 credit required."] }
        ],
        history: [
          { date: "2026-01-10", price: 35640 },
          { date: "2026-02-08", price: 35490 },
          { date: "2026-02-28", price: 35290 },
          { date: "2026-03-19", price: 34990 },
          { date: "2026-04-02", price: 34990 },
          { date: "2026-04-15", price: 34990 }
        ]
      },
      {
        name: "Capital City Toyota",
        subtitle: "Round Rock area dealership",
        billing: "one-time",
        regularPrice: 35790,
        currentPrice: 34750,
        status: "Local dealership snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: { value: 0.008, requirements: ["Recent graduate paperwork required."] }, senior: { value: 0.005, requirements: ["Senior customer event pricing may be required."] }, service: { value: 0.012, requirements: ["Military rebate proof required."] } },
        coupons: [],
        dealRequirements: ["APR special may replace cash rebate.", "Dealer add-ons may change the out-the-door total."],
        aprOffers: [
          { label: "60 months", apr: 4.49, requirements: ["Top-tier credit required."] },
          { label: "72 months", apr: 5.49, requirements: ["Top-tier credit required."] }
        ],
        history: [
          { date: "2026-01-10", price: 35790 },
          { date: "2026-02-08", price: 35550 },
          { date: "2026-02-28", price: 35250 },
          { date: "2026-03-19", price: 34950 },
          { date: "2026-04-02", price: 34750 },
          { date: "2026-04-15", price: 34750 }
        ]
      },
      {
        name: "Hill Country Toyota",
        subtitle: "San Marcos area dealership",
        billing: "one-time",
        regularPrice: 35590,
        currentPrice: 34890,
        status: "Local dealership snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: null, senior: null, service: { value: 0.02, requirements: ["Military appreciation certificate required."] } },
        coupons: [{ label: "$750 loyalty cash", type: "fixed", value: 750, combinable: false, requirements: ["Existing Toyota owner required."] }],
        dealRequirements: ["Loyalty cash cannot stack with every APR offer."],
        aprOffers: [
          { label: "60 months", apr: 5.25, requirements: ["Well-qualified buyers only."] },
          { label: "84 months", apr: 6.29, requirements: ["Longer term increases finance cost."] }
        ],
        history: [
          { date: "2026-01-10", price: 35590 },
          { date: "2026-02-08", price: 35390 },
          { date: "2026-02-28", price: 35190 },
          { date: "2026-03-19", price: 34990 },
          { date: "2026-04-02", price: 34890 },
          { date: "2026-04-15", price: 34890 }
        ]
      }
    ]
  },
  {
    id: "mortgage-350k-30y",
    name: "30-Year Fixed Mortgage for $350k Home",
    type: "service",
    category: "Home APR",
    matchMode: "Equivalent loan",
    notes: "Mortgage comparison using sample monthly payment estimates plus APR-focused lender comparison.",
    keywords: ["house", "home", "mortgage", "apr", "loan", "lender", "30 year fixed"],
    providers: [
      {
        name: "Lone Star Mortgage",
        subtitle: "Local lender example",
        billing: "monthly",
        regularPrice: 2365,
        currentPrice: 2288,
        status: "Local lender snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: null, senior: null, service: { value: 0.005, requirements: ["Military lender credit may reduce closing costs rather than rate."] } },
        coupons: [],
        dealRequirements: ["Estimated payment excludes taxes and insurance.", "APR assumes 20% down and strong credit."],
        aprOffers: [{ label: "30-year fixed APR", apr: 6.18, requirements: ["Sample assumes owner-occupied primary residence."] }],
        history: [
          { date: "2026-01-10", price: 2410 },
          { date: "2026-02-08", price: 2388 },
          { date: "2026-02-28", price: 2340 },
          { date: "2026-03-19", price: 2315 },
          { date: "2026-04-02", price: 2295 },
          { date: "2026-04-15", price: 2288 }
        ]
      },
      {
        name: "River City Bank",
        subtitle: "Regional bank example",
        billing: "monthly",
        regularPrice: 2399,
        currentPrice: 2302,
        status: "Local lender snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: null, senior: { value: 0.004, requirements: ["Relationship pricing may be offered to senior banking customers."] }, service: null },
        coupons: [],
        dealRequirements: ["Relationship checking account may be required for best advertised rate."],
        aprOffers: [{ label: "30-year fixed APR", apr: 6.24, requirements: ["Auto-pay from River City account required for relationship pricing."] }],
        history: [
          { date: "2026-01-10", price: 2430 },
          { date: "2026-02-08", price: 2399 },
          { date: "2026-02-28", price: 2365 },
          { date: "2026-03-19", price: 2330 },
          { date: "2026-04-02", price: 2310 },
          { date: "2026-04-15", price: 2302 }
        ]
      },
      {
        name: "Hill Country Credit Union",
        subtitle: "Credit union example",
        billing: "monthly",
        regularPrice: 2350,
        currentPrice: 2269,
        status: "Local lender snapshot",
        lastChecked: "2026-04-15",
        discounts: { student: null, senior: null, service: { value: 0.004, requirements: ["Veteran closing-cost credit may apply."] } },
        coupons: [],
        dealRequirements: ["Membership eligibility required.", "Rates can vary with points and lock period."],
        aprOffers: [{ label: "30-year fixed APR", apr: 6.09, requirements: ["Quoted APR assumes no cash-out and conforming loan amount."] }],
        history: [
          { date: "2026-01-10", price: 2390 },
          { date: "2026-02-08", price: 2360 },
          { date: "2026-02-28", price: 2325 },
          { date: "2026-03-19", price: 2290 },
          { date: "2026-04-02", price: 2279 },
          { date: "2026-04-15", price: 2269 }
        ]
      }
    ]
  }
);

const WATCH_STORAGE_KEY = "smartsave-watch-settings-v1";
const ZIP_STORAGE_KEY = "smartsave-local-zip-v1";

const state = {
  items: [],
  activeFilter: "all",
  searchTerm: "",
  categorySearch: "",
  selectedProductCategory: "",
  selectedServiceCategory: "",
  sortBy: "final-asc",
  selectedId: null,
  applyCoupons: true,
  plannerQuantity: 1,
  watches: {},
  notificationPermission: "default",
  zipCode: "",
  zipMatches: {},
  zipMatchSummary: "No ZIP match is active yet.",
  profile: {
    student: false,
    senior: false,
    service: false
  },
  providerVisibility: { ...defaultProviderVisibility }
};

const searchInput = document.querySelector("#searchInput");
const categorySearchInput = document.querySelector("#categorySearchInput");
const productCategorySelect = document.querySelector("#productCategorySelect");
const serviceCategorySelect = document.querySelector("#serviceCategorySelect");
const sortSelect = document.querySelector("#sortSelect");
const filterButtons = Array.from(document.querySelectorAll(".filter-chip"));
const providerToggles = Array.from(document.querySelectorAll(".provider-toggle"));
const studentToggle = document.querySelector("#studentToggle");
const seniorToggle = document.querySelector("#seniorToggle");
const serviceToggle = document.querySelector("#serviceToggle");
const couponToggle = document.querySelector("#couponToggle");
const jumpToSearchBtn = document.querySelector("#jumpToSearchBtn");
const resetDataBtn = document.querySelector("#resetDataBtn");
const targetPriceInput = document.querySelector("#targetPriceInput");
const emailAlertInput = document.querySelector("#emailAlertInput");
const textAlertInput = document.querySelector("#textAlertInput");
const enableNotificationsBtn = document.querySelector("#enableNotificationsBtn");
const saveWatchBtn = document.querySelector("#saveWatchBtn");
const plannerQuantityInput = document.querySelector("#plannerQuantityInput");
const zipCodeInput = document.querySelector("#zipCodeInput");
const applyZipBtn = document.querySelector("#applyZipBtn");
const clearZipBtn = document.querySelector("#clearZipBtn");
const customUrlInput = document.querySelector("#customUrlInput");
const readUrlBtn = document.querySelector("#readUrlBtn");
const addCustomItemBtn = document.querySelector("#addCustomItemBtn");
const customNameInput = document.querySelector("#customNameInput");
const customTypeSelect = document.querySelector("#customTypeSelect");
const customCategoryInput = document.querySelector("#customCategoryInput");
const customCurrentPriceInput = document.querySelector("#customCurrentPriceInput");
const customRegularPriceInput = document.querySelector("#customRegularPriceInput");
const customDiscountValueInput = document.querySelector("#customDiscountValueInput");
const customDiscountTypeSelect = document.querySelector("#customDiscountTypeSelect");
const customDiscountLabelInput = document.querySelector("#customDiscountLabelInput");
const customRequirementsInput = document.querySelector("#customRequirementsInput");
const customSourceStatus = document.querySelector("#customSourceStatus");

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
const alertStatusText = document.querySelector("#alertStatusText");
const zipMatchStatus = document.querySelector("#zipMatchStatus");
const zipMatchList = document.querySelector("#zipMatchList");
const categorySummary = document.querySelector("#categorySummary");
const watchlistItems = document.querySelector("#watchlistItems");
const plannerGrid = document.querySelector("#plannerGrid");

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
function saveTrackedCatalog(items = state.items.length ? state.items : comparisonData) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function cleanManualText(value, fallback = "") {
  const cleaned = String(value || "")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned || fallback;
}

function slugify(value) {
  return cleanManualText(value, "custom-item")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 52) || "custom-item";
}

function parseMoneyInput(input) {
  const value = Number.parseFloat(String(input || "").replace(/[$,]/g, ""));
  return Number.isFinite(value) && value >= 0 ? value : null;
}

function getTodayStamp() {
  return new Date().toISOString().slice(0, 10);
}

function getHostname(value) {
  try {
    return new URL(value).hostname.replace(/^www\./, "");
  } catch {
    return "Manual source";
  }
}

function splitRequirements(value) {
  return String(value || "")
    .split(/\n|;/)
    .map((entry) => cleanManualText(entry))
    .filter(Boolean);
}

function loadWatches() {
  try {
    const raw = window.localStorage.getItem(WATCH_STORAGE_KEY);
    if (!raw) {
      return {};
    }
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    console.warn("Unable to load watch settings.", error);
    return {};
  }
}

function saveWatches() {
  window.localStorage.setItem(WATCH_STORAGE_KEY, JSON.stringify(state.watches));
}

function loadZipCode() {
  return window.localStorage.getItem(ZIP_STORAGE_KEY) || "";
}

function saveZipCode() {
  if (state.zipCode) {
    window.localStorage.setItem(ZIP_STORAGE_KEY, state.zipCode);
    return;
  }

  window.localStorage.removeItem(ZIP_STORAGE_KEY);
}

function hasBackendRuntime() {
  return window.location.protocol === "http:" || window.location.protocol === "https:";
}

async function readJsonSafe(response) {
  const text = await response.text();
  if (!text) {
    return {};
  }

  try {
    return JSON.parse(text);
  } catch (error) {
    return {};
  }
}

function getLocalKindForItem(item) {
  if (item.category === "Vehicle") {
    return "vehicle";
  }
  if (item.category === "Home APR") {
    return "home";
  }
  return null;
}

function getZipMatch(providerName, kind = null) {
  const match = state.zipMatches[providerName];
  if (!match) {
    return null;
  }
  if (kind && match.kind !== kind) {
    return null;
  }
  return match;
}

function setZipMatches(payload) {
  state.zipMatches = Object.fromEntries(payload.matchedProviders.map((provider) => [provider.name, provider]));
  state.zipMatchSummary = payload.summary;
}

async function applyZipMatch() {
  const normalizedZip = zipCodeInput.value.trim().replace(/[^\d]/g, "").slice(0, 5);
  state.zipCode = normalizedZip;
  saveZipCode();

  if (normalizedZip.length !== 5) {
    state.zipMatches = {};
    state.zipMatchSummary = "Enter a valid 5-digit ZIP code to match local dealerships and lenders.";
    renderZipMatches();
    renderApp();
    return;
  }

  if (!hasBackendRuntime()) {
    state.zipMatches = {};
    state.zipMatchSummary = `Saved ${normalizedZip}. ZIP-based local matching becomes active when this app runs through Netlify or another backend-enabled host.`;
    renderZipMatches();
    renderApp();
    return;
  }

  zipMatchStatus.textContent = `Matching local providers near ${normalizedZip}...`;

  try {
    const response = await fetch(`/api/local-match?zip=${encodeURIComponent(normalizedZip)}`);
    const payload = await readJsonSafe(response);

    if (!response.ok) {
      throw new Error(payload.error || "Unable to match local providers right now.");
    }

    setZipMatches(payload);
  } catch (error) {
    state.zipMatches = {};
    state.zipMatchSummary = `${error.message} If you are still on GitHub Pages, deploy this build on Netlify to enable the backend route.`;
  }

  renderZipMatches();
  renderApp();
}

function clearZipMatch() {
  state.zipCode = "";
  state.zipMatches = {};
  state.zipMatchSummary = "No ZIP match is active yet.";
  zipCodeInput.value = "";
  saveZipCode();
  renderZipMatches();
  renderApp();
}

function applyPreviewToCustomForm(preview) {
  if (preview.title && !customNameInput.value.trim()) {
    customNameInput.value = preview.title;
  }
  if (preview.price && !customCurrentPriceInput.value.trim()) {
    customCurrentPriceInput.value = preview.price;
  }
  if (preview.price && !customRegularPriceInput.value.trim()) {
    customRegularPriceInput.value = preview.price;
  }
  if (!customCategoryInput.value.trim()) {
    customCategoryInput.value = preview.hostname ? `Web - ${preview.hostname.replace(/^www\./, "")}` : "Web source";
  }
}

async function readCustomUrl() {
  const url = customUrlInput.value.trim();
  if (!url) {
    customSourceStatus.textContent = "Paste a product or service URL first.";
    return;
  }
  if (!hasBackendRuntime()) {
    customSourceStatus.textContent = "URL reading needs the Netlify backend. You can still enter the tracker manually.";
    return;
  }

  customSourceStatus.textContent = "Reading public page metadata...";
  try {
    const response = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`);
    const payload = await readJsonSafe(response);
    if (!response.ok || payload.error) {
      throw new Error(payload.error || "SmartSave could not read that URL.");
    }
    applyPreviewToCustomForm(payload);
    customSourceStatus.textContent = payload.message || "Metadata loaded. Confirm the price and discount before adding.";
  } catch (error) {
    customSourceStatus.textContent = error.message || "Unable to read that URL. Enter the details manually.";
  }
}

function buildCustomTracker() {
  const url = customUrlInput.value.trim();
  const name = cleanManualText(customNameInput.value, "Custom tracked item");
  const type = customTypeSelect.value === "service" ? "service" : "product";
  const category = cleanManualText(customCategoryInput.value, type === "service" ? "Custom service" : "Custom product");
  const currentPrice = parseMoneyInput(customCurrentPriceInput.value);
  const regularPrice = parseMoneyInput(customRegularPriceInput.value) ?? currentPrice;
  const discountValue = parseMoneyInput(customDiscountValueInput.value);
  const discountType = customDiscountTypeSelect.value === "fixed" ? "fixed" : "percent";
  const billing = type === "service" ? "monthly" : "one-time";

  if (!currentPrice) {
    throw new Error("Enter a current price before adding this tracker.");
  }

  const providerName = getHostname(url);
  const requirements = splitRequirements(customRequirementsInput.value);
  const couponLabel = cleanManualText(customDiscountLabelInput.value);
  const coupons = discountValue
    ? [{
        label: couponLabel || (discountType === "percent" ? `${discountValue}% pasted-page discount` : `${formatCurrency(discountValue)} pasted-page discount`),
        type: discountType,
        value: discountType === "percent" ? discountValue / 100 : discountValue,
        combinable: true,
        requirements: requirements.length ? requirements : ["Confirm the pasted-page discount before checkout."]
      }]
    : [];
  const today = getTodayStamp();
  const id = `custom-${slugify(name)}-${Date.now()}`;

  return {
    id,
    name,
    type,
    category,
    matchMode: url ? "Pasted URL tracker" : "Manual tracker",
    notes: url
      ? `User-added tracker from ${providerName}. URL metadata is a starting point; confirm live price and deal terms before checkout.`
      : "User-added manual tracker. Update the current price when you see new deals.",
    keywords: [name, category, providerName, type, "custom", "manual", "url"].filter(Boolean),
    custom: true,
    providers: [{
      name: providerName,
      subtitle: url ? "Pasted third-party source" : "Manual source",
      billing,
      regularPrice: regularPrice ?? currentPrice,
      currentPrice,
      status: url ? "URL metadata / user confirmed" : "Manual price",
      lastChecked: today,
      sourceUrl: url,
      discounts: {
        student: null,
        senior: null,
        service: null
      },
      coupons,
      dealRequirements: [
        ...(url ? [`Open ${providerName} to confirm current price, stock, shipping, and coupon availability.`] : ["Manual tracker; confirm current price before purchase."]),
        ...requirements
      ],
      history: [
        { date: today, price: currentPrice }
      ]
    }]
  };
}

function clearCustomTrackerForm() {
  customUrlInput.value = "";
  customNameInput.value = "";
  customCategoryInput.value = "";
  customCurrentPriceInput.value = "";
  customRegularPriceInput.value = "";
  customDiscountValueInput.value = "";
  customDiscountLabelInput.value = "";
  customRequirementsInput.value = "";
}

function addCustomTracker() {
  try {
    const tracker = buildCustomTracker();
    state.items = [tracker, ...state.items];
    state.selectedId = tracker.id;
    state.searchTerm = "";
    state.categorySearch = "";
    state.selectedProductCategory = "";
    state.selectedServiceCategory = "";
    searchInput.value = "";
    saveTrackedCatalog(state.items);
    clearCustomTrackerForm();
    customSourceStatus.textContent = `Added ${tracker.name}. It is now searchable and can be watched for alerts.`;
    renderApp();
  } catch (error) {
    customSourceStatus.textContent = error.message || "Unable to add this tracker.";
  }
}

async function syncWatchWithBackend(item, best, watch) {
  if (!watch.email && !watch.text) {
    return "Saved locally. Add an email or text number if you want the backend to send real alerts too.";
  }

  if (!hasBackendRuntime()) {
    return "Saved locally. Real email and text alerts become active when this build runs through Netlify or another backend-enabled host.";
  }

  const response = await fetch("/api/watch-alerts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      itemId: item.id,
      itemName: item.name,
      itemCategory: item.category,
      billing: best.billing,
      targetPrice: watch.targetPrice,
      currentPrice: best.finalPrice,
      bestProviderName: best.name,
      zipCode: state.zipCode,
      email: watch.email,
      text: watch.text,
      profile: state.profile
    })
  });

  const payload = await readJsonSafe(response);
  if (!response.ok) {
    throw new Error(payload.error || "Unable to save the backend alert right now.");
  }

  state.watches[item.id] = {
    ...state.watches[item.id],
    backendSyncedAt: new Date().toISOString(),
    backendSubscriptionId: payload.subscriptionId || null
  };
  saveWatches();
  renderWatchlist();

  return payload.message || "Backend alert saved.";
}

function getItemById(itemId) {
  return state.items.find((item) => item.id === itemId) || null;
}

function getCategoryOptions(type) {
  return [...new Set(
    state.items
      .filter((item) => item.type === type)
      .map((item) => item.category)
  )].sort((a, b) => a.localeCompare(b));
}

function getActiveAprOffer(provider) {
  if (!provider.aprOffers || !provider.aprOffers.length) {
    return null;
  }
  return provider.aprOffers.reduce((best, current) => (current.apr < best.apr ? current : best));
}

function getBulkTier(item) {
  if (!item?.bulkTiers || state.plannerQuantity < 1) {
    return null;
  }
  const eligible = item.bulkTiers.filter((tier) => state.plannerQuantity >= tier.minQty);
  if (!eligible.length) {
    return null;
  }
  return eligible.reduce((best, current) => (current.effectivePrice < best.effectivePrice ? current : best));
}

function requestBrowserNotifications() {
  if (!("Notification" in window)) {
    alertStatusText.textContent = "Browser notifications are not supported in this browser.";
    return;
  }

  Notification.requestPermission().then((permission) => {
    state.notificationPermission = permission;
    alertStatusText.textContent = `Browser alert permission: ${permission}.`;
  });
}

function maybeTriggerWatchNotifications() {
  if (!("Notification" in window) || state.notificationPermission !== "granted") {
    return;
  }

  Object.entries(state.watches).forEach(([itemId, watch]) => {
    const item = getItemById(itemId);
    if (!item) {
      return;
    }
    const best = getVisibleProviderComparisons(item)[0];
    if (!best || !watch.targetPrice || best.finalPrice > watch.targetPrice) {
      return;
    }
    if (watch.lastNotifiedPrice === best.finalPrice) {
      return;
    }

    new Notification(`${item.name} is at ${formatCurrency(best.finalPrice, best.billing)}`, {
      body: `${best.name} is now at or below your target price of ${formatCurrency(watch.targetPrice, best.billing)}.`
    });
    state.watches[itemId].lastNotifiedPrice = best.finalPrice;
    saveWatches();
  });
}

async function saveSelectedWatch() {
  const item = getItemById(state.selectedId);
  if (!item) {
    alertStatusText.textContent = "Select an item before saving a watch.";
    return;
  }

  const best = getVisibleProviderComparisons(item)[0];
  if (!best) {
    alertStatusText.textContent = "No visible provider is available for this item right now.";
    return;
  }

  const targetPrice = Number.parseFloat(targetPriceInput.value);
  state.watches[item.id] = {
    itemName: item.name,
    targetPrice: Number.isFinite(targetPrice) ? targetPrice : best.finalPrice,
    email: emailAlertInput.value.trim(),
    text: textAlertInput.value.trim(),
    updatedAt: new Date().toISOString(),
    lastNotifiedPrice: null
  };
  saveWatches();
  renderWatchlist();
  maybeTriggerWatchNotifications();

  const browserMessage = state.notificationPermission === "granted"
    ? "Browser alerts are enabled."
    : "Browser alerts stay local until permission is granted.";

  try {
    const backendMessage = await syncWatchWithBackend(item, best, state.watches[item.id]);
    alertStatusText.textContent = `Saved watch for ${item.name}. ${browserMessage} ${backendMessage}`;
  } catch (error) {
    alertStatusText.textContent = `Saved watch for ${item.name}. ${browserMessage} ${error.message}`;
  }
}

function removeWatch(itemId) {
  delete state.watches[itemId];
  saveWatches();
  renderWatchlist();
  alertStatusText.textContent = "Watch removed.";
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
  state.watches = loadWatches();
  state.notificationPermission = ("Notification" in window) ? Notification.permission : "unsupported";
  state.zipCode = loadZipCode();
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
  const aprOffer = getActiveAprOffer(provider);

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
    aprOffer,
    requirements: [
      ...provider.dealRequirements,
      ...(chosen.membership.requirements || []),
      ...(chosen.coupon?.requirements || []),
      ...(aprOffer?.requirements || [])
    ]
  };
}

function getVisibleProviderComparisons(item) {
  const localKind = getLocalKindForItem(item);
  return item.providers
    .filter((provider) => state.providerVisibility[provider.name] !== false)
    .map((provider) => getProviderComparison(provider, item))
    .sort((a, b) => {
      if (localKind && state.zipCode) {
        const aLocal = getZipMatch(a.name, localKind) ? 1 : 0;
        const bLocal = getZipMatch(b.name, localKind) ? 1 : 0;
        if (aLocal !== bLocal) {
          return bLocal - aLocal;
        }
      }

      return a.finalPrice - b.finalPrice || b.savings - a.savings;
    });
}

function getFilteredItems() {
  const search = state.searchTerm.trim().toLowerCase();
  const categorySearch = state.categorySearch.trim().toLowerCase();

  return state.items
    .map((item) => {
      const providers = getVisibleProviderComparisons(item);
      const searchable = [item.name, item.category, item.matchMode, item.notes, ...item.keywords].join(" ").toLowerCase();
      const matchesFilter = state.activeFilter === "all" || item.type === state.activeFilter;
      const matchesSearch = !search || searchable.includes(search) || providers.some((provider) => provider.name.toLowerCase().includes(search));
      const selectedCategory = item.type === "product" ? state.selectedProductCategory : state.selectedServiceCategory;
      const matchesDropdown = !selectedCategory || item.category === selectedCategory;
      const matchesCategorySearch = !categorySearch || item.category.toLowerCase().includes(categorySearch);
      return {
        ...item,
        providerComparisons: providers,
        matches: matchesFilter && matchesSearch && matchesDropdown && matchesCategorySearch && providers.length > 0
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

function renderBrowseControls(filteredItems) {
  const productOptions = getCategoryOptions("product");
  const serviceOptions = getCategoryOptions("service");

  if (state.selectedProductCategory && !productOptions.includes(state.selectedProductCategory)) {
    state.selectedProductCategory = "";
  }
  if (state.selectedServiceCategory && !serviceOptions.includes(state.selectedServiceCategory)) {
    state.selectedServiceCategory = "";
  }

  productCategorySelect.innerHTML = '<option value="">All product types</option>';
  productOptions.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    productCategorySelect.appendChild(option);
  });
  productCategorySelect.value = state.selectedProductCategory;

  serviceCategorySelect.innerHTML = '<option value="">All service types</option>';
  serviceOptions.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    serviceCategorySelect.appendChild(option);
  });
  serviceCategorySelect.value = state.selectedServiceCategory;
  categorySearchInput.value = state.categorySearch;

  const counts = filteredItems.reduce((summary, item) => {
    const key = `${item.type}:${item.category}`;
    summary[key] = (summary[key] || 0) + 1;
    return summary;
  }, {});

  categorySummary.innerHTML = "";
  const keys = Object.keys(counts).sort((a, b) => a.localeCompare(b));
  if (!keys.length) {
    categorySummary.innerHTML = '<div class="empty-state">No sections match the current category filters yet.</div>';
    return;
  }

  keys.forEach((key) => {
    const [type, category] = key.split(":");
    const pill = document.createElement("span");
    pill.className = "meta-pill";
    pill.textContent = `${type === "product" ? "Product" : "Service"} - ${category} (${counts[key]})`;
    categorySummary.appendChild(pill);
  });
}

function buildCatalogCard(item) {
  const best = item.providerComparisons[0];
  const card = catalogCardTemplate.content.firstElementChild.cloneNode(true);
  card.classList.toggle("is-active", item.id === state.selectedId);
  card.querySelector(".catalog-title").textContent = item.name;
  card.querySelector(".catalog-type").textContent = item.type;
  card.querySelector(".catalog-subtitle").textContent = `${item.category} - ${item.matchMode}`;
  card.querySelector(".catalog-best").textContent = formatCurrency(best.finalPrice, best.billing);
  card.querySelector(".catalog-regular").textContent = `Regular ${formatCurrency(best.regularPrice, best.billing)}`;
  card.querySelector(".catalog-note").textContent = `${best.name} - ${best.stackNote}`;
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

  return card;
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

  const grouped = filteredItems.reduce((sections, item) => {
    if (!sections[item.type]) {
      sections[item.type] = {};
    }
    if (!sections[item.type][item.category]) {
      sections[item.type][item.category] = [];
    }
    sections[item.type][item.category].push(item);
    return sections;
  }, {});

  ["product", "service"].forEach((type) => {
    const categories = grouped[type];
    if (!categories || !Object.keys(categories).length) {
      return;
    }

    const section = document.createElement("section");
    section.className = "category-section";

    const sectionHead = document.createElement("div");
    sectionHead.className = "category-section-head";
    sectionHead.innerHTML = `
      <div>
        <p class="section-kicker">${type === "product" ? "Products" : "Services"}</p>
        <h3>${type === "product" ? "Product sections" : "Service sections"}</h3>
      </div>
      <span class="history-note">${Object.values(categories).flat().length} items visible</span>
    `;
    section.appendChild(sectionHead);

    Object.keys(categories).sort((a, b) => a.localeCompare(b)).forEach((category) => {
      const subsection = document.createElement("div");
      subsection.className = "category-subsection";
      subsection.innerHTML = `
        <div class="category-section-head">
          <div>
            <h4>${category}</h4>
          </div>
          <span class="history-note">${categories[category].length} matches</span>
        </div>
      `;

      const cardList = document.createElement("div");
      cardList.className = "category-card-list";
      categories[category].forEach((item) => {
        cardList.appendChild(buildCatalogCard(item));
      });

      subsection.appendChild(cardList);
      section.appendChild(subsection);
    });

    catalogList.appendChild(section);
  });
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
    plannerGrid.innerHTML = '<div class="empty-state">Planner tips will appear here once a tracked item is selected.</div>';
    historyNote.textContent = "Price history will appear once a tracked item is selected.";
    historyLegend.innerHTML = "";
    historyChart.innerHTML = "";
    targetPriceInput.value = "";
    emailAlertInput.value = "";
    textAlertInput.value = "";
    return;
  }

  selectedTitle.textContent = item.name;
  selectedDescription.textContent = item.notes;
  selectedBadges.innerHTML = "";
  const badgeLabels = [item.category, item.matchMode, `${item.providerComparisons.length} providers active`];
  if (item.bulkTiers?.length) {
    badgeLabels.push("Bulk pricing");
  }
  if (item.reorder) {
    badgeLabels.push(`Reorder ${item.reorder.cadenceDays}d`);
  }
  if (item.providerComparisons.some((provider) => provider.aprOffer)) {
    badgeLabels.push("APR comparison");
  }
  if (state.zipCode && getLocalKindForItem(item)) {
    badgeLabels.push(`ZIP ${state.zipCode}`);
  }
  if (state.watches[item.id]) {
    badgeLabels.push("Watched");
  }
  badgeLabels.forEach((label) => selectedBadges.appendChild(buildBadge(label)));

  const watch = state.watches[item.id];
  targetPriceInput.value = watch?.targetPrice ?? "";
  emailAlertInput.value = watch?.email ?? "";
  textAlertInput.value = watch?.text ?? "";
  const watchBilling = item.providerComparisons[0]?.billing || "one-time";
  alertStatusText.textContent = watch ? `Watching ${item.name} for ${formatCurrency(watch.targetPrice, watchBilling)} or lower.` : `No watch configured for ${item.name} yet.`;

  renderHistoryChart(item.providerComparisons);
  renderProviders(item.providerComparisons);
  renderPlanner(item, item.providerComparisons);
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
    const localMatch = getZipMatch(provider.name, getLocalKindForItem({ category: provider.category }));
    card.querySelector(".provider-name").textContent = provider.name;
    card.querySelector(".provider-rank").textContent = `#${index + 1}`;
    card.querySelector(".provider-subtitle").textContent = `${provider.subtitle} - Updated ${formatDate(provider.lastChecked)}`;
    card.querySelector(".provider-status").textContent = provider.status;
    card.querySelector(".provider-regular").textContent = formatCurrency(provider.regularPrice, provider.billing);
    card.querySelector(".provider-current").textContent = formatCurrency(provider.currentPrice, provider.billing);
    card.querySelector(".provider-final").textContent = formatCurrency(provider.finalPrice, provider.billing);
    card.querySelector(".provider-breakdown").textContent = provider.stackNote;

    const metaNode = card.querySelector(".provider-meta");
    const metaValues = [
      ...(provider.sourceUrl ? [`Source ${getHostname(provider.sourceUrl)}`] : []),
      ...(localMatch ? [`ZIP match - ${localMatch.areaLabel}`] : []),
      ...(provider.aprOffer ? [`Best APR ${provider.aprOffer.apr}% - ${provider.aprOffer.label}`] : []),
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

  historyNote.textContent = `${formatDate(dates[0])} to ${formatDate(dates[dates.length - 1])} - ${providers.length} providers visible`;
}

function renderZipMatches() {
  zipMatchStatus.textContent = state.zipMatchSummary;
  zipMatchList.innerHTML = "";

  const matches = Object.values(state.zipMatches);
  if (!matches.length) {
    zipMatchList.innerHTML = '<div class="empty-state">Matched dealerships and lenders will show up here once a ZIP is applied.</div>';
    return;
  }

  const fragment = document.createDocumentFragment();
  matches.forEach((match) => {
    const card = document.createElement("article");
    card.className = "zip-match-card";
    card.innerHTML = `
      <div class="watchlist-card-header">
        <div>
          <h4>${match.name}</h4>
          <p class="history-note">${match.kind === "vehicle" ? "Dealership" : "Lender"} - ${match.areaLabel}</p>
        </div>
        <span class="meta-pill">${match.matchType === "exact" ? "Exact ZIP" : "Area ZIP"}</span>
      </div>
      <p class="history-note">${match.notes}</p>
    `;
    fragment.appendChild(card);
  });

  zipMatchList.appendChild(fragment);
}

function renderWatchlist() {
  watchlistItems.innerHTML = "";
  const entries = Object.entries(state.watches);
  if (!entries.length) {
    watchlistItems.innerHTML = '<div class="empty-state">Items you watch for sale alerts will show up here.</div>';
    return;
  }

  const fragment = document.createDocumentFragment();
  entries.forEach(([itemId, watch]) => {
    const item = getItemById(itemId);
    if (!item) {
      return;
    }
    const best = getVisibleProviderComparisons(item)[0];
    const card = document.createElement("article");
    card.className = "watchlist-card";
    card.innerHTML = `
      <div class="watchlist-card-header">
        <div>
          <h4>${item.name}</h4>
          <p class="history-note">Best now: ${best ? formatCurrency(best.finalPrice, best.billing) : "Unavailable"}</p>
        </div>
        <span class="savings-pill ${best && watch.targetPrice >= best.finalPrice ? "" : "is-muted"}">${watch.targetPrice ? `Target ${formatCurrency(watch.targetPrice, best?.billing || "one-time")}` : "No target"}</span>
      </div>
      <div class="watchlist-meta">
        <span class="meta-pill">${watch.email || "No email"}</span>
        <span class="meta-pill">${watch.text || "No text"}</span>
        ${watch.backendSyncedAt ? `<span class="meta-pill">Backend synced</span>` : ""}
      </div>
      <div class="watchlist-actions">
        <button class="text-button" type="button" data-jump-watch="${itemId}">Open</button>
        <button class="text-button" type="button" data-remove-watch="${itemId}">Remove</button>
      </div>
    `;
    fragment.appendChild(card);
  });
  watchlistItems.appendChild(fragment);

  watchlistItems.querySelectorAll("[data-jump-watch]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = button.dataset.jumpWatch;
      renderApp();
    });
  });
  watchlistItems.querySelectorAll("[data-remove-watch]").forEach((button) => {
    button.addEventListener("click", () => removeWatch(button.dataset.removeWatch));
  });
}

function renderPlanner(item, providers) {
  plannerGrid.innerHTML = "";
  if (!item) {
    plannerGrid.innerHTML = '<div class="empty-state">Planner recommendations will appear here for the selected item.</div>';
    return;
  }

  const cards = [];
  const bulkTier = getBulkTier(item);
  if (item.bulkTiers?.length) {
    const cheapest = providers[0];
    const standardTotal = cheapest ? cheapest.finalPrice * state.plannerQuantity : 0;
    const bulkTotal = bulkTier ? bulkTier.effectivePrice * state.plannerQuantity : null;
    cards.push({
      title: "Bulk discount planner",
      body: bulkTier
        ? `${bulkTier.label} drops the unit price to ${formatCurrency(bulkTier.effectivePrice)} and the estimated ${state.plannerQuantity}-unit total to ${formatCurrency(bulkTotal)}.`
        : `No bulk tier is active at quantity ${state.plannerQuantity}. Standard estimated total is ${formatCurrency(standardTotal)}.`,
      meta: [
        cheapest ? `Best single-unit price ${formatCurrency(cheapest.finalPrice, cheapest.billing)}` : "No provider active",
        `Planner quantity ${state.plannerQuantity}`
      ]
    });
  }

  if (item.reorder) {
    const cheapest = providers[0];
    const nextReminder = new Date();
    nextReminder.setDate(nextReminder.getDate() + Math.max(1, item.reorder.cadenceDays - item.reorder.reminderWindowDays));
    const onSale = cheapest && cheapest.finalPrice <= item.reorder.saleThreshold;
    cards.push({
      title: "Perishable and reorder helper",
      body: onSale
        ? `${item.name} is under your modeled sale threshold now, so this is a strong reorder window.`
        : `Next reorder reminder lands around ${nextReminder.toLocaleDateString("en-US")}. The current threshold target is ${formatCurrency(item.reorder.saleThreshold)}.`,
      meta: [
        `Cadence ${item.reorder.cadenceDays} days`,
        `Perishability ${item.reorder.perishability}`,
        `Reminder lead ${item.reorder.reminderWindowDays} days`
      ]
    });
  }

  const aprProviders = providers.filter((provider) => provider.aprOffer);
  if (aprProviders.length) {
    const bestApr = aprProviders.reduce((best, current) => (current.aprOffer.apr < best.aprOffer.apr ? current : best));
    cards.push({
      title: item.category === "Vehicle" ? "Dealership APR helper" : "Home APR helper",
      body: `${bestApr.name} currently shows the best APR at ${bestApr.aprOffer.apr}% for ${bestApr.aprOffer.label}. Use this as the benchmark when asking another dealership or lender to match or beat it.`,
      meta: [
        `Benchmark APR ${bestApr.aprOffer.apr}%`,
        `Benchmark payment ${formatCurrency(bestApr.finalPrice, bestApr.billing)}`
      ]
    });
  }

  if (!cards.length) {
    plannerGrid.innerHTML = '<div class="empty-state">No bulk, reorder, or APR planner helpers apply to this item yet.</div>';
    return;
  }

  cards.forEach((cardInfo) => {
    const card = document.createElement("article");
    card.className = "planner-card";
    card.innerHTML = `
      <div class="planner-card-header">
        <h4>${cardInfo.title}</h4>
      </div>
      <p class="detail-description">${cardInfo.body}</p>
      <div class="planner-meta"></div>
    `;
    const metaNode = card.querySelector(".planner-meta");
    cardInfo.meta.forEach((meta) => {
      const pill = document.createElement("span");
      pill.className = "meta-pill";
      pill.textContent = meta;
      metaNode.appendChild(pill);
    });
    plannerGrid.appendChild(card);
  });
}
function renderApp() {
  const filteredItems = getFilteredItems();
  const selectedItem = ensureSelectedItem(filteredItems);
  plannerQuantityInput.value = String(state.plannerQuantity);
  updateSummary(filteredItems);
  renderBrowseControls(filteredItems);
  renderCatalog(filteredItems);
  renderSelectedItem(selectedItem);
  renderZipMatches();
  renderWatchlist();
  maybeTriggerWatchNotifications();
  dataModeNote.textContent = `Source mode: ${Object.values(state.providerVisibility).filter(Boolean).length} provider adapters enabled in this comparison view.`;
  liveRequirementsText.textContent = "This build now includes Netlify-ready backend routes for ZIP matching and alert subscriptions. Configure email or SMS provider secrets to make those notifications fully live.";
}

function attachEvents() {
  searchInput.addEventListener("input", (event) => {
    state.searchTerm = event.target.value;
    renderApp();
  });

  categorySearchInput.addEventListener("input", (event) => {
    state.categorySearch = event.target.value;
    renderApp();
  });

  productCategorySelect.addEventListener("change", (event) => {
    state.selectedProductCategory = event.target.value;
    renderApp();
  });

  serviceCategorySelect.addEventListener("change", (event) => {
    state.selectedServiceCategory = event.target.value;
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

  enableNotificationsBtn.addEventListener("click", requestBrowserNotifications);

  zipCodeInput.addEventListener("input", (event) => {
    event.target.value = event.target.value.replace(/[^\d]/g, "").slice(0, 5);
  });

  zipCodeInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      void applyZipMatch();
    }
  });

  applyZipBtn.addEventListener("click", () => {
    void applyZipMatch();
  });

  clearZipBtn.addEventListener("click", clearZipMatch);

  readUrlBtn.addEventListener("click", () => {
    void readCustomUrl();
  });

  customUrlInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      void readCustomUrl();
    }
  });

  addCustomItemBtn.addEventListener("click", addCustomTracker);

  saveWatchBtn.addEventListener("click", () => {
    void saveSelectedWatch();
  });

  plannerQuantityInput.addEventListener("input", (event) => {
    const nextValue = Number.parseInt(event.target.value, 10);
    state.plannerQuantity = Number.isFinite(nextValue) && nextValue > 0 ? nextValue : 1;
    renderApp();
  });

  resetDataBtn.addEventListener("click", () => {
    window.localStorage.removeItem(STORAGE_KEY);
    window.localStorage.removeItem(WATCH_STORAGE_KEY);
    window.localStorage.removeItem(ZIP_STORAGE_KEY);
    hydrateState();
    state.categorySearch = "";
    state.selectedProductCategory = "";
    state.selectedServiceCategory = "";
    searchInput.value = "";
    renderApp();
  });
}

function init() {
  hydrateState();
  zipCodeInput.value = state.zipCode;
  attachEvents();
  renderApp();
  if (state.zipCode) {
    void applyZipMatch();
  }
}

init();
