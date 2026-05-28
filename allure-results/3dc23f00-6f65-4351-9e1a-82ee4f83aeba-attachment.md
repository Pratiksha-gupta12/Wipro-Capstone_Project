# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/registration.spec.js >> 1.Valid Registration
- Location: tests/auth/registration.spec.js:8:1

# Error details

```
TypeError: authPage.registerUser is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - status
  - generic [ref=e2]:
    - banner [ref=e3]:
      - link "Skip navigation" [ref=e4] [cursor=pointer]:
        - /url: "#main"
      - generic [ref=e5]:
        - combobox "Currency selector" [ref=e8]:
          - option "US Dollar" [selected]
          - option "Euro"
        - list [ref=e11]:
          - listitem [ref=e12]:
            - link "Register" [ref=e13] [cursor=pointer]:
              - /url: /register?returnUrl=%2Fregister
          - listitem [ref=e14]:
            - link "Log in" [ref=e15] [cursor=pointer]:
              - /url: /login?returnUrl=%2Fregister
          - listitem [ref=e16]:
            - link "Wishlist (0)" [ref=e17] [cursor=pointer]:
              - /url: /wishlist
              - generic [ref=e18]: Wishlist
              - generic [ref=e19]: (0)
          - listitem [ref=e20]:
            - link "Shopping cart (0)" [ref=e21] [cursor=pointer]:
              - /url: /cart
              - generic [ref=e22]: Shopping cart
              - generic [ref=e23]: (0)
      - generic [ref=e24]:
        - link "nopCommerce demo store" [ref=e26] [cursor=pointer]:
          - /url: /
          - img "nopCommerce demo store" [ref=e27]
        - search [ref=e28]:
          - generic [ref=e29]:
            - textbox "Search store" [ref=e30]
            - button "Search" [ref=e31] [cursor=pointer]
    - navigation [ref=e33]:
      - menu "Categories" [ref=e34]:
        - menuitem "Computers" [ref=e35]:
          - button "Computers" [ref=e37] [cursor=pointer]
        - menuitem "Electronics" [ref=e38]:
          - button "Electronics" [ref=e40] [cursor=pointer]
        - menuitem "Apparel" [ref=e41]:
          - button "Apparel" [ref=e43] [cursor=pointer]
        - menuitem "Digital downloads" [ref=e44]:
          - button "Digital downloads" [ref=e45] [cursor=pointer]
        - menuitem "Books" [ref=e46]:
          - button "Books" [ref=e47] [cursor=pointer]
        - menuitem "Jewelry" [ref=e48]:
          - button "Jewelry" [ref=e49] [cursor=pointer]
        - menuitem "Gift Cards" [ref=e50]:
          - button "Gift Cards" [ref=e51] [cursor=pointer]
    - main [ref=e52]:
      - generic [ref=e55]:
        - heading "Register" [level=1] [ref=e57]
        - generic [ref=e59]:
          - generic [ref=e60]:
            - heading "Your Personal Details" [level=2] [ref=e61]
            - generic [ref=e62]:
              - generic [ref=e63]:
                - generic [ref=e64]: "Gender:"
                - generic [ref=e65]:
                  - generic [ref=e66]:
                    - radio "Male" [ref=e67]
                    - text: Male
                  - generic [ref=e68]:
                    - radio "Female" [ref=e69]
                    - text: Female
              - generic [ref=e70]:
                - generic [ref=e71]: "First name:"
                - textbox "First name:" [ref=e72]
                - text: "*"
              - generic [ref=e73]:
                - generic [ref=e74]: "Last name:"
                - textbox "Last name:" [ref=e75]
                - text: "*"
              - generic [ref=e76]:
                - generic [ref=e77]: "Email:"
                - textbox "Email:" [ref=e78]
                - text: "*"
          - generic [ref=e79]:
            - heading "Company Details" [level=2] [ref=e80]
            - generic [ref=e82]:
              - generic [ref=e83]: "Company name:"
              - textbox "Company name:" [ref=e84]
          - generic [ref=e85]:
            - heading "Subscribe to newsletter" [level=2] [ref=e86]
            - list [ref=e90]:
              - listitem [ref=e91]:
                - generic [ref=e92]: Newsletter
                - checkbox "Newsletter" [checked] [ref=e93]
          - generic [ref=e94]:
            - heading "Your Password" [level=2] [ref=e95]
            - generic [ref=e96]:
              - generic [ref=e97]:
                - generic [ref=e98]: "Password:"
                - textbox "Password:" [ref=e99]
                - text: "*"
              - generic [ref=e100]:
                - generic [ref=e101]: "Confirm password:"
                - textbox "Confirm password:" [ref=e102]
                - text: "*"
          - button "Register" [ref=e104] [cursor=pointer]
    - contentinfo [ref=e105]:
      - generic [ref=e106]:
        - navigation [ref=e107]:
          - heading "Information" [level=2] [ref=e108]
          - menu "Information" [ref=e109]:
            - menuitem "Sitemap" [ref=e110]:
              - link "Sitemap" [ref=e111] [cursor=pointer]:
                - /url: /sitemap
            - menuitem "Shipping & returns" [ref=e112]:
              - link "Shipping & returns" [ref=e113] [cursor=pointer]:
                - /url: /shipping-returns
            - menuitem "Privacy notice" [ref=e114]:
              - link "Privacy notice" [ref=e115] [cursor=pointer]:
                - /url: /privacy-notice
            - menuitem "Conditions of Use" [ref=e116]:
              - link "Conditions of Use" [ref=e117] [cursor=pointer]:
                - /url: /conditions-of-use
            - menuitem "About us" [ref=e118]:
              - link "About us" [ref=e119] [cursor=pointer]:
                - /url: /about-us
            - menuitem "Contact us" [ref=e120]:
              - link "Contact us" [ref=e121] [cursor=pointer]:
                - /url: /contactus
          - heading "Customer service" [level=2] [ref=e122]
          - menu "Customer service" [ref=e123]:
            - menuitem "Search" [ref=e124]:
              - link "Search" [ref=e125] [cursor=pointer]:
                - /url: /search
            - menuitem "News" [ref=e126]:
              - link "News" [ref=e127] [cursor=pointer]:
                - /url: /news
            - menuitem "Blog" [ref=e128]:
              - link "Blog" [ref=e129] [cursor=pointer]:
                - /url: /blog
            - menuitem "Recently viewed products" [ref=e130]:
              - link "Recently viewed products" [ref=e131] [cursor=pointer]:
                - /url: /recentlyviewedproducts
            - menuitem "Compare products list" [ref=e132]:
              - link "Compare products list" [ref=e133] [cursor=pointer]:
                - /url: /compareproducts
            - menuitem "New products" [ref=e134]:
              - link "New products" [ref=e135] [cursor=pointer]:
                - /url: /newproducts
          - heading "My account" [level=2] [ref=e136]
          - menu "My account" [ref=e137]:
            - menuitem "My account" [ref=e138]:
              - link "My account" [ref=e139] [cursor=pointer]:
                - /url: /customer/info
            - menuitem "Orders" [ref=e140]:
              - link "Orders" [ref=e141] [cursor=pointer]:
                - /url: /order/history
            - menuitem "Addresses" [ref=e142]:
              - link "Addresses" [ref=e143] [cursor=pointer]:
                - /url: /customer/addresses
            - menuitem "Shopping cart" [ref=e144]:
              - link "Shopping cart" [ref=e145] [cursor=pointer]:
                - /url: /cart
            - menuitem "Wishlist" [ref=e146]:
              - link "Wishlist" [ref=e147] [cursor=pointer]:
                - /url: /wishlist
            - menuitem "Apply for vendor account" [ref=e148]:
              - link "Apply for vendor account" [ref=e149] [cursor=pointer]:
                - /url: /vendor/apply
        - generic [ref=e150]:
          - generic [ref=e151]:
            - heading "Follow us" [level=2] [ref=e152]
            - list [ref=e153]:
              - listitem [ref=e154]:
                - link "Facebook" [ref=e155] [cursor=pointer]:
                  - /url: https://www.facebook.com/nopCommerce
              - listitem [ref=e156]:
                - link "Twitter" [ref=e157] [cursor=pointer]:
                  - /url: https://twitter.com/nopCommerce
              - listitem [ref=e158]:
                - link "RSS" [ref=e159] [cursor=pointer]:
                  - /url: /news/rss/1
              - listitem [ref=e160]:
                - link "YouTube" [ref=e161] [cursor=pointer]:
                  - /url: https://www.youtube.com/user/nopCommerce
              - listitem [ref=e162]:
                - link "Instagram" [ref=e163] [cursor=pointer]:
                  - /url: https://www.instagram.com/nopcommerce_official
          - form [ref=e164]:
            - heading "Newsletter" [level=2] [ref=e165]
            - generic [ref=e167]:
              - textbox "Sign up for our newsletter" [ref=e168]:
                - /placeholder: Enter your email here...
              - button "Subscribe" [ref=e169] [cursor=pointer]
      - generic [ref=e170]:
        - generic [ref=e171]: Copyright © 2026 nopCommerce demo store. All rights reserved.
        - generic [ref=e172]:
          - text: Powered by
          - link "nopCommerce" [ref=e173] [cursor=pointer]:
            - /url: https://www.nopcommerce.com/
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | const { AuthPage } = require('../../pages/AuthPage');
  4   | 
  5   | const { userData } = require('../../utils/testData');
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
> 16  |     await authPage.registerUser(userData);
      |                    ^ TypeError: authPage.registerUser is not a function
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
```