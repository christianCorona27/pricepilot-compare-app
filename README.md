# SmartSave

SmartSave is a search-first comparison dashboard for products, services, cars, and home-loan APR scenarios. It helps shoppers compare current prices, coupons, eligibility discounts, deal requirements, watchlists, ZIP-based local matching, and price history across multiple retailers and providers in one interface.

## Live Demo

- Backend-enabled demo: [SmartSave on Netlify](https://smartsave-compare.netlify.app/)
- GitHub Pages frontend: [SmartSave](https://christiancorona27.github.io/smartSave/)
- Repo: [christianCorona27/smartSave](https://github.com/christianCorona27/smartSave)

## What It Does

SmartSave is built to answer a more realistic shopping question than just "what is the listed price?"

It compares:

- The same physical item across multiple retailers
- Equivalent service plans across multiple providers
- Local dealership listings for the same vehicle model
- Home-loan APR examples across lenders for the same financing scenario
- Regular price, current price, and final eligible price
- Coupons, membership discounts, and stack rules
- Deal requirements such as verification, autopay, new-customer rules, and account eligibility
- Dated price history for the currently selected item or service
- Watch targets, browser notifications, and backend-powered email or text alert subscriptions
- Bulk discount and perishable reorder planning helpers
- ZIP-based matching for local dealerships and lenders

## Current Features

- Search tracked products, services, vehicle offers, and home APR scenarios from one main search bar
- Filter by `All`, `Products`, or `Services`
- Sort by cheapest final price, biggest markdown, provider coverage, or name
- Compare seeded store, dealership, and lender snapshots across:
- Amazon
- Best Buy
- Walmart
- Target
- Northside Toyota
- Capital City Toyota
- Hill Country Toyota
- AT&T Fiber
- Spectrum
- Verizon 5G Home
- Xfinity
- Google One
- Dropbox
- Microsoft 365
- iCloud+
- Lone Star Mortgage
- River City Bank
- Hill Country Credit Union
- Toggle shopper profile modes:
- Student
- Senior
- Service Member
- Toggle coupon usage on or off
- Apply the best eligible membership discount automatically
- Stack coupons only when the provider rules allow stacking
- Show provider-by-provider requirement notes
- Show current price, regular price, and final eligible price together
- Show current markdown and total markdown
- Show history low and history high per provider
- Render a dated comparison chart for price history
- Save watched items with target prices
- Request browser notification permission for local sale alerts
- Capture email and text destinations and sync them to a backend subscription route
- Paste a third-party product or service URL, read public page metadata when available, and add a user-confirmed tracker
- Add custom products or services manually with current price, regular price, coupons, and deal requirements
- Match local dealerships and lenders from a ZIP code
- Re-rank vehicle and home APR results so local matches rise to the top
- Show bulk discount planners with quantity-break pricing
- Show perishable reorder helpers for sale-driven restocking
- Compare local car dealership pricing and APR offers
- Compare home-loan APR scenarios across lenders
- Surface APR benchmark helpers so users can negotiate against the best visible rate
- Include Netlify Functions and Netlify Blobs wiring for alert subscriptions and ZIP matching
- GitHub Pages frontend deployment, with backend routes ready for Netlify deployment

## Backend Features Added In This Pass

- `POST /api/watch-alerts` stores alert subscriptions and attempts immediate email or SMS delivery when the current tracked price already meets the target
- `GET /api/local-match?zip=78704` returns local dealership and lender matches from a seeded ZIP directory
- `GET /api/link-preview?url=https://example.com/item` attempts to read public page metadata for user-pasted product or service URLs
- `@hourly` scheduled function `price-alert-sweep` is included for backend alert processing
- Netlify Blobs storage is used for alert subscription persistence
- The frontend now stores backend subscription ids alongside the local watchlist

## How Pricing Works

- `Regular price` is the baseline list price
- `Current price` is the current promoted or store snapshot price
- `Final price` is the lowest eligible price after applying:
- One membership discount at most
- One coupon when available
- Coupon stacking only if the provider explicitly allows it

Rules in the current app:

- Student, senior, and service member discounts do not stack with each other
- Coupons may stack with one membership discount only when marked `combinable`
- Requirements are shown directly on each provider card
- APR helpers use the best visible APR offer as the benchmark for negotiation
- ZIP matching affects dealership and lender ranking, not national retailers

## Data Model In This Version

This deployed version still uses seeded snapshot data stored in the frontend so it can run safely as a static site.

That means:

- The UI and comparison logic are real
- Browser watchlists are real and stored locally
- Backend subscription routes are real when the app runs on Netlify
- The provider snapshots are demo data
- The price history is seeded history data
- The current GitHub Pages deployment does not execute the Netlify backend routes
- No live retailer API keys are exposed in the browser

## Files

- `index.html` - page structure, search layout, ZIP matching UI, alerts UI, inspector, and comparison templates
- `styles.css` - visual system, layout, responsive behavior, chart framing, ZIP match styling, watchlist styling, and provider card styling
- `script.js` - seeded dataset, pricing rules, watchlists, backend sync calls, ZIP matching behavior, planner logic, APR helpers, chart rendering, and interaction logic
- `netlify/functions/watch-alerts.mts` - backend alert subscription endpoint
- `netlify/functions/local-match.mts` - ZIP-based dealership and lender matching endpoint
- `netlify/functions/link-preview.mts` - safe URL metadata endpoint for pasted third-party pages
- `netlify/functions/price-alert-sweep.mts` - scheduled backend alert processor
- `netlify/functions/lib/alerts.mts` - shared alert storage and delivery helpers
- `netlify/functions/lib/provider-directory.mts` - seeded local provider coverage directory
- `netlify.toml` - Netlify functions configuration
- `.env.example` - required alert provider environment variables

## Environment Variables

To send real email and SMS notifications after a Netlify deploy, set these environment variables:

- `RESEND_API_KEY`
- `ALERT_FROM_EMAIL`
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_FROM_NUMBER`

Without those values, the backend still stores subscriptions, but it cannot send live messages.

## Run Locally

This project now has three practical ways to run:

1. Start the no-dependency local website server from this folder:

```powershell
powershell -ExecutionPolicy Bypass -File .\start-website.ps1
```

Then open `http://localhost:5173/` in a browser.

2. Open `index.html` directly in a browser for the static comparison experience.
3. Use Netlify for the backend-enabled experience.

Once Node.js is installed:

```powershell
npm install
npm run dev
```

That runs the site through `netlify dev`, which enables the local serverless routes.

## Typical User Flow

1. Search for a product, equivalent service, vehicle, or mortgage scenario.
2. Choose whether the shopper is a student, senior, or service member.
3. Decide whether coupons should be included.
4. If shopping locally for a vehicle or home loan, enter a ZIP code and apply local matching.
5. Review the tracked items list to find the best current deal.
6. Open the selected item in the inspector.
7. Compare providers, read requirements, and inspect the dated price history.
8. Save the item to a watchlist, set a target price, and enter an email or text destination.
9. Use planner cards for bulk buying, perishables, dealership APR comparisons, or home-loan APR benchmarks.

## Known Limitations

- Retailer, dealership, and lender pricing data is still seeded, not live scraped or API-fed
- Pasted URL reading is best-effort metadata extraction; some retailers block automated reads or hide prices behind scripts, accounts, location, or carts
- User-added trackers depend on the user confirming price and discount details before saving
- The current GitHub Pages deployment does not run the backend routes
- Real email and SMS delivery requires Netlify deployment plus provider secrets
- The scheduled alert sweep currently checks the stored tracked snapshot price, not a live retailer feed
- Browser notifications work locally in supported browsers, but only while the user has granted permission
- Auto-reordering is modeled as planning logic, not automatic checkout or purchase execution
- Price history is seeded, not collected automatically from a backend
- Item matching is curated rather than API-driven

## Good Next Steps

- Deploy the backend-enabled build to Netlify
- Add live retailer and lender data sources so scheduled alerts can react to real price changes
- Expand the ZIP directory beyond the seeded Central Texas provider set
- Add ZIP-aware home listing, insurance, and financing comparisons
- Add user accounts so alerts and ZIP preferences sync across devices

## Recommended Features

These are the strongest next additions based on the app's current direction.

### High Impact

- Live store and lender feeds so the app compares real-time prices instead of seeded snapshots
- Price-drop confidence labels that show whether a deal looks unusually strong compared to recent history
- Multi-item watchlists for planning a whole purchase, such as a grocery list, tech setup, or moving checklist
- Shareable comparison links so users can send a saved product, car, or APR comparison to family members or buyers

### Shopping Intelligence

- Total cost breakdowns that include taxes, shipping, activation fees, dealer fees, or estimated closing costs
- A best-value score that balances final price, discount quality, provider reputation, and requirements complexity
- Deal stacking guidance that explains which coupon or profile discount was chosen and why it beat the alternatives
- Category-specific comparison modes for groceries, household essentials, electronics, internet plans, cars, and mortgages

### Cars

- Out-the-door vehicle pricing with estimated taxes, doc fees, add-ons, and registration costs
- Trade-in value and down-payment modeling
- Loan term comparisons that show payment, total interest, and total paid instead of APR alone
- Dealer negotiation mode that highlights the strongest competing local offer to use as leverage

### Homes And APR

- Mortgage comparison by monthly payment, APR, total interest, and cash-to-close
- Adjustable-rate versus fixed-rate comparison tools
- Property tax, homeowners insurance, HOA, and PMI estimates for a more realistic monthly payment
- Refinance comparison mode for users comparing lenders on an existing loan

### Alerts And Automation

- Scheduled backend price refresh jobs for watched items
- Escalating alerts such as browser first, then email, then SMS when a deal becomes urgent
- Smart reorder rules for perishables and household items based on cadence, quantity, and sale thresholds
- Budget alerts that warn when the final price goes above a preferred spending limit

### Accounts

- Sign-in so users can keep alerts, ZIP preferences, watched items, and comparison history across devices
- Saved profiles for student, senior, military, family, renter, or homeowner scenarios
- Saved households so one person can manage recurring shopping and another can receive alerts

## Suggested Build Order

If you want to keep momentum and get the biggest payoff first, this is the order I would recommend:

1. Deploy on Netlify and turn on the backend routes
2. Add live price refresh sources for a small set of providers first
3. Add user accounts so alerts and ZIP settings persist across devices
4. Add total-cost calculators for cars and mortgages
5. Expand local dealership and lender coverage by ZIP and state
