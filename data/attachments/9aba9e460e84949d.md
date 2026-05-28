# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/sorting.spec.js >> Product Sorting Tests >> TC_PRODUCT_015 - Sort Products By Price Low To High
- Location: tests/product/sorting.spec.js:48:9

# Error details

```
ReferenceError: ProductPage is not defined
```

# Test source

```ts
  1   | import { expect, test } from '@playwright/test';
  2   | 
  3   | test.describe('Product Sorting Tests', () => {
  4   | 
  5   |     let productPage;
  6   | 
  7   |     test.beforeEach(async ({ page }) => {
  8   | 
> 9   |         const productPage = new ProductPage(page);
      |                             ^ ReferenceError: ProductPage is not defined
  10  | 
  11  |         await page.goto('https://demo.nopcommerce.com/desktops');
  12  |     });
  13  | 
  14  |     test(
  15  |         'TC_PRODUCT_013 - Sort Products By Name A-Z',
  16  |         {
  17  |             annotation: {
  18  |                 type: 'Sorting',
  19  |                 description: 'Verify products can be sorted from A to Z'
  20  |             }
  21  |         },
  22  |         async ({ page }) => {
  23  | 
  24  |             await page.sortProduct('Name: A to Z');
  25  | 
  26  |             await expect(page.locator('#products-orderby'))
  27  |                 .toHaveValue('5');
  28  |         }
  29  |     );
  30  | 
  31  |     test(
  32  |         'TC_PRODUCT_014 - Sort Products By Name Z-A',
  33  |         {
  34  |             annotation: {
  35  |                 type: 'Sorting',
  36  |                 description: 'Verify products can be sorted from Z to A'
  37  |             }
  38  |         },
  39  |         async ({ page }) => {
  40  | 
  41  |             await page.sortProduct('Name: Z to A');
  42  | 
  43  |             await expect(page.locator('#products-orderby'))
  44  |                 .toHaveValue('6');
  45  |         }
  46  |     );
  47  | 
  48  |     test(
  49  |         'TC_PRODUCT_015 - Sort Products By Price Low To High',
  50  |         {
  51  |             annotation: {
  52  |                 type: 'Sorting',
  53  |                 description: 'Verify products can be sorted by low to high price'
  54  |             }
  55  |         },
  56  |         async ({ page }) => {
  57  | 
  58  |             await page.sortProduct('Price: Low to High');
  59  | 
  60  |             await expect(page.locator('#products-orderby'))
  61  |                 .toHaveValue('10');
  62  |         }
  63  |     );
  64  | 
  65  |     test(
  66  |         'TC_PRODUCT_016 - Sort Products By Price High To Low',
  67  |         {
  68  |             annotation: {
  69  |                 type: 'Sorting',
  70  |                 description: 'Verify products can be sorted by high to low price'
  71  |             }
  72  |         },
  73  |         async ({ page }) => {
  74  | 
  75  |             await page.sortProduct('Price: High to Low');
  76  | 
  77  |             await expect(page.locator('#products-orderby'))
  78  |                 .toHaveValue('11');
  79  |         }
  80  |     );
  81  | 
  82  |     test(
  83  |     'TC_PRODUCT_017 - Verify Selected Sorting Option Remains Active',
  84  |     {
  85  |         annotation: {
  86  |             type: 'Sorting',
  87  |             description: 'Verify selected sorting option stays selected after page reload'
  88  |         }
  89  |     },
  90  |     async ({ page }) => {
  91  | 
  92  |         await page.sortProduct('Name: A to Z');
  93  | 
  94  |         await page.reload();
  95  | 
  96  |         await expect(page.locator('#products-orderby'))
  97  |             .toBeVisible();
  98  |     }
  99  | );
  100 | 
  101 | test(
  102 |     'TC_PRODUCT_018 - Verify Product Count After Sorting',
  103 |     {
  104 |         annotation: {
  105 |             type: 'Sorting',
  106 |             description: 'Verify product count remains same after applying sorting'
  107 |         }
  108 |     },
  109 |     async ({ page }) => {
```