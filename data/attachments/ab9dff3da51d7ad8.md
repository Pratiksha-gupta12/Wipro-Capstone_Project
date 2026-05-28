# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> Product Service Tests >> TC_PRODUCT_002 - Search Non Existing Product
- Location: tests/product/product.spec.js:252:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.search-results')
Expected substring: "No products were found"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.search-results')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a02c69bfebe8c9a8
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  171 | //         '.product-title a'
  172 | //     ).first().click();
  173 | 
  174 | //     await page.waitForLoadState('networkidle');
  175 | 
  176 | //     await expect(
  177 | //         page.locator('h1')
  178 | //     ).toBeVisible();
  179 | // });
  180 | 
  181 | // test(
  182 | // 'TC_PRODUCT_004 - Verify Product Price Visible',
  183 | // async ({ page }) => {
  184 | 
  185 | //     await page.goto(
  186 | //         'https://demo.nopcommerce.com/build-your-own-computer'
  187 | //     );
  188 | 
  189 | //     await expect(
  190 | //         page.locator('.price-value')
  191 | //     ).toBeVisible();
  192 | // });
  193 | 
  194 | // test(
  195 | // 'TC_PRODUCT_005 - Verify Product Image Visible',
  196 | // async ({ page }) => {
  197 | 
  198 | //     await page.goto(
  199 | //         'https://demo.nopcommerce.com/build-your-own-computer'
  200 | //     );
  201 | 
  202 | //     const productImage = page.locator(
  203 | //         '.gallery img'
  204 | //     );
  205 | 
  206 | //     await expect(productImage)
  207 | //         .toBeVisible();
  208 | // });
  209 | 
  210 | 
  211 | 
  212 | 
  213 | import { test, expect } from '@playwright/test';
  214 | import { ProductPage } from '../../pages/ProductPage';
  215 | test.describe('Product Service Tests', () => {
  216 | 
  217 | let productPage;
  218 | 
  219 | test.beforeEach(async ({ page }) => {
  220 | 
  221 |     productPage = new ProductPage(page);
  222 | 
  223 |     await page.goto(
  224 |         'https://demo.nopcommerce.com/'
  225 |     );
  226 | });
  227 | 
  228 |     test(
  229 |     'TC_PRODUCT_001 - Search Existing Product',
  230 | 
  231 |     {
  232 |         annotation: {
  233 |             type: 'Search',
  234 |             description:
  235 |             'Verify user can search existing product'
  236 |         }
  237 | 
  238 |     },
  239 | 
  240 |     async ({ page }) => {
  241 | 
  242 | 
  243 |         await productPage.searchProduct(
  244 |             'computer'
  245 |         );
  246 | 
  247 |         await expect(
  248 |             productPage.productItems.first()
  249 |         ).toBeVisible();
  250 |     });
  251 | 
  252 |     test(
  253 |     'TC_PRODUCT_002 - Search Non Existing Product',
  254 | 
  255 |     {
  256 |         annotation: {
  257 |             type: 'Search',
  258 |             description:
  259 |             'Verify proper message displayed for invalid search'
  260 |         }
  261 |     },
  262 | 
  263 |     async ({ page }) => {
  264 | 
  265 |       await productPage.searchProduct(
  266 |     'abcdefghxyz'
  267 | );
  268 | 
  269 | await expect(
  270 |     productPage.noResult
> 271 | ).toContainText(
      |   ^ Error: expect(locator).toContainText(expected) failed
  272 |     'No products were found'
  273 | );
  274 |     });
  275 | 
  276 |     test(
  277 |     'TC_PRODUCT_003 - Open Product Details Page',
  278 | 
  279 |     {
  280 |         annotation: {
  281 |             type: 'Product',
  282 |             description:
  283 |             'Verify product details page opens successfully'
  284 |         }
  285 |     },
  286 | 
  287 |     async ({ page }) => {
  288 | 
  289 |         await page.goto(
  290 | 'https://demo.nopcommerce.com/desktops'
  291 |         );
  292 | 
  293 |         await productPage.openFirstProduct();
  294 | 
  295 |         await expect(
  296 |             page.locator('h1')
  297 |         ).toBeVisible();
  298 |     });
  299 | 
  300 |     test(
  301 |     'TC_PRODUCT_004 - Verify Product Price Visible',
  302 |     {
  303 |         annotation: {
  304 |             type: 'Product',
  305 |             description:
  306 |             'Verify product price is visible on details page'
  307 |         }
  308 |     },
  309 | 
  310 |     async ({  page }) => {
  311 | 
  312 |         await page.goto(
  313 | 'https://demo.nopcommerce.com/desktops'
  314 |         );
  315 | 
  316 |         await productPage.openFirstProduct();
  317 | 
  318 |         await expect(
  319 |             productPage.productPrice
  320 |         ).toBeVisible();
  321 |     });
  322 | 
  323 |     test(
  324 |     'TC_PRODUCT_005 - Verify Product Image Visible',
  325 | 
  326 |     {
  327 |         annotation: {
  328 |             type: 'Product',
  329 |             description:
  330 |             'Verify product image is visible on details page'
  331 |         }
  332 |     },
  333 | 
  334 |     async ({  page }) => {
  335 | 
  336 |         await page.goto(
  337 | 'https://demo.nopcommerce.com/desktops'
  338 |         );
  339 | 
  340 |        await productPage.openFirstProduct();
  341 | 
  342 |         await expect(
  343 |             productPage.productImage
  344 |         ).toBeVisible();
  345 |     });
  346 | 
  347 | });
```