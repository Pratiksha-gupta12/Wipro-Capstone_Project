# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_009 - Successful Login
- Location: tests/auth/login.spec.js:84:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.ico-logout')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.ico-logout')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a013b56c1f55a7b0
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
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
  29  |     ).toContainText(
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
  55  | // test(
  56  | // 'TC_AUTH_009 - Successful Login',
  57  | // async ({ page }) => {
  58  | 
  59  | //     // Open Login Page
  60  | //     await page.goto(
  61  | //         'https://demo.nopcommerce.com/login'
  62  | //     );
  63  | 
  64  | //     // Enter Valid Email
  65  | //     await page.locator('#Email')
  66  | //         .fill('testing123@gmail.com');
  67  | 
  68  | //     // Enter Valid Password
  69  | //     await page.locator('#Password')
  70  | //         .fill('Testing@12345');
  71  | 
  72  | //     // Click Login Button
  73  | //     await page.locator('.button-1.login-button')
  74  | //         .click();
  75  | 
  76  | //     // Verify Logout Link
  77  | //     const errorMessage = await page
  78  | //     .locator('.message-error')
  79  | //     .textContent();
  80  | 
  81  | // console.log(errorMessage);
  82  | // });
  83  | 
  84  | test(
  85  | 'TC_AUTH_009 - Successful Login',
  86  | async ({ page }) => {
  87  | 
  88  |     // Open Login Page
  89  |     await page.goto(
  90  |         'https://demo.nopcommerce.com/login'
  91  |     );
  92  | 
  93  |     // Enter Valid Email
  94  |     await page.locator('#Email')
  95  |         .fill('testing123@gmail.com');
  96  | 
  97  |     // Enter Valid Password
  98  |     await page.locator('#Password')
  99  |         .fill('Testing@12345');
  100 | 
  101 |     // Click Login Button
  102 |     await page.locator('.button-1.login-button')
  103 |         .click();
  104 | 
  105 |     // Wait for Login
  106 |     await page.waitForTimeout(3000);
  107 | 
  108 |     // Verify Logout Link
  109 |     await expect(
  110 |         page.locator('.ico-logout')
> 111 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  112 | });
```