# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> TC_PRODUCT_001 - Search Existing Product
- Location: tests/product/product.spec.js:14:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.product-title')
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.product-title')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a01c5d207be73afb
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1   | const { test, expect } =
  2   | require('@playwright/test');
  3   | 
  4   | test.describe.configure({
  5   |     mode: 'serial'
  6   | });
  7   | 
  8   | 
  9   | 
  10  | // ======================================================
  11  | // TC_PRODUCT_001 - Search Existing Product
  12  | // ======================================================
  13  | 
  14  | test(
  15  | 'TC_PRODUCT_001 - Search Existing Product',
  16  | async ({ page }) => {
  17  | 
  18  |     await page.goto(
  19  |         'https://demo.nopcommerce.com'
  20  |     );
  21  | 
  22  |     await page.waitForLoadState(
  23  |         'domcontentloaded'
  24  |     );
  25  | 
  26  |     await page.locator('#small-searchterms')
  27  |         .fill('Apple MacBook Pro 13-inch');
  28  | 
  29  |     await page.locator(
  30  |         'button.search-box-button'
  31  |     ).click();
  32  | 
  33  |     await expect(
  34  |         page.locator('.product-title')
> 35  |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  36  |         timeout: 20000
  37  |     });
  38  | 
  39  |     await expect(
  40  |         page.locator('.product-title')
  41  |     ).toContainText(
  42  |         'Apple MacBook Pro 13-inch'
  43  |     );
  44  | });
  45  | 
  46  | 
  47  | 
  48  | 
  49  | // ======================================================
  50  | // TC_PRODUCT_002 - Search Non Existing Product
  51  | // ======================================================
  52  | 
  53  | test(
  54  | 'TC_PRODUCT_002 - Search Non Existing Product',
  55  | async ({ page }) => {
  56  | 
  57  |     await page.goto(
  58  |         'https://demo.nopcommerce.com'
  59  |     );
  60  | 
  61  |     await page.locator('#small-searchterms')
  62  |         .fill('abcdefxyz');
  63  | 
  64  |     await page.locator(
  65  |         'button.search-box-button'
  66  |     ).click();
  67  | 
  68  |     await expect(
  69  |         page.locator('.no-result')
  70  |     ).toBeVisible({
  71  |         timeout: 20000
  72  |     });
  73  | 
  74  |     await expect(
  75  |         page.locator('.no-result')
  76  |     ).toContainText(
  77  |         'No products were found that matched your criteria.'
  78  |     );
  79  | });
  80  | 
  81  | 
  82  | 
  83  | 
  84  | // ======================================================
  85  | // TC_PRODUCT_003 - Open Product Details Page
  86  | // ======================================================
  87  | 
  88  | test(
  89  | 'TC_PRODUCT_003 - Open Product Details Page',
  90  | async ({ page }) => {
  91  | 
  92  |     await page.goto(
  93  | 'https://demo.nopcommerce.com/desktops'
  94  |     );
  95  | 
  96  |     await page.locator(
  97  | 'a:has-text("Build your own computer")'
  98  |     ).click();
  99  | 
  100 |     await expect(
  101 |         page.locator('.product-name h1')
  102 |     ).toBeVisible({
  103 |         timeout: 20000
  104 |     });
  105 | 
  106 |     await expect(
  107 |         page.locator('.product-name h1')
  108 |     ).toContainText(
  109 |         'Build your own computer'
  110 |     );
  111 | });
  112 | 
  113 | 
  114 | 
  115 | 
  116 | // ======================================================
  117 | // TC_PRODUCT_004 - Verify Product Price Visible
  118 | // ======================================================
  119 | 
  120 | test(
  121 | 'TC_PRODUCT_004 - Verify Product Price Visible',
  122 | async ({ page }) => {
  123 | 
  124 |     await page.goto(
  125 | 'https://demo.nopcommerce.com/desktops'
  126 |     );
  127 | 
  128 |     await page.locator(
  129 | 'a:has-text("Build your own computer")'
  130 |     ).click();
  131 | 
  132 |     await expect(
  133 |         page.locator('.price-value')
  134 |     ).toBeVisible({
  135 |         timeout: 20000
```