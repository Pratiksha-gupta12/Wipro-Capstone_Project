# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> Product Service Tests >> TC_PRODUCT_003 - Open Product Details Page
- Location: tests/product/product.spec.js:270:9

# Error details

```
TypeError: page.openFirstProduct is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - status
  - generic [ref=e2]:
    - banner [ref=e3]:
      - link "Skip navigation" [ref=e4] [cursor=pointer]:
        - /url: "#main"
      - generic [ref=e5]:
        - combobox "Currency selector" [ref=e8]:
          - option "US Dollar" [selected]
          - option "Euro"
        - list [ref=e11]:
          - listitem [ref=e12]:
            - link "Register" [ref=e13] [cursor=pointer]:
              - /url: /register?returnUrl=%2Fdesktops
          - listitem [ref=e14]:
            - link "Log in" [ref=e15] [cursor=pointer]:
              - /url: /login?returnUrl=%2Fdesktops
          - listitem [ref=e16]:
            - link "Wishlist (0)" [ref=e17] [cursor=pointer]:
              - /url: /wishlist
              - generic [ref=e18]: Wishlist
              - generic [ref=e19]: (0)
          - listitem [ref=e20]:
            - link "Shopping cart (0)" [ref=e21] [cursor=pointer]:
              - /url: /cart
              - generic [ref=e22]: Shopping cart
              - generic [ref=e23]: (0)
      - generic [ref=e24]:
        - link "nopCommerce demo store" [ref=e26] [cursor=pointer]:
          - /url: /
          - img "nopCommerce demo store" [ref=e27]
        - search [ref=e28]:
          - generic [ref=e29]:
            - textbox "Search store" [ref=e30]
            - button "Search" [ref=e31] [cursor=pointer]
    - navigation [ref=e33]:
      - menu "Categories" [ref=e34]:
        - menuitem "Computers" [ref=e35]:
          - button "Computers" [ref=e37] [cursor=pointer]
        - menuitem "Electronics" [ref=e38]:
          - button "Electronics" [ref=e40] [cursor=pointer]
        - menuitem "Apparel" [ref=e41]:
          - button "Apparel" [ref=e43] [cursor=pointer]
        - menuitem "Digital downloads" [ref=e44]:
          - button "Digital downloads" [ref=e45] [cursor=pointer]
        - menuitem "Books" [ref=e46]:
          - button "Books" [ref=e47] [cursor=pointer]
        - menuitem "Jewelry" [ref=e48]:
          - button "Jewelry" [ref=e49] [cursor=pointer]
        - menuitem "Gift Cards" [ref=e50]:
          - button "Gift Cards" [ref=e51] [cursor=pointer]
    - main [ref=e52]:
      - generic [ref=e53]:
        - list [ref=e55]:
          - listitem [ref=e56]:
            - link "Home" [ref=e57] [cursor=pointer]:
              - /url: /
            - generic [ref=e58]: /
          - listitem [ref=e59]:
            - link "Computers" [ref=e60] [cursor=pointer]:
              - /url: /computers
              - generic [ref=e61]: Computers
            - generic [ref=e62]: /
          - listitem [ref=e63]:
            - strong [ref=e64]: Desktops
        - complementary [ref=e65]:
          - generic [ref=e66]:
            - heading "Categories" [level=2] [ref=e67]
            - list [ref=e69]:
              - listitem [ref=e70]:
                - link "Computers" [ref=e71] [cursor=pointer]:
                  - /url: /computers
                - list [ref=e72]:
                  - listitem [ref=e73]:
                    - link "Desktops" [ref=e74] [cursor=pointer]:
                      - /url: /desktops
                  - listitem [ref=e75]:
                    - link "Notebooks" [ref=e76] [cursor=pointer]:
                      - /url: /notebooks
                  - listitem [ref=e77]:
                    - link "Software" [ref=e78] [cursor=pointer]:
                      - /url: /software
              - listitem [ref=e79]:
                - link "Electronics" [ref=e80] [cursor=pointer]:
                  - /url: /electronics
              - listitem [ref=e81]:
                - link "Apparel" [ref=e82] [cursor=pointer]:
                  - /url: /apparel
              - listitem [ref=e83]:
                - link "Digital downloads" [ref=e84] [cursor=pointer]:
                  - /url: /digital-downloads
              - listitem [ref=e85]:
                - link "Books" [ref=e86] [cursor=pointer]:
                  - /url: /books
              - listitem [ref=e87]:
                - link "Jewelry" [ref=e88] [cursor=pointer]:
                  - /url: /jewelry
              - listitem [ref=e89]:
                - link "Gift Cards" [ref=e90] [cursor=pointer]:
                  - /url: /gift-cards
          - generic [ref=e91]:
            - heading "Manufacturers" [level=2] [ref=e92]
            - generic [ref=e93]:
              - list [ref=e94]:
                - listitem [ref=e95]:
                  - link "Apple" [ref=e96] [cursor=pointer]:
                    - /url: /apple
                - listitem [ref=e97]:
                  - link "HP" [ref=e98] [cursor=pointer]:
                    - /url: /hp
              - link "View all" [ref=e100] [cursor=pointer]:
                - /url: /manufacturer/all
          - generic [ref=e101]:
            - heading "Popular tags" [level=2] [ref=e102]
            - generic [ref=e103]:
              - list [ref=e105]:
                - listitem [ref=e106]:
                  - link "apparel" [ref=e107] [cursor=pointer]:
                    - /url: /apparel-2
                - listitem [ref=e108]:
                  - link "awesome" [ref=e109] [cursor=pointer]:
                    - /url: /awesome
                - listitem [ref=e110]:
                  - link "book" [ref=e111] [cursor=pointer]:
                    - /url: /book
                - listitem [ref=e112]:
                  - link "camera" [ref=e113] [cursor=pointer]:
                    - /url: /camera
                - listitem [ref=e114]:
                  - link "cell" [ref=e115] [cursor=pointer]:
                    - /url: /cell
                - listitem [ref=e116]:
                  - link "compact" [ref=e117] [cursor=pointer]:
                    - /url: /compact
                - listitem [ref=e118]:
                  - link "computer" [ref=e119] [cursor=pointer]:
                    - /url: /computer
                - listitem [ref=e120]:
                  - link "cool" [ref=e121] [cursor=pointer]:
                    - /url: /cool
                - listitem [ref=e122]:
                  - link "digital" [ref=e123] [cursor=pointer]:
                    - /url: /digital
                - listitem [ref=e124]:
                  - link "game" [ref=e125] [cursor=pointer]:
                    - /url: /game
                - listitem [ref=e126]:
                  - link "jeans" [ref=e127] [cursor=pointer]:
                    - /url: /jeans
                - listitem [ref=e128]:
                  - link "jewelry" [ref=e129] [cursor=pointer]:
                    - /url: /jewelry-2
                - listitem [ref=e130]:
                  - link "nice" [ref=e131] [cursor=pointer]:
                    - /url: /nice
                - listitem [ref=e132]:
                  - link "shirt" [ref=e133] [cursor=pointer]:
                    - /url: /shirt
                - listitem [ref=e134]:
                  - link "shoes" [ref=e135] [cursor=pointer]:
                    - /url: /shoes-2
              - link "View all" [ref=e137] [cursor=pointer]:
                - /url: /producttag/all
        - generic [ref=e139]:
          - heading "Desktops" [level=1] [ref=e141]
          - generic [ref=e142]:
            - generic [ref=e143]:
              - generic [ref=e144]:
                - button "Grid" [ref=e145] [cursor=pointer]
                - button "List" [ref=e146] [cursor=pointer]
              - generic [ref=e147]:
                - text: Sort by
                - combobox "Select product sort order" [ref=e148]:
                  - option "Position" [selected]
                  - 'option "Name: A to Z"'
                  - 'option "Name: Z to A"'
                  - 'option "Price: Low to High"'
                  - 'option "Price: High to Low"'
                  - option "Created on"
              - generic [ref=e149]:
                - text: Display
                - combobox "Select number of products per page" [ref=e150]:
                  - option "3"
                  - option "6" [selected]
                  - option "9"
                - text: per page
            - generic [ref=e154]:
              - article [ref=e156]:
                - link "Picture of Build your own computer" [ref=e158] [cursor=pointer]:
                  - /url: /build-your-own-computer
                  - img "Picture of Build your own computer" [ref=e159]
                - generic [ref=e160]:
                  - heading "Build your own computer" [level=2] [ref=e161]:
                    - link "Build your own computer" [ref=e162] [cursor=pointer]:
                      - /url: /build-your-own-computer
                  - generic "1 review(s)" [ref=e163]
                  - generic [ref=e166]:
                    - generic [ref=e167]: $1,200.00
                    - generic [ref=e168]:
                      - button "Add to cart" [ref=e169] [cursor=pointer]
                      - button "Add to compare list" [ref=e170] [cursor=pointer]
                      - button "Add to wishlist" [ref=e171] [cursor=pointer]
              - article [ref=e173]:
                - link "Picture of Digital Storm VANQUISH Custom Performance PC" [ref=e175] [cursor=pointer]:
                  - /url: /digital-storm-vanquish-custom-performance-pc
                  - img "Picture of Digital Storm VANQUISH Custom Performance PC" [ref=e176]
                - generic [ref=e177]:
                  - heading "Digital Storm VANQUISH Custom Performance PC" [level=2] [ref=e178]:
                    - link "Digital Storm VANQUISH Custom Performance PC" [ref=e179] [cursor=pointer]:
                      - /url: /digital-storm-vanquish-custom-performance-pc
                  - generic "1 review(s)" [ref=e180]
                  - generic [ref=e183]:
                    - generic [ref=e184]: $1,259.00
                    - generic [ref=e185]:
                      - button "Add to cart" [ref=e186] [cursor=pointer]
                      - button "Add to compare list" [ref=e187] [cursor=pointer]
                      - button "Add to wishlist" [ref=e188] [cursor=pointer]
              - article [ref=e190]:
                - link "Picture of Lenovo IdeaCentre" [ref=e192] [cursor=pointer]:
                  - /url: /lenovo-ideacentre
                  - img "Picture of Lenovo IdeaCentre" [ref=e193]
                - generic [ref=e194]:
                  - heading "Lenovo IdeaCentre" [level=2] [ref=e195]:
                    - link "Lenovo IdeaCentre" [ref=e196] [cursor=pointer]:
                      - /url: /lenovo-ideacentre
                  - generic "1 review(s)" [ref=e197]
                  - generic [ref=e200]:
                    - generic [ref=e201]: $500.00
                    - generic [ref=e202]:
                      - button "Add to cart" [ref=e203] [cursor=pointer]
                      - button "Add to compare list" [ref=e204] [cursor=pointer]
                      - button "Add to wishlist" [ref=e205] [cursor=pointer]
    - contentinfo [ref=e206]:
      - generic [ref=e207]:
        - navigation [ref=e208]:
          - heading "Information" [level=2] [ref=e209]
          - menu "Information" [ref=e210]:
            - menuitem "Sitemap" [ref=e211]:
              - link "Sitemap" [ref=e212] [cursor=pointer]:
                - /url: /sitemap
            - menuitem "Shipping & returns" [ref=e213]:
              - link "Shipping & returns" [ref=e214] [cursor=pointer]:
                - /url: /shipping-returns
            - menuitem "Privacy notice" [ref=e215]:
              - link "Privacy notice" [ref=e216] [cursor=pointer]:
                - /url: /privacy-notice
            - menuitem "Conditions of Use" [ref=e217]:
              - link "Conditions of Use" [ref=e218] [cursor=pointer]:
                - /url: /conditions-of-use
            - menuitem "About us" [ref=e219]:
              - link "About us" [ref=e220] [cursor=pointer]:
                - /url: /about-us
            - menuitem "Contact us" [ref=e221]:
              - link "Contact us" [ref=e222] [cursor=pointer]:
                - /url: /contactus
          - heading "Customer service" [level=2] [ref=e223]
          - menu "Customer service" [ref=e224]:
            - menuitem "Search" [ref=e225]:
              - link "Search" [ref=e226] [cursor=pointer]:
                - /url: /search
            - menuitem "News" [ref=e227]:
              - link "News" [ref=e228] [cursor=pointer]:
                - /url: /news
            - menuitem "Blog" [ref=e229]:
              - link "Blog" [ref=e230] [cursor=pointer]:
                - /url: /blog
            - menuitem "Recently viewed products" [ref=e231]:
              - link "Recently viewed products" [ref=e232] [cursor=pointer]:
                - /url: /recentlyviewedproducts
            - menuitem "Compare products list" [ref=e233]:
              - link "Compare products list" [ref=e234] [cursor=pointer]:
                - /url: /compareproducts
            - menuitem "New products" [ref=e235]:
              - link "New products" [ref=e236] [cursor=pointer]:
                - /url: /newproducts
          - heading "My account" [level=2] [ref=e237]
          - menu "My account" [ref=e238]:
            - menuitem "My account" [ref=e239]:
              - link "My account" [ref=e240] [cursor=pointer]:
                - /url: /customer/info
            - menuitem "Orders" [ref=e241]:
              - link "Orders" [ref=e242] [cursor=pointer]:
                - /url: /order/history
            - menuitem "Addresses" [ref=e243]:
              - link "Addresses" [ref=e244] [cursor=pointer]:
                - /url: /customer/addresses
            - menuitem "Shopping cart" [ref=e245]:
              - link "Shopping cart" [ref=e246] [cursor=pointer]:
                - /url: /cart
            - menuitem "Wishlist" [ref=e247]:
              - link "Wishlist" [ref=e248] [cursor=pointer]:
                - /url: /wishlist
            - menuitem "Apply for vendor account" [ref=e249]:
              - link "Apply for vendor account" [ref=e250] [cursor=pointer]:
                - /url: /vendor/apply
        - generic [ref=e251]:
          - generic [ref=e252]:
            - heading "Follow us" [level=2] [ref=e253]
            - list [ref=e254]:
              - listitem [ref=e255]:
                - link "Facebook" [ref=e256] [cursor=pointer]:
                  - /url: https://www.facebook.com/nopCommerce
              - listitem [ref=e257]:
                - link "Twitter" [ref=e258] [cursor=pointer]:
                  - /url: https://twitter.com/nopCommerce
              - listitem [ref=e259]:
                - link "RSS" [ref=e260] [cursor=pointer]:
                  - /url: /news/rss/1
              - listitem [ref=e261]:
                - link "YouTube" [ref=e262] [cursor=pointer]:
                  - /url: https://www.youtube.com/user/nopCommerce
              - listitem [ref=e263]:
                - link "Instagram" [ref=e264] [cursor=pointer]:
                  - /url: https://www.instagram.com/nopcommerce_official
          - form [ref=e265]:
            - heading "Newsletter" [level=2] [ref=e266]
            - generic [ref=e268]:
              - textbox "Sign up for our newsletter" [ref=e269]:
                - /placeholder: Enter your email here...
              - button "Subscribe" [ref=e270] [cursor=pointer]
      - generic [ref=e271]:
        - generic [ref=e272]: Copyright © 2026 nopCommerce demo store. All rights reserved.
        - generic [ref=e273]:
          - text: Powered by
          - link "nopCommerce" [ref=e274] [cursor=pointer]:
            - /url: https://www.nopcommerce.com/
```

