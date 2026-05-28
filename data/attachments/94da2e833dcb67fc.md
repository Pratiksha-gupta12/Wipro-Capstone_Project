# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_008 - Login with Empty Fields
- Location: tests/auth/login.spec.js:36:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('#Email-error')
Expected: "Please enter your email"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#Email-error')

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
        - /url: /register?returnUrl=%2F
    - listitem:
      - link "Log in":
        - /url: /login?returnUrl=%2F
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
  - heading "Welcome, Please Sign In!" [level=1]
  - heading "New Customer" [level=2]
  - text: By creating an account on our website, you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
  - button "Register"
  - heading "Returning Customer" [level=2]
  - text: "Email:"
  - textbox "Email:"
  - text: "Please enter your email Password:"
  - textbox "Password:"
  - checkbox "Remember me?"
  - text: Remember me?
  - link "Forgot password?":
    - /url: /passwordrecovery
  - button "Log in"
  - heading "About login / registration" [level=2]
  - paragraph: Put your login / registration information here. You can edit this in the admin site.
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
  41 |         'https://demo.nopcommerce.com/login?returnUrl=%2F'
  42 |     );
  43 | 
  44 |     // Click Login Button
  45 |     await page.locator('.button-1.login-button').click();
  46 | 
  47 |     // Verify Email Validation Message
  48 |     await expect(
  49 |         page.locator('#Email-error')
> 50 |     ).toHaveText(
     |       ^ Error: expect(locator).toHaveText(expected) failed
  51 |         'Please enter your email'
  52 |     );
  53 | });
  54 | 
  55 | 
```