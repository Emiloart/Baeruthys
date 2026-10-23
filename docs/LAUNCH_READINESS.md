# Launch Readiness Checklist

Status: **not launch-ready based on the currently documented repository state**. This is a checklist and gap register, not evidence that the listed checks have passed.

Use this document to track readiness as the prototype becomes a real commerce operation. Mark an item complete only when there is observable evidence, an owner and a date.

## 1. Application build and quality

- [ ] Install dependencies from the committed lockfile, if present.
- [ ] Run `npm run build` and retain the result.
- [ ] Run `npm run lint`; fix failures or document pre-existing toolchain constraints.
- [ ] Test all pages on mobile, tablet and desktop viewports.
- [ ] Test keyboard-only navigation, focus visibility, semantic headings, form labels and accessible announcements.
- [ ] Check image loading, layout shifts, broken external links and reduced-motion behaviour.
- [ ] Confirm page titles, descriptions, canonical URLs, social metadata and sitemap/robots behaviour.
- [ ] Review runtime errors, console warnings and deployment logs.

**Current evidence:** source changes and documentation are committed to GitHub. A local production build and complete browser QA have not been confirmed in this session.

## 2. Catalogue correctness

- [ ] Replace demonstration products with approved products and real supplier data.
- [ ] Assign stable product IDs, SKU/GTIN where available, and stable slugs.
- [ ] Verify names, descriptions, variants, pack sizes, units, images and price.
- [ ] Define how price updates are sourced, timestamped and audited.
- [ ] Define stock availability, stock freshness and out-of-stock behaviour.
- [ ] Define substitutes and customer approval rules.
- [ ] Add perishable handling requirements and delivery constraints.
- [ ] Add allergen and food-safety information where applicable.
- [ ] Verify image licensing and ensure each image accurately represents the product.
- [ ] Confirm each visible department and subdepartment has a clear state: stocked, coming soon, or intentionally unavailable.

**Current evidence:** the catalogue is demonstration data; many categories are taxonomy placeholders without products.

## 3. Pricing and basket integrity

- [ ] Recalculate prices, discounts, delivery fees and totals on the server.
- [ ] Validate product availability and quantity limits when the basket is checked out.
- [ ] Define how price changes between adding to basket and checkout are handled.
- [ ] Define unit-price comparison where comparable measures are available.
- [ ] Ensure promotional prices have a real start/end time and approved terms.
- [ ] Test empty basket, unavailable items, invalid quantities and stale product data.
- [ ] Make order submission idempotent so retries do not create duplicate orders.

**Current evidence:** the basket and subtotal are calculated client-side and persisted in local storage. They are not authoritative order records.

## 4. Customer accounts and privacy

- [ ] Decide whether accounts are required for checkout, order history or repeat shopping.
- [ ] Implement secure authentication and session management if accounts are introduced.
- [ ] Define data minimisation, retention, deletion and access processes.
- [ ] Publish an accurate privacy notice and cookie/analytics disclosures as required.
- [ ] Ensure personal information is not placed in URLs, client logs or unnecessary analytics events.
- [ ] Restrict operational access by role and audit privileged actions.
- [ ] Define backups, recovery objectives and incident response.

**Current evidence:** the current documented basket and wishlist are browser-local. Server-backed customer accounts are not established by the current frontend.

## 5. Payments and order management

- [ ] Select a supported payment provider and confirm commercial eligibility.
- [ ] Keep provider secrets in server-side secret storage.
- [ ] Implement server-side order creation and immutable order references.
- [ ] Validate signed payment webhooks and handle duplicate, delayed and out-of-order events.
- [ ] Model pending, paid, failed, cancelled, refunded and disputed states.
- [ ] Reconcile provider transactions with internal orders.
- [ ] Implement refunds, cancellations and payment-failure recovery.
- [ ] Test sandbox success, failure, timeout, retry and duplicate-event cases.
- [ ] Obtain a documented go-live approval before enabling live payments.

**Current evidence:** `PAYMENTS_LIVE` is documented as `false` in `lib/site.js`. Do not represent payment processing as live until the full flow has been implemented and tested.

## 6. Fulfilment and customer support

- [ ] Define delivery regions and serviceability checks.
- [ ] Confirm delivery fees, thresholds, cut-off times and slot capacity.
- [ ] Implement order picking, substitutions, packing and dispatch workflows.
- [ ] Define handling for missing, damaged, late and temperature-sensitive products.
- [ ] Define cancellation, return, refund and complaint procedures.
- [ ] Publish accurate shipping, returns, terms and contact information.
- [ ] Establish customer support ownership and response expectations.
- [ ] Test the full order journey from placement through delivery and exception resolution.

**Current evidence:** delivery messaging and checkout scaffolding do not establish that a fulfilment operation is connected.

## 7. Security and reliability

- [ ] Review dependencies and patch known vulnerabilities.
- [ ] Validate all untrusted input on the server.
- [ ] Apply rate limiting and abuse protection to account, search, checkout and payment endpoints as appropriate.
- [ ] Use secure transport and appropriate security headers.
- [ ] Protect secrets and rotate any credential exposed in history.
- [ ] Establish error monitoring without logging sensitive payment or personal data.
- [ ] Define backup, restore and rollback procedures.
- [ ] Test availability, failure modes and recovery.
- [ ] Review third-party scripts, remote images and data processors.

## 8. Analytics and merchandising

- [ ] Define useful funnel events: department view, category view, search, product view, add to basket, checkout start and completed order.
- [ ] Collect only necessary analytics and obtain consent where required.
- [ ] Measure zero-result searches and empty department visits to identify catalogue gaps.
- [ ] Measure whether users discover non-food departments, not only groceries.
- [ ] Review search terms and category naming with real users.
- [ ] Do not describe demo events or sample prices as real commercial performance.

## 9. Go-live decision

Do not enable live payments or market the storefront as fully operational until the critical areas above have named owners and verifiable completion evidence.

A release record should include:

| Field | Required evidence |
|---|---|
| Release commit | Exact commit SHA |
| Build | Successful production build output |
| QA | Device/browser matrix and known defects |
| Catalogue | Approved products, prices and stock source |
| Payments | Provider approval and end-to-end test results |
| Fulfilment | Confirmed service area, capacity and procedures |
| Policies | Reviewed and published customer terms |
| Monitoring | Alert owner and incident escalation path |
| Approval | Named release decision-maker and date |

## Related documents

- [Architecture](./ARCHITECTURE.md)
- [Development Guide](./DEVELOPMENT.md)
- [Department Taxonomy](./DEPARTMENT_TAXONOMY.md)
- [Build Log](./BUILD_LOG.md)
