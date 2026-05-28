# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/registration.spec.js >> Registration with Existing Email
- Location: tests/auth/registration.spec.js:112:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.validation-summary-errors')
Expected substring: "The specified email already exists"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.validation-summary-errors')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a01a7fb8caea327c
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  49  |     // Select Gender
  50  |     await page.locator('#gender-male').check();
  51  |     await page.locator('#FirstName')
  52  |         .fill('Pratiksha');
  53  |     await page.locator('#LastName')
  54  |         .fill('Gupta');
  55  | 
  56  |     await page.locator('#Email')
  57  |         .fill('abc.com');
  58  | 
  59  |     // Enter Password
  60  |     await page.locator('#Password')
  61  |         .fill('Testing@12345');
  62  | 
  63  |     // Confirm Password
  64  |     await page.locator('#ConfirmPassword')
  65  |         .fill('Testing@12345');
  66  | 
  67  |     // Click Register
  68  |     await page.locator('#register-button')
  69  |         .click();
  70  | 
  71  |     // Verify Error Message
  72  |     await expect(
  73  |     page.locator('.field-validation-error')
  74  | ).toContainText(
  75  |     'Please enter a valid email address.'
  76  | );
  77  | });
  78  | 
  79  | 
  80  | test('4.Registration with Password Mismatch',
  81  | async ({ page }) => {
  82  | 
  83  |     await page.goto(
  84  |         'https://demo.nopcommerce.com/register'
  85  |     );
  86  |     await page.locator('#gender-male').check();
  87  |     await page.locator('#FirstName')
  88  |         .fill('Pratiksha');
  89  |     await page.locator('#LastName')
  90  |         .fill('Gupta');
  91  | 
  92  |     await page.locator('#Email')
  93  |         .fill(`pratiksha${Date.now()}@gmail.com`);
  94  | 
  95  |     await page.locator('#Password')
  96  |         .fill('Testing@12345');
  97  | 
  98  |     await page.locator('#ConfirmPassword')
  99  |         .fill('Testing@11111');
  100 | 
  101 |     await page.locator('#register-button')
  102 |         .click();
  103 | 
  104 |     await expect(
  105 |         page.locator('.field-validation-error')
  106 |     ).toContainText(
  107 |         'The password and confirmation password do not match.'
  108 |     );
  109 | });
  110 | 
  111 | 
  112 | test('Registration with Existing Email',
  113 | async ({ page }) => {
  114 | 
  115 |     await page.goto(
  116 |         'https://demo.nopcommerce.com/register'
  117 |     );
  118 | 
  119 |     // Select Gender
  120 |     await page.locator('#gender-male').check();
  121 | 
  122 |     // Enter First Name
  123 |     await page.locator('#FirstName')
  124 |         .fill('Pratiksha');
  125 | 
  126 |     // Enter Last Name
  127 |     await page.locator('#LastName')
  128 |         .fill('Gupta');
  129 | 
  130 |     // Enter Already Registered Email
  131 |     await page.locator('#Email')
  132 |         .fill('testing123@gmail.com');
  133 | 
  134 |     // Enter Password
  135 |     await page.locator('#Password')
  136 |         .fill('Testing@12345');
  137 | 
  138 |     // Confirm Password
  139 |     await page.locator('#ConfirmPassword')
  140 |         .fill('Testing@12345');
  141 | 
  142 |     // Click Register
  143 |     await page.locator('#register-button')
  144 |         .click();
  145 | 
  146 |     // Verify Error Message
  147 |    await expect(
  148 |     page.locator('.validation-summary-errors')
> 149 | ).toContainText(
      |   ^ Error: expect(locator).toContainText(expected) failed
  150 |     'The specified email already exists'
  151 | );
  152 | });
  153 | 
  154 | 
  155 | test(
  156 | 'TC_AUTH_006 - Successful Registration',
  157 | async ({ page }) => {
  158 | 
  159 |     const authPage = new AuthPage(page);
  160 |     // Open Register Page
  161 |     await page.goto(
  162 |         'https://demo.nopcommerce.com/register'
  163 |     );
  164 | 
  165 |     // Wait for page to load
  166 |     await page.waitForTimeout(3000);
  167 | 
  168 |     // Select Gender
  169 |     await page.locator('#gender-male')
  170 |         .check();
  171 | 
  172 |     // Enter First Name
  173 |    await authPage.fillFirstName('Pratiksha');
  174 | 
  175 |     // Enter Last Name
  176 |     await page.locator('#LastName')
  177 |         .fill('Gupta');
  178 | 
  179 |     // Enter Unique Email
  180 |     await page.locator('#Email')
  181 |         .fill(`pratiksha${Date.now()}@gmail.com`);
  182 | 
  183 |     // Enter Password
  184 |     await page.locator('#Password')
  185 |         .fill('Testing@12345');
  186 | 
  187 |     // Confirm Password
  188 |     await page.locator('#ConfirmPassword')
  189 |         .fill('Testing@12345');
  190 | 
  191 |     // Click Register Button
  192 |     await page.locator('#register-button')
  193 |         .click();
  194 | 
  195 |     // Wait after registration
  196 |     await page.waitForTimeout(5000);
  197 | 
  198 |     // Verify Success Message
  199 |     const bodyText = await page.locator('body')
  200 |     .textContent();
  201 |     console.log(bodyText)
  202 | 
  203 | 
  204 | });
  205 | 
  206 | 
  207 | 
  208 | 
  209 | 
  210 | 
```