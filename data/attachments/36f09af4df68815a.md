# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> TC_PRODUCT_003 - Open Product Details Page
- Location: tests/product/product.spec.js:60:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h1')
Expected substring: "Build your own computer"
Received string:    "demo.nopcommerce.com"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('h1')
    11 × locator resolved to <h1>demo.nopcommerce.com</h1>
       - unexpected value "demo.nopcommerce.com"

```

```yaml
- heading "demo.nopcommerce.com" [level=1]
```

# Test source

```ts
  1   | const { test, expect } =
  2   | require('@playwright/test');
  3   | 
  4   | 
  5   | test(
  6   | 'TC_PRODUCT_001 - Search Existing Product',
  7   | async ({ page }) => {
  8   | 
  9   |     await page.goto(
  10  |         'https://demo.nopcommerce.com'
  11  |     );
  12  | 
  13  |     await page.locator('#small-searchterms')
  14  |         .fill('book');
  15  | 
  16  |     await page.locator(
  17  |         'button.search-box-button'
  18  |     ).click();
  19  | 
  20  |     await expect(page)
  21  |         .toHaveURL(/search/);
  22  | 
  23  | await expect(
  24  |     page.locator('.item-box')
  25  |         .first()
  26  | ).toBeVisible({
  27  |     timeout: 20000
  28  | });
  29  | });
  30  | 
  31  | test(
  32  | 'TC_PRODUCT_002 - Search Non Existing Product',
  33  | async ({ page }) => {
  34  | 
  35  |     await page.goto(
  36  |         'https://demo.nopcommerce.com'
  37  |     );
  38  | 
  39  |     await page.locator('#small-searchterms')
  40  |         .fill('abcdefxyz');
  41  | 
  42  |     await page.locator(
  43  |         'button.search-box-button'
  44  |     ).click();
  45  | 
  46  |     await expect(
  47  |         page.locator('.no-result')
  48  |     ).toBeVisible({
  49  |         timeout: 20000
  50  |     });
  51  | 
  52  |     await expect(
  53  |         page.locator('.no-result')
  54  |     ).toContainText(
  55  |         'No products were found'
  56  |     );
  57  | });
  58  | 
  59  | 
  60  | test(
  61  | 'TC_PRODUCT_003 - Open Product Details Page',
  62  | async ({ page }) => {
  63  | 
  64  |     await page.goto(
  65  | 'https://demo.nopcommerce.com/desktops'
  66  |     );
  67  | 
  68  |     await page.locator(
  69  | 'a:has-text("Build your own computer")'
  70  |     ).click();
  71  | 
  72  |     await expect(page)
  73  |         .toHaveURL(
  74  |             /build-your-own-computer/
  75  |         );
  76  | 
  77  |     await expect(
  78  |         page.locator('h1')
> 79  |     ).toContainText(
      |       ^ Error: expect(locator).toContainText(expected) failed
  80  |         'Build your own computer'
  81  |     );
  82  | });
  83  | 
  84  | 
  85  | test(
  86  | 'TC_PRODUCT_004 - Verify Product Price Visible',
  87  | async ({ page }) => {
  88  | 
  89  |     await page.goto(
  90  | 'https://demo.nopcommerce.com/build-your-own-computer'
  91  |     );
  92  | 
  93  |     await expect(
  94  |         page.locator('.product-price')
  95  |     ).toBeVisible();
  96  | });
  97  | 
  98  | test(
  99  | 'TC_PRODUCT_005 - Verify Product Image Visible',
  100 | async ({ page }) => {
  101 | 
  102 |     await page.goto(
  103 | 'https://demo.nopcommerce.com/build-your-own-computer'
  104 |     );
  105 | 
  106 |     await expect(
  107 |         page.locator('.picture img')
  108 |     ).toBeVisible({
  109 |         timeout: 20000
  110 |     });
  111 | });
```