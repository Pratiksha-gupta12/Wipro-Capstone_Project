# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> Product Service >> TC_PRODUCT_005 - Verify Product Image Visible
- Location: tests/product/product.spec.js:122:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.product-item img')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.product-item img')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Verifying you are human. This may take a few seconds." [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a01afdf51b54c1a6
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
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
  70  | 
  71  | test(
  72  | 'TC_PRODUCT_003 - Open Product Details Page',
  73  | async ({ page }) => {
  74  | 
  75  |     const productPage =
  76  |         new ProductPage(page);
  77  | 
  78  |     await productPage.gotoHomePage();
  79  | 
  80  |     await productPage.openProduct(
  81  |         productData.productName
  82  |     );
  83  | 
  84  |     await expect(
  85  |         productPage.productTitle
  86  |     ).toContainText(
  87  |         productData.productName
  88  |     );
  89  | });
  90  | 
  91  | 
  92  | 
  93  | // ======================================================
  94  | // TC_PRODUCT_004 - Verify Product Price Visible
  95  | // ======================================================
  96  | 
  97  | test(
  98  | 'TC_PRODUCT_004 - Verify Product Price Visible',
  99  | async ({ page }) => {
  100 | 
  101 |     const productPage =
  102 |         new ProductPage(page);
  103 | 
  104 |     await productPage.gotoHomePage();
  105 | 
  106 |     await productPage.openProduct(
  107 |         productData.productName
  108 |     );
  109 | 
  110 |     await expect(
  111 |         productPage.productPrice
  112 |     ).toBeVisible();
  113 | });
  114 | 
  115 | 
  116 | 
  117 | 
  118 | // ======================================================
  119 | // TC_PRODUCT_005 - Verify Product Image Visible
  120 | // ======================================================
  121 | 
  122 | test(
  123 | 'TC_PRODUCT_005 - Verify Product Image Visible',
  124 | async ({ page }) => {
  125 | 
  126 |     const productPage =
  127 |         new ProductPage(page);
  128 | 
  129 |     await productPage.gotoHomePage();
  130 | 
  131 |     await productPage.openProduct(
  132 |         productData.productName
  133 |     );
  134 | 
  135 |     await expect(
  136 |         productPage.productImage
> 137 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  138 | });
  139 | 
  140 | });
```