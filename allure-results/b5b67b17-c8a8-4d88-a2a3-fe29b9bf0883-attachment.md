# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/registration.spec.js >> Registration with Existing Email
- Location: tests/auth/registration.spec.js:94:1

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
  - code: a01bd13a59d4a555
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  24  |     ).toBeVisible({
  25  |         timeout: 30000
  26  |     });
  27  | 
  28  |     await expect(
  29  |         page.locator('.result')
  30  |     ).toHaveText(
  31  |         'Your registration completed'
  32  |     );
  33  | });
  34  | 
  35  | 
  36  | 
  37  | test("2.Registration with Empty Fields", async ({ page }) => {
  38  |   await page.goto("https://demo.nopcommerce.com/register");
  39  | 
  40  |   await page.locator("#register-button").click();
  41  | 
  42  |   await expect(page.locator(".field-validation-error")).toContainText([
  43  |     "First name is required.",
  44  |     "Last name is required.",
  45  |     "Email is required.",
  46  |     "Password is required.",
  47  |   ]);
  48  | });
  49  | 
  50  | test("Registration with Invalid Email", async ({ page }) => {
  51  |   // Open Register Page
  52  |   await page.goto("https://demo.nopcommerce.com/register");
  53  | 
  54  |   // Select Gender
  55  |   await page.locator("#gender-male").check();
  56  |   await page.locator("#FirstName").fill("Pratiksha");
  57  |   await page.locator("#LastName").fill("Gupta");
  58  | 
  59  |   await page.locator("#Email").fill("abc.com");
  60  | 
  61  |   // Enter Password
  62  |   await page.locator("#Password").fill("Testing@12345");
  63  | 
  64  |   // Confirm Password
  65  |   await page.locator("#ConfirmPassword").fill("Testing@12345");
  66  | 
  67  |   // Click Register
  68  |   await page.locator("#register-button").click();
  69  | 
  70  |   // Verify Error Message
  71  |   await expect(page.locator(".field-validation-error")).toContainText(
  72  |     "Please enter a valid email address.",
  73  |   );
  74  | });
  75  | 
  76  | test("4.Registration with Password Mismatch", async ({ page }) => {
  77  |   await page.goto("https://demo.nopcommerce.com/register");
  78  |   await page.locator("#gender-male").check();
  79  |   await page.locator("#FirstName").fill("Pratiksha");
  80  |   await page.locator("#LastName").fill("Gupta");
  81  | 
  82  |   await page.locator("#Email").fill(`pratiksha${Date.now()}@gmail.com`);
  83  | 
  84  |   await page.locator("#Password").fill("Testing@12345");
  85  | 
  86  |   await page.locator("#ConfirmPassword").fill("Testing@11111");
  87  | 
  88  |   await page.locator("#register-button").click();
  89  | 
  90  |   await expect(page.locator(".field-validation-error")).toContainText(
  91  |     "The password and confirmation password do not match.",
  92  |   );
  93  | });
  94  | test('Registration with Existing Email',
  95  | async ({ page }) => {
  96  | 
  97  |     await page.goto(
  98  |         'https://demo.nopcommerce.com/register'
  99  |     );
  100 | 
  101 |     await page.locator('#gender-male').check();
  102 | 
  103 |     await page.locator('#FirstName')
  104 |         .fill('Pratiksha');
  105 | 
  106 |     await page.locator('#LastName')
  107 |         .fill('Gupta');
  108 | 
  109 |     await page.locator('#Email')
  110 |         .fill('testing123@gmail.com');
  111 | 
  112 |     await page.locator('#Password')
  113 |         .fill('Testing@12345');
  114 | 
  115 |     await page.locator('#ConfirmPassword')
  116 |         .fill('Testing@12345');
  117 | 
  118 |     await page.locator('#register-button')
  119 |         .click();
  120 | 
  121 |     // Verify Error Message
  122 |     await expect(
  123 |         page.locator('.message-error')
> 124 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  125 |         timeout: 20000
  126 |     });
  127 | 
  128 |     await expect(
  129 |         page.locator('.message-error')
  130 |     ).toContainText(
  131 |         'The specified email already exists'
  132 |     );
  133 | });
  134 | 
  135 | 
  136 | 
  137 | test("TC_AUTH_006 - Successful Registration", async ({ page }) => {
  138 |   const authPage = new AuthPage(page);
  139 |   // Open Register Page
  140 |   await page.goto("https://demo.nopcommerce.com/register");
  141 | 
  142 |   // Wait for page to load
  143 |   await page.waitForTimeout(3000);
  144 | 
  145 |   // Select Gender
  146 |   await page.locator("#gender-male").check();
  147 | 
  148 |   // Enter First Name
  149 |   await authPage.fillFirstName("Pratiksha");
  150 | 
  151 |   // Enter Last Name
  152 |   await page.locator("#LastName").fill("Gupta");
  153 | 
  154 |   // Enter Unique Email
  155 |   await page.locator("#Email").fill(`pratiksha${Date.now()}@gmail.com`);
  156 | 
  157 |   // Enter Password
  158 |   await page.locator("#Password").fill("Testing@12345");
  159 | 
  160 |   // Confirm Password
  161 |   await page.locator("#ConfirmPassword").fill("Testing@12345");
  162 | 
  163 |   // Click Register Button
  164 |   await page.locator("#register-button").click();
  165 | 
  166 |   // Wait after registration
  167 |   await page.waitForTimeout(5000);
  168 | 
  169 |   // Verify Success Message
  170 |   const bodyText = await page.locator("body").textContent();
  171 |   console.log(bodyText);
  172 | });
  173 | 
```