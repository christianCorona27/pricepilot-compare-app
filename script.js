const STORAGE_KEY = "pricepilot-custom-offers-v1";

const sampleOffers = [
  {
    id: "sample-1",
    name: "MacBook Air 13",
    provider: "Campus Tech Depot",
    type: "product",
    category: "Laptop",
    billing: "one-time",
    basePrice: 999,
    discounts: { student: 0.08, senior: 0.05, service: 0.1 },
    notes: "Includes same-day pickup and a one-year accidental damage plan.",
    isCustom: false,
  },
  {
    id: "sample-2",
    name: "Unlimited 5G Plan",
    provider: "BlueSignal",
    type: "service",
    category: "Wireless",
    billing: "monthly",
    basePrice: 75,
    discounts: { student: 0.05, senior: 0.1, service: 0.15 },
    notes: "Taxes excluded. Autopay is already baked into the listed base price.",
    isCustom: false,
  },
  {
    id: "sample-3",
    name: "Home Internet 1 Gig",
    provider: "NovaFiber",
    type: "service",
    category: "Internet",
    billing: "monthly",
    basePrice: 64.99,
    discounts: { student: 0.12, senior: 0.08, service: 0.12 },
    notes: "No data caps and a free router for the first year.",
    isCustom: false,
  },
  {
    id: "sample-4",
    name: "Noise-Canceling Headphones",
    provider: "Sound Harbor",
    type: "product",
    category: "Audio",
    billing: "one-time",
    basePrice: 279,
    discounts: { student: 0.12, senior: 0, service: 0.08 },
    notes: "A good example of a product where the student discount beats the military offer.",
    isCustom: false,
  },
  {
    id: "sample-5",
    name: "Grocery Delivery Plus",
    provider: "FreshCart",
    type: "service",
    category: "Membership",
    billing: "monthly",
    basePrice: 12.99,
    discounts: { student: 0.1, senior: 0.15, service: 0 },
    notes: "Senior pricing includes priority support and waived peak-hour delivery fees.",
    isCustom: false,
  },
  {
    id: "sample-6",
    name: "Streaming Bundle",
    provider: "Viewline",
    type: "service",
    category: "Entertainment",
    billing: "monthly",
    basePrice: 24.99,
    discounts: { student: 0.2, senior: 0.1, service: 0.15 },
    notes: "Bundle includes sports, movies, and ad-free music.",
    isCustom: false,
  },
  {
    id: "sample-7",
    name: "KitchenAid Mixer",
    provider: "HomeShelf",
    type: "product",
    category: "Appliances",
    billing: "one-time",
    basePrice: 349,
    discounts: { student: 0, senior: 0.1, service: 0.12 },
    notes: "Warehouse pickup and financing options are available separately.",
    isCustom: false,
  },
  {
    id: "sample-8",
    name: "Roadside Assistance",
    provider: "Anchor Auto Club",
    type: "service",
    category: "Auto",
    billing: "yearly",
    basePrice: 118,
    discounts: { student: 0.07, senior: 0.11, service: 0.16 },
    notes: "Yearly plan includes trip interruption coverage up to $1,000.",
    isCustom: false,
  },
];

const state = {
  offers: [],
  activeFilter: "all",
  searchTerm: "",
  sortBy: "final-asc",
  profile: {
    student: false,
    senior: false,
    service: false,
  },
};

const offerForm = document.querySelector("#offerForm");
const offersList = document.querySelector("#offersList");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const filterButtons = Array.from(document.querySelectorAll(".filter-chip"));
const studentToggle = document.querySelector("#studentToggle");
const seniorToggle = document.querySelector("#seniorToggle");
const serviceToggle = document.querySelector("#serviceToggle");
const resetOffersBtn = document.querySelector("#resetOffersBtn");
const jumpToFormBtn = document.querySelector("#jumpToFormBtn");
const offerFormSection = document.querySelector("#offer-form-section");
const offerRowTemplate = document.querySelector("#offerRowTemplate");

const summaryNodes = {
  lowestValue: document.querySelector("#lowestPriceValue"),
  lowestDetail: document.querySelector("#lowestPriceDetail"),
  savingsValue: document.querySelector("#largestSavingsValue"),
  savingsDetail: document.querySelector("#largestSavingsDetail"),
  averageValue: document.querySelector("#averagePriceValue"),
  averageDetail: document.querySelector("#averagePriceDetail"),
};

