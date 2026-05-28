# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_017 - Forgot Password Invalid Email
- Location: tests/auth/login.spec.js:498:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.field-validation-error')
Expected substring: "Wrong email"
Received string:    "Please enter a valid email address."
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.field-validation-error')
    14 × locator resolved to <span data-valmsg-for="Email" data-valmsg-replace="true" class="field-validation-error">…</span>
       - unexpected value "Please enter a valid email address."

```

```yaml
- text: Please enter a valid email address.
```

# Test source

```ts
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
  440 | ).toContainText(
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
> 517 | ).toContainText(
      |   ^ Error: expect(locator).toContainText(expected) failed
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
  541 | test('TC_AUTH_019 - Logout Without Active Session',
  542 | async ({ page }) => {
  543 | 
  544 |     await page.goto(
  545 |         'https://demo.nopcommerce.com'
  546 |     );
  547 | 
  548 |     await expect(
  549 |         page.locator('.ico-logout')
  550 |     ).toHaveCount(0);
  551 | });
  552 | 
  553 | 
  554 | // ======================================================
  555 | // TC_AUTH_020 - Multiple Invalid Login Attempts
  556 | // ======================================================
  557 | 
  558 | test('TC_AUTH_020 - Multiple Invalid Login Attempts',
  559 | async ({ page }) => {
  560 | 
  561 |     await page.goto(
  562 |         'https://demo.nopcommerce.com/login'
  563 |     );
  564 | 
  565 |     for(let i = 0; i < 2; i++){
  566 |         await page.waitForTimeout(3000);
  567 | 
  568 |         await page.locator('#Email')
  569 |             .fill('testing123@gmail.com');
  570 | 
  571 |         await page.locator('#Password')
  572 |             .fill('WrongPassword');
  573 | 
  574 |         await page.locator('.login-button')
  575 |             .click();
  576 | 
  577 |         await expect(
  578 |             page.locator('.message-error')
  579 |         ).toContainText(
  580 |             'Login was unsuccessful'
  581 |         );
  582 |     }
  583 | });
```