# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_014 - Login With Invalid Email Format
- Location: tests/auth/login.spec.js:434:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.field-validation-error')
Expected substring: "Wrong email"
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
  - heading "Returning Customer" [level=2]
  - text: "Email:"
  - textbox "Email:": abc.com
  - text: "Password:"
  - textbox "Password:": Testing@12345
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
  352 | // ======================================================
  353 | 
  354 | test('TC_AUTH_012 - Password Minimum Length Validation',
  355 | async ({ page }) => {
  356 | 
  357 |     await page.goto(
  358 |         'https://demo.nopcommerce.com/register'
  359 |     );
  360 | 
  361 |     await page.locator('#gender-male').check();
  362 | 
  363 |     await page.locator('#FirstName')
  364 |         .fill('Pratiksha');
  365 | 
  366 |     await page.locator('#LastName')
  367 |         .fill('Gupta');
  368 | 
  369 |     await page.locator('#Email')
  370 |         .fill(`user${Date.now()}@gmail.com`);
  371 | 
  372 |     // Short Password
  373 |     await page.locator('#Password')
  374 |         .fill('123');
  375 | 
  376 |     await page.locator('#ConfirmPassword')
  377 |         .fill('123');
  378 | 
  379 |     await page.locator('#register-button')
  380 |         .click();
  381 | 
  382 |     await expect(
  383 |         page.locator('.field-validation-error')
  384 |     ).toContainText(
  385 |         'Password must meet the following rules'
  386 |     );
  387 | });
  388 | 
  389 | 
  390 | // ======================================================
  391 | // TC_AUTH_013 - Empty Confirm Password
  392 | // ======================================================
  393 | 
  394 | test('TC_AUTH_013 - Empty Confirm Password',
  395 | async ({ page }) => {
  396 | 
  397 |     await page.goto(
  398 |         'https://demo.nopcommerce.com/register'
  399 |     );
  400 | 
  401 |     await page.locator('#gender-male').check();
  402 | 
  403 |     await page.locator('#FirstName')
  404 |         .fill('Pratiksha');
  405 | 
  406 |     await page.locator('#LastName')
  407 |         .fill('Gupta');
  408 | 
  409 |     await page.locator('#Email')
  410 |         .fill(`user${Date.now()}@gmail.com`);
  411 | 
  412 |     await page.locator('#Password')
  413 |         .fill('Testing@12345');
  414 | 
  415 |     // Empty confirm password
  416 |     await page.locator('#ConfirmPassword')
  417 |         .fill('');
  418 | 
  419 |     await page.locator('#register-button')
  420 |         .click();
  421 | 
  422 |     await expect(
  423 |         page.locator('#ConfirmPassword-error')
  424 |     ).toContainText(
  425 |         'Password is required.'
  426 |     );
  427 | });
  428 | 
  429 | 
  430 | // ======================================================
  431 | // TC_AUTH_014 - Login With Invalid Email Format
  432 | // ======================================================
  433 | 
  434 | test('TC_AUTH_014 - Login With Invalid Email Format',
  435 | async ({ page }) => {
  436 | 
  437 |     await page.goto(
  438 |         'https://demo.nopcommerce.com/login'
  439 |     );
  440 | 
  441 |     await page.locator('#Email')
  442 |         .fill('abc.com');
  443 | 
  444 |     await page.locator('#Password')
  445 |         .fill('Testing@12345');
  446 | 
  447 |     await page.locator('.login-button')
  448 |         .click();
  449 | 
  450 |     await expect(
  451 |         page.locator('.field-validation-error')
> 452 |     ).toContainText(
      |       ^ Error: expect(locator).toContainText(expected) failed
  453 |         'Wrong email'
  454 |     );
  455 | });
  456 | 
  457 | 
  458 | 
  459 | // ======================================================
  460 | // TC_AUTH_015 - Login With Unregistered Email
  461 | // ======================================================
  462 | 
  463 | test('TC_AUTH_015 - Login With Unregistered Email',
  464 | async ({ page }) => {
  465 | 
  466 |     await page.goto(
  467 |         'https://demo.nopcommerce.com/login'
  468 |     );
  469 | 
  470 |     await page.locator('#Email')
  471 |         .fill(`random${Date.now()}@gmail.com`);
  472 | 
  473 |     await page.locator('#Password')
  474 |         .fill('Testing@12345');
  475 | 
  476 |     await page.locator('.login-button')
  477 |         .click();
  478 | 
  479 |     await expect(
  480 |         page.locator('.message-error')
  481 |     ).toContainText(
  482 |         'Login was unsuccessful'
  483 |     );
  484 | });
  485 | 
  486 | 
  487 | // ======================================================
  488 | // TC_AUTH_016 - Verify Password Field Is Hidden
  489 | // ======================================================
  490 | 
  491 | test('TC_AUTH_016 - Verify Password Field Is Hidden',
  492 | async ({ page }) => {
  493 | 
  494 |     await page.goto(
  495 |         'https://demo.nopcommerce.com/login'
  496 |     );
  497 | 
  498 |     await expect(
  499 |         page.locator('#Password')
  500 |     ).toHaveAttribute(
  501 |         'type',
  502 |         'password'
  503 |     );
  504 | });
  505 | 
  506 | // ======================================================
  507 | // TC_AUTH_017 - Forgot Password Invalid Email
  508 | // ======================================================
  509 | 
  510 | test('TC_AUTH_017 - Forgot Password Invalid Email',
  511 | async ({ page }) => {
  512 | 
  513 |     await page.goto(
  514 |         'https://demo.nopcommerce.com/login'
  515 |     );
  516 | 
  517 |     await page.locator('.forgot-password')
  518 |         .click();
  519 | 
  520 |     await page.locator('#Email')
  521 |         .fill('abc.com');
  522 | 
  523 |     await page.locator(
  524 |         '.password-recovery-button'
  525 |     ).click();
  526 | 
  527 |     await expect(
  528 |         page.locator('.field-validation-error')
  529 |     ).toContainText(
  530 |         'Wrong email'
  531 |     );
  532 | });
  533 | 
  534 | // ======================================================
  535 | // TC_AUTH_018 - Remember Me Functionality
  536 | // ======================================================
  537 | 
  538 | test('TC_AUTH_018 - Remember Me Functionality',
  539 | async ({ page }) => {
  540 | 
  541 |     await page.goto(
  542 |         'https://demo.nopcommerce.com/login'
  543 |     );
  544 | 
  545 |     await page.locator('#Email')
  546 |         .fill('testing123@gmail.com');
  547 | 
  548 |     await page.locator('#Password')
  549 |         .fill('Testing@12345');
  550 | 
  551 |     await page.locator('#RememberMe')
  552 |         .check();
```