function loadCustomOffers() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Unable to read saved offers.", error);
    return [];
  }
}

function saveCustomOffers() {
  const customOffers = state.offers.filter((offer) => offer.isCustom);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(customOffers));
}

function hydrateState() {
  state.offers = [...sampleOffers, ...loadCustomOffers()];
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
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);

  return `${formatted}${getBillingSuffix(billing)}`;
}

function formatPercent(value) {
  return `${Math.round(value * 100)}% off`;
}

function getEligibleDiscount(offer) {
  const discounts = [];

  if (state.profile.student && offer.discounts.student > 0) {
    discounts.push({ key: "student", value: offer.discounts.student });
  }
  if (state.profile.senior && offer.discounts.senior > 0) {
    discounts.push({ key: "senior", value: offer.discounts.senior });
  }
  if (state.profile.service && offer.discounts.service > 0) {
    discounts.push({ key: "service", value: offer.discounts.service });
  }

  if (discounts.length === 0) {
    return { key: null, value: 0 };
  }

  return discounts.reduce((best, current) => (current.value > best.value ? current : best));
}

function getAdjustedOffer(offer) {
  const appliedDiscount = getEligibleDiscount(offer);
  const finalPrice = offer.basePrice * (1 - appliedDiscount.value);
  const savings = offer.basePrice - finalPrice;

  return {
    ...offer,
    appliedDiscount,
    finalPrice,
    savings,
  };
}

function getFilteredOffers() {
  const search = state.searchTerm.trim().toLowerCase();

  return state.offers
    .map(getAdjustedOffer)
    .filter((offer) => {
      const matchesFilter = state.activeFilter === "all" || offer.type === state.activeFilter;
      const searchable = [offer.name, offer.provider, offer.category, offer.notes]
        .join(" ")
        .toLowerCase();
      const matchesSearch = !search || searchable.includes(search);
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      switch (state.sortBy) {
        case "savings-desc":
          return b.savings - a.savings || a.finalPrice - b.finalPrice;
        case "base-asc":
          return a.basePrice - b.basePrice || a.finalPrice - b.finalPrice;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "final-asc":
        default:
          return a.finalPrice - b.finalPrice || b.savings - a.savings;
      }
    });
}

function getDiscountBadges(offer) {
  const badges = [];

  if (offer.discounts.student > 0) {
    badges.push(`Student ${formatPercent(offer.discounts.student)}`);
  }
  if (offer.discounts.senior > 0) {
    badges.push(`Senior ${formatPercent(offer.discounts.senior)}`);
  }
  if (offer.discounts.service > 0) {
    badges.push(`Service ${formatPercent(offer.discounts.service)}`);
  }

  return badges;
}

function updateSummary(offers) {
  if (offers.length === 0) {
    summaryNodes.lowestValue.textContent = "$0.00";
    summaryNodes.lowestDetail.textContent = "No matching offers right now";
    summaryNodes.savingsValue.textContent = "$0.00";
    summaryNodes.savingsDetail.textContent = "Try a broader filter";
    summaryNodes.averageValue.textContent = "$0.00";
    summaryNodes.averageDetail.textContent = "Waiting for results";
    return;
  }

  const lowest = offers[0];
  const biggestSavings = offers.reduce((best, current) =>
    current.savings > best.savings ? current : best
  );
  const average = offers.reduce((sum, offer) => sum + offer.finalPrice, 0) / offers.length;

  summaryNodes.lowestValue.textContent = formatCurrency(lowest.finalPrice, lowest.billing);
  summaryNodes.lowestDetail.textContent = `${lowest.name} by ${lowest.provider}`;

  summaryNodes.savingsValue.textContent = formatCurrency(biggestSavings.savings, biggestSavings.billing);
  summaryNodes.savingsDetail.textContent =
    biggestSavings.savings > 0
      ? `${biggestSavings.name} saves the most`
      : "No eligible discount in the current view";

  summaryNodes.averageValue.textContent = formatCurrency(average);
  summaryNodes.averageDetail.textContent = `${offers.length} matching offer${offers.length === 1 ? "" : "s"}`;
}

