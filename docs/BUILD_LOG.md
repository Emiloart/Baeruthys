# Baeruthys Build Log

Last updated: 2026-10-22

This file records repository state and implementation decisions. Treat completed work as distinct from planned work and from production capabilities that have not been connected or tested.

## 1. Product direction

Baeruthys is being developed as a **large, modern online supermarket and everyday store**, rather than a fashion-only storefront. The experience should bring multiple shopping missions into one basket: groceries, fresh produce, pantry staples, drinks, dairy and eggs, meat and seafood, bakery, household supplies, personal care, home and kitchen, electronics, fashion, and baby and kids' essentials.

The existing brand palette is a hard constraint. Do not change the warm white, cream, dark neutral, border and gold tokens in `tailwind.config.js`. The visual evolution should come from information architecture, merchandising, photography, responsive layout and the shopping flow.

## 2. Verified repository baseline

- Framework: Next.js 14 Pages Router, React 18 and Tailwind CSS 3.
- Currency: Nigerian naira (NGN).
- Shared UI: header, footer, layout, product cards and product image component.
- Shop: category and search routing, price filtering, colour/size filters when product data supports them, and sorting.
- Product detail pages are statically generated from the product catalogue.
- Basket and saved items use React context and browser local storage.
- Checkout and policy routes exist in the repository, but payment processing is explicitly disabled in `lib/site.js`.
- No production supplier feed, authoritative inventory, persisted customer account or confirmed payment integration is represented by this frontend.

The original README understated the amount of existing work and still described a fashion-led storefront. It has been rewritten to reflect the current supermarket direction and distinguish the storefront from unfinished commerce infrastructure.

## 3. Work completed on 2026-10-22

Each file below was committed directly to `main` before the next file was written.

| File | Change | Commit |
|---|---|---|
| `data/products.js` | Replaced fashion-only starter catalogue with a multi-department sample catalogue, category taxonomy, product units, imagery and refreshed featured/new-arrival helpers. | `59eb4cca080cf2587251b45a3d9cedd86623c660` |
| `pages/index.js` | Rebuilt the homepage around a supermarket-led hero, department grid, everyday favourites, cross-department shopping message and delivery information. | `fbfe90b17fe303562ecbfa8974bc1ae64b9c9d1d` |
| `components/Header.js` | Changed desktop and mobile navigation to departments, updated search language and basket/saved-item labels. | `ea69f7129e71ab3a9c6e00fa5c0b0b25db329ec1` |
| `components/ProductCard.js` | Added support for the Popular label, product unit display, basket-oriented actions and denser responsive supermarket cards. | `f6df107f465cf44d50a14793cf48a43620503025` |
| `components/Footer.js` | Replaced fashion-led footer links with supermarket department links and customer-care labels. | `63916f0edbb5eb81a20baf37c93ac7023d57762a` |
| `pages/_app.js` | Updated global metadata to describe the multi-department store; retained the existing theme colour. | `bde8c8426c712172e63bdfe4dc8804f5e96e29e6` |
| `README.md` | Rewrote the project documentation around the new direction, existing stack, limitations, palette and roadmap. | `05e44af3a94fedd2a2e916e8d9642cfc8b3db08b` |
| `pages/product/[slug].js` | Shows product department and pack unit, and uses basket language. | `7dd64b5f17009111a84af8cfe755df3856665fef`, followed by basket-label alignment in `11008ff6c83a2d4b01c19b578811196f3bbdc8fd` |
| `context/CartContext.js` | Preserves a product's unit on basket line items. | `cfa7b95ea12721f354ff590c864f9cfd203bea74` |
| `pages/cart.js` | Displays product units in the basket and uses basket terminology. | `6312056711114164054747468dd9d4f37166b5fd` |

## 4. Current catalogue state

The starter catalogue now includes sample items across fresh produce, pantry, drinks, dairy and eggs, meat and seafood, bakery, household cleaning, personal care, home and kitchen, and electronics. The taxonomy also reserves categories for fashion and baby/kids.

The catalogue is still illustrative data. Product prices, supplier availability, pack sizes, image rights, product descriptions and delivery feasibility must be verified before launch. A department in the navigation does not imply it is stocked. Add products only as reliable catalogue data becomes available.

## 5. Design constraints

- Preserve the existing palette: `#FAF8F5`, `#F4EEE5`, `#EFE8DC`, `#E7DCCF`, `#1C1C1C`, `#7A7068`, `#C9A86F`, and `#121212`.
- Build the experience as a supermarket with department navigation and cross-category basket shopping, not as a fashion landing page with grocery items substituted into the cards.
- Prioritise readable product names, pack/unit information, clear prices, quick basket actions, search, filters and mobile usability.
- Keep claims about delivery, stock, food quality and payment grounded in real operating capabilities.
- Product imagery currently uses remote image URLs. Verify each image's relevance, licensing and availability before launch.

## 6. Commerce and safety boundaries

- `PAYMENTS_LIVE` remains `false`; no real payment should be represented as available.
- Browser-local basket data is not a server-side order record and is not synced across devices.
- Supplier ordering, inventory reconciliation, order persistence, payment webhooks, refunds, fulfilment and customer accounts are not yet production-connected.
- Do not put payment secrets or supplier credentials in frontend code.
- Before live sales, validate price and stock server-side, make payment/order handling idempotent, secure customer data and publish accurate policies.

## 7. Next steps

1. Run `npm run build` in a Node environment with dependency installation available; fix any build or lint failures before claiming validation.
2. Test every category route, product detail, search query, filters, basket persistence, quantity controls, saved items and checkout states at mobile and desktop widths.
3. Check remote product and department images for correctness and rights; replace placeholders with approved product photography.
4. Add unit-price display where comparable units exist, stock and availability state, shopping lists and repeat-purchase affordances.
5. Choose a supplier and define catalogue import, price updates, substitutions, perishable handling and stock freshness.
6. Design server-side basket/order persistence, customer accounts, payment integration, delivery coverage and delivery-slot selection.
7. Build internal operations for catalogue management, picking, fulfilment exceptions, refunds and customer support.
8. Add tests, accessibility checks, performance monitoring, analytics consent and launch readiness review.

## 8. Explicitly not verified

This work was applied through the GitHub connector. A local Next.js production build, browser visual QA, image-by-image validation and end-to-end payment test were not run in this session. Do not interpret the commits as proof that those checks passed.

## 9. Moving product advertising banner

Added on 2026-10-22. Each file was committed to `main` before proceeding to the next.

| File | Change | Commit |
|---|---|---|
| `components/ProductAdMarquee.js` | Added a continuously moving, looping product-promotion strip with linked fresh produce, pantry and household campaign cards. | `fe0e5dbe917934f8af2bbed35e20943d329454b8` |
| `styles/globals.css` | Added responsive card styling, seamless track animation, hover/focus pause and reduced-motion handling. Existing palette values were preserved. | `a3ea909f93de4504a6f32ea61d1f9b4093eb5781` |
| `pages/index.js` | Mounted the advertising strip directly below the homepage hero. | `0c5cb2f8cfeb11748c54c27de9d756cc20b2f394` |

The current cards are editorial category promotions, not paid advertiser inventory and do not claim unverified discounts. Future campaign data can be connected to a managed promotions source. The browser animation and production build have not been visually tested in this session.
