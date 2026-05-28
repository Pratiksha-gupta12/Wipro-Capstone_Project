# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_020 - Multiple Invalid Login Attempts
- Location: tests/auth/login.spec.js:583:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.message-error')
Expected substring: "Login was unsuccessful"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.message-error')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a01ab89c5b7ddc57
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
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
> 603 |         ).toContainText(
      |           ^ Error: expect(locator).toContainText(expected) failed
  604 |             'Login was unsuccessful'
  605 |         );
  606 |     }
  607 | });
```