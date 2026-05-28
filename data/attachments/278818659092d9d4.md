# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_008 - Login with Empty Fields
- Location: tests/auth/login.spec.js:36:1

# Error details

```
Error: locator.click: Unknown engine "type" while parsing selector type="submit"
Call log:
  - waiting for locator('type="submit"')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - img "Icon for www.nopcommerce.com" [ref=e5]
        - heading "www.nopcommerce.com" [level=1] [ref=e6]
      - heading "Performing security verification" [level=2] [ref=e7]
      - paragraph [ref=e8]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e15]:
    - generic [ref=e17]:
      - generic [ref=e19]:
        - text: "Ray ID:"
        - code [ref=e20]: a01260540be43406
      - generic [ref=e21]:
        - generic [ref=e22]:
          - text: Performance and Security by
          - link "Cloudflare" [ref=e23] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
        - link "Privacy" [ref=e25] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
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
  40 |     await page.goto(
  41 |         'https://www.nopcommerce.com/en/login'
  42 |     );
  43 | 
  44 |     // Click Login Button
> 45 |     await page.locator('type ="submit"').click();
     |                                          ^ Error: locator.click: Unknown engine "type" while parsing selector type="submit"
  46 | 
  47 |     // Verify Email Validation Message
  48 |     await expect(
  49 |         page.locator('.message-error.validation-summary-errors')
  50 |     ).toContainText(
  51 |         'Login was unsuccessful'
  52 |     );
  53 | });
  54 | 
  55 | 
```