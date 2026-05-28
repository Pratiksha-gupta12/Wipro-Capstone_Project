# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_008 - Login with Empty Fields
- Location: tests/auth/login.spec.js:36:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demo.nopcommerce.com/login?returnUrl=%2F", waiting until "load"

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | 
  4  | //Failing in webkit
  5  | 
  6  | test.skip('TC_AUTH_007 - Login with Invalid Password',
  7  | async ({ page }) => {
  8  | 
  9  |     // Open Login Page
  10 |     await page.goto(
  11 |         'https://demo.nopcommerce.com/login'
  12 |     );
  13 | 
  14 |     // Enter Valid Email
  15 |     await page.locator('#Email')
  16 |         .fill('testing123@gmail.com');
  17 | 
  18 |     // Enter Invalid Password
  19 |     await page.locator('#Password')
  20 |         .fill('WrongPassword123');
  21 | 
  22 |     // Click Login Button
  23 |     await page.locator('button.login-button')
  24 |         .click();
  25 | 
  26 |     // Verify Error Message
  27 |     await expect(
  28 |         page.locator('.message-error')
  29 |     ).toContainText(
  30 |         'Login was unsuccessful'
  31 |     );
  32 | });
  33 | 
  34 | 
  35 | 
  36 | test('TC_AUTH_008 - Login with Empty Fields',
  37 | async ({ page }) => {
  38 | 
  39 |     // Open Login Page
> 40 |     await page.goto(
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  41 |         'https://demo.nopcommerce.com/login?returnUrl=%2F'
  42 |     );
  43 | 
  44 |     // Click Login Button
  45 |     await page.locator('.button-1.login-button').click();
  46 | 
  47 |     // Verify Email Validation Message
  48 |     await expect(
  49 |         page.locator('#Email-error')
  50 |     ).toHaveText(
  51 |         'Please enter your email address.'
  52 |     );
  53 | });
  54 | 
  55 | 
```