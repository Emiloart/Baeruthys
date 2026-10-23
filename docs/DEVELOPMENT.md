# Development Guide

This guide covers the current repository workflow. It does not imply that build, lint or end-to-end checks have already passed.

## Requirements

- Node.js compatible with the repository's Next.js 14 dependency.
- npm.
- Git and access to the Baeruthys repository.

Use the project's existing dependency versions. Do not upgrade Next.js, React, Tailwind or other foundational packages as part of an unrelated visual change.

## Local setup

```bash
git clone https://github.com/Emiloart/Baeruthys.git
cd Baeruthys
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the local development server. |
| `npm run build` | Compile the production application. |
| `npm start` | Serve the compiled production application. |
| `npm run lint` | Run the configured Next.js lint command. |

Run the production build before describing a change as build-verified. A successful source update or GitHub commit alone is not a build result.

## Working on the catalogue

Before changing `data/products.js`:

1. Read the existing data and lookup helpers.
2. Keep product IDs and slugs unique.
3. Confirm each product's category slug exists in `CATEGORIES`.
4. Confirm each category points to an existing parent department.
5. Keep the department's `categories` array aligned with its category records.
6. Keep product units and pack sizes explicit where relevant.
7. Treat prices, stock, imagery and descriptions as illustrative until verified against real operational data.
8. Test department, category, search and product-detail routes after changing the catalogue.

Read [Department Taxonomy](./DEPARTMENT_TAXONOMY.md) before changing the hierarchy.

## UI and styling rules

- Preserve the current palette in `tailwind.config.js`; do not change the brand colours without an explicit design decision.
- Prefer meaningful labels, relevant photography, strong typography and clear spacing over generic icons, decorative pills or filler UI.
- Use responsive layouts and test both narrow and wide viewports.
- Provide accessible names for controls, visible keyboard focus, semantic headings and useful empty/error states.
- Use descriptive alt text when an image conveys information. Decorative images should use empty alt text.
- Remote images must be reviewed for subject relevance, rights, reliability and loading behaviour before launch.
- Respect reduced-motion preferences for animated UI. Animation should not prevent users from reading or operating controls.

## Department change checklist

When adding or updating a department or subdepartment:

- [ ] Update `DEPARTMENTS` and `CATEGORIES` in `data/products.js`.
- [ ] Keep parent and child slugs consistent.
- [ ] Add a relevant image to `components/DepartmentSection.js` if needed.
- [ ] Confirm parent and category routes in `pages/shop.js`.
- [ ] Confirm the mobile department menu and shop sidebar.
- [ ] Check homepage directory and department carousel behaviour.
- [ ] Check empty states for categories without products.
- [ ] Update `docs/DEPARTMENT_TAXONOMY.md` when the customer-facing hierarchy changes.

## Basket and checkout cautions

The current basket uses browser local storage. It is suitable for the current frontend prototype, not as an order source of truth.

- Never trust a client-submitted price or subtotal.
- Never assume local storage means an order has been placed.
- Do not enable live payments until server-side order creation, inventory validation, payment confirmation and failure/retry handling are implemented and tested.
- Keep payment secrets on the server and out of browser bundles and Git history.
- Payment webhooks must be authenticated and idempotent before they can mutate order state.

## Commit discipline

For work that is being made directly through GitHub, follow the requested incremental workflow:

1. Fetch the current version of the target file.
2. Make one coherent file-level change.
3. Commit that file.
4. Verify the commit result.
5. Only then begin the next file.
6. Update build documentation after the implementation commits.
7. Report what was committed separately from what was tested.

For local work, use small, reviewable commits with specific messages such as `docs: explain department taxonomy` or `fix: handle empty category results`.

## Pull request or release review

Before considering a change ready:

- [ ] `npm run build` succeeds.
- [ ] `npm run lint` succeeds, or any existing toolchain limitation is documented.
- [ ] Department and category URLs resolve as expected.
- [ ] Search, filters, sorting and empty states behave correctly.
- [ ] Basket and wishlist interactions work after reload.
- [ ] Keyboard navigation and screen-reader labels are checked.
- [ ] Mobile and desktop layouts are reviewed.
- [ ] Remote imagery and external links are reviewed.
- [ ] Documentation reflects the actual code.
- [ ] No secrets, unsupported stock claims, fake discounts or live-payment claims were introduced.

## Related documentation

- [Architecture](./ARCHITECTURE.md)
- [Department Taxonomy](./DEPARTMENT_TAXONOMY.md)
- [Launch Readiness](./LAUNCH_READINESS.md)
- [Build Log](./BUILD_LOG.md)
