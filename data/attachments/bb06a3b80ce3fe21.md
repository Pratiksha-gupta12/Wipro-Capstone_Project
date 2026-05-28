# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/registration.spec.js >> 4.Registration with Password Mismatch
- Location: tests/auth/registration.spec.js:80:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#ConfirmPassword-error')
Expected substring: "The password and confirmation password do not match."
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#ConfirmPassword-error')

```

```yaml
- status
- banner:
  - link "Skip navigation":
    - /url: "#main"
  - combobox "Currency selector":
    - option "US Dollar" [selected]
    - option "Euro"
  - list:
    - listitem:
      - link "Register":
        - /url: /register?returnUrl=%2Fregister
    - listitem:
      - link "Log in":
        - /url: /login?returnUrl=%2Fregister
    - listitem:
      - link "Wishlist (0)":
        - /url: /wishlist
    - listitem:
      - link "Shopping cart (0)":
        - /url: /cart
  - link "nopCommerce demo store":
    - /url: /
    - img "nopCommerce demo store"
  - search:
    - textbox "Search store"
    - button "Search"
- navigation:
  - menu "Categories":
    - menuitem "Computers":
      - button "Computers"
    - menuitem "Electronics":
      - button "Electronics"
    - menuitem "Apparel":
      - button "Apparel"
    - menuitem "Digital downloads":
      - button "Digital downloads"
    - menuitem "Books":
      - button "Books"
    - menuitem "Jewelry":
      - button "Jewelry"
    - menuitem "Gift Cards":
      - button "Gift Cards"
- main:
  - heading "Register" [level=1]
  - heading "Your Personal Details" [level=2]
  - text: "Gender:"
  - radio "Male" [checked]
  - text: Male
  - radio "Female"
  - text: "Female First name:"
  - textbox "First name:": Pratiksha
  - text: "* Last name:"
  - textbox "Last name:": Gupta
  - text: "* Email:"
  - textbox "Email:": pratiksha1779774114462@gmail.com
  - text: "*"
  - heading "Company Details" [level=2]
  - text: "Company name:"
  - textbox "Company name:"
  - heading "Subscribe to newsletter" [level=2]
  - list:
    - listitem:
      - text: IsActive
      - checkbox "IsActive" [checked]
  - heading "Your Password" [level=2]
  - text: "Password:"
  - textbox "Password:"
  - text: "* Confirm password:"
  - textbox "Confirm password:"
  - text: "* The password and confirmation password do not match."
  - button "Register"
- contentinfo:
  - navigation:
    - heading "Information" [level=2]
    - menu "Information":
      - menuitem "Sitemap":
        - link "Sitemap":
          - /url: /sitemap
      - menuitem "Shipping & returns":
        - link "Shipping & returns":
          - /url: /shipping-returns
      - menuitem "Privacy notice":
        - link "Privacy notice":
          - /url: /privacy-notice
      - menuitem "Conditions of Use":
        - link "Conditions of Use":
          - /url: /conditions-of-use
      - menuitem "About us":
        - link "About us":
          - /url: /about-us
      - menuitem "Contact us":
        - link "Contact us":
          - /url: /contactus
    - heading "Customer service" [level=2]
    - menu "Customer service":
      - menuitem "Search":
        - link "Search":
          - /url: /search
      - menuitem "News":
        - link "News":
          - /url: /news
      - menuitem "Blog":
        - link "Blog":
          - /url: /blog
      - menuitem "Recently viewed products":
        - link "Recently viewed products":
          - /url: /recentlyviewedproducts
      - menuitem "Compare products list":
        - link "Compare products list":
          - /url: /compareproducts
      - menuitem "New products":
        - link "New products":
          - /url: /newproducts
    - heading "My account" [level=2]
    - menu "My account":
      - menuitem "My account":
        - link "My account":
          - /url: /customer/info
      - menuitem "Orders":
        - link "Orders":
          - /url: /order/history
      - menuitem "Addresses":
        - link "Addresses":
          - /url: /customer/addresses
      - menuitem "Shopping cart":
        - link "Shopping cart":
          - /url: /cart
      - menuitem "Wishlist":
        - link "Wishlist":
          - /url: /wishlist
      - menuitem "Apply for vendor account":
        - link "Apply for vendor account":
          - /url: /vendor/apply
  - heading "Follow us" [level=2]
  - list:
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/nopCommerce
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/nopCommerce
    - listitem:
      - link "RSS":
        - /url: /news/rss/1
    - listitem:
      - link "YouTube":
        - /url: https://www.youtube.com/user/nopCommerce
    - listitem:
      - link "Instagram":
        - /url: https://www.instagram.com/nopcommerce_official
  - form:
    - heading "Newsletter" [level=2]
    - textbox "Sign up for our newsletter":
      - /placeholder: Enter your email here...
    - button "Subscribe"
  - text: Copyright © 2026 nopCommerce demo store. All rights reserved. Powered by
  - link "nopCommerce":
    - /url: https://www.nopcommerce.com/
