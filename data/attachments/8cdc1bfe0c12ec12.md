# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> TC_PRODUCT_003 - Open Product Details Page
- Location: tests/product/product.spec.js:81:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.product-name h1')
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.product-name h1')
    - waiting for" https://demo.nopcommerce.com/build-your-own-computer" navigation to finish...
    - navigated to "https://demo.nopcommerce.com/build-your-own-computer"
    - waiting for navigation to finish...
    - navigated to "https://demo.nopcommerce.com/build-your-own-computer"

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Verifying you are human. This may take a few seconds." [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a01c6b6aebc06d2f
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | // test.describe.configure({
  4   | //     mode: 'serial'
  5   | // });
  6   | 
  7   | 
  8   | 
  9   | // ======================================================
  10  | // TC_PRODUCT_001 - Search Existing Product
  11  | // ======================================================
  12  | 
  13  | test(
  14  | 'TC_PRODUCT_001 - Search Existing Product',
  15  | async ({ page }) => {
  16  | 
  17  |     await page.goto(
  18  |         'https://demo.nopcommerce.com'
  19  |     );
  20  | 
  21  |     await page.locator('#small-searchterms')
  22  |         .fill('book');
  23  | 
  24  |     await page.locator(
  25  |         'button.search-box-button'
  26  |     ).click();
  27  | 
  28  |     // Verify URL changed
  29  |     await expect(page)
  30  |         .toHaveURL(/search/);
  31  | 
  32  |     // Verify products visible
  33  |     await expect(
  34  |         page.locator('.item-box')
  35  |             .first()
  36  |     ).toBeVisible({
  37  |         timeout: 20000
  38  |     });
  39  | });
  40  | 
  41  | 
  42  | 
  43  | // ======================================================
  44  | // TC_PRODUCT_002 - Search Non Existing Product
  45  | // ======================================================
  46  | test(
  47  | 'TC_PRODUCT_002 - Search Non Existing Product',
  48  | async ({ page }) => {
  49  | 
  50  |     await page.goto(
  51  |         'https://demo.nopcommerce.com'
  52  |     );
  53  | 
  54  |     await page.locator('#small-searchterms')
  55  |         .fill('abcdefxyz');
  56  | 
  57  |     await page.locator(
  58  |         'button.search-box-button'
  59  |     ).click();
  60  | 
  61  |     await expect(
  62  |         page.locator('.no-result')
  63  |     ).toBeVisible({
  64  |         timeout: 20000
  65  |     });
  66  | 
  67  |     await expect(
  68  |         page.locator('.no-result')
  69  |     ).toContainText(
  70  |         'No products were found'
  71  |     );
  72  | });
  73  | 
  74  | 
  75  | 
  76  | 
  77  | // ======================================================
  78  | // TC_PRODUCT_003 - Open Product Details Page
  79  | // ======================================================
  80  | 
  81  | test(
  82  | 'TC_PRODUCT_003 - Open Product Details Page',
  83  | async ({ page }) => {
  84  | 
  85  |     await page.goto(
  86  | 'https://demo.nopcommerce.com/desktops'
  87  |     );
  88  | 
  89  |     await page.locator(
  90  | 'a:has-text("Build your own computer")'
  91  |     ).click();
  92  | 
  93  |     await expect(
  94  |         page.locator('.product-name h1')
> 95  |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  96  |         timeout: 20000
  97  |     });
  98  | 
  99  |     await expect(
  100 |         page.locator('.product-name h1')
  101 |     ).toContainText(
  102 |         'Build your own computer'
  103 |     );
  104 | });
  105 | 
  106 | 
  107 | 
  108 | 
  109 | // ======================================================
  110 | // TC_PRODUCT_004 - Verify Product Price Visible
  111 | // ======================================================
  112 | 
  113 | test(
  114 | 'TC_PRODUCT_004 - Verify Product Price Visible',
  115 | async ({ page }) => {
  116 | 
  117 |     await page.goto(
  118 | 'https://demo.nopcommerce.com/desktops'
  119 |     );
  120 | 
  121 |     await page.locator(
  122 | 'a:has-text("Build your own computer")'
  123 |     ).click();
  124 | 
  125 |     await expect(
  126 |         page.locator('.price-value')
  127 |     ).toBeVisible({
  128 |         timeout: 20000
  129 |     });
  130 | });
  131 | 
  132 | 
  133 | 
  134 | 
  135 | // ======================================================
  136 | // TC_PRODUCT_005 - Verify Product Image Visible
  137 | // ======================================================
  138 | 
  139 | test(
  140 | 'TC_PRODUCT_005 - Verify Product Image Visible',
  141 | async ({ page }) => {
  142 | 
  143 |     await page.goto(
  144 | 'https://demo.nopcommerce.com/desktops'
  145 |     );
  146 | 
  147 |     await page.locator(
  148 | 'a:has-text("Build your own computer")'
  149 |     ).click();
  150 | 
  151 |     await expect(
  152 |         page.locator('.picture img')
  153 |     ).toBeVisible({
  154 |         timeout: 20000
  155 |     });
  156 | });
```