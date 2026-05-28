# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_007 - Login with Invalid Password
- Location: tests/auth/login.spec.js:6:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.message-error')
Expected substring: "Login was unsuccessful"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.message-error')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a0123bf6398da722
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | 
  4  | //Failing in webkit
  5  | 
  6  | test('TC_AUTH_007 - Login with Invalid Password',
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
> 29 |     ).toContainText(
     |       ^ Error: expect(locator).toContainText(expected) failed
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
  40 |     await page.goto(
  41 |         'https://demo.nopcommerce.com/login'
  42 |     );
  43 | 
  44 |     // Click Login Button
  45 |     await page.locator('button.login-button')
  46 |         .click();
  47 | 
  48 |     // Verify Email Validation Message
  49 |     await expect(
  50 |         page.locator('#Email-error')
  51 |     ).toContainText(
  52 |         'Please enter your email'
  53 |     );
  54 | });
  55 | 
  56 | 
```