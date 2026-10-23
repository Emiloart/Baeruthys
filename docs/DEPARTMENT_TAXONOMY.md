# Department Taxonomy

Status: implemented as the current navigation and merchandising taxonomy. Catalogue coverage is incomplete.

The taxonomy is the shared information architecture for the homepage, desktop and mobile navigation, department filters, subdepartment links and footer. Its purpose is to help customers recognise the breadth of the store before they assume a product range is unavailable.

## Principles

1. **Parent departments describe broad shopping missions.** Customers should be able to scan the complete department directory quickly.
2. **Subdepartments group products by how customers look for them.** Related goods belong together; food and beverages must not be scattered across unrelated top-level sections.
3. **One parent per category.** Every category in `CATEGORIES` has one `department` slug. Do not create duplicate top-level departments for a subset of another department.
4. **Home & Living is the single home department.** Appliances, kitchen and dining, cleaning and household care, furniture, bedding, storage, lighting and home improvement belong under it.
5. **Navigation is not inventory.** A listed category can exist before products are available. Empty category states must explain this honestly.
6. **Keep slugs stable.** Display names can be refined without changing URLs. Renaming a slug requires a migration plan for links, bookmarks, SEO and existing product records.
7. **Use real imagery, not generic icon grids.** Department heroes use representative imagery; subdepartment carousels use relevant category imagery. Preserve the existing brand palette.

## Current parent departments and subdepartments

The canonical machine-readable definition is in `data/products.js`, exported as `DEPARTMENTS` and `CATEGORIES`. This table documents the current intended structure.

| Parent department | Slug | Current subdepartments |
|---|---|---|
| Food & Groceries | `food-groceries` | Fresh Produce; Meat, Fish & Seafood; Dairy, Eggs & Chilled; Bakery & Desserts; Pantry & Cooking Essentials; Drinks & Beverages; Snacks & Confectionery; Frozen Foods |
| Home & Living | `home-living` | Home Appliances; Kitchen & Dining; Cleaning & Household Care; Furniture & Decor; Bedding & Bath; Storage & Organisation; Lighting; Home Improvement |
| Beauty & Personal Care | `beauty-personal-care` | Personal Care; Skincare & Beauty; Haircare; Fragrance & Grooming |
| Electronics & Technology | `electronics-technology` | Electronics; Phones & Computing; TV & Audio; Technology Accessories |
| Fashion & Accessories | `fashion-accessories` | Clothing; Footwear & Bags; Fashion Accessories |
| Baby & Kids | `baby-kids` | Baby & Kids Essentials; Baby Feeding & Care; Toys & Games |
| Health & Wellness | `health-wellness` | Health & Wellness; First Aid |
| Office, School & Stationery | `office-school` | Office & Stationery; School Supplies |
| Outdoor, Garden & DIY | `outdoor-garden-diy` | Garden & Outdoor; Tools & Hardware |
| Pet Supplies | `pet-supplies` | Pet Supplies |

There are currently 10 parent departments and 37 subdepartments. This is a starting structure, not a claim that all 37 sections have stocked products.

## Navigation and discovery behaviour

- The homepage presents a compact all-departments directory near the top, followed by one hero section per parent department.
- Each department hero links to its parent listing and is paired with a horizontal subdepartment carousel.
- Carousel items link to the relevant category listing.
- The mobile menu expands the full department hierarchy in a grouped format.
- The shop sidebar presents parents and their subdepartments together so users can move between related sections without returning to the homepage.
- The moving promotional banner highlights a selection of departments; it is not a replacement for the complete department directory.
- The footer links to parent departments and the full shop.
- When a department has no products, the shop page should distinguish an unstocked section from a search that returned no matches.

## URL conventions

| Intent | Example |
|---|---|
| All products | `/shop` |
| Parent department | `/shop?department=food-groceries` |
| Subdepartment | `/shop?category=dairy-eggs` |
| Search | `/shop?q=orange%20juice` |

The current application uses query parameters rather than separate SEO-friendly path segments for department and category pages. Keep links consistent with the implemented routing unless a deliberate routing migration is planned.

## Catalogue data contract

### Department record

Each entry in `DEPARTMENTS` currently contains:

- `slug`: stable identifier used in links and filters.
- `name`: customer-facing parent label.
- `description`: concise department positioning.
- `image`: representative remote hero image URL.
- `categories`: list of child category slugs used to define the intended group.

### Category record

Each entry in `CATEGORIES` contains:

- `slug`: stable category identifier.
- `name`: customer-facing subdepartment label.
- `department`: the parent department slug.

### Product record

Product records use the category slug in `category`. Parent membership is derived from the category relationship; avoid duplicating parent names on every product unless a future normalised catalogue model explicitly requires it.

## Change checklist

Before adding or moving a category:

- [ ] Confirm the category belongs to exactly one parent.
- [ ] Add or update the category in `CATEGORIES`.
- [ ] Add its slug to the parent department's `categories` array in `DEPARTMENTS`.
- [ ] Confirm any product records use the intended category slug.
- [ ] Add relevant imagery to the subdepartment carousel map in `components/DepartmentSection.js`.
- [ ] Check homepage, mobile navigation, shop sidebar, category filtering and empty states.
- [ ] Preserve existing slugs or document the redirect/migration needed.
- [ ] Update this document if the customer-visible hierarchy changes.

## Known gaps

- Many of the 37 categories are taxonomy placeholders without demonstration products.
- Category imagery is remote and has not been fully reviewed for accuracy, licensing or long-term availability.
- The catalogue does not yet represent supplier identifiers, SKU-level inventory, price provenance, freshness windows, allergens, substitutions or fulfilment constraints.
- The current model is suitable for a starter storefront, not a complete supermarket product information management system.
