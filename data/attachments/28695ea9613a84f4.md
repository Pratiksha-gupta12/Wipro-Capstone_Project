# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_009 - Successful Login
- Location: tests/auth/login.spec.js:224:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.ico-account')
Expected: visible
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for locator('.ico-account')

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
        - /url: /register?returnUrl=%2Flogin
    - listitem:
      - link "Log in":
        - /url: /login?returnUrl=%2Flogin
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
  - text: Login was unsuccessful. Please correct the errors and try again.
  - list:
    - listitem: No customer account found
  - heading "Returning Customer" [level=2]
  - text: "Email:"
  - textbox "Email:"
  - text: "Password:"
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
  146 | // });
  147 | 
  148 | 
  149 | const { test, expect } = require('@playwright/test');
  150 | 
  151 | // test.describe.configure({
  152 | //    mode: 'serial'
  153 | // });
  154 | test.setTimeout(120000);
  155 | 
  156 | 
  157 | // ======================================================
  158 | // TC_AUTH_007 - Login with Invalid Password
  159 | // ======================================================
  160 | 
  161 | 
  162 | 
  163 | test('TC_AUTH_007 - Login with Invalid Password',
  164 | async ({ page }) => {
  165 | 
  166 |     await page.goto(
  167 |         'https://demo.nopcommerce.com/login'
  168 |     );
  169 | 
  170 |     await page.locator('#Email')
  171 |         .fill('pratiksha@gmail.com');
  172 | 
  173 |     await page.locator('#Password')
  174 |         .fill('WrongPassword123');
  175 | 
  176 |     await page.locator('.login-button')
  177 |         .click();
  178 | 
  179 |     await page.waitForTimeout(5000);
  180 |     // Wait for error message
  181 |     await expect(
  182 |         page.locator('.message-error')
  183 |     ).toBeVisible({ timeout: 15000 });
  184 | 
  185 |     // Verify Error Text
  186 |     await expect(
  187 |         page.locator('.message-error')
  188 |     ).toContainText(
  189 |         'Login was unsuccessful'
  190 |     );
  191 | });
  192 | 
  193 | 
  194 | 
  195 | // ======================================================
  196 | // TC_AUTH_008 - Login with Empty Fields
  197 | // ======================================================
  198 | 
  199 | test('TC_AUTH_008 - Login with Empty Fields',
  200 | async ({ page }) => {
  201 | 
  202 |     await page.goto(
  203 |         'https://demo.nopcommerce.com/login'
  204 |     );
  205 | 
  206 |     await page.locator('.login-button')
  207 |         .click();
  208 |         await page.waitForTimeout(5000);
  209 | 
  210 |     // Verify validation message
  211 |     await expect(
  212 |         page.locator('.field-validation-error')
  213 |     ).toContainText(
  214 |         'Please enter your email'
  215 |     );
  216 | });
  217 | 
  218 | 
  219 | 
  220 | 
  221 | // ======================================================
  222 | // TC_AUTH_009 - Successful Login
  223 | // ======================================================
  224 | test('TC_AUTH_009 - Successful Login',
  225 | async ({ page }) => {
  226 | 
  227 |     await page.goto(
  228 |         'https://demo.nopcommerce.com/login'
  229 |     );
  230 | 
  231 |     await page.locator('#Email')
  232 |         .fill('pratiksha@gmail.com');
  233 | 
  234 |     await page.locator('#Password')
  235 |         .fill('abcdef');
  236 | 
  237 |     await page.locator('.login-button')
  238 |         .click();
  239 | 
  240 |     // wait for redirect
  241 |     await page.waitForTimeout(5000);
  242 | 
  243 |     // verify login success
  244 |     await expect(
  245 |         page.locator('.ico-account')
> 246 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  247 |         timeout: 30000
  248 |     });
  249 | 
  250 |     console.log('Login Successful');
  251 | });
  252 | 
  253 | // ======================================================
  254 | // TC_AUTH_010 - Logout Functionality
  255 | // ======================================================
  256 | 
  257 | test('TC_AUTH_010 - Logout Functionality',
  258 | async ({ page }) => {
  259 | 
  260 |     await page.goto(
  261 |         'https://demo.nopcommerce.com/login'
  262 |     );
  263 | 
  264 |     await page.locator('#Email')
  265 |         .fill('testing123@gmail.com');
  266 | 
  267 |     await page.locator('#Password')
  268 |         .fill('Testing@12345');
  269 | 
  270 |     await page.locator('.login-button')
  271 |         .click();
  272 |         await page.waitForTimeout(5000);
  273 | 
  274 |     // Wait for logout button
  275 |     await expect(
  276 |         page.locator('.ico-logout')
  277 |     ).toBeVisible({
  278 |         timeout: 20000
  279 |     });
  280 | 
  281 |     // Click Logout
  282 |     await page.locator('.ico-logout')
  283 |         .click();
  284 | 
  285 |     // Verify login button visible again
  286 |     await expect(
  287 |         page.locator('.ico-login')
  288 |     ).toBeVisible({
  289 |         timeout: 15000
  290 |     });
  291 | });
  292 | 
  293 | 
  294 | 
  295 | 
  296 | // ======================================================
  297 | // TC_AUTH_011 - Forgot Password
  298 | // ======================================================
  299 | 
  300 | test('TC_AUTH_011 - Forgot Password',
  301 | async ({ page }) => {
  302 | 
  303 |     await page.goto(
  304 |         'https://demo.nopcommerce.com/login'
  305 |     );
  306 | 
  307 |     await page.locator('.forgot-password')
  308 |         .click();
  309 | 
  310 |     // Use registered email
  311 |     await page.locator('#Email')
  312 |         .fill('testing123@gmail.com');
  313 | 
  314 |     await page.locator(
  315 |         '.password-recovery-button'
  316 |     ).click();
  317 |     await page.waitForTimeout(5000);
  318 | 
  319 |     // DO NOT use networkidle here
  320 |     // Cloudflare causes infinite wait sometimes
  321 | 
  322 |     // Verify result message
  323 |     await expect(
  324 |         page.locator('.result')
  325 |     ).toBeVisible({
  326 |         timeout: 20000
  327 |     });
  328 | 
  329 |     await expect(
  330 |         page.locator('.result')
  331 |     ).toContainText(
  332 |         'Email with instructions has been sent to you.'
  333 |     );
  334 | });
  335 | 
  336 | 
  337 | 
  338 | // ======================================================
  339 | // TC_AUTH_012 - Password Minimum Length Validation
  340 | // ======================================================
  341 | 
  342 | test('TC_AUTH_012 - Password Minimum Length Validation',
  343 | async ({ page }) => {
  344 | 
  345 |     await page.goto(
  346 |         'https://demo.nopcommerce.com/register'
```