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
  - code: a01a27dcef9ff416
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | 
  4   | //Failing in webkit
  5   | 
  6   | test('TC_AUTH_007 - Login with Invalid Password',
  7   | async ({ page }) => {
  8   | 
  9   |     // Open Login Page
  10  |     await page.goto(
  11  |         'https://demo.nopcommerce.com/login'
  12  |     );
  13  | 
  14  |     // Enter Valid Email
  15  |     await page.locator('#Email')
  16  |         .fill('testing123@gmail.com');
  17  | 
  18  |     // Enter Invalid Password
  19  |     await page.locator('#Password')
  20  |         .fill('WrongPassword123');
  21  | 
  22  |     // Click Login Button
  23  |     await page.locator('button.login-button')
  24  |         .click();
  25  | 
  26  |     // Verify Error Message
  27  |     await expect(
  28  |         page.locator('.message-error')
> 29  |     ).toContainText(
      |       ^ Error: expect(locator).toContainText(expected) failed
  30  |         'Login was unsuccessful'
  31  |     );
  32  | });
  33  | 
  34  | 
  35  | 
  36  | test('TC_AUTH_008 - Login with Empty Fields',
  37  | async ({ page }) => {
  38  | 
  39  |     // Open Login Page
  40  |     await page.goto(
  41  |         'https://demo.nopcommerce.com/login?returnUrl=%2F'
  42  |     );
  43  | 
  44  |     // Click Login Button
  45  |     await page.locator('.button-1.login-button').click();
  46  | 
  47  |     // Verify Email Validation Message
  48  |     await expect(
  49  |         page.locator('#Email-error')
  50  |     ).toHaveText(
  51  |         'Please enter your email'
  52  |     );
  53  | });
  54  | 
  55  | test(
  56  | 'TC_AUTH_009 - Successful Login',
  57  | async ({ page }) => {
  58  | 
  59  |     // Open Login Page
  60  |     await page.goto(
  61  |         'https://demo.nopcommerce.com/login'
  62  |     );
  63  | 
  64  |     // Enter Valid Email
  65  |     await page.locator('#Email')
  66  |         .fill('testing123@gmail.com');
  67  | 
  68  |     
  69  |     await page.locator('#Password')
  70  |         .fill('Testing@12345');
  71  | 
  72  |   
  73  |     await page.locator('.button-1.login-button')
  74  |         .click();
  75  | 
  76  |    
  77  |     const errorMessage = await page
  78  |     .locator('.message-error')
  79  |     .textContent();
  80  | 
  81  | console.log(errorMessage);
  82  | });
  83  | 
  84  | 
  85  | 
  86  | test(
  87  | 'TC_AUTH_010 - Logout Functionality',
  88  | async ({ page }) => {
  89  | 
  90  |     // Open Login Page
  91  |     await page.goto(
  92  |         'https://demo.nopcommerce.com/login'
  93  |     );
  94  | 
  95  |     // Enter Valid Email
  96  |     await page.locator('#Email')
  97  |         .fill('testing123@gmail.com');
  98  | 
  99  |     // Enter Valid Password
  100 |     await page.locator('#Password')
  101 |         .fill('Testing@12345');
  102 | 
  103 |     // Click Login Button
  104 |     await page.locator('.button-1.login-button')
  105 |         .click();
  106 | 
  107 |     // Wait After Login
  108 |     await page.waitForTimeout(3000);
  109 | 
  110 |     // Click Logout
  111 |     await page.locator('.ico-logout')
  112 |         .click();
  113 | 
  114 |     // Verify Login Link Visible
  115 |     await expect(
  116 |         page.locator('.ico-login')
  117 |     ).toBeVisible();
  118 | });
  119 | 
  120 | 
  121 | 
  122 | test(
  123 | 'TC_AUTH_011 - Forgot Password',
  124 | async ({ page }) => {
  125 | 
  126 |     await page.goto(
  127 |         'https://demo.nopcommerce.com/login'
  128 |     );
  129 | 
```