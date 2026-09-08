# Dane Reviews --- Simple Landing Page Specification

**Document:** Product & Technical Specification\
**Version:** 3.0 --- Simple Landing Page\
**Status:** Final MVP Specification\
**Project:** Dane Reviews\
**Primary goal:** A simple personal bio/affiliate landing page\
**Deployment:** Vercel\
**Frontend:** Next.js + React + TypeScript

------------------------------------------------------------------------

# 1. Executive Summary

Dane Reviews is a **simple personal landing page**, not an e-commerce
platform and not a SaaS product.

The page has one primary purpose:

> Show the Dane Reviews profile and a list of recommended products. When
> a visitor clicks a product, send them to the corresponding Shopee or
> TikTok Shop affiliate link.

The system should be deliberately small and easy to maintain.

The first version should **not** introduce a separate backend, database,
authentication system, analytics system, or complicated admin dashboard.

Recommended architecture:

``` text
GitHub Repository
       |
       | push / update
       v
     Vercel
       |
       v
 Next.js Landing Page
       |
       +------------------+
       |                  |
    Profile           Products
       |                  |
     JSON               JSON
       |                  |
       +--------+---------+
                |
              Images
                |
             /public
```

The owner can update the landing page by editing a small data file and
replacing product images in the repository.

------------------------------------------------------------------------

# 2. Product Goal

## 2.1 Main goal

Create a single public URL that can be placed in:

-   Instagram bio
-   Facebook profile
-   TikTok profile
-   Personal social media
-   Other social/contact pages

Example:

``` text
https://dane-reviews.vercel.app
```

The page should immediately communicate:

1.  Who Dane Reviews is
2.  How to contact/follow Dane Reviews
3.  What products are recommended
4.  Where to click to view/buy a product

------------------------------------------------------------------------

# 3. Scope

## 3.1 MVP includes

### Landing page

-   Avatar
-   Display name
-   Short bio
-   Social/contact links
-   Product section
-   Product grid
-   Product image
-   Product code
-   Product name
-   Affiliate link
-   Responsive mobile-first design
-   2-column product layout on phones
-   3-column layout on wider screens

### Content management

Products are stored in a simple data file.

The owner can:

-   Add a product
-   Remove a product
-   Change product name
-   Change product code
-   Change affiliate URL
-   Change product image
-   Change product order
-   Hide a product

### Deployment

-   GitHub repository
-   Vercel deployment
-   Automatic deployment after changes are pushed

------------------------------------------------------------------------

# 4. Explicitly Out of Scope

The following should **not** be implemented in the MVP:

-   FastAPI
-   Separate backend server
-   PostgreSQL
-   Supabase
-   MongoDB
-   JWT authentication
-   Admin dashboard
-   User accounts
-   Product database
-   Shopping cart
-   Checkout
-   Payment
-   Product inventory
-   Customer reviews
-   Product search
-   Product filtering
-   Complex analytics
-   Click database
-   Microservices
-   Docker
-   Redis
-   S3
-   Cloudflare R2

The project should remain a static/simple web application.

------------------------------------------------------------------------

# 5. Design Direction

The current Dane Reviews visual style should be preserved.

Reference characteristics:

-   Warm off-white background
-   Dark olive/green typography
-   Centered personal profile
-   Large circular avatar
-   Minimal social icons
-   Clean editorial feeling
-   Product images as the primary visual element
-   No unnecessary buttons
-   No complex navigation
-   No large hero banners
-   No e-commerce-style header

The result should feel like:

> A personal recommendation page, not an online store.

------------------------------------------------------------------------

# 6. Landing Page UI

## 6.1 Overall layout

``` text
+---------------------------------------+
|                                       |
|                 AVATAR                |
|                                       |
|              Dane Reviews             |
|                                       |
|        Short bio / description        |
|                                       |
|       Instagram    Facebook           |
|                                       |
|                                       |
|              SẢN PHẨM                 |
|                                       |
|   +-------------+  +-------------+   |
|   |             |  |             |   |
|   |    IMAGE    |  |    IMAGE    |   |
|   |             |  |             |   |
|   |-------------|  |-------------|   |
|   | TD1         |  | TD2         |   |
|   | Product A   |  | Product B   |   |
|   +-------------+  +-------------+   |
|                                       |
|   +-------------+  +-------------+   |
|   |    IMAGE    |  |    IMAGE    |   |
|   |             |  |             |   |
|   |-------------|  |-------------|   |
|   | TD3         |  | TD4         |   |
|   | Product C   |  | Product D   |   |
|   +-------------+  +-------------+   |
|                                       |
|             Dane Reviews              |
|                                       |
+---------------------------------------+
```

