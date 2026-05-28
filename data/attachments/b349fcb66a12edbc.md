# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_017 - Forgot Password Invalid Email
- Location: tests/auth/login.spec.js:510:1

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
        - /url: /register?returnUrl=%2Fpasswordrecovery
    - listitem:
      - link "Log in":
        - /url: /login?returnUrl=%2Fpasswordrecovery
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
  - heading "Password recovery" [level=1]
  - paragraph: Please enter your email address below. You will receive a link to reset your password.
  - text: "Your email address:"
  - textbox "Your email address:": abc.com
  - text: "*"
  - button "Recover"
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
  452 |     ).toContainText(
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
> 529 |     ).toContainText(
      |       ^ Error: expect(locator).toContainText(expected) failed
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
  553 | 
  554 |     await page.locator('.login-button')
  555 |         .click();
  556 | 
  557 |     await expect(
  558 |         page.locator('.ico-account')
  559 |     ).toBeVisible();
  560 | });
  561 | 
  562 | // ======================================================
  563 | // TC_AUTH_019 - Logout Without Active Session
  564 | // ======================================================
  565 | 
  566 | test('TC_AUTH_019 - Logout Without Active Session',
  567 | async ({ page }) => {
  568 | 
  569 |     await page.goto(
  570 |         'https://demo.nopcommerce.com'
  571 |     );
  572 | 
  573 |     await expect(
  574 |         page.locator('.ico-logout')
  575 |     ).toHaveCount(0);
  576 | });
  577 | 
  578 | 
  579 | // ======================================================
  580 | // TC_AUTH_020 - Multiple Invalid Login Attempts
  581 | // ======================================================
  582 | 
  583 | test('TC_AUTH_020 - Multiple Invalid Login Attempts',
  584 | async ({ page }) => {
  585 | 
  586 |     await page.goto(
  587 |         'https://demo.nopcommerce.com/login'
  588 |     );
  589 | 
  590 |     for(let i = 0; i < 3; i++){
  591 | 
  592 |         await page.locator('#Email')
  593 |             .fill('testing123@gmail.com');
  594 | 
  595 |         await page.locator('#Password')
  596 |             .fill('WrongPassword');
  597 | 
  598 |         await page.locator('.login-button')
  599 |             .click();
  600 | 
  601 |         await expect(
  602 |             page.locator('.message-error')
  603 |         ).toContainText(
  604 |             'Login was unsuccessful'
  605 |         );
  606 |     }
  607 | });
```