```

# Test source

```ts
  6   | 
  7   | 
  8   | test('1.Valid Registration', async ({ page }) => {
  9   | 
  10  |     const authPage = new AuthPage(page);
  11  | 
  12  |     // Open Register Page
  13  |     await authPage.gotoRegisterPage();
  14  | 
  15  |     // Register User
  16  |     await authPage.registerUser(userData);
  17  | 
  18  |     // Verify Success Message
  19  |     await expect(authPage.successMessage)
  20  |         .toContainText('Your registration completed');
  21  | });
  22  | 
  23  | test('2.Registration with Empty Fields',async ({ page }) => {
  24  | 
  25  |     await page.goto(
  26  |         'https://demo.nopcommerce.com/register'
  27  |     );
  28  | 
  29  |     await page.locator('#register-button').click();
  30  | 
  31  |     await expect(
  32  |         page.locator('.field-validation-error')
  33  |     ).toContainText([
  34  |         'First name is required.',
  35  |         'Last name is required.',
  36  |         'Email is required.',
  37  |         'Password is required.'
  38  |     ]);
  39  | });
  40  | 
  41  | 
  42  | test('Registration with Invalid Email', async({ page }) => {
  43  | 
  44  |     // Open Register Page
  45  |     await page.goto(
  46  |         'https://demo.nopcommerce.com/register'
  47  |     );
  48  | 
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
  73  |     page.locator('#Email-error')
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
  105 |         page.locator('#ConfirmPassword-error')
> 106 |     ).toContainText(
      |       ^ Error: expect(locator).toContainText(expected) failed
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
  149 | ).toContainText(
  150 |     'The specified email already exists'
  151 | );
  152 | });
  153 | 
  154 | 
  155 | test(
  156 | 'TC_AUTH_006 - Successful Registration',
  157 | async ({ page }) => {
  158 | 
  159 |     // Open Register Page
  160 |     await page.goto(
  161 |         'https://demo.nopcommerce.com/register'
  162 |     );
  163 | 
  164 |     // Wait for page to load
  165 |     await page.waitForTimeout(3000);
  166 | 
  167 |     // Select Gender
  168 |     await page.locator('#gender-male')
  169 |         .check();
  170 | 
  171 |     // Enter First Name
  172 |    await authPage.fillFirstName('Pratiksha');
  173 | 
  174 |     // Enter Last Name
  175 |     await page.locator('#LastName')
  176 |         .fill('Gupta');
  177 | 
  178 |     // Enter Unique Email
  179 |     await page.locator('#Email')
  180 |         .fill(`pratiksha${Date.now()}@gmail.com`);
  181 | 
  182 |     // Enter Password
  183 |     await page.locator('#Password')
  184 |         .fill('Testing@12345');
  185 | 
  186 |     // Confirm Password
  187 |     await page.locator('#ConfirmPassword')
  188 |         .fill('Testing@12345');
  189 | 
  190 |     // Click Register Button
  191 |     await page.locator('#register-button')
  192 |         .click();
  193 | 
  194 |     // Wait after registration
  195 |     await page.waitForTimeout(5000);
  196 | 
  197 |     // Verify Success Message
  198 |     const bodyText = await page.locator('body')
  199 |     .textContent();
  200 |     console.log(bodyText)
  201 | 
  202 | 
  203 | });
  204 | 
  205 | 
  206 | 
```