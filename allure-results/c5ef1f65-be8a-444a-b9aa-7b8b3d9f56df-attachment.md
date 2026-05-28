# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_010 - Logout Functionality
- Location: tests/auth/login.spec.js:86:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.ico-logout')

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
              - /url: /register?returnUrl=%2Flogin
          - listitem [ref=e14]:
            - link "Log in" [ref=e15] [cursor=pointer]:
              - /url: /login?returnUrl=%2Flogin
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
        - heading "Welcome, Please Sign In!" [level=1] [ref=e57]
        - generic [ref=e58]:
          - generic [ref=e59]:
            - generic [ref=e60]:
              - heading "New Customer" [level=2] [ref=e61]
              - generic [ref=e62]: By creating an account on our website, you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
              - button "Register" [ref=e64] [cursor=pointer]
            - generic [ref=e66]:
              - generic [ref=e67]:
                - text: Login was unsuccessful. Please correct the errors and try again.
                - list [ref=e68]:
                  - listitem [ref=e69]: No customer account found
              - heading "Returning Customer" [level=2] [ref=e70]
              - generic [ref=e71]:
                - generic [ref=e72]:
                  - generic [ref=e73]: "Email:"
                  - textbox "Email:" [active] [ref=e74]
                - generic [ref=e75]:
                  - generic [ref=e76]: "Password:"
                  - textbox "Password:" [ref=e78]
                - generic [ref=e80]:
                  - checkbox "Remember me?" [ref=e81]
                  - generic [ref=e82]: Remember me?
                  - link "Forgot password?" [ref=e84] [cursor=pointer]:
                    - /url: /passwordrecovery
              - button "Log in" [ref=e86] [cursor=pointer]
          - generic [ref=e87]:
            - heading "About login / registration" [level=2] [ref=e89]
            - paragraph [ref=e91]: Put your login / registration information here. You can edit this in the admin site.
    - contentinfo [ref=e92]:
      - generic [ref=e93]:
        - navigation [ref=e94]:
          - heading "Information" [level=2] [ref=e95]
          - menu "Information" [ref=e96]:
            - menuitem "Sitemap" [ref=e97]:
              - link "Sitemap" [ref=e98] [cursor=pointer]:
                - /url: /sitemap
            - menuitem "Shipping & returns" [ref=e99]:
              - link "Shipping & returns" [ref=e100] [cursor=pointer]:
                - /url: /shipping-returns
            - menuitem "Privacy notice" [ref=e101]:
              - link "Privacy notice" [ref=e102] [cursor=pointer]:
                - /url: /privacy-notice
            - menuitem "Conditions of Use" [ref=e103]:
              - link "Conditions of Use" [ref=e104] [cursor=pointer]:
                - /url: /conditions-of-use
            - menuitem "About us" [ref=e105]:
              - link "About us" [ref=e106] [cursor=pointer]:
                - /url: /about-us
            - menuitem "Contact us" [ref=e107]:
              - link "Contact us" [ref=e108] [cursor=pointer]:
                - /url: /contactus
          - heading "Customer service" [level=2] [ref=e109]
          - menu "Customer service" [ref=e110]:
            - menuitem "Search" [ref=e111]:
              - link "Search" [ref=e112] [cursor=pointer]:
                - /url: /search
            - menuitem "News" [ref=e113]:
              - link "News" [ref=e114] [cursor=pointer]:
                - /url: /news
            - menuitem "Blog" [ref=e115]:
              - link "Blog" [ref=e116] [cursor=pointer]:
                - /url: /blog
            - menuitem "Recently viewed products" [ref=e117]:
              - link "Recently viewed products" [ref=e118] [cursor=pointer]:
                - /url: /recentlyviewedproducts
            - menuitem "Compare products list" [ref=e119]:
              - link "Compare products list" [ref=e120] [cursor=pointer]:
                - /url: /compareproducts
            - menuitem "New products" [ref=e121]:
              - link "New products" [ref=e122] [cursor=pointer]:
                - /url: /newproducts
          - heading "My account" [level=2] [ref=e123]
          - menu "My account" [ref=e124]:
            - menuitem "My account" [ref=e125]:
              - link "My account" [ref=e126] [cursor=pointer]:
                - /url: /customer/info
            - menuitem "Orders" [ref=e127]:
              - link "Orders" [ref=e128] [cursor=pointer]:
                - /url: /order/history
            - menuitem "Addresses" [ref=e129]:
              - link "Addresses" [ref=e130] [cursor=pointer]:
                - /url: /customer/addresses
            - menuitem "Shopping cart" [ref=e131]:
              - link "Shopping cart" [ref=e132] [cursor=pointer]:
                - /url: /cart
            - menuitem "Wishlist" [ref=e133]:
              - link "Wishlist" [ref=e134] [cursor=pointer]:
                - /url: /wishlist
            - menuitem "Apply for vendor account" [ref=e135]:
              - link "Apply for vendor account" [ref=e136] [cursor=pointer]:
                - /url: /vendor/apply
        - generic [ref=e137]:
          - generic [ref=e138]:
            - heading "Follow us" [level=2] [ref=e139]
            - list [ref=e140]:
              - listitem [ref=e141]:
                - link "Facebook" [ref=e142] [cursor=pointer]:
                  - /url: https://www.facebook.com/nopCommerce
              - listitem [ref=e143]:
                - link "Twitter" [ref=e144] [cursor=pointer]:
                  - /url: https://twitter.com/nopCommerce
              - listitem [ref=e145]:
                - link "RSS" [ref=e146] [cursor=pointer]:
                  - /url: /news/rss/1
              - listitem [ref=e147]:
                - link "YouTube" [ref=e148] [cursor=pointer]:
                  - /url: https://www.youtube.com/user/nopCommerce
              - listitem [ref=e149]:
                - link "Instagram" [ref=e150] [cursor=pointer]:
                  - /url: https://www.instagram.com/nopcommerce_official
          - form [ref=e151]:
            - heading "Newsletter" [level=2] [ref=e152]
            - generic [ref=e154]:
              - textbox "Sign up for our newsletter" [ref=e155]:
                - /placeholder: Enter your email here...
              - button "Subscribe" [ref=e156] [cursor=pointer]
      - generic [ref=e157]:
        - generic [ref=e158]: Copyright © 2026 nopCommerce demo store. All rights reserved.
        - generic [ref=e159]:
          - text: Powered by
          - link "nopCommerce" [ref=e160] [cursor=pointer]:
            - /url: https://www.nopcommerce.com/
```

# Test source

```ts
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
> 112 |         .click();
      |          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  113 | 
  114 |     // Verify Login Link Visible
  115 |     await expect(
  116 |         page.locator('.ico-login')
  117 |     ).toBeVisible();
  118 | });
```