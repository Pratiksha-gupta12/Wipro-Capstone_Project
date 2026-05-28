# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/registration.spec.js >> Registration with Invalid Email
- Location: tests/auth/registration.spec.js:50:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.field-validation-error')
Expected substring: "Please enter a valid email address."
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.field-validation-error')

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
  - textbox "Email:": abc.com
  - text: "*"
  - heading "Company Details" [level=2]
  - text: "Company name:"
  - textbox "Company name:"
  - heading "Subscribe to newsletter" [level=2]
  - list:
    - listitem:
      - text: Newsletter
      - checkbox "Newsletter" [checked]
  - heading "Your Password" [level=2]
  - text: "Password:"
  - textbox "Password:": Testing@12345
  - text: "* Confirm password:"
  - textbox "Confirm password:": Testing@12345
  - text: "*"
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
  1   | const { test, expect } = require("@playwright/test");
  2   | 
  3   | const { AuthPage } = require("../../pages/AuthPage");
  4   | 
  5   | const { userData } = require("../../utils/testData");
  6   | 
  7   | 
  8   | test('1.Valid Registration', async ({ page }) => {
  9   | 
  10  |     const authPage = new AuthPage(page);
  11  | 
  12  |     await authPage.gotoRegisterPage();
  13  | 
  14  |     await authPage.registerUser(userData);
  15  | 
  16  |     await page.waitForLoadState(
  17  |         'domcontentloaded'
  18  |     );
  19  | 
  20  |     await page.waitForTimeout(5000);
  21  | 
  22  |     await expect(
  23  |         page.locator('.result')
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
> 71  |   await expect(page.locator(".field-validation-error")).toContainText(
      |                                                         ^ Error: expect(locator).toContainText(expected) failed
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
  124 |     ).toBeVisible({
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
```