# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/registration.spec.js >> Registration with Existing Email
- Location: tests/auth/registration.spec.js:81:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.message-error')
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.message-error')
    - waiting for" https://demo.nopcommerce.com/register" navigation to finish...
    - navigated to "https://demo.nopcommerce.com/register"

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Verifying you are human. This may take a few seconds." [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a01a866ccb0cc6ab
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  11  |   await authPage.registerUser(userData);
  12  | 
  13  |   // await expect(authPage.successMessage)
  14  |   //     .toContainText('Your registration completed');
  15  |   await expect(authPage.successMessage).toBeVisible({
  16  |     timeout: 20000,
  17  |   });
  18  | 
  19  |   await expect(authPage.successMessage).toContainText(
  20  |     "Your registration completed",
  21  |   );
  22  | });
  23  | 
  24  | test("2.Registration with Empty Fields", async ({ page }) => {
  25  |   await page.goto("https://demo.nopcommerce.com/register");
  26  | 
  27  |   await page.locator("#register-button").click();
  28  | 
  29  |   await expect(page.locator(".field-validation-error")).toContainText([
  30  |     "First name is required.",
  31  |     "Last name is required.",
  32  |     "Email is required.",
  33  |     "Password is required.",
  34  |   ]);
  35  | });
  36  | 
  37  | test("Registration with Invalid Email", async ({ page }) => {
  38  |   // Open Register Page
  39  |   await page.goto("https://demo.nopcommerce.com/register");
  40  | 
  41  |   // Select Gender
  42  |   await page.locator("#gender-male").check();
  43  |   await page.locator("#FirstName").fill("Pratiksha");
  44  |   await page.locator("#LastName").fill("Gupta");
  45  | 
  46  |   await page.locator("#Email").fill("abc.com");
  47  | 
  48  |   // Enter Password
  49  |   await page.locator("#Password").fill("Testing@12345");
  50  | 
  51  |   // Confirm Password
  52  |   await page.locator("#ConfirmPassword").fill("Testing@12345");
  53  | 
  54  |   // Click Register
  55  |   await page.locator("#register-button").click();
  56  | 
  57  |   // Verify Error Message
  58  |   await expect(page.locator(".field-validation-error")).toContainText(
  59  |     "Please enter a valid email address.",
  60  |   );
  61  | });
  62  | 
  63  | test("4.Registration with Password Mismatch", async ({ page }) => {
  64  |   await page.goto("https://demo.nopcommerce.com/register");
  65  |   await page.locator("#gender-male").check();
  66  |   await page.locator("#FirstName").fill("Pratiksha");
  67  |   await page.locator("#LastName").fill("Gupta");
  68  | 
  69  |   await page.locator("#Email").fill(`pratiksha${Date.now()}@gmail.com`);
  70  | 
  71  |   await page.locator("#Password").fill("Testing@12345");
  72  | 
  73  |   await page.locator("#ConfirmPassword").fill("Testing@11111");
  74  | 
  75  |   await page.locator("#register-button").click();
  76  | 
  77  |   await expect(page.locator(".field-validation-error")).toContainText(
  78  |     "The password and confirmation password do not match.",
  79  |   );
  80  | });
  81  | test('Registration with Existing Email',
  82  | async ({ page }) => {
  83  | 
  84  |     await page.goto(
  85  |         'https://demo.nopcommerce.com/register'
  86  |     );
  87  | 
  88  |     await page.locator('#gender-male').check();
  89  | 
  90  |     await page.locator('#FirstName')
  91  |         .fill('Pratiksha');
  92  | 
  93  |     await page.locator('#LastName')
  94  |         .fill('Gupta');
  95  | 
  96  |     await page.locator('#Email')
  97  |         .fill('testing123@gmail.com');
  98  | 
  99  |     await page.locator('#Password')
  100 |         .fill('Testing@12345');
  101 | 
  102 |     await page.locator('#ConfirmPassword')
  103 |         .fill('Testing@12345');
  104 | 
  105 |     await page.locator('#register-button')
  106 |         .click();
  107 | 
  108 |     // Verify Error Message
  109 |     await expect(
  110 |         page.locator('.message-error')
> 111 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  112 |         timeout: 20000
  113 |     });
  114 | 
  115 |     await expect(
  116 |         page.locator('.message-error')
  117 |     ).toContainText(
  118 |         'The specified email already exists'
  119 |     );
  120 | });
  121 | 
  122 | 
  123 | 
  124 | test("TC_AUTH_006 - Successful Registration", async ({ page }) => {
  125 |   const authPage = new AuthPage(page);
  126 |   // Open Register Page
  127 |   await page.goto("https://demo.nopcommerce.com/register");
  128 | 
  129 |   // Wait for page to load
  130 |   await page.waitForTimeout(3000);
  131 | 
  132 |   // Select Gender
  133 |   await page.locator("#gender-male").check();
  134 | 
  135 |   // Enter First Name
  136 |   await authPage.fillFirstName("Pratiksha");
  137 | 
  138 |   // Enter Last Name
  139 |   await page.locator("#LastName").fill("Gupta");
  140 | 
  141 |   // Enter Unique Email
  142 |   await page.locator("#Email").fill(`pratiksha${Date.now()}@gmail.com`);
  143 | 
  144 |   // Enter Password
  145 |   await page.locator("#Password").fill("Testing@12345");
  146 | 
  147 |   // Confirm Password
  148 |   await page.locator("#ConfirmPassword").fill("Testing@12345");
  149 | 
  150 |   // Click Register Button
  151 |   await page.locator("#register-button").click();
  152 | 
  153 |   // Wait after registration
  154 |   await page.waitForTimeout(5000);
  155 | 
  156 |   // Verify Success Message
  157 |   const bodyText = await page.locator("body").textContent();
  158 |   console.log(bodyText);
  159 | });
  160 | 
```