# Test source

```ts
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
  214 | 
  215 | test.describe('Product Service Tests', () => {
  216 | test.beforeEach(async ({ page }) => {
  217 | 
  218 |     await page.goto(
  219 |         'https://demo.nopcommerce.com/'
  220 |     );
  221 | });
  222 | 
  223 |     test(
  224 |     'TC_PRODUCT_001 - Search Existing Product',
  225 | 
  226 |     {
  227 |         annotation: {
  228 |             type: 'Search',
  229 |             description:
  230 |             'Verify user can search existing product'
  231 |         }
  232 | 
  233 |     },
  234 | 
  235 |     async ({ page }) => {
  236 | 
  237 |         await page.searchProduct(
  238 |             'computer'
  239 |         );
  240 | 
  241 |         await expect(
  242 |             page.productItems.first()
  243 |         ).toBeVisible();
  244 |     });
  245 | 
  246 |     test(
  247 |     'TC_PRODUCT_002 - Search Non Existing Product',
  248 | 
  249 |     {
  250 |         annotation: {
  251 |             type: 'Search',
  252 |             description:
  253 |             'Verify proper message displayed for invalid search'
  254 |         }
  255 |     },
  256 | 
  257 |     async ({ page }) => {
  258 | 
  259 |         await page.searchProduct(
  260 |             'abcdefghxyz'
  261 |         );
  262 | 
  263 |         await expect(
  264 |             page.noResult
  265 |         ).toContainText(
  266 |             'No products were found'
  267 |         );
  268 |     });
  269 | 
  270 |     test(
  271 |     'TC_PRODUCT_003 - Open Product Details Page',
  272 | 
  273 |     {
  274 |         annotation: {
  275 |             type: 'Product',
  276 |             description:
  277 |             'Verify product details page opens successfully'
  278 |         }
  279 |     },
  280 | 
  281 |     async ({ page }) => {
  282 | 
  283 |         await page.goto(
  284 | 'https://demo.nopcommerce.com/desktops'
  285 |         );
  286 | 
> 287 |         await page.openFirstProduct();
      |                    ^ TypeError: page.openFirstProduct is not a function
  288 | 
  289 |         await expect(
  290 |             page.locator('h1')
  291 |         ).toBeVisible();
  292 |     });
  293 | 
  294 |     test(
  295 |     'TC_PRODUCT_004 - Verify Product Price Visible',
  296 | 
  297 |     {
  298 |         annotation: {
  299 |             type: 'Product',
  300 |             description:
  301 |             'Verify product price is visible on details page'
  302 |         }
  303 |     },
  304 | 
  305 |     async ({  page }) => {
  306 | 
  307 |         await page.goto(
  308 | 'https://demo.nopcommerce.com/desktops'
  309 |         );
  310 | 
  311 |         await page.openFirstProduct();
  312 | 
  313 |         await expect(
  314 |             page.productPrice
  315 |         ).toBeVisible();
  316 |     });
  317 | 
  318 |     test(
  319 |     'TC_PRODUCT_005 - Verify Product Image Visible',
  320 | 
  321 |     {
  322 |         annotation: {
  323 |             type: 'Product',
  324 |             description:
  325 |             'Verify product image is visible on details page'
  326 |         }
  327 |     },
  328 | 
  329 |     async ({  page }) => {
  330 | 
  331 |         await page.goto(
  332 | 'https://demo.nopcommerce.com/desktops'
  333 |         );
  334 | 
  335 |         await page.openFirstProduct();
  336 | 
  337 |         await expect(
  338 |             page.productImage
  339 |         ).toBeVisible();
  340 |     });
  341 | 
  342 | });
```