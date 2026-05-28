# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/search.spec.js >> Product Search Tests >> TC_PRODUCT_002 - Search Non Existing Product
- Location: tests/product/search.spec.js:15:5

# Error details

```
ReferenceError: Cannot access 'productPage' before initialization
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | 
  3  | test.describe('Product Search Tests', () => {
  4  | 
  5  |     test('TC_PRODUCT_001 - Search Existing Product', async ({ page }) => {
  6  | 
  7  |         const productPage = new productPage(page);
  8  | 
  9  |         await page.goto('https://demo.nopcommerce.com/');
  10 | 
  11 |         await page.searchProduct('Laptop');
  12 | 
  13 |         await expect(page).toHaveURL(/search/);
  14 |     });
  15 | test('TC_PRODUCT_002 - Search Non Existing Product', async ({ page }) => {
  16 | 
> 17 |      const productPage = new productPage(page);
     |                          ^ ReferenceError: Cannot access 'productPage' before initialization
  18 | 
  19 |     await page.goto('https://demo.nopcommerce.com/');
  20 | 
  21 |     await page.searchProduct('abcdefxyz');
  22 | 
  23 |     const noResultMessage = page.locator('.no-result');
  24 | 
  25 |     await expect(noResultMessage)
  26 |         .toHaveText('No products were found that matched your criteria.');
  27 | });
  28 | 
  29 | });
  30 | 
  31 | 
  32 | 
```