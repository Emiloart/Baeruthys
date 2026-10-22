# Baeruthys

**Baeruthys is being built as a modern, multi-department online supermarket**, not a fashion-only storefront. The experience is organised around parent departments with clear subdepartments. Food & Groceries groups fresh produce, meat and seafood, dairy and chilled foods, bakery, pantry, drinks, snacks and frozen foods. Home & Living groups appliances, kitchen and dining, cleaning and household care, furniture, bedding, storage, lighting and home improvement. Other parent departments cover beauty and personal care, electronics and technology, fashion and accessories, baby and kids, health and wellness, office and school, outdoor and DIY, and pet supplies.

The visual identity remains the existing warm-white, cream, dark-neutral and gold palette. The redesign changes the store's scope and shopping experience, not its colours.

## Current build

The repository is a hand-coded Next.js storefront. The current implementation includes:

- Responsive homepage with a broad multi-department hero, an all-departments directory near the top, and dedicated department hero sections with horizontal subdepartment carousels.
- Parent-department taxonomy shared by the homepage, desktop and mobile navigation, footer and shop filters.
- Parent department routes (for example, `/shop?department=food-groceries`) and individual subdepartment routes (for example, `/shop?category=dairy-eggs`).
- Moving promotion banner that introduces food, home, technology and personal-care departments.
- Department-led navigation, mobile department menu and product search.
- A starter catalogue spanning multiple supermarket departments, with product units and product imagery.
- Shop page with category, search, price, colour and size filtering where relevant, plus sorting.
- Product detail pages, related products and option selection where relevant.
- Client-side basket and saved-items list persisted in browser local storage.
- Cart quantity controls, subtotal, delivery threshold messaging, promo-code and checkout flow scaffolding.
- Nigerian naira (NGN) price formatting.

## Important status and limitations

This is an active storefront build, not yet a production-ready commerce operation.

- Catalogue entries and prices are demonstration data. They must be verified against real suppliers, current availability and actual margins before selling.
- Product photos are remote illustrative images and need to be checked for relevance, licensing and long-term availability.
- The basket and saved items are browser-local; they are not synced across devices or customer accounts.
- Payment processing is not live. `PAYMENTS_LIVE` remains `false` in `lib/site.js`; do not represent checkout as taking payment until a provider and server-side order workflow are implemented and tested.
- Supplier integration, authoritative inventory, order management, customer accounts, delivery integrations and operational support workflows remain future work.
- The taxonomy includes planned subdepartments that do not yet have sample products. Their routes are discoverable, but an empty result is not evidence that stock exists. Populate and verify each range before launch.

## Technology

| Layer | Current choice |
|---|---|
| Framework | Next.js 14 Pages Router |
| UI | React 18 |
| Styling | Tailwind CSS 3 |
| Fonts | Inter and Playfair Display via `next/font` |
| Basket and saved items | React context + browser local storage |
| Currency | Nigerian naira (NGN) |
| Deployment | Not confirmed in this repository |

## Brand palette

These existing design tokens are intentionally preserved.

| Token | Value | Use |
|---|---|---|
| `baer-bg` | `#FAF8F5` | Main page background |
| `baer-surf` | `#F4EEE5` | Secondary surfaces |
| `baer-cream` | `#EFE8DC` | Feature sections |
| `baer-bdr` | `#E7DCCF` | Borders and dividers |
| `baer-dark` | `#1C1C1C` | Main text and primary actions |
| `baer-mid` | `#7A7068` | Secondary text |
| `baer-gold` | `#C9A86F` | Accent |
| `baer-ink` | `#121212` | Footer and deep surfaces |

Do not replace the palette as part of future supermarket UX work. Improve hierarchy, imagery, spacing, navigation and shopping flows within this system.

## Run locally

Requirements: a compatible Node.js installation and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production compilation:

```bash
npm run build
npm start
```

## Roadmap

1. **Validate the storefront:** run the production build, inspect responsive layouts, verify every department route and check all product images.
2. **Complete the catalogue model:** product identifiers, SKU, unit and pack size, supplier, stock state, price provenance, category taxonomy, substitutions and perishable-item handling.
3. **Build reliable commerce services:** server-side basket validation, customer identity, persisted orders, inventory reservation, payment integration, idempotent payment webhooks and order status history.
4. **Design supermarket-specific shopping:** shopping lists, repeat purchases, department filters, unit-price comparison, availability indicators, substitutions and delivery-slot selection.
5. **Add operations tooling:** product and price management, supplier imports, order picking, fulfilment exceptions, refunds and customer support.
6. **Establish trust and compliance:** accurate delivery and returns policies, privacy disclosures, terms, food handling and allergen information where relevant, and secure payment practices.
7. **Test before launch:** mobile and desktop QA, keyboard accessibility, empty and error states, checkout failure handling, performance, image rights, SEO and analytics consent.
8. **Connect real operations:** select suppliers, delivery coverage, payment methods, stock update cadence and customer service processes before marketing the store as live.

## Repository layout

```
components/   Shared layout, navigation and product components
context/      Client-side basket and saved-items state
data/         Starter product and department catalogue
docs/         Build log and implementation decisions
lib/          Store settings and formatting utilities
pages/        Next.js pages and commerce routes
styles/       Global styles and Tailwind layers
```

See [docs/BUILD_LOG.md](docs/BUILD_LOG.md) for build history, verified status and the next implementation steps.