function renderOffers() {
  const offers = getFilteredOffers();
  offersList.innerHTML = "";

  if (offers.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent =
      "No offers match this view yet. Try another filter, clear your search, or add a custom offer.";
    offersList.appendChild(emptyState);
    updateSummary(offers);
    return;
  }

  const fragment = document.createDocumentFragment();

  offers.forEach((offer, index) => {
    const row = offerRowTemplate.content.firstElementChild.cloneNode(true);
    row.style.animationDelay = `${index * 35}ms`;

    row.querySelector(".offer-title").textContent = offer.name;
    row.querySelector(".offer-provider").textContent = `${offer.provider} · ${offer.category}`;
    row.querySelector(".offer-type").textContent = offer.type;
    row.querySelector(".offer-notes").textContent = offer.notes;
    row.querySelector(".price-base").textContent = `Base ${formatCurrency(offer.basePrice, offer.billing)}`;
    row.querySelector(".price-final").textContent = `Final ${formatCurrency(offer.finalPrice, offer.billing)}`;

    const discountText =
      offer.appliedDiscount.value > 0
        ? `${formatPercent(offer.appliedDiscount.value)} applied`
        : "No eligible discount";
    row.querySelector(".price-discount").textContent = discountText;

    const savingsNode = row.querySelector(".savings-pill");
    savingsNode.textContent =
      offer.savings > 0 ? `Save ${formatCurrency(offer.savings, offer.billing)}` : "Full price";

    const metaNode = row.querySelector(".offer-meta");
    getDiscountBadges(offer).forEach((badge) => {
      const pill = document.createElement("span");
      pill.className = "meta-pill";
      pill.textContent = badge;
      metaNode.appendChild(pill);
    });

    const removeButton = row.querySelector(".remove-button");
    if (!offer.isCustom) {
      removeButton.hidden = true;
    } else {
      removeButton.addEventListener("click", () => {
        state.offers = state.offers.filter((entry) => entry.id !== offer.id);
        saveCustomOffers();
        renderOffers();
      });
    }

    fragment.appendChild(row);
  });

  offersList.appendChild(fragment);
  updateSummary(offers);
}

function setActiveFilter(nextFilter) {
  state.activeFilter = nextFilter;
  filterButtons.forEach((button) => {
    const active = button.dataset.filter === nextFilter;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderOffers();
}

function readPercent(inputId) {
  const value = Number.parseFloat(document.querySelector(`#${inputId}`).value);
  if (!Number.isFinite(value) || value <= 0) {
    return 0;
  }
  return Math.min(value, 100) / 100;
}

function addOffer(event) {
  event.preventDefault();

  const formData = new FormData(offerForm);
  const newOffer = {
    id: `custom-${Date.now()}`,
    name: String(formData.get("offerName")).trim(),
    provider: String(formData.get("providerName")).trim(),
    type: String(formData.get("offerType")),
    category: String(formData.get("categoryName")).trim(),
    billing: String(formData.get("billingCycle")),
    basePrice: Number.parseFloat(String(formData.get("basePrice"))),
    discounts: {
      student: readPercent("studentDiscount"),
      senior: readPercent("seniorDiscount"),
      service: readPercent("serviceDiscount"),
    },
    notes:
      String(formData.get("offerNotes")).trim() ||
      "Custom offer added locally. Update the notes any time with provider details.",
    isCustom: true,
  };

  state.offers = [newOffer, ...state.offers];
  saveCustomOffers();
  offerForm.reset();
  state.searchTerm = "";
  searchInput.value = "";
  setActiveFilter("all");
}

function attachEvents() {
  offerForm.addEventListener("submit", addOffer);

  searchInput.addEventListener("input", (event) => {
    state.searchTerm = event.target.value;
    renderOffers();
  });

  sortSelect.addEventListener("change", (event) => {
    state.sortBy = event.target.value;
    renderOffers();
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => setActiveFilter(button.dataset.filter));
  });

  studentToggle.addEventListener("change", (event) => {
    state.profile.student = event.target.checked;
    renderOffers();
  });

  seniorToggle.addEventListener("change", (event) => {
    state.profile.senior = event.target.checked;
    renderOffers();
  });

  serviceToggle.addEventListener("change", (event) => {
    state.profile.service = event.target.checked;
    renderOffers();
  });

  resetOffersBtn.addEventListener("click", () => {
    window.localStorage.removeItem(STORAGE_KEY);
    hydrateState();
    renderOffers();
  });

  jumpToFormBtn.addEventListener("click", () => {
    offerFormSection.scrollIntoView({ behavior: "smooth", block: "start" });
    document.querySelector("#offerName").focus();
  });
}

function init() {
  hydrateState();
  attachEvents();
  renderOffers();
}

init();
