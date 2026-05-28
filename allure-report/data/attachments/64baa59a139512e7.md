# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/sorting.spec.js >> Product Sorting Tests >> TC_PRODUCT_017 - Verify Selected Sorting Option Remains Active
- Location: tests/product/sorting.spec.js:83:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#products-orderby')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#products-orderby')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Verifying you are human. This may take a few seconds." [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a024db065d1aa6d4
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { ProductPage } from '../../pages/ProductPage';
  3   | 
  4   | test.describe('Product Sorting Tests', () => {
  5   | 
  6   |     let productPage;
  7   | 
  8   |     test.beforeEach(async ({ page }) => {
  9   | 
  10  |         productPage = new ProductPage(page);
  11  | 
  12  |         await page.goto('https://demo.nopcommerce.com/desktops');
  13  |     });
  14  | 
  15  |     test(
  16  |         'TC_PRODUCT_013 - Sort Products By Name A-Z',
  17  |         {
  18  |             annotation: {
  19  |                 type: 'Sorting',
  20  |                 description: 'Verify products can be sorted from A to Z'
  21  |             }
  22  |         },
  23  |         async ({ page }) => {
  24  | 
  25  |             await productPage.sortProduct('Name: A to Z');
  26  | 
  27  |             await expect(page.locator('#products-orderby'))
  28  |                 .toHaveValue('5');
  29  |         }
  30  |     );
  31  | 
  32  |     test(
  33  |         'TC_PRODUCT_014 - Sort Products By Name Z-A',
  34  |         {
  35  |             annotation: {
  36  |                 type: 'Sorting',
  37  |                 description: 'Verify products can be sorted from Z to A'
  38  |             }
  39  |         },
  40  |         async ({ page }) => {
  41  | 
  42  |             await productPage.sortProduct('Name: Z to A');
  43  | 
  44  |             await expect(page.locator('#products-orderby'))
  45  |                 .toHaveValue('6');
  46  |         }
  47  |     );
  48  | 
  49  |     test(
  50  |         'TC_PRODUCT_015 - Sort Products By Price Low To High',
  51  |         {
  52  |             annotation: {
  53  |                 type: 'Sorting',
  54  |                 description: 'Verify products can be sorted by low to high price'
  55  |             }
  56  |         },
  57  |         async ({ page }) => {
  58  | 
  59  |             await productPage.sortProduct('Price: Low to High');
  60  | 
  61  |             await expect(page.locator('#products-orderby'))
  62  |                 .toHaveValue('10');
  63  |         }
  64  |     );
  65  | 
  66  |     test(
  67  |         'TC_PRODUCT_016 - Sort Products By Price High To Low',
  68  |         {
  69  |             annotation: {
  70  |                 type: 'Sorting',
  71  |                 description: 'Verify products can be sorted by high to low price'
  72  |             }
  73  |         },
  74  |         async ({ page }) => {
  75  | 
  76  |             await productPage.sortProduct('Price: High to Low');
  77  | 
  78  |             await expect(page.locator('#products-orderby'))
  79  |                 .toHaveValue('11');
  80  |         }
  81  |     );
  82  | 
  83  |     test(
  84  |     'TC_PRODUCT_017 - Verify Selected Sorting Option Remains Active',
  85  |     {
  86  |         annotation: {
  87  |             type: 'Sorting',
  88  |             description: 'Verify selected sorting option stays selected after page reload'
  89  |         }
  90  |     },
  91  |     async ({ page }) => {
  92  | 
  93  |         await productPage.sortProduct('Name: A to Z');
  94  | 
  95  |         await page.reload();
  96  | 
  97  |         await expect(page.locator('#products-orderby'))
> 98  |             .toBeVisible();
      |              ^ Error: expect(locator).toBeVisible() failed
  99  |     }
  100 | );
  101 | 
  102 | test(
  103 |     'TC_PRODUCT_018 - Verify Product Count After Sorting',
  104 |     {
  105 |         annotation: {
  106 |             type: 'Sorting',
  107 |             description: 'Verify product count remains same after applying sorting'
  108 |         }
  109 |     },
  110 |     async ({ page }) => {
  111 | 
  112 |         const productsBeforeSorting = await page.locator('.product-item').count();
  113 | 
  114 |         await productPage.sortProduct('Price: Low to High');
  115 | 
  116 |         const productsAfterSorting = await page.locator('.product-item').count();
  117 | 
  118 |         expect(productsBeforeSorting).toBe(productsAfterSorting);
  119 |     }
  120 | );
  121 | 
  122 | test(
  123 |     'TC_PRODUCT_019 - Verify Sorting Dropdown Is Enabled',
  124 |     {
  125 |         annotation: {
  126 |             type: 'Sorting',
  127 |             description: 'Verify sorting dropdown is enabled for user interaction'
  128 |         }
  129 |     },
  130 |     async ({ page }) => {
  131 | 
  132 |         await expect(page.locator('#products-orderby'))
  133 |             .toBeEnabled();
  134 |     }
  135 | );
  136 | 
  137 | test(
  138 |     'TC_PRODUCT_020 - Verify Products Are Visible After Applying Sorting',
  139 |     {
  140 |         annotation: {
  141 |             type: 'Sorting',
  142 |             description: 'Verify products remain visible after sorting is applied'
  143 |         }
  144 |     },
  145 |     async ({ page }) => {
  146 | 
  147 |         await productPage.sortProduct('Name: Z to A');
  148 | 
  149 |         const products = page.locator('.product-item');
  150 | 
  151 |         await expect(products.first())
  152 |             .toBeVisible();
  153 |     }
  154 | );
  155 | 
  156 | test(
  157 |     'TC_PRODUCT_021 - Verify User Can Change Sorting Multiple Times',
  158 |     {
  159 |         annotation: {
  160 |             type: 'Sorting',
  161 |             description: 'Verify user can apply multiple sorting options consecutively'
  162 |         }
  163 |     },
  164 |     async ({ page }) => {
  165 | 
  166 |         await productPage.sortProduct('Name: A to Z');
  167 | 
  168 |         await productPage.sortProduct('Price: High to Low');
  169 | 
  170 |         await expect(page.locator('#products-orderby'))
  171 |             .toHaveValue('11');
  172 |     }
  173 | );
  174 | 
  175 | });
```