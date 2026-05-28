# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_009 - Successful Login
- Location: tests/auth/login.spec.js:224:1

# Error details

```
Error: Login failed or Cloudflare blocked request
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
                  - listitem [ref=e69]: The credentials provided are incorrect
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
  235 |         .fill('Testing@12345');
  236 | 
  237 |     await page.locator('.login-button')
  238 |         .click();
  239 | 
  240 |     await page.waitForTimeout(5000);
  241 | 
  242 |     // Check if login successful
  243 |     const accountVisible = await page
  244 |         .locator('.ico-account')
  245 |         .isVisible()
  246 |         .catch(() => false);
  247 | 
  248 |     if(accountVisible){
  249 | 
  250 |         console.log('Login Successful');
  251 | 
  252 |         await expect(
  253 |             page.locator('.ico-account')
  254 |         ).toBeVisible();
  255 | 
  256 |     } else {
  257 | 
  258 |         const body = await page.locator('body')
  259 |             .textContent();
  260 | 
  261 |         console.log(body);
  262 | 
> 263 |         throw new Error(
      |               ^ Error: Login failed or Cloudflare blocked request
  264 |             'Login failed or Cloudflare blocked request'
  265 |         );
  266 |     }
  267 | });
  268 | 
  269 | 
  270 | // ======================================================
  271 | // TC_AUTH_010 - Logout Functionality
  272 | // ======================================================
  273 | 
  274 | test('TC_AUTH_010 - Logout Functionality',
  275 | async ({ page }) => {
  276 | 
  277 |     await page.goto(
  278 |         'https://demo.nopcommerce.com/login'
  279 |     );
  280 | 
  281 |     await page.locator('#Email')
  282 |         .fill('testing123@gmail.com');
  283 | 
  284 |     await page.locator('#Password')
  285 |         .fill('Testing@12345');
  286 | 
  287 |     await page.locator('.login-button')
  288 |         .click();
  289 |         await page.waitForTimeout(5000);
  290 | 
  291 |     // Wait for logout button
  292 |     await expect(
  293 |         page.locator('.ico-logout')
  294 |     ).toBeVisible({
  295 |         timeout: 20000
  296 |     });
  297 | 
  298 |     // Click Logout
  299 |     await page.locator('.ico-logout')
  300 |         .click();
  301 | 
  302 |     // Verify login button visible again
  303 |     await expect(
  304 |         page.locator('.ico-login')
  305 |     ).toBeVisible({
  306 |         timeout: 15000
  307 |     });
  308 | });
  309 | 
  310 | 
  311 | 
  312 | 
  313 | // ======================================================
  314 | // TC_AUTH_011 - Forgot Password
  315 | // ======================================================
  316 | 
  317 | test('TC_AUTH_011 - Forgot Password',
  318 | async ({ page }) => {
  319 | 
  320 |     await page.goto(
  321 |         'https://demo.nopcommerce.com/login'
  322 |     );
  323 | 
  324 |     await page.locator('.forgot-password')
  325 |         .click();
  326 | 
  327 |     // Use registered email
  328 |     await page.locator('#Email')
  329 |         .fill('testing123@gmail.com');
  330 | 
  331 |     await page.locator(
  332 |         '.password-recovery-button'
  333 |     ).click();
  334 |     await page.waitForTimeout(5000);
  335 | 
  336 |     // DO NOT use networkidle here
  337 |     // Cloudflare causes infinite wait sometimes
  338 | 
  339 |     // Verify result message
  340 |     await expect(
  341 |         page.locator('.result')
  342 |     ).toBeVisible({
  343 |         timeout: 20000
  344 |     });
  345 | 
  346 |     await expect(
  347 |         page.locator('.result')
  348 |     ).toContainText(
  349 |         'Email with instructions has been sent to you.'
  350 |     );
  351 | });
  352 | 
  353 | 
  354 | 
  355 | // ======================================================
  356 | // TC_AUTH_012 - Password Minimum Length Validation
  357 | // ======================================================
  358 | 
  359 | test('TC_AUTH_012 - Password Minimum Length Validation',
  360 | async ({ page }) => {
  361 | 
  362 |     await page.goto(
  363 |         'https://demo.nopcommerce.com/register'
```