------------------------------------------------------------------------

# 7. Profile Header

The top of the page contains the personal identity.

``` text
             ( AVATAR )

            Dane Reviews

      Những sản phẩm mình đề xuất

       Instagram    Facebook
```

## Required

-   Avatar
-   Display name

## Optional

-   Bio
-   Instagram
-   Facebook
-   TikTok
-   Email/contact

If a social link is empty, do not render its icon.

------------------------------------------------------------------------

# 8. Avatar

The avatar should be:

``` text
Shape: circle
Position: centered
```

Recommended:

``` text
Mobile:
100px – 120px

Desktop:
120px – 140px
```

The image should use:

``` css
object-fit: cover;
border-radius: 9999px;
```

------------------------------------------------------------------------

# 9. Social Links

Social links are intentionally minimal.

Example:

``` text
     Instagram    Facebook    TikTok
```

Use icon-only links if the visual design remains understandable.

Recommended behavior:

-   Open external links in a new tab
-   Add `rel="noopener noreferrer"`
-   Show only configured links

Example data:

``` json
{
  "instagram": "https://instagram.com/...",
  "facebook": "https://facebook.com/...",
  "tiktok": "https://www.tiktok.com/@..."
}
```

------------------------------------------------------------------------

# 10. Product Section

Section title:

``` text
Sản phẩm
```

The product section is the main content of the page.

Products should be displayed as a **grid**, not as large vertical list
cards.

------------------------------------------------------------------------

# 11. Product Grid

## 11.1 Mobile

Default:

``` text
2 columns
```

Example:

``` text
+-------------------------------+
|                               |
| +-----------+ +-----------+   |
| |           | |           |   |
| |   IMAGE   | |   IMAGE   |   |
| |           | |           |   |
| +-----------+ +-----------+   |
| | TD1       | | TD2       |   |
| | Product A | | Product B |   |
| +-----------+ +-----------+   |
|                               |
| +-----------+ +-----------+   |
| |   IMAGE   | |   IMAGE   |   |
| +-----------+ +-----------+   |
| | TD3       | | TD4       |   |
| | Product C | | Product D |   |
| +-----------+ +-----------+   |
|                               |
+-------------------------------+
```

## 11.2 Wider screens

Use 3 columns when there is enough width.

``` text
+---------------------------------------+
|                                       |
| +---------+ +---------+ +---------+   |
| | IMAGE   | | IMAGE   | | IMAGE   |   |
| +---------+ +---------+ +---------+   |
| | TD1     | | TD2     | | TD3     |   |
| | Name    | | Name    | | Name    |   |
| +---------+ +---------+ +---------+   |
|                                       |
+---------------------------------------+
```

Recommended CSS:

