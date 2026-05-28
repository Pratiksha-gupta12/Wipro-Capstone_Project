# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/filter.spec.js >> Product Filter Tests >> TC_PRODUCT_022 - Verify Product Page Loads Successfully
- Location: tests/product/filter.spec.js:15:9

# Error details

```
ReferenceError: ProductPage is not defined
```

# Test source

```ts
  1   | 
  2   | import { expect, test } from '@playwright/test';
  3   | 
  4   | test.describe('Product Filter Tests', () => {
  5   | 
  6   |    let productPage;
  7   | 
  8   |     test.beforeEach(async ({ page }) => {
  9   | 
> 10  |         const productPage = new ProductPage(page);
      |                             ^ ReferenceError: ProductPage is not defined
  11  | 
  12  |         await page.goto('https://demo.nopcommerce.com/desktops');
  13  |     });
  14  | 
  15  |     test(
  16  |         'TC_PRODUCT_022 - Verify Product Page Loads Successfully',
  17  |         {
  18  |             annotation: {
  19  |                 type: 'Filter',
  20  |                 description: 'Verify desktops product page loads successfully'
  21  |             }
  22  |         },
  23  |         async ({ page }) => {
  24  | 
  25  |             await expect(page).toHaveURL(/desktops/);
  26  | 
  27  |             await expect(page.locator('.page-title'))
  28  |                 .toContainText('Desktops');
  29  |         }
  30  |     );
  31  | 
  32  |     test(
  33  |         'TC_PRODUCT_023 - Verify Products Are Visible',
  34  |         {
  35  |             annotation: {
  36  |                 type: 'Filter',
  37  |                 description: 'Verify products are visible on desktops page'
  38  |             }
  39  |         },
  40  |         async ({ page }) => {
  41  | 
  42  |             const products = page.locator('.product-item');
  43  | 
  44  |             await expect(products.first())
  45  |                 .toBeVisible();
  46  |         }
  47  |     );
  48  | 
  49  |     test(
  50  |         'TC_PRODUCT_024 - Verify Product Count Is Greater Than Zero',
  51  |         {
  52  |             annotation: {
  53  |                 type: 'Filter',
  54  |                 description: 'Verify products are displayed on the page'
  55  |             }
  56  |         },
  57  |         async ({ page }) => {
  58  | 
  59  |             const products = page.locator('.product-item');
  60  | 
  61  |             const count = await products.count();
  62  | 
  63  |             expect(count).toBeGreaterThan(0);
  64  |         }
  65  |     );
  66  | 
  67  |     test(
  68  |         'TC_PRODUCT_025 - Verify Product Titles Are Visible',
  69  |         {
  70  |             annotation: {
  71  |                 type: 'Filter',
  72  |                 description: 'Verify product titles are displayed properly'
  73  |             }
  74  |         },
  75  |         async ({ page }) => {
  76  | 
  77  |             const titles = page.locator('.product-title');
  78  | 
  79  |             await expect(titles.first())
  80  |                 .toBeVisible();
  81  |         }
  82  |     );
  83  | 
  84  |     test(
  85  |         'TC_PRODUCT_026 - Verify Add To Cart Button Is Visible',
  86  |         {
  87  |             annotation: {
  88  |                 type: 'Filter',
  89  |                 description: 'Verify Add To Cart button is visible for products'
  90  |             }
  91  |         },
  92  |         async ({ page }) => {
  93  | 
  94  |             const addToCartBtn = page.locator('.product-box-add-to-cart-button');
  95  | 
  96  |             await expect(addToCartBtn.first())
  97  |                 .toBeVisible();
  98  |         }
  99  |     );
  100 | 
  101 | });
```