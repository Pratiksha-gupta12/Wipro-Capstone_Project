# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> Product Service Tests >> TC_PRODUCT_010 - Verify Product Price Is Displayed
- Location: tests/product/product.spec.js:518:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.prices').first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('.prices').first()

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a02cb24bd96f2e56
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  428 | 
  429 |     await expect(
  430 |         page.locator('#small-searchterms')
  431 |     ).toBeVisible();
  432 | });
  433 | 
  434 | test(
  435 | 'TC_PRODUCT_007 - Verify Search Button Is Enabled',
  436 | async ({ page }) => {
  437 | 
  438 |     await expect(
  439 |         page.locator('.search-box-button')
  440 |     ).toBeEnabled();
  441 | });
  442 | 
  443 | 
  444 | 
  445 | // test(
  446 | // 'TC_PRODUCT_008 - Verify Product Titles Are Visible',
  447 | // async ({ page }) => {
  448 | 
  449 | //     await page.goto(
  450 | // 'https://demo.nopcommerce.com/desktops'
  451 | //     );
  452 | 
  453 | //     await expect(
  454 | //         page.locator('.product-title').first()
  455 | //     ).toBeVisible();
  456 | // });
  457 | 
  458 | 
  459 | test(
  460 | 'TC_PRODUCT_008 - Verify Product Titles Are Visible',
  461 | async ({ page }) => {
  462 | 
  463 |     await page.goto(
  464 | 'https://demo.nopcommerce.com/desktops'
  465 |     );
  466 | 
  467 |     await expect(
  468 |         page.locator('.product-title a').first()
  469 |     ).toBeVisible({
  470 |         timeout: 10000
  471 |     });
  472 | });
  473 | 
  474 | 
  475 | // test(
  476 | // 'TC_PRODUCT_009 - Verify Add To Cart Button Visible',
  477 | // async ({ page }) => {
  478 | 
  479 | //     await page.goto(
  480 | // 'https://demo.nopcommerce.com/desktops'
  481 | //     );
  482 | 
  483 | //     await expect(
  484 | //         page.locator('.product-box-add-to-cart-button').first()
  485 | //     ).toBeVisible();
  486 | // });
  487 | 
  488 | 
  489 | test(
  490 | 'TC_PRODUCT_009 - Verify Add To Cart Button Visible',
  491 | async ({ page }) => {
  492 | 
  493 |     await page.goto(
  494 | 'https://demo.nopcommerce.com/desktops'
  495 |     );
  496 | 
  497 |     await expect(
  498 |         page.locator('.product-box-add-to-cart-button').first()
  499 |     ).toBeVisible({
  500 |         timeout: 10000
  501 |     });
  502 | });
  503 | 
  504 | // test(
  505 | // 'TC_PRODUCT_010 - Verify Product Price Is Displayed',
  506 | // async ({ page }) => {
  507 | 
  508 | //     await page.goto(
  509 | // 'https://demo.nopcommerce.com/desktops'
  510 | //     );
  511 | 
  512 | //     await expect(
  513 | //         page.locator('.prices').first()
  514 | //     ).toBeVisible();
  515 | // });
  516 | 
  517 | 
  518 | test(
  519 | 'TC_PRODUCT_010 - Verify Product Price Is Displayed',
  520 | async ({ page }) => {
  521 | 
  522 |     await page.goto(
  523 | 'https://demo.nopcommerce.com/desktops'
  524 |     );
  525 | 
  526 |     await expect(
  527 |         page.locator('.prices').first()
> 528 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  529 |         timeout: 10000
  530 |     });
  531 | });
  532 | 
  533 | // test(
  534 | // 'TC_PRODUCT_011 - Verify User Can Open Search Result',
  535 | // async ({ page }) => {
  536 | 
  537 | //     await page.locator('#small-searchterms')
  538 | //         .fill('computer');
  539 | 
  540 | //     await page.locator('.search-box-button')
  541 | //         .click();
  542 | 
  543 | //     await page.locator('.product-title a')
  544 | //         .first()
  545 | //         .click();
  546 | 
  547 | //     await expect(
  548 | //         page.locator('h1')
  549 | //     ).toBeVisible();
  550 | // });
  551 | 
  552 | 
  553 | test(
  554 | 'TC_PRODUCT_011 - Verify User Can Open Search Result',
  555 | async ({ page }) => {
  556 | 
  557 |     await page.locator('#small-searchterms')
  558 |         .fill('computer');
  559 | 
  560 |     await page.locator('.search-box-button')
  561 |         .click();
  562 | 
  563 |     await page.waitForSelector('.product-title a');
  564 | 
  565 |     await page.locator('.product-title a')
  566 |         .first()
  567 |         .click();
  568 | 
  569 |     await expect(
  570 |         page.locator('h1')
  571 |     ).toBeVisible({
  572 |         timeout: 10000
  573 |     });
  574 | });
  575 | 
  576 | 
  577 | // test(
  578 | // 'TC_PRODUCT_012 - Verify Product Count Greater Than Zero',
  579 | // async ({ page }) => {
  580 | 
  581 | //     await page.goto(
  582 | // 'https://demo.nopcommerce.com/desktops'
  583 | //     );
  584 | 
  585 | //     const products =
  586 | //         await page.locator('.item-box').count();
  587 | 
  588 | //     expect(products).toBeGreaterThan(0);
  589 | // });
  590 | 
  591 | 
  592 | test(
  593 | 'TC_PRODUCT_012 - Verify Product Count Greater Than Zero',
  594 | async ({ page }) => {
  595 | 
  596 |     await page.goto(
  597 | 'https://demo.nopcommerce.com/desktops'
  598 |     );
  599 | 
  600 |     await page.waitForSelector('.item-box');
  601 | 
  602 |     const products =
  603 |         await page.locator('.item-box').count();
  604 | 
  605 |     expect(products).toBeGreaterThan(0);
  606 | });
  607 | 
  608 | 
  609 |  });
  610 | 
  611 | 
```