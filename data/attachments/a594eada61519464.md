# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/users_api.spec.js >> Users API Tests >> TC_API_007 - Verify Get Single User
- Location: tests/api/users_api.spec.js:15:9

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
  3  | test.describe('Users API Tests', () => {
  4  | 
  5  |     test('TC_API_006 - Verify Get All Users',
  6  |     async ({ request }) => {
  7  | 
  8  |         const response = await request.get(
  9  |             'https://fakestoreapi.com/users'
  10 |         );
  11 | 
  12 |         expect(response.status()).toBe(200);
  13 |     });
  14 | 
  15 |     test('TC_API_007 - Verify Get Single User',
  16 |     async ({ request }) => {
  17 | 
  18 |         const response = await request.get(
  19 |             'https://fakestoreapi.com/users/1'
  20 |         );
  21 | 
> 22 |         expect(response.status()).toBe(200);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  23 |     });
  24 | 
  25 |     test('TC_API_008 - Verify User Has Username',
  26 |     async ({ request }) => {
  27 | 
  28 |         const response = await request.get(
  29 |             'https://fakestoreapi.com/users/1'
  30 |         );
  31 | 
  32 |         const data = await response.json();
  33 | 
  34 |         expect(data.username).toBeTruthy();
  35 |     });
  36 | 
  37 |     test('TC_API_009 - Verify User Has Email',
  38 |     async ({ request }) => {
  39 | 
  40 |         const response = await request.get(
  41 |             'https://fakestoreapi.com/users/1'
  42 |         );
  43 | 
  44 |         const data = await response.json();
  45 | 
  46 |         expect(data.email).toContain('@');
  47 |     });
  48 | 
  49 |     test('TC_API_010 - Verify Users Count Greater Than Zero',
  50 |     async ({ request }) => {
  51 | 
  52 |         const response = await request.get(
  53 |             'https://fakestoreapi.com/users'
  54 |         );
  55 | 
  56 |         const data = await response.json();
  57 | 
  58 |         expect(data.length).toBeGreaterThan(0);
  59 |     });
  60 | 
  61 | });
```