# Baeruthys Build Log

Last updated: 2026-10-22

This log records how the project got to its current state, including what did not work, so the next session starts from facts.

## 1. Planning decisions

| Decision | Outcome | Reason |
|---|---|---|
| Business model | Dropshipping | Chosen over print-on-demand, digital products, affiliate marketing and reselling. It was judged the most achievable first business |
| Website approach | Hand-coded site, not Shopify | Cuts recurring cost to domain (roughly 10 to 15 USD a year) and hosting (roughly 3 to 10 USD a month) instead of a platform subscription |
| Traffic | Paid ads | Faster than organic. Plan is to test one product at a small daily budget before scaling |
| Brand name | Baeruthys | Chosen by the owner |
| Look and feel | Classic, warm white and cream layout and borders | Owner asked for elegance and class |
| Catalog | Broad and trend-led | Items depend on what producers have available |

Suggested learning sources were beginner YouTube dropshipping channels, supplier blogs (DSers, Zendrop, Spocket), r/dropship, and low-cost Udemy courses.

## 2. Design phase in Figma

File: https://www.figma.com/design/YRtZcdExdJA2qsPaDWTArV

A design file was created through the Figma connector and populated by running Figma Plugin API scripts.

### Attempt 1: six pages, Playfair Display headings

The script tried to create six Figma pages (homepage, shop, product detail, cart, checkout, confirmation) using Playfair Display and Inter. The file opened with an empty page and no frames. Likely causes were the font load and the multi-page creation approach. The exact cause was not confirmed.

### Attempt 2: single page, Inter only

The homepage was rebuilt on one canvas page using Inter only. This produced the homepage content: navbar, hero, announcement strip, six category tiles, four featured products, brand quote, four new arrivals, trust badges, newsletter and footer.

### Attempt 3: remaining five pages

A second script for the shop, product detail, cart, checkout and confirmation frames was prepared. The connector dropped mid-session, so the script was handed over to run manually in Figma. That route failed: the Console CLI plugin on the owner's phone is a command shell with its own commands (ls, find, shape and so on) and does not execute JavaScript. After the connector returned, the script was run again. The call returned no output.

### Verified state on 2026-10-22

A metadata read of the Figma file shows one canvas page. It contains the Homepage frame. Pages 2 to 6 are not present. Several homepage sections (navbar, hero, featured products, footer and others) exist as separate frames on the canvas with offset coordinates instead of sitting inside the homepage frame. Earlier messages in the session that described all six pages as complete were wrong.

## 3. Page specifications (not yet drawn)

These are the intended designs for pages 2 to 6, recorded so they can be built in Figma or directly in code.

### Shop

- Breadcrumb: Home / Clothes
- Category header: Women's Clothes, 124 products
- Left filter sidebar: Category, Size, Price range, Colour
- Sort bar: showing 1 to 12 of 124, sort by Featured
- Product grid: 4 columns, 12 cards, each with image, name, price, Add to Cart

### Product detail

- Thumbnail strip with four images and a large main image
- Collection label, product title, star rating, price, stock note
- Size selector (XS to XL), colour swatches, quantity control
- Add to Cart and Wishlist buttons
- Description block
- Related products row (You May Also Like)

### Cart

- Table of line items: product, price, quantity control, line total, remove
- Order summary panel: subtotal, shipping, discount, total
- Promo code field, Proceed to Checkout, Continue Shopping

### Checkout

- Step indicator: Cart, Delivery, Payment, Confirm
- Delivery form: full name, phone, email, street address, city, state, country
- Delivery method: Standard (3 to 5 business days), Express (1 to 2 business days), Pick-up station
- Right panel: order summary and payment method (card, bank transfer, USSD, pay on delivery), Place Order

### Order confirmation

- Success mark, order number, email confirmation note, delivery estimate
- Track My Order and Continue Shopping

## 4. Code state

The repository holds a Next.js 14 and Tailwind 3 scaffold:

- `components/Layout.js`, `Header.js`, `Footer.js`, `ProductCard.js`
- `pages/_app.js` and `pages/index.js` (hero plus a 12 product grid using hard-coded sample products and naira prices)
- `styles/globals.css`, `tailwind.config.js`, `postcss.config.js`

The code home page is a simplified version of the Figma homepage. It does not yet include the announcement strip, category tiles, brand quote, new arrivals, trust badges or newsletter sections, and it has no cart state.

Branches: `main` and `feat/figma-ui`. At the time of writing the file listing of `feat/figma-ui` matches `main`.

## 5. Open problems

1. Tailwind config is invalid JavaScript (unquoted hyphenated keys), so the app will not build.
2. Colour values differ slightly between Figma and Tailwind.
3. Figma homepage needs regrouping, and pages 2 to 6 need to be drawn.
4. No product data source, cart state, checkout logic or payment provider.
5. No supplier chosen and no order handoff process defined.

## 6. Next steps

1. Quote the keys in `tailwind.config.js` and verify the dev server starts.
2. Align the palette between Figma and code.
3. Regroup the Figma homepage into one frame, then build pages 2 to 6 from the specs above.
4. Implement pages and a client-side cart in code.
5. Select a payment provider and a supplier workflow.
6. Add policy pages, deploy, and connect the domain.
