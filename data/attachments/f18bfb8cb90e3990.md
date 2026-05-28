# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/search.spec.js >> Product Search Tests >> TC_PRODUCT_002 - Search Non Existing Product
- Location: tests/product/search.spec.js:17:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.no-result')
Expected substring: "No products were found"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.no-result')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a024c3205db80b24
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
  16 | 
  17 |     test('TC_PRODUCT_002 - Search Non Existing Product', async ({ page }) => {
  18 | 
  19 |         const productPage = new ProductPage(page);
  20 | 
  21 |         await page.goto('https://demo.nopcommerce.com/');
  22 | 
  23 |         await productPage.searchProduct('abcdef');
  24 | 
  25 |         await expect(page.locator('.no-result'))
> 26 |             .toContainText('No products were found');
     |              ^ Error: expect(locator).toContainText(expected) failed
  27 |     });
  28 | 
  29 | });
```