# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> Product Service >> TC_PRODUCT_005 - Verify Product Image Visible
- Location: tests/product/product.spec.js:115:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.picture img')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.picture img')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a01bd48dd988a851
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  29  |         productData.validProduct
  30  |     );
  31  | 
  32  |     await expect(
  33  |         productPage.productItem
  34  |     ).toContainText(
  35  |         productData.validProduct
  36  |     );
  37  | });
  38  | 
  39  | 
  40  | 
  41  | // ======================================================
  42  | // TC_PRODUCT_002 - Search Non Existing Product
  43  | // ======================================================
  44  | 
  45  | test(
  46  | 'TC_PRODUCT_002 - Search Non Existing Product',
  47  | async ({ page }) => {
  48  | 
  49  |     const productPage =
  50  |         new ProductPage(page);
  51  | 
  52  |     await productPage.gotoHomePage();
  53  | 
  54  |     await productPage.searchProduct(
  55  |         productData.invalidProduct
  56  |     );
  57  | 
  58  |     await expect(
  59  |         page.locator('.no-result')
  60  |     ).toContainText(
  61  |         'No products were found that matched your criteria.'
  62  |     );
  63  | });
  64  | 
  65  | 
  66  | 
  67  | // ======================================================
  68  | // TC_PRODUCT_003 - Open Product Details Page
  69  | // ======================================================
  70  | test(
  71  | 'TC_PRODUCT_003 - Open Product Details Page',
  72  | async ({ page }) => {
  73  | 
  74  |     await page.goto(
  75  |         'https://demo.nopcommerce.com/desktops'
  76  |     );
  77  | 
  78  |     await page.locator(
  79  |         'a:has-text("Build your own computer")'
  80  |     ).click();
  81  | 
  82  |     await expect(
  83  |         page.locator('.product-name h1')
  84  |     ).toContainText(
  85  |         'Build your own computer'
  86  |     );
  87  | });
  88  | 
  89  | // ======================================================
  90  | // TC_PRODUCT_004 - Verify Product Price Visible
  91  | // ======================================================
  92  | test(
  93  | 'TC_PRODUCT_004 - Verify Product Price Visible',
  94  | async ({ page }) => {
  95  | 
  96  |     await page.goto(
  97  |         'https://demo.nopcommerce.com/desktops'
  98  |     );
  99  | 
  100 |     await page.locator(
  101 |         'a:has-text("Build your own computer")'
  102 |     ).click();
  103 | 
  104 |     await expect(
  105 |         page.locator('.price-value')
  106 |     ).toBeVisible();
  107 | });
  108 | 
  109 | 
  110 | 
  111 | 
  112 | // ======================================================
  113 | // TC_PRODUCT_005 - Verify Product Image Visible
  114 | // ======================================================
  115 | test(
  116 | 'TC_PRODUCT_005 - Verify Product Image Visible',
  117 | async ({ page }) => {
  118 | 
  119 |     await page.goto(
  120 |         'https://demo.nopcommerce.com/desktops'
  121 |     );
  122 | 
  123 |     await page.locator(
  124 |         'a:has-text("Build your own computer")'
  125 |     ).click();
  126 | 
  127 |     await expect(
  128 |         page.locator('.picture img')
> 129 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  130 | });
  131 | 
  132 | });
```