# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> Product Service Tests >> TC_PRODUCT_001 - Search Existing Product
- Location: tests/product/product.spec.js:254:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
=========================== logs ===========================
  "load" event fired
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - heading "demo.nopcommerce.com" [level=1] [ref=e5]
      - heading "Performing security verification" [level=2] [ref=e6]
      - paragraph [ref=e7]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e11]:
    - generic [ref=e13]:
      - generic [ref=e15]:
        - text: "Ray ID:"
        - code [ref=e16]: a02c9cf6fc292ffb
      - generic [ref=e17]:
        - generic [ref=e18]:
          - text: Performance and Security by
          - link "Cloudflare" [ref=e19] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
        - link "Privacy" [ref=e21] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  162 | // test(
  163 | // 'TC_PRODUCT_003 - Open Product Details Page',
  164 | // async ({ page }) => {
  165 | 
  166 | //     await page.goto(
  167 | //         'https://demo.nopcommerce.com/desktops'
  168 | //     );
  169 | 
  170 | //     await page.locator(
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
  228 |     // test(
  229 |     // 'TC_PRODUCT_001 - Search Existing Product',
  230 | 
  231 |     // {
  232 |     //     annotation: {
  233 |     //         type: 'Search',
  234 |     //         description:
  235 |     //         'Verify user can search existing product'
  236 |     //     }
  237 | 
  238 |     // },
  239 | 
  240 |     // async ({ page }) => {
  241 | 
  242 | 
  243 |     //     await productPage.searchProduct(
  244 |     //         'computer'
  245 |     //     );
  246 | 
  247 |     //     await expect(
  248 |     //         productPage.productItems.first()
  249 |     //     ).toBeVisible();
  250 |     // });
  251 | 
  252 | 
  253 | 
  254 |     test(
  255 | 'TC_PRODUCT_001 - Search Existing Product',
  256 | async ({ page }) => {
  257 | 
  258 |     await productPage.searchProduct(
  259 |         'computer'
  260 |     );
  261 | 
> 262 |     await page.waitForLoadState('networkidle');
      |                ^ Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
  263 | 
  264 |     await expect(
  265 |         page.locator('.search-results')
  266 |     ).toBeVisible();
  267 | 
  268 |     await expect(
  269 |         page.locator('.item-box').first()
  270 |     ).toBeVisible();
  271 | });
  272 | 
  273 | //     test(
  274 | //     'TC_PRODUCT_002 - Search Non Existing Product',
  275 | 
  276 | //     {
  277 | //         annotation: {
  278 | //             type: 'Search',
  279 | //             description:
  280 | //             'Verify proper message displayed for invalid search'
  281 | //         }
  282 | //     },
  283 | 
  284 | //     async ({ page }) => {
  285 | 
  286 | //       await productPage.searchProduct(
  287 | //     'abcdefghxyz'
  288 | // );
  289 | 
  290 | // await expect(
  291 | //     productPage.noResult
  292 | // ).toContainText(
  293 | //     'No products were found'
  294 | // );
  295 | //     });
  296 | 
  297 | 
  298 | 
  299 | test(
  300 | 'TC_PRODUCT_002 - Search Non Existing Product',
  301 | async ({ page }) => {
  302 | 
  303 |     await productPage.searchProduct(
  304 |         'abcdefghxyz'
  305 |     );
  306 | 
  307 |     await page.waitForLoadState('networkidle');
  308 | 
  309 |     await expect(
  310 |         page.locator('.no-result')
  311 |     ).toContainText(
  312 |         'No products were found'
  313 |     );
  314 | });
  315 | 
  316 | 
  317 |     test(
  318 |     'TC_PRODUCT_003 - Open Product Details Page',
  319 | 
  320 |     {
  321 |         annotation: {
  322 |             type: 'Product',
  323 |             description:
  324 |             'Verify product details page opens successfully'
  325 |         }
  326 |     },
  327 | 
  328 |     async ({ page }) => {
  329 | 
  330 |         await page.goto(
  331 | 'https://demo.nopcommerce.com/desktops'
  332 |         );
  333 | 
  334 |         await productPage.openFirstProduct();
  335 | 
  336 |         await expect(
  337 |             page.locator('h1')
  338 |         ).toBeVisible();
  339 |     });
  340 | 
  341 | //     test(
  342 | //     'TC_PRODUCT_004 - Verify Product Price Visible',
  343 | //     {
  344 | //         annotation: {
  345 | //             type: 'Product',
  346 | //             description:
  347 | //             'Verify product price is visible on details page'
  348 | //         }
  349 | //     },
  350 | 
  351 | //     async ({  page }) => {
  352 | 
  353 | //         await page.goto(
  354 | // 'https://demo.nopcommerce.com/desktops'
  355 | //         );
  356 | 
  357 | //         await productPage.openFirstProduct();
  358 | 
  359 | //         await expect(
  360 | //             productPage.productPrice
  361 | //         ).toBeVisible();
  362 | //     });
```