``` css
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

@media (min-width: 640px) {
  .product-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

------------------------------------------------------------------------

# 12. Product Card

Each card contains only the information necessary for a visitor.

``` text
+---------------------+
|                     |
|       IMAGE         |
|                     |
+---------------------+
| TD1                 |
| Quần cống ống rộng  |
+---------------------+
```

## Required

-   Image
-   Code
-   Name
-   Affiliate URL

## Not required

-   Price
-   Discount
-   Rating
-   Description
-   Shop name
-   Review count
-   Add to cart
-   Buy button

Keeping the card simple is intentional.

------------------------------------------------------------------------

# 13. Product Image

Images should be approximately square.

Recommended:

``` text
aspect-ratio: 1 / 1
width: 100%
object-fit: cover
border-radius: 12px
```

For product images that already contain white backgrounds,
`object-fit: contain` can be used.

------------------------------------------------------------------------

# 14. Product Text

Recommended hierarchy:

``` text
TD1
Quần cống ống rộng
```

Code:

``` text
11–12px
```

Name:

``` text
13–15px
```

Product names should be limited to approximately 2 lines.

Example:

``` css
.product-name {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

------------------------------------------------------------------------

# 15. Product Interaction

The whole card is clickable.

``` text
Visitor
   |
   v
Tap product card
   |
   v
Affiliate URL
   |
   +----> Shopee
   |
   +----> TikTok Shop
```

The MVP does not need a separate `/go/{code}` redirect service.

The product can simply use its configured URL:

``` tsx
<a href={product.url}>
```

If click tracking is needed later, a redirect layer can be introduced in
V2.

------------------------------------------------------------------------

# 16. Product Data Model

The MVP does not require a database.

Use a local JSON file.

Recommended:

``` text
data/
└── products.json
```

Example:

``` json
[
  {
    "code": "TD1",
    "name": "Quần cống ống rộng",
    "image": "/products/TD1.jpg",
    "url": "https://s.shopee.vn/xxxxx"
  },
  {
    "code": "TD2",
    "name": "Áo sơ mi ABC",
    "image": "/products/TD2.jpg",
    "url": "https://vt.tiktok.com/xxxxx"
  }
]
```

------------------------------------------------------------------------

# 17. Product Fields

  Field      Required   Description
  ---------- ---------- ----------------------------------
  `code`     Yes        Product identifier such as TD1
  `name`     Yes        Display name
  `image`    Yes        Product image path
  `url`      Yes        Affiliate URL
  `active`   No         Whether the product is displayed

A slightly more complete version:

``` json
{
  "code": "TD1",
  "name": "Quần cống ống rộng",
  "image": "/products/TD1.jpg",
  "url": "https://s.shopee.vn/xxxxx",
  "active": true
}
```

------------------------------------------------------------------------

# 18. Product Ordering

The simplest ordering mechanism is the order of objects inside
`products.json`.

Example:

``` json
[
  {
    "code": "TD1",
    "name": "Product 1",
    "image": "/products/TD1.jpg",
    "url": "https://..."
  },
  {
    "code": "TD2",
    "name": "Product 2",
    "image": "/products/TD2.jpg",
    "url": "https://..."
  },
  {
    "code": "TD3",
    "name": "Product 3",
    "image": "/products/TD3.jpg",
    "url": "https://..."
  }
]
```

The page displays:

``` text
TD1
TD2
TD3
```

If TD3 should be first, move it to the top of the JSON array.

No `sort_order` database field is necessary.

------------------------------------------------------------------------

# 19. Hiding Products

An optional `active` property can be used.

``` json
{
  "code": "TD1",
  "name": "Quần cống ống rộng",
  "image": "/products/TD1.jpg",
  "url": "https://...",
  "active": false
}
```

The frontend filters:

``` tsx
products.filter(product => product.active !== false)
```

Therefore:

``` text
active: true
    -> show

active: false
    -> hide
```

This is simpler than deleting the product when it may be needed again
later.

------------------------------------------------------------------------

# 20. Profile Data

Use another JSON file:

``` text
data/
└── profile.json
```

Example:

``` json
{
  "name": "Dane Reviews",
  "bio": "Những sản phẩm mình đề xuất",
  "avatar": "/avatar.jpg",
  "socials": {
    "instagram": "https://instagram.com/...",
    "facebook": "https://facebook.com/...",
    "tiktok": "https://www.tiktok.com/@..."
  }
}
```

------------------------------------------------------------------------

# 21. Recommended Repository Structure

``` text
dane-reviews/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── ProfileHeader.tsx
│   ├── SocialLinks.tsx
│   ├── ProductGrid.tsx
│   ├── ProductCard.tsx
│   └── Footer.tsx
│
├── data/
│   ├── profile.json
│   └── products.json
│
├── public/
│   ├── avatar.jpg
│   └── products/
│       ├── TD1.jpg
│       ├── TD2.jpg
│       ├── TD3.jpg
│       └── ...
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

This is the complete MVP structure.

------------------------------------------------------------------------

# 22. Next.js Page

The public page should load the JSON data directly.

Example:

``` tsx
import profile from "@/data/profile.json";
import products from "@/data/products.json";

export default function HomePage() {
  const activeProducts = products.filter(
    (product) => product.active !== false
  );

  return (
    <main>
      <ProfileHeader profile={profile} />

      <SocialLinks socials={profile.socials} />

      <section>
        <h2>Sản phẩm</h2>

        <ProductGrid products={activeProducts} />
      </section>

      <Footer />
    </main>
  );
}
```

No API request is required.

------------------------------------------------------------------------

# 23. ProductCard Component

``` tsx
type Product = {
  code: string;
  name: string;
  image: string;
  url: string;
  active?: boolean;
};

export default function ProductCard({
  product
}: {
  product: Product;
}) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="product-card"
    >
      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-info">
        <span className="product-code">
          {product.code}
        </span>

        <span className="product-name">
          {product.name}
        </span>
      </div>
    </a>
  );
}
```

------------------------------------------------------------------------

# 24. ProductGrid Component

``` tsx
export default function ProductGrid({
  products
}: {
  products: Product[];
}) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.code}
          product={product}
        />
      ))}
    </div>
  );
}
```

------------------------------------------------------------------------

# 25. Styling

Recommended base:

``` css
:root {
  --background: #f3f0eb;
  --foreground: #50572d;
  --secondary: #6f7257;
  --card: rgba(255, 255, 255, 0.55);
  --border: #e6e2db;
}
```

Page:

``` css
body {
  margin: 0;
  background: var(--background);
  color: var(--foreground);
}
```

Container:

``` css
.container {
  width: min(100% - 32px, 720px);
  margin-inline: auto;
}
```

Mobile:

``` css
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
```

Wider screen:

``` css
@media (min-width: 640px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

------------------------------------------------------------------------

# 26. Page Width

The page should not become a full-width desktop website.

Recommended:

``` text
Mobile:
100% - 32px

Desktop:
max-width: 720px
```

This preserves the Bio Link appearance.

------------------------------------------------------------------------

# 27. Color Palette

Based on the current Dane Reviews design direction.

``` text
Background
#F3F0EB

Primary text
#50572D

Secondary text
#6F7257

Card
rgba(255,255,255,0.55)

Border
#E6E2DB
```

The colors should be centralized so they can easily be changed later.

------------------------------------------------------------------------

# 28. Typography

Recommended:

``` text
Primary UI:
DM Sans

Brand / heading:
Playfair Display
```

Suggested sizes:

``` text
Display name: 24–28px
Section title: 18–20px
Product name: 13–15px
Product code: 11–12px
Bio: 13–14px
Footer: 11–12px
```

Typography should prioritize readability on small screens.

------------------------------------------------------------------------

# 29. Responsive Behavior

## 360--519px

``` text
2 product columns
```

## 520--639px

``` text
2 product columns
```

## 640px+

``` text
3 product columns
```

## Desktop

The entire landing page remains centered.

``` text
max-width: 720px
```

The layout should not transform into a conventional desktop e-commerce
grid.

------------------------------------------------------------------------

# 30. Content Management --- Recommended MVP Method

The primary recommendation is:

> Manage content through `profile.json` and `products.json`.

This is the simplest possible solution while still allowing the page to
be updated without changing React components.

The owner does not modify:

``` text
page.tsx
ProductCard.tsx
ProductGrid.tsx
CSS
```

The owner only modifies:

``` text
data/profile.json
data/products.json
```

and product images.

------------------------------------------------------------------------

# 31. How to Add a Product

Suppose a new product is:

``` text
TD10
Áo khoác ABC
```

Step 1:

Put image here:

``` text
public/products/TD10.jpg
```

Step 2:

Open:

``` text
data/products.json
```

Step 3:

Add:

``` json
{
  "code": "TD10",
  "name": "Áo khoác ABC",
  "image": "/products/TD10.jpg",
  "url": "https://..."
}
```

Step 4:

Save.

Step 5:

Commit and push to GitHub.

Vercel automatically redeploys the page.

------------------------------------------------------------------------

# 32. How to Remove a Product

Option A --- hide it:

``` json
{
  "code": "TD10",
  "name": "Áo khoác ABC",
  "image": "/products/TD10.jpg",
  "url": "https://...",
  "active": false
}
```

Option B --- permanently remove it from `products.json`.

For normal usage, **hide first** is recommended.

------------------------------------------------------------------------

# 33. How to Change an Affiliate Link

Find:

``` json
{
  "code": "TD10",
  "name": "Áo khoác ABC",
  "image": "/products/TD10.jpg",
  "url": "https://old-link..."
}
```

Change:

``` json
"url": "https://new-affiliate-link..."
```

Push to GitHub.

Vercel redeploys automatically.

------------------------------------------------------------------------

# 34. How to Change Product Image

Replace:

``` text
public/products/TD10.jpg
```

with the new image.

Keep the same filename.

No JSON modification is required.

Alternatively, use a new filename:

``` text
public/products/TD10-v2.jpg
```

and update:

``` json
"image": "/products/TD10-v2.jpg"
```

------------------------------------------------------------------------

# 35. How to Change Profile

Edit:

``` text
data/profile.json
```

Example:

``` json
{
  "name": "Dane Reviews",
  "bio": "Những sản phẩm mình đề xuất",
  "avatar": "/avatar.jpg",
  "socials": {
    "instagram": "https://instagram.com/...",
    "facebook": "https://facebook.com/...",
    "tiktok": "https://www.tiktok.com/@..."
  }
}
```

Replace:

-   Name
-   Bio
-   Avatar
-   Social links

Then push to GitHub.

------------------------------------------------------------------------

# 36. Updating Through GitHub Web UI

The owner does not necessarily need to run the project locally.

GitHub's web interface can be used to edit:

``` text
data/profile.json
data/products.json
```

Workflow:

``` text
GitHub
   |
   +--> Open products.json
   |
   +--> Edit
   |
   +--> Commit changes
   |
   v
Vercel
   |
   +--> Automatic deployment
   |
   v
Live Landing Page
```

This is sufficient for the MVP.

------------------------------------------------------------------------

# 37. Images Through GitHub

For a small number of products, images can simply live in:

``` text
public/products/
```

Example:

``` text
public/products/
├── TD1.jpg
├── TD2.jpg
├── TD3.jpg
├── TD4.jpg
└── TD5.jpg
```

This avoids introducing a separate image storage service.

For a small personal landing page, this is intentionally simple.

------------------------------------------------------------------------

# 38. Optional Future Content Management Method

If editing JSON through GitHub becomes inconvenient, a lightweight
content-management method can be added later.

Possible V2:

``` text
Google Sheets
      |
      v
Next.js
      |
      v
Vercel
```

Spreadsheet:

  Code   Name                 Image URL   Affiliate URL   Active
  ------ -------------------- ----------- --------------- --------
  TD1    Quần cống ống rộng   ...         ...             TRUE
  TD2    Áo sơ mi ABC         ...         ...             TRUE

However, **Google Sheets should not be added to the MVP unless editing
through GitHub is genuinely inconvenient**.

Adding Google Sheets introduces:

-   API integration
-   Public/private sheet configuration
-   Data validation
-   Image hosting considerations
-   Runtime fetching
-   Potential caching issues

The JSON approach is simpler and more reliable for the initial version.

------------------------------------------------------------------------

# 39. Optional Future Admin Page

A full admin dashboard is not part of the MVP.

If later needed, build only a very small content editor:

``` text
/admin

+-----------------------------+
| Dane Reviews                |
+-----------------------------+
|                             |
| Profile                     |
|                             |
| Name: [ Dane Reviews     ]  |
| Bio:  [ ...              ]  |
|                             |
| Products                    |
|                             |
| TD1 | Product A | Edit      |
| TD2 | Product B | Edit      |
| TD3 | Product C | Delete    |
|                             |
| [+ Add Product]             |
+-----------------------------+
```

But this should only be introduced when manual GitHub editing becomes a
real problem.

------------------------------------------------------------------------

# 40. Deployment on Vercel

## Repository

Use GitHub:

``` text
github.com/<username>/dane-reviews
```

## Vercel

Connect the GitHub repository to Vercel.

Vercel detects Next.js automatically.

Deployment flow:

``` text
Developer / Owner
        |
        v
      GitHub
        |
        v
      Vercel
        |
        v
 Production
```

Every push to the production branch can trigger a deployment.

------------------------------------------------------------------------

# 41. Vercel URL

Initial free URL:

``` text
https://dane-reviews.vercel.app
```

This URL can be placed directly in social media profiles.

Later:

``` text
https://danereviews.com
```

can be connected as a custom domain.

No application architecture needs to change.

------------------------------------------------------------------------

# 42. No Backend Requirement

The MVP does not need a backend.

The data is compiled into the Next.js application:

``` text
products.json
     |
     v
Next.js build
     |
     v
Static/SSR page
     |
     v
Vercel CDN
```

This has several advantages:

-   Very low complexity
-   Fast page load
-   No database cost
-   No API server
-   No authentication implementation
-   No backend maintenance
-   Very easy deployment

------------------------------------------------------------------------

# 43. SEO

The page should have basic metadata.

``` text
Title:
Dane Reviews

Description:
Dane Reviews — những sản phẩm mình đề xuất.
```

Open Graph:

``` text
og:title
og:description
og:image
```

This is enough for the MVP.

------------------------------------------------------------------------

# 44. Performance Requirements

The page should be lightweight.

Requirements:

-   Optimize product images
-   Use lazy loading for products below the fold
-   Avoid large JavaScript libraries
-   Avoid unnecessary animations
-   Avoid autoplay video
-   Keep the first screen lightweight
-   Use Next.js image optimization where appropriate

Target:

``` text
Fast load on mobile 4G
Fast interaction
Minimal JavaScript
```

------------------------------------------------------------------------

# 45. Accessibility

Minimum requirements:

-   Images have meaningful `alt` text
-   Links have clear accessible names
-   Sufficient text contrast
-   Clickable cards have keyboard focus
-   Social icons have accessible labels
-   Do not rely only on color to communicate state

Example:

``` tsx
<a
  href={profile.socials.instagram}
  aria-label="Instagram"
>
  ...
</a>
```

------------------------------------------------------------------------

# 46. Affiliate Disclosure

The page should contain a small disclosure near the footer.

Example:

``` text
Một số liên kết trên trang có thể là liên kết affiliate.
```

Keep it visually subtle but readable.

------------------------------------------------------------------------

# 47. Error Handling

Because the application is static, error handling is minimal.

## Missing product image

Use a fallback or neutral placeholder.

## Invalid affiliate URL

This should be caught during content editing/review.

## Invalid JSON

The build should fail rather than silently publish broken content.

A TypeScript type or validation step can be added to ensure the JSON
structure is correct.

------------------------------------------------------------------------

# 48. Type Definition

Use a simple shared type:

``` ts
export type Product = {
  code: string;
  name: string;
  image: string;
  url: string;
  active?: boolean;
};

export type Profile = {
  name: string;
  bio?: string;
  avatar: string;
  socials?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    email?: string;
  };
};
```

------------------------------------------------------------------------

# 49. Optional Validation

A lightweight validation library such as Zod may be used if desired.

Example:

``` ts
const productSchema = z.object({
  code: z.string().min(1),
  name: z.string().min(1),
  image: z.string().min(1),
  url: z.string().url(),
  active: z.boolean().optional()
});
```

This is optional.

For a very small project, TypeScript types plus careful data entry may
be sufficient.

------------------------------------------------------------------------

# 50. Git Workflow

Recommended:

``` text
main
 |
 +--> production
```

For small changes:

``` text
Edit
  |
  v
Commit
  |
  v
Push
  |
  v
Vercel
  |
  v
Production
```

For larger development:

``` text
feature/*
     |
     v
Pull Request
     |
     v
main
     |
     v
Vercel
```

------------------------------------------------------------------------

# 51. Development Workflow

Initial setup:

``` bash
npx create-next-app@latest dane-reviews
cd dane-reviews
npm run dev
```

Local URL:

``` text
http://localhost:3000
```

Production build:

``` bash
npm run build
```

Run production build locally:

``` bash
npm run start
```

------------------------------------------------------------------------

# 52. Final File Structure

The final MVP should ideally remain approximately this size:

``` text
dane-reviews/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── ProfileHeader.tsx
│   ├── SocialLinks.tsx
│   ├── ProductGrid.tsx
│   ├── ProductCard.tsx
│   └── Footer.tsx
│
├── data/
│   ├── profile.json
│   └── products.json
│
├── public/
│   ├── avatar.jpg
│   └── products/
│       ├── TD1.jpg
│       ├── TD2.jpg
│       └── ...
│
├── types/
│   └── index.ts
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

No backend folder is required.

------------------------------------------------------------------------

# 53. MVP Acceptance Criteria

The implementation is considered complete when all of the following are
true.

## Public page

-   [ ] Vercel URL opens successfully
-   [ ] Avatar is displayed
-   [ ] Dane Reviews name is displayed
-   [ ] Bio is displayed if configured
-   [ ] Social links work
-   [ ] Products are displayed
-   [ ] Products use a 2-column mobile grid
-   [ ] Products use a 3-column wider layout
-   [ ] Product images display correctly
-   [ ] Product code displays correctly
-   [ ] Product name displays correctly
-   [ ] Clicking a product opens its affiliate URL
-   [ ] Page works on mobile
-   [ ] Page works on desktop
-   [ ] Basic SEO metadata exists

## Content management

-   [ ] Profile can be changed through `profile.json`
-   [ ] Products can be added through `products.json`
-   [ ] Products can be removed
-   [ ] Products can be hidden using `active: false`
-   [ ] Product URLs can be changed
-   [ ] Product images can be replaced
-   [ ] Product order can be changed
-   [ ] Vercel automatically deploys changes after Git push

------------------------------------------------------------------------

# 54. Recommended Implementation Priority

## Phase 1 --- Project setup

``` text
1. Create Next.js project
2. Create GitHub repository
3. Connect repository to Vercel
```

## Phase 2 --- Design

``` text
1. Build page background
2. Build profile header
3. Build social links
4. Build product grid
5. Build product card
6. Build footer
```

## Phase 3 --- Content

``` text
1. Create profile.json
2. Create products.json
3. Add avatar
4. Add product images
5. Add affiliate links
```

## Phase 4 --- Responsive

``` text
1. Mobile 2-column grid
2. Wider screen 3-column grid
3. Desktop centered layout
```

## Phase 5 --- Production

``` text
1. SEO
2. Image optimization
3. Test affiliate links
4. Test mobile
5. Deploy to Vercel
```

------------------------------------------------------------------------

# 55. Final Architecture

``` text
                         USER
                           |
                           v
              +------------------------+
              |        Vercel          |
              |                        |
              |       Next.js          |
              |                        |
              |  Dane Reviews Page     |
              +-----------+------------+
                          |
             +------------+-------------+
             |                          |
             v                          v
        profile.json              products.json
             |                          |
             v                          v
          Profile                   Products
             |                          |
             +------------+-------------+
                          |
                          v
                    Product Images
                          |
                          v
                     /public/images


Product click
     |
     v
Affiliate URL
     |
     +----> Shopee
     |
     +----> TikTok Shop
```

------------------------------------------------------------------------

# 56. Final Recommendation

For Dane Reviews, the correct MVP is **not** a backend system.

It is a small Next.js website deployed on Vercel:

``` text
Next.js
+
JSON data
+
Local product images
+
GitHub
+
Vercel
```

The owner manages the content by changing only:

``` text
data/profile.json
data/products.json
public/products/*
```

This gives the project the smallest possible architecture while still
allowing products and profile information to be updated easily.

## Product management principle

``` text
Need to add product?
        |
        v
Add one object to products.json
+
Add product image
        |
        v
Git push
        |
        v
Vercel deploy
        |
        v
Product appears online
```

## Important architectural rule

Do not build an Admin Dashboard, database, FastAPI backend,
authentication, or analytics system until the simple landing page has
become difficult to maintain.

If the number of products later grows enough that editing JSON through
GitHub becomes inconvenient, introduce a lightweight CMS or Google
Sheets integration at that time.

This keeps the initial project:

**simple → cheap → fast → easy to deploy → easy to maintain.**
