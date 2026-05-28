# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/registration.spec.js >> Registration with Existing Email
- Location: tests/auth/registration.spec.js:90:1

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

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a01a8ae37d30b8fe
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  20  | 
  21  |     console.log(body);
  22  | 
  23  |     // Verify success
  24  |     await expect(
  25  |         authPage.successMessage
  26  |     ).toContainText(
  27  |         'Your registration completed'
  28  |     );
  29  | });
  30  | 
  31  | 
  32  | 
  33  | test("2.Registration with Empty Fields", async ({ page }) => {
  34  |   await page.goto("https://demo.nopcommerce.com/register");
  35  | 
  36  |   await page.locator("#register-button").click();
  37  | 
  38  |   await expect(page.locator(".field-validation-error")).toContainText([
  39  |     "First name is required.",
  40  |     "Last name is required.",
  41  |     "Email is required.",
  42  |     "Password is required.",
  43  |   ]);
  44  | });
  45  | 
  46  | test("Registration with Invalid Email", async ({ page }) => {
  47  |   // Open Register Page
  48  |   await page.goto("https://demo.nopcommerce.com/register");
  49  | 
  50  |   // Select Gender
  51  |   await page.locator("#gender-male").check();
  52  |   await page.locator("#FirstName").fill("Pratiksha");
  53  |   await page.locator("#LastName").fill("Gupta");
  54  | 
  55  |   await page.locator("#Email").fill("abc.com");
  56  | 
  57  |   // Enter Password
  58  |   await page.locator("#Password").fill("Testing@12345");
  59  | 
  60  |   // Confirm Password
  61  |   await page.locator("#ConfirmPassword").fill("Testing@12345");
  62  | 
  63  |   // Click Register
  64  |   await page.locator("#register-button").click();
  65  | 
  66  |   // Verify Error Message
  67  |   await expect(page.locator(".field-validation-error")).toContainText(
  68  |     "Please enter a valid email address.",
  69  |   );
  70  | });
  71  | 
  72  | test("4.Registration with Password Mismatch", async ({ page }) => {
  73  |   await page.goto("https://demo.nopcommerce.com/register");
  74  |   await page.locator("#gender-male").check();
  75  |   await page.locator("#FirstName").fill("Pratiksha");
  76  |   await page.locator("#LastName").fill("Gupta");
  77  | 
  78  |   await page.locator("#Email").fill(`pratiksha${Date.now()}@gmail.com`);
  79  | 
  80  |   await page.locator("#Password").fill("Testing@12345");
  81  | 
  82  |   await page.locator("#ConfirmPassword").fill("Testing@11111");
  83  | 
  84  |   await page.locator("#register-button").click();
  85  | 
  86  |   await expect(page.locator(".field-validation-error")).toContainText(
  87  |     "The password and confirmation password do not match.",
  88  |   );
  89  | });
  90  | test('Registration with Existing Email',
  91  | async ({ page }) => {
  92  | 
  93  |     await page.goto(
  94  |         'https://demo.nopcommerce.com/register'
  95  |     );
  96  | 
  97  |     await page.locator('#gender-male').check();
  98  | 
  99  |     await page.locator('#FirstName')
  100 |         .fill('Pratiksha');
  101 | 
  102 |     await page.locator('#LastName')
  103 |         .fill('Gupta');
  104 | 
  105 |     await page.locator('#Email')
  106 |         .fill('testing123@gmail.com');
  107 | 
  108 |     await page.locator('#Password')
  109 |         .fill('Testing@12345');
  110 | 
  111 |     await page.locator('#ConfirmPassword')
  112 |         .fill('Testing@12345');
  113 | 
  114 |     await page.locator('#register-button')
  115 |         .click();
  116 | 
  117 |     // Verify Error Message
  118 |     await expect(
  119 |         page.locator('.message-error')
> 120 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  121 |         timeout: 20000
  122 |     });
  123 | 
  124 |     await expect(
  125 |         page.locator('.message-error')
  126 |     ).toContainText(
  127 |         'The specified email already exists'
  128 |     );
  129 | });
  130 | 
  131 | 
  132 | 
  133 | test("TC_AUTH_006 - Successful Registration", async ({ page }) => {
  134 |   const authPage = new AuthPage(page);
  135 |   // Open Register Page
  136 |   await page.goto("https://demo.nopcommerce.com/register");
  137 | 
  138 |   // Wait for page to load
  139 |   await page.waitForTimeout(3000);
  140 | 
  141 |   // Select Gender
  142 |   await page.locator("#gender-male").check();
  143 | 
  144 |   // Enter First Name
  145 |   await authPage.fillFirstName("Pratiksha");
  146 | 
  147 |   // Enter Last Name
  148 |   await page.locator("#LastName").fill("Gupta");
  149 | 
  150 |   // Enter Unique Email
  151 |   await page.locator("#Email").fill(`pratiksha${Date.now()}@gmail.com`);
  152 | 
  153 |   // Enter Password
  154 |   await page.locator("#Password").fill("Testing@12345");
  155 | 
  156 |   // Confirm Password
  157 |   await page.locator("#ConfirmPassword").fill("Testing@12345");
  158 | 
  159 |   // Click Register Button
  160 |   await page.locator("#register-button").click();
  161 | 
  162 |   // Wait after registration
  163 |   await page.waitForTimeout(5000);
  164 | 
  165 |   // Verify Success Message
  166 |   const bodyText = await page.locator("body").textContent();
  167 |   console.log(bodyText);
  168 | });
  169 | 
```