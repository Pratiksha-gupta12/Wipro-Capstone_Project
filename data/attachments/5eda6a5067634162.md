# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/products_api.spec.js >> Products API Tests >> TC_API_004 - Verify Product Has Title
- Location: tests/api/products_api.spec.js:37:9

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Products API Tests', () => {
  4  | 
  5  |     test('TC_API_001 - Verify Get All Products',
  6  |     async ({ request }) => {
  7  | 
  8  |         const response = await request.get(
  9  |             'https://fakestoreapi.com/products'
  10 |         );
  11 | 
  12 |         expect(response.status()).toBe(200);
  13 |     });
  14 | 
  15 |     test('TC_API_002 - Verify Get Single Product',
  16 |     async ({ request }) => {
  17 | 
  18 |         const response = await request.get(
  19 |             'https://fakestoreapi.com/products/1'
  20 |         );
  21 | 
  22 |         expect(response.status()).toBe(200);
  23 |     });
  24 | 
  25 |     test('TC_API_003 - Verify Product Count Greater Than Zero',
  26 |     async ({ request }) => {
  27 | 
  28 |         const response = await request.get(
  29 |             'https://fakestoreapi.com/products'
  30 |         );
  31 | 
  32 |         const data = await response.json();
  33 | 
  34 |         expect(data.length).toBeGreaterThan(0);
  35 |     });
  36 | 
  37 |     test('TC_API_004 - Verify Product Has Title',
  38 |     async ({ request }) => {
  39 | 
  40 |         const response = await request.get(
  41 |             'https://fakestoreapi.com/products/1'
  42 |         );
  43 | 
> 44 |         const data = await response.json();
     |                      ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  45 | 
  46 |         expect(data.title).toBeTruthy();
  47 |     });
  48 | 
  49 |     test('TC_API_005 - Verify Product Has Price',
  50 |     async ({ request }) => {
  51 | 
  52 |         const response = await request.get(
  53 |             'https://fakestoreapi.com/products/1'
  54 |         );
  55 | 
  56 |         const data = await response.json();
  57 | 
  58 |         expect(data.price).toBeGreaterThan(0);
  59 |     });
  60 | 
  61 | });
```