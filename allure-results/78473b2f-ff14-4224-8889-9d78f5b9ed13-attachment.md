# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> TC_PRODUCT_005 - Verify Product Image Visible
- Location: tests/product/product.spec.js:194:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.gallery img')
Expected: visible
Error: strict mode violation: locator('.gallery img') resolved to 3 elements:
    1) <img id="main-product-img-1" alt="Picture of Build your own computer" title="Picture of Build your own computer" src="https://demo.nopcommerce.com/images/thumbs/0000020_build-your-own-computer_550.jpeg"/> aka locator('#main-product-img-1')
    2) <img alt="Picture of Build your own computer" title="Picture of Build your own computer" src="https://demo.nopcommerce.com/images/thumbs/0000020_build-your-own-computer_100.jpeg" data-fullsize="https://demo.nopcommerce.com/images/thumbs/0000020_build-your-own-computer.jpeg" data-defaultsize="https://demo.nopcommerce.com/images/thumbs/0000020_build-your-own-computer_550.jpeg"/> aka getByRole('img', { name: 'Picture of Build your own' }).nth(1)
    3) <img alt="Picture of Build your own computer" title="Picture of Build your own computer" src="https://demo.nopcommerce.com/images/thumbs/0000021_build-your-own-computer_100.jpeg" data-fullsize="https://demo.nopcommerce.com/images/thumbs/0000021_build-your-own-computer.jpeg" data-defaultsize="https://demo.nopcommerce.com/images/thumbs/0000021_build-your-own-computer_550.jpeg"/> aka getByRole('img', { name: 'Picture of Build your own' }).nth(2)

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.gallery img')

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
              - /url: /register?returnUrl=%2Fbuild-your-own-computer
          - listitem [ref=e14]:
            - link "Log in" [ref=e15] [cursor=pointer]:
              - /url: /login?returnUrl=%2Fbuild-your-own-computer
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
            - link "Home" [ref=e58] [cursor=pointer]:
              - /url: /
              - generic [ref=e59]: Home
            - generic [ref=e60]: /
          - listitem [ref=e61]:
            - link "Computers" [ref=e62] [cursor=pointer]:
              - /url: /computers
              - generic [ref=e63]: Computers
            - generic [ref=e64]: /
          - listitem [ref=e65]:
            - link "Desktops" [ref=e66] [cursor=pointer]:
              - /url: /desktops
              - generic [ref=e67]: Desktops
            - generic [ref=e68]: /
          - listitem [ref=e69]:
            - strong [ref=e70]: Build your own computer
        - generic [ref=e73]:
          - article [ref=e75]:
            - generic [ref=e76]:
              - generic [ref=e78]:
                - img "Picture of Build your own computer" [ref=e80]
                - generic [ref=e81]:
                  - img "Picture of Build your own computer" [ref=e83] [cursor=pointer]
                  - img "Picture of Build your own computer" [ref=e85] [cursor=pointer]
              - generic [ref=e86]:
                - heading "Build your own computer" [level=1] [ref=e88]
                - generic [ref=e89]: Build it
                - link "1 review(s)" [ref=e95] [cursor=pointer]:
                  - /url: "#productreviews"
                - generic [ref=e97]: "SKU: COMP_CUST"
                - generic [ref=e99]: Free shipping
                - generic [ref=e101]:
                  - term [ref=e102]: Processor *
                  - definition [ref=e103]:
                    - combobox "Processor" [ref=e104]:
                      - option "Please select"
                      - option "2.2 GHz Intel Pentium Dual-Core E2200"
                      - option "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]" [selected]
                  - term [ref=e105]: RAM *
                  - definition [ref=e106]:
                    - combobox "RAM" [ref=e107]:
                      - option "Please select" [selected]
                      - option "2 GB"
                      - option "4GB [+$20.00]"
                      - option "8GB [+$60.00]"
                  - term [ref=e108]: HDD *
                  - definition [ref=e109]:
                    - list [ref=e110]:
                      - listitem [ref=e111]:
                        - radio "320 GB" [ref=e112]
                        - text: 320 GB
                      - listitem [ref=e113]:
                        - radio "400 GB [+$100.00]" [ref=e114]
                        - text: 400 GB [+$100.00]
                  - term [ref=e115]: OS *
                  - definition [ref=e116]:
                    - list [ref=e117]:
                      - listitem [ref=e118]:
                        - radio "Vista Home [+$50.00]" [checked] [ref=e119]
                        - text: Vista Home [+$50.00]
                      - listitem [ref=e120]:
                        - radio "Vista Premium [+$60.00]" [ref=e121]
                        - text: Vista Premium [+$60.00]
                  - term [ref=e122]: Software
                  - definition [ref=e123]:
                    - list [ref=e124]:
                      - listitem [ref=e125]:
                        - checkbox "Microsoft Office [+$50.00]" [checked] [ref=e126]
                        - text: Microsoft Office [+$50.00]
                      - listitem [ref=e127]:
                        - checkbox "Acrobat Reader [+$10.00]" [ref=e128]
                        - text: Acrobat Reader [+$10.00]
                      - listitem [ref=e129]:
                        - checkbox "Total Commander [+$5.00]" [ref=e130]
                        - text: Total Commander [+$5.00]
                - generic [ref=e132]: $1,200.00
                - generic [ref=e134]:
                  - textbox "Enter a quantity" [ref=e135]: "1"
                  - button "Add to cart" [ref=e136] [cursor=pointer]
                - generic [ref=e137]:
                  - button "Add to wishlist" [ref=e139] [cursor=pointer]
                  - button "Add to compare list" [ref=e141] [cursor=pointer]
                  - button "Email a friend" [ref=e143] [cursor=pointer]
              - paragraph [ref=e145]: Fight back against cluttered workspaces with the stylish IBM zBC12 All-in-One desktop PC, featuring powerful computing resources and a stunning 20.1-inch widescreen display with stunning XBRITE-HiColor LCD technology. The black IBM zBC12 has a built-in microphone and MOTION EYE camera with face-tracking technology that allows for easy communication with friends and family. And it has a built-in DVD burner and Sony's Movie Store software so you can create a digital entertainment library for personal viewing at your convenience. Easy to setup and even easier to use, this JS-series All-in-One includes an elegantly designed keyboard and a USB mouse.
            - generic [ref=e147]:
              - heading "Product tags" [level=2] [ref=e148]
              - list [ref=e150]:
                - listitem [ref=e151]:
                  - link "awesome" [ref=e152] [cursor=pointer]:
                    - /url: /awesome
                  - text: (18)
                - listitem [ref=e153]: ","
                - listitem [ref=e154]:
                  - link "computer" [ref=e155] [cursor=pointer]:
                    - /url: /computer
                  - text: (14)
            - generic [ref=e156]:
              - heading "Customers who bought this item also bought" [level=2] [ref=e157]
              - article [ref=e160]:
                - link "Picture of Flower Girl Bracelet" [ref=e162] [cursor=pointer]:
                  - /url: /flower-girl-bracelet
                  - img "Picture of Flower Girl Bracelet" [ref=e163]
                - generic [ref=e164]:
                  - heading "Flower Girl Bracelet" [level=2] [ref=e165]:
                    - link "Flower Girl Bracelet" [ref=e166] [cursor=pointer]:
                      - /url: /flower-girl-bracelet
                  - generic "1 review(s)" [ref=e167]
                  - generic [ref=e170]:
                    - generic [ref=e171]: $360.00
                    - generic [ref=e172]:
                      - button "Add to cart" [ref=e173] [cursor=pointer]
                      - button "Add to compare list" [ref=e174] [cursor=pointer]
                      - button "Add to wishlist" [ref=e175] [cursor=pointer]
          - generic [ref=e176]:
            - generic [ref=e177]:
              - heading "Existing reviews" [level=2] [ref=e178]
              - generic [ref=e179]:
                - generic [ref=e180]:
                  - strong [ref=e182]: Some sample review
                  - generic [ref=e185]: "4"
                - generic [ref=e186]:
                  - generic [ref=e188]: This sample review is for the Build your own computer. I've been waiting for this product to be available. It is priced just right.
                  - generic [ref=e189]:
                    - generic [ref=e190]: "From: John"
                    - text: "|"
                    - generic [ref=e191]: "Date: 11/4/2025 4:41 AM"
                  - generic [ref=e192]:
                    - text: Was this review helpful?
                    - generic [ref=e193]:
                      - generic [ref=e194] [cursor=pointer]: "Yes"
                      - generic [ref=e195] [cursor=pointer]: "No"
                    - generic [ref=e196]: (0/0)
            - generic [ref=e197]: Only registered users can write reviews
    - contentinfo [ref=e198]:
      - generic [ref=e199]:
        - navigation [ref=e200]:
          - heading "Information" [level=2] [ref=e201]
          - menu "Information" [ref=e202]:
            - menuitem "Sitemap" [ref=e203]:
              - link "Sitemap" [ref=e204] [cursor=pointer]:
                - /url: /sitemap
            - menuitem "Shipping & returns" [ref=e205]:
              - link "Shipping & returns" [ref=e206] [cursor=pointer]:
                - /url: /shipping-returns
            - menuitem "Privacy notice" [ref=e207]:
              - link "Privacy notice" [ref=e208] [cursor=pointer]:
                - /url: /privacy-notice
            - menuitem "Conditions of Use" [ref=e209]:
              - link "Conditions of Use" [ref=e210] [cursor=pointer]:
                - /url: /conditions-of-use
            - menuitem "About us" [ref=e211]:
              - link "About us" [ref=e212] [cursor=pointer]:
                - /url: /about-us
            - menuitem "Contact us" [ref=e213]:
              - link "Contact us" [ref=e214] [cursor=pointer]:
                - /url: /contactus
          - heading "Customer service" [level=2] [ref=e215]
          - menu "Customer service" [ref=e216]:
            - menuitem "Search" [ref=e217]:
              - link "Search" [ref=e218] [cursor=pointer]:
                - /url: /search
            - menuitem "News" [ref=e219]:
              - link "News" [ref=e220] [cursor=pointer]:
                - /url: /news
            - menuitem "Blog" [ref=e221]:
              - link "Blog" [ref=e222] [cursor=pointer]:
                - /url: /blog
            - menuitem "Recently viewed products" [ref=e223]:
              - link "Recently viewed products" [ref=e224] [cursor=pointer]:
                - /url: /recentlyviewedproducts
            - menuitem "Compare products list" [ref=e225]:
              - link "Compare products list" [ref=e226] [cursor=pointer]:
                - /url: /compareproducts
            - menuitem "New products" [ref=e227]:
              - link "New products" [ref=e228] [cursor=pointer]:
                - /url: /newproducts
          - heading "My account" [level=2] [ref=e229]
          - menu "My account" [ref=e230]:
            - menuitem "My account" [ref=e231]:
              - link "My account" [ref=e232] [cursor=pointer]:
                - /url: /customer/info
            - menuitem "Orders" [ref=e233]:
              - link "Orders" [ref=e234] [cursor=pointer]:
                - /url: /order/history
            - menuitem "Addresses" [ref=e235]:
              - link "Addresses" [ref=e236] [cursor=pointer]:
                - /url: /customer/addresses
            - menuitem "Shopping cart" [ref=e237]:
              - link "Shopping cart" [ref=e238] [cursor=pointer]:
                - /url: /cart
            - menuitem "Wishlist" [ref=e239]:
              - link "Wishlist" [ref=e240] [cursor=pointer]:
                - /url: /wishlist
            - menuitem "Apply for vendor account" [ref=e241]:
              - link "Apply for vendor account" [ref=e242] [cursor=pointer]:
                - /url: /vendor/apply
        - generic [ref=e243]:
          - generic [ref=e244]:
            - heading "Follow us" [level=2] [ref=e245]
            - list [ref=e246]:
              - listitem [ref=e247]:
                - link "Facebook" [ref=e248] [cursor=pointer]:
                  - /url: https://www.facebook.com/nopCommerce
              - listitem [ref=e249]:
                - link "Twitter" [ref=e250] [cursor=pointer]:
                  - /url: https://twitter.com/nopCommerce
              - listitem [ref=e251]:
                - link "RSS" [ref=e252] [cursor=pointer]:
                  - /url: /news/rss/1
              - listitem [ref=e253]:
                - link "YouTube" [ref=e254] [cursor=pointer]:
                  - /url: https://www.youtube.com/user/nopCommerce
              - listitem [ref=e255]:
                - link "Instagram" [ref=e256] [cursor=pointer]:
                  - /url: https://www.instagram.com/nopcommerce_official
          - form [ref=e257]:
            - heading "Newsletter" [level=2] [ref=e258]
            - generic [ref=e260]:
              - textbox "Sign up for our newsletter" [ref=e261]:
                - /placeholder: Enter your email here...
              - button "Subscribe" [ref=e262] [cursor=pointer]
      - generic [ref=e263]:
        - generic [ref=e264]: Copyright © 2026 nopCommerce demo store. All rights reserved.
        - generic [ref=e265]:
          - text: Powered by
          - link "nopCommerce" [ref=e266] [cursor=pointer]:
            - /url: https://www.nopcommerce.com/
```

# Test source

```ts
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
  157 |     ).toContainText(
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
> 207 |         .toBeVisible();
      |          ^ Error: expect(locator).toBeVisible() failed
  208 | });
```