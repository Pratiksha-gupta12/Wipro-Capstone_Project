# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/search.spec.js >> Product Search Tests >> TC_PRODUCT_002 - Search Non Existing Product
- Location: tests/product/search.spec.js:16:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.no-result')
Expected: "No products were found that matched your criteria."
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.no-result')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Verifying you are human. This may take a few seconds." [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a024c6916e970bbe
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { ProductPage } from '../../pages/ProductPage';
  3  | 
  4  | test.describe('Product Search Tests', () => {
  5  | 
  6  |     test('TC_PRODUCT_001 - Search Existing Product', async ({ page }) => {
  7  | 
  8  |         const productPage = new ProductPage(page);
  9  | 
  10 |         await page.goto('https://demo.nopcommerce.com/');
  11 | 
  12 |         await productPage.searchProduct('Laptop');
  13 | 
  14 |         await expect(page).toHaveURL(/search/);
  15 |     });
  16 | test('TC_PRODUCT_002 - Search Non Existing Product', async ({ page }) => {
  17 | 
  18 |     const productPage = new ProductPage(page);
  19 | 
  20 |     await page.goto('https://demo.nopcommerce.com/');
  21 | 
  22 |     await productPage.searchProduct('abcdefxyz');
  23 | 
  24 |     const noResultMessage = page.locator('.no-result');
  25 | 
  26 |     await expect(noResultMessage)
> 27 |         .toHaveText('No products were found that matched your criteria.');
     |          ^ Error: expect(locator).toHaveText(expected) failed
  28 | });
  29 | 
  30 | });
```