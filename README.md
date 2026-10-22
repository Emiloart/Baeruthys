# Baeruthys

Baeruthys is a custom-built online storefront for a dropshipping brand selling trending fashion and lifestyle items. The brand direction is classic and warm: cream and warm white surfaces, soft borders, gold accents, and generous spacing.

The store is hand-coded (Next.js and Tailwind CSS) instead of being hosted on a paid platform such as Shopify. Running costs are limited to a domain and hosting.

## Project status

| Area | State |
|---|---|
| Brand and product scope | Defined |
| Figma design | Homepage only. Shop, product detail, cart, checkout and confirmation are specified in docs/BUILD_LOG.md but not yet drawn |
| Code | Scaffold plus a first home page (header, footer, layout, product card, hero, 12 product grid) |
| Cart, checkout, payments | Not started |
| Supplier integration | Not started |
| Deployment | Not started |

See [docs/BUILD_LOG.md](docs/BUILD_LOG.md) for the full record of decisions, what was built, what failed, and what is next.

## Business model

The store uses dropshipping. The seller holds no inventory.

1. A customer buys an item from the Baeruthys storefront at the retail price.
2. The seller places the order with the supplier at the wholesale price and supplies the customer's delivery address.
3. The supplier ships directly to the customer.
4. The seller keeps the difference between retail and wholesale price.

Traffic is planned to come from paid ads. The catalog is intentionally broad and changes with supplier availability.

## Catalog scope

Trending items, selected by what producers can supply:

- Clothes
- Shoes
- Bags
- Eyeglasses
- Hair
- Nails
- Bracelets
- Earrings
- Wrist watches
- Key holders
- Phone pouches

Prices are shown in Nigerian naira (NGN).

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14.0.0 (pages router) |
| UI | React 18.2.0 |
| Styling | Tailwind CSS 3.4.4 with PostCSS and Autoprefixer |
| Design source | Figma |

Backend, database and payment provider have not been chosen yet. Options considered during planning: Node.js or PHP for the backend, MySQL or Firebase for data, and Stripe, PayPal or Flutterwave for payments. Because the target market is Nigeria, local payment methods (card, bank transfer, USSD, pay on delivery) are part of the checkout design.

## Design system

Palette, as drawn in Figma:

| Token | Figma value | Use |
|---|---|---|
| bg | #FAF8F5 | Page background (warm white) |
| surf | #F4EEE5 | Cream surfaces, sections, image placeholders |
| bdr | #E7DCCF | Borders and dividers |
| dark | #1C1C1C | Primary text, primary buttons |
| mid | #7A7068 | Secondary text |
| gold | #C9A86F | Accents, labels, primary highlight |

The palette in `tailwind.config.js` is close but not identical. See Known issues.

Typography: the intended pairing is Playfair Display for headings and Inter for body text. The Figma homepage currently uses Inter throughout.

Layout: 1440 px desktop canvas, 80 px side margins, 4 px card radius, 2 px button radius, 1 px borders.

## Site structure

1. Homepage: navbar, hero, announcement strip, category tiles, featured products, brand quote, new arrivals, trust badges, newsletter, footer
2. Shop: breadcrumb, category header, filter sidebar, sort bar, product grid
3. Product detail: image gallery, size and colour selectors, quantity, add to cart, wishlist, description, related products
4. Cart: line items, quantity controls, order summary, promo code
5. Checkout: delivery details, delivery method, order summary, payment method
6. Order confirmation: order number, delivery estimate, track order

Only page 1 exists in Figma today. The code implements a simplified home page.

## Repository layout

```
components/
  Header.js
  Footer.js
  Layout.js
  ProductCard.js
pages/
  _app.js
  index.js
styles/
  globals.css
package.json
postcss.config.js
tailwind.config.js
docs/
  BUILD_LOG.md
```

## Getting started

```
npm install
npm run dev
```

The dev server runs at http://localhost:3000. Production build: `npm run build` then `npm start`.

Note: the build currently fails until the Tailwind config issue below is fixed.

## Known issues

1. `tailwind.config.js` uses unquoted object keys containing hyphens (`baer-bg: '#F9F8F5'`). That is invalid JavaScript. The keys must be quoted (`'baer-bg': '#F9F8F5'`) or renamed (`baerBg`) before Tailwind will load.
2. Palette drift between code and Figma: surf is #F4EED7 in code against #F4EEE5 in Figma, gold is #C89E6F against #C9A86F, bg is #F9F8F5 against #FAF8F5, bdr is #E8DCD0 against #E7DCCF. Pick one source of truth and align the other.
3. The Figma homepage sections sit loose on the canvas instead of inside the homepage frame and need regrouping.
4. `feat/figma-ui` is described in earlier notes as holding the full UI, but at the time of writing its file tree matches `main`.

## Roadmap

1. Fix the Tailwind config and confirm `npm run dev` runs clean.
2. Regroup the Figma homepage and draw pages 2 to 6.
3. Build the shop, product detail, cart, checkout and confirmation pages in code.
4. Choose and integrate a payment provider.
5. Choose a supplier workflow and decide how orders are passed to the supplier.
6. Add policy pages: refund, privacy, shipping, terms.
7. Deploy and attach the domain.
8. Prepare ad creative and tracking before spending on ads.

## Brand

Name: Baeruthys. Tagline used in the design: Elegance in every detail.
