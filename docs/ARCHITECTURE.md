# Application Architecture

Status: documents the current frontend implementation and separates it from planned production services.

## System overview

Baeruthys is currently a Next.js 14 application using the Pages Router, React 18 and Tailwind CSS 3. Product and department data are stored in local JavaScript modules. The browser holds basket and wishlist state in local storage. The repository does not currently establish a production commerce backend.

```text
Browser
  |
  v
Next.js Pages Router
  |-- Homepage and department discovery
  |-- Shop search, category and department filters
  |-- Static product detail pages
  |-- Basket, wishlist and checkout scaffolding
  |
  +--> data/products.js
  |      |-- DEPARTMENTS
  |      |-- CATEGORIES
  |      +-- PRODUCTS (demonstration catalogue)
  |
  +--> React CartContext
  |      |-- Basket state
  |      +-- Wishlist state
  |
  +--> Browser localStorage
         |-- baeruthys_cart_v1
         +-- baeruthys_wishlist_v1

Not currently connected:
  supplier feeds / authoritative inventory / customer accounts /
  persisted orders / payment provider / delivery orchestration
```

This diagram represents the current source structure, not a deployed infrastructure topology.

## Application layers

### Pages

The `pages/` directory uses the Next.js Pages Router.

- `pages/index.js`: homepage hero, department directory, department sections and merchandising areas.
- `pages/shop.js`: catalogue browsing, search, filters, sorting and parent-department/category filtering.
- `pages/product/[slug].js`: statically generated product detail pages for entries in the current catalogue.
- Basket, wishlist, checkout and policy pages provide the current storefront flows. Their existence does not mean a complete commerce backend is connected.

Product detail paths are generated from the current `PRODUCTS` array. The product page uses `getStaticPaths` with `fallback: false`, so adding a new product requires a new build to generate its static detail page.

### Shared components

- `components/Header.js`: desktop navigation, search controls and grouped mobile department navigation.
- `components/DepartmentSection.js`: reusable department hero and horizontally scrollable subdepartment cards.
- `components/ProductAdMarquee.js`: continuously moving editorial promotion cards.
- `components/ProductCard.js` and `components/ProductImage.js`: catalogue card and product image presentation.
- `components/Footer.js` and `components/Layout.js`: shared site structure and metadata/layout integration.

Keep reusable visual and interaction patterns in components where they have multiple uses or meaningful behaviour. Do not introduce generic icons or decorative pills simply to fill space.

### Catalogue model

`data/products.js` exports:

- `DEPARTMENTS`: parent departments and their intended child category slugs.
- `CATEGORIES`: customer-facing category names and their parent department.
- `PRODUCTS`: demonstration product records.
- Lookup helpers for products, categories, departments, related products and featured products.

A product's `category` is a category slug. Department filtering derives the matching category slugs from `CATEGORIES`. The taxonomy must remain internally consistent: every category's parent must exist, and the department's category list should agree with the category's `department` field.

Product records currently contain display-oriented values such as ID, slug, name, price, category, unit, description and image. They are not yet a supplier-grade product information model.

### Client state

`context/CartContext.js` provides basket and wishlist state to client components. The current implementation:

- loads state from browser local storage after mount;
- writes updates back to local storage;
- limits a line quantity to 20;
- derives item count and subtotal from the local basket;
- stores product display details in basket lines.

This state is browser-local and can be edited by the customer. It is not authoritative for prices, stock, order totals or payments. Any future checkout API must revalidate product identifiers, prices, quantity limits, stock and delivery rules on the server.

## Key flows

### Department discovery

1. Customer sees the all-departments directory on the homepage.
2. Customer selects a parent department or scrolls to its hero section.
3. The hero links to the parent listing; carousel cards link to a subdepartment.
4. The shop page filters products using the department's category set or a specific category slug.
5. If no products match, the UI displays an empty or unstocked state and routes back to broader discovery.

### Product to basket

1. A product is selected from a listing or detail page.
2. The product card or detail page calls the cart context to add a line.
3. The basket displays locally stored line data and computes a client-side subtotal.
4. Before any real order is accepted, server-side validation and persistent order creation must be implemented.

### Search and filtering

Search and filtering currently operate against the in-memory demonstration catalogue. They are not a search service, inventory query or supplier availability lookup. New catalogue scale may require indexed search and server-side filtering.

## Configuration and design system

- Styling is Tailwind CSS 3 with global CSS in `styles/globals.css`.
- The brand palette is defined through Tailwind tokens. See [README.md](../README.md#brand-palette).
- The current store currency is Nigerian naira (NGN).
- Payment enablement is controlled by `PAYMENTS_LIVE` in `lib/site.js` and is currently false.
- Do not add secret keys or privileged supplier credentials to client bundles or committed source.

## Future production boundary

The next architectural evolution should separate trusted commerce state from the presentation layer:

- server-side catalogue and pricing source;
- stock availability and reservation;
- customer identity and access controls;
- validated basket and order persistence;
- payment provider integration with signed, idempotent webhooks;
- delivery coverage, slots, fulfilment and order status;
- operations tooling and auditable catalogue changes;
- privacy-aware logging, monitoring, backups and incident procedures.

Select specific infrastructure only after operational requirements, budget, delivery model and supplier integration needs are known. Do not document proposed services as implemented capabilities.
