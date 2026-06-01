# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/carts_api.spec.js >> Carts API Tests >> TC_API_011 - Verify Get All Carts
- Location: tests/api/carts_api.spec.js:5:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 403
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Carts API Tests', () => {
  4  | 
  5  |     test('TC_API_011 - Verify Get All Carts',
  6  |     async ({ request }) => {
  7  | 
  8  |         const response = await request.get(
  9  |             'https://fakestoreapi.com/carts'
  10 |         );
  11 | 
> 12 |         expect(response.status()).toBe(200);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  13 |     });
  14 | 
  15 |     test('TC_API_012 - Verify Get Single Cart',
  16 |     async ({ request }) => {
  17 | 
  18 |         const response = await request.get(
  19 |             'https://fakestoreapi.com/carts/1'
  20 |         );
  21 | 
  22 |         expect(response.status()).toBe(200);
  23 |     });
  24 | 
  25 |     test('TC_API_013 - Verify Cart Has User ID',
  26 |     async ({ request }) => {
  27 | 
  28 |         const response = await request.get(
  29 |             'https://fakestoreapi.com/carts/1'
  30 |         );
  31 | 
  32 |         const data = await response.json();
  33 | 
  34 |         expect(data.userId).toBeTruthy();
  35 |     });
  36 | 
  37 |     test('TC_API_014 - Verify Cart Has Products Array',
  38 |     async ({ request }) => {
  39 | 
  40 |         const response = await request.get(
  41 |             'https://fakestoreapi.com/carts/1'
  42 |         );
  43 | 
  44 |         const data = await response.json();
  45 | 
  46 |         expect(Array.isArray(data.products))
  47 |             .toBeTruthy();
  48 |     });
  49 | 
  50 |     test('TC_API_015 - Verify Cart Count Greater Than Zero',
  51 |     async ({ request }) => {
  52 | 
  53 |         const response = await request.get(
  54 |             'https://fakestoreapi.com/carts'
  55 |         );
  56 | 
  57 |         const data = await response.json();
  58 | 
  59 |         expect(data.length).toBeGreaterThan(0);
  60 |     });
  61 | 
  62 | });
```