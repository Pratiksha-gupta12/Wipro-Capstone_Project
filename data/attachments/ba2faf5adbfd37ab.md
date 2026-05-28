# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_014 - Login With Invalid Email Format
- Location: tests/auth/login.spec.js:422:1

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
  340 | // ======================================================
  341 | 
  342 | test('TC_AUTH_012 - Password Minimum Length Validation',
  343 | async ({ page }) => {
  344 | 
  345 |     await page.goto(
  346 |         'https://demo.nopcommerce.com/register'
  347 |     );
  348 | 
  349 |     await page.locator('#gender-male').check();
  350 | 
  351 |     await page.locator('#FirstName')
  352 |         .fill('Pratiksha');
  353 | 
  354 |     await page.locator('#LastName')
  355 |         .fill('Gupta');
  356 | 
  357 |     await page.locator('#Email')
  358 |         .fill(`user${Date.now()}@gmail.com`);
  359 | 
  360 |     // Short Password
  361 |     await page.locator('#Password')
  362 |         .fill('123');
  363 | 
  364 |     await page.locator('#ConfirmPassword')
  365 |         .fill('123');
  366 | 
  367 |     await page.locator('#register-button')
  368 |         .click();
  369 | 
  370 |     await expect(
  371 |         page.locator('.field-validation-error')
  372 |     ).toContainText(
  373 |         'Password must meet the following rules'
  374 |     );
  375 | });
  376 | 
  377 | 
  378 | // ======================================================
  379 | // TC_AUTH_013 - Empty Confirm Password
  380 | // ======================================================
  381 | 
  382 | test('TC_AUTH_013 - Empty Confirm Password',
  383 | async ({ page }) => {
  384 | 
  385 |     await page.goto(
  386 |         'https://demo.nopcommerce.com/register'
  387 |     );
  388 | 
  389 |     await page.locator('#gender-male').check();
  390 | 
  391 |     await page.locator('#FirstName')
  392 |         .fill('Pratiksha');
  393 | 
  394 |     await page.locator('#LastName')
  395 |         .fill('Gupta');
  396 | 
  397 |     await page.locator('#Email')
  398 |         .fill(`user${Date.now()}@gmail.com`);
  399 | 
  400 |     await page.locator('#Password')
  401 |         .fill('Testing@12345');
  402 | 
  403 |     // Empty confirm password
  404 |     await page.locator('#ConfirmPassword')
  405 |         .fill('');
  406 | 
  407 |     await page.locator('#register-button')
  408 |         .click();
  409 | 
  410 |     await expect(
  411 |         page.locator('#ConfirmPassword-error')
  412 |     ).toContainText(
  413 |         'Password is required.'
  414 |     );
  415 | });
  416 | 
  417 | 
  418 | // ======================================================
  419 | // TC_AUTH_014 - Login With Invalid Email Format
  420 | // ======================================================
  421 | 
  422 | test('TC_AUTH_014 - Login With Invalid Email Format',
  423 | async ({ page }) => {
  424 | 
  425 |     await page.goto(
  426 |         'https://demo.nopcommerce.com/login'
  427 |     );
  428 | 
  429 |     await page.locator('#Email')
  430 |         .fill('abc.com');
  431 | 
  432 |     await page.locator('#Password')
  433 |         .fill('Testing@12345');
  434 | 
  435 |     await page.locator('.login-button')
  436 |         .click();
  437 | 
  438 |    await expect(
  439 |    page.locator('.field-validation-error')
> 440 | ).toContainText(
      |   ^ Error: expect(locator).toContainText(expected) failed
  441 |    'Wrong email'
  442 | );
  443 | });
  444 | 
  445 | 
  446 | 
  447 | // ======================================================
  448 | // TC_AUTH_015 - Login With Unregistered Email
  449 | // ======================================================
  450 | 
  451 | test('TC_AUTH_015 - Login With Unregistered Email',
  452 | async ({ page }) => {
  453 | 
  454 |     await page.goto(
  455 |         'https://demo.nopcommerce.com/login'
  456 |     );
  457 | 
  458 |     await page.locator('#Email')
  459 |         .fill(`random${Date.now()}@gmail.com`);
  460 | 
  461 |     await page.locator('#Password')
  462 |         .fill('Testing@12345');
  463 | 
  464 |     await page.locator('.login-button')
  465 |         .click();
  466 | 
  467 |     await expect(
  468 |         page.locator('.message-error')
  469 |     ).toContainText(
  470 |         'Login was unsuccessful'
  471 |     );
  472 | });
  473 | 
  474 | 
  475 | // ======================================================
  476 | // TC_AUTH_016 - Verify Password Field Is Hidden
  477 | // ======================================================
  478 | 
  479 | test('TC_AUTH_016 - Verify Password Field Is Hidden',
  480 | async ({ page }) => {
  481 | 
  482 |     await page.goto(
  483 |         'https://demo.nopcommerce.com/login'
  484 |     );
  485 | 
  486 |     await expect(
  487 |         page.locator('#Password')
  488 |     ).toHaveAttribute(
  489 |         'type',
  490 |         'password'
  491 |     );
  492 | });
  493 | 
  494 | // ======================================================
  495 | // TC_AUTH_017 - Forgot Password Invalid Email
  496 | // ======================================================
  497 | 
  498 | test('TC_AUTH_017 - Forgot Password Invalid Email',
  499 | async ({ page }) => {
  500 | 
  501 |     await page.goto(
  502 |         'https://demo.nopcommerce.com/login'
  503 |     );
  504 | 
  505 |     await page.locator('.forgot-password')
  506 |         .click();
  507 | 
  508 |     await page.locator('#Email')
  509 |         .fill('abc.com');
  510 | 
  511 |     await page.locator(
  512 |         '.password-recovery-button'
  513 |     ).click();
  514 | 
  515 |   await expect(
  516 |    page.locator('.field-validation-error')
  517 | ).toContainText(
  518 |    'Wrong email'
  519 | );
  520 | });
  521 | 
  522 | // ======================================================
  523 | // TC_AUTH_018 - Remember Me Functionality
  524 | // ======================================================
  525 | test('TC_AUTH_018 - Remember Me Checkbox Visible',
  526 | async ({ page }) => {
  527 | 
  528 |    await page.goto(
  529 |       'https://demo.nopcommerce.com/login'
  530 |    );
  531 | 
  532 |    await expect(
  533 |       page.locator('#RememberMe')
  534 |    ).toBeVisible();
  535 | 
  536 | });
  537 | // ======================================================
  538 | // TC_AUTH_019 - Logout Without Active Session
  539 | // ======================================================
  540 | 
```