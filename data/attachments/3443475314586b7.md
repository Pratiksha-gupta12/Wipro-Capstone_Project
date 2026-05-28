# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> TC_PRODUCT_002 - Search Non Existing Product
- Location: tests/product/product.spec.js:140:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.no-result')
Expected substring: "No products were found"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.no-result')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a024e99acb8bde28
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  57  | //         'No products were found'
  58  | //     );
  59  | // });
  60  | 
  61  | // test(
  62  | // 'TC_PRODUCT_003 - Open Product Details Page',
  63  | // async ({ page }) => {
  64  | 
  65  | //     await page.goto(
  66  | // 'https://demo.nopcommerce.com/desktops'
  67  | //     );
  68  | 
  69  | //     await page.locator(
  70  | // 'a:has-text("Build your own computer")'
  71  | //     ).click();
  72  | 
  73  | //     await expect(page)
  74  | //         .toHaveURL(
  75  | //             /build-your-own-computer/
  76  | //         );
  77  | 
  78  | //     await expect(
  79  | //         page.locator('h1')
  80  | //     ).toContainText(
  81  | //         'Build your own computer'
  82  | //     );
  83  | // });
  84  | 
  85  | 
  86  | // test(
  87  | // 'TC_PRODUCT_004 - Verify Product Price Visible',
  88  | // async ({ page }) => {
  89  | 
  90  | //     await page.goto(
  91  | // 'https://demo.nopcommerce.com/build-your-own-computer'
  92  | //     );
  93  | 
  94  | //     await expect(
  95  | //         page.locator('.product-price')
  96  | //     ).toBeVisible();
  97  | // });
  98  | 
  99  | // test(
  100 | // 'TC_PRODUCT_005 - Verify Product Image Visible',
  101 | // async ({ page }) => {
  102 | 
  103 | //     await page.goto(
  104 | // 'https://demo.nopcommerce.com/build-your-own-computer'
  105 | //     );
  106 | 
  107 | //     await expect(
  108 | //         page.locator('.picture img')
  109 | //     ).toBeVisible({
  110 | //         timeout: 20000
  111 | //     });
  112 | // });
  113 | 
  114 | 
  115 | 
  116 | 
  117 | const { test, expect } = require('@playwright/test');
  118 | 
  119 | test(
  120 | 'TC_PRODUCT_001 - Search Existing Product',
  121 | async ({ page }) => {
  122 | 
  123 |     await page.goto(
  124 |         'https://demo.nopcommerce.com'
  125 |     );
  126 | 
  127 |     await page.locator('#small-searchterms')
  128 |         .fill('computer');
  129 | 
  130 |     await page.keyboard.press('Enter');
  131 | 
  132 |     await page.waitForLoadState('networkidle');
  133 | 
  134 |     await expect(
  135 |         page.locator('.product-item')
  136 |             .first()
  137 |     ).toBeVisible();
  138 | });
  139 | 
  140 | test(
  141 | 'TC_PRODUCT_002 - Search Non Existing Product',
  142 | async ({ page }) => {
  143 | 
  144 |     await page.goto(
  145 |         'https://demo.nopcommerce.com'
  146 |     );
  147 | 
  148 |     await page.locator('#small-searchterms')
  149 |         .fill('abcdefghxyz');
  150 | 
  151 |     await page.keyboard.press('Enter');
  152 | 
  153 |     await page.waitForLoadState('networkidle');
  154 | 
  155 |     await expect(
  156 |         page.locator('.no-result')
> 157 |     ).toContainText(
      |       ^ Error: expect(locator).toContainText(expected) failed
  158 |         'No products were found'
  159 |     );
  160 | });
  161 | 
  162 | test(
  163 | 'TC_PRODUCT_003 - Open Product Details Page',
  164 | async ({ page }) => {
  165 | 
  166 |     await page.goto(
  167 |         'https://demo.nopcommerce.com/desktops'
  168 |     );
  169 | 
  170 |     await page.locator(
  171 |         '.product-title a'
  172 |     ).first().click();
  173 | 
  174 |     await page.waitForLoadState('networkidle');
  175 | 
  176 |     await expect(
  177 |         page.locator('h1')
  178 |     ).toBeVisible();
  179 | });
  180 | 
  181 | test(
  182 | 'TC_PRODUCT_004 - Verify Product Price Visible',
  183 | async ({ page }) => {
  184 | 
  185 |     await page.goto(
  186 |         'https://demo.nopcommerce.com/build-your-own-computer'
  187 |     );
  188 | 
  189 |     await expect(
  190 |         page.locator('.price-value')
  191 |     ).toBeVisible();
  192 | });
  193 | 
  194 | test(
  195 | 'TC_PRODUCT_005 - Verify Product Image Visible',
  196 | async ({ page }) => {
  197 | 
  198 |     await page.goto(
  199 |         'https://demo.nopcommerce.com/build-your-own-computer'
  200 |     );
  201 | 
  202 |     const productImage = page.locator(
  203 |         '.gallery img'
  204 |     );
  205 | 
  206 |     await expect(productImage)
  207 |         .toBeVisible();
  208 | });
```