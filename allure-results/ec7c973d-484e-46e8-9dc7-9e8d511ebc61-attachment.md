# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> TC_PRODUCT_004 - Verify Product Price Visible
- Location: tests/product/product.spec.js:114:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.price-value')
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.price-value')

```

```yaml
- status
- banner:
  - link "Skip navigation":
    - /url: "#main"
  - combobox "Currency selector":
    - option "US Dollar" [selected]
    - option "Euro"
  - list:
    - listitem:
      - link "Register":
        - /url: /register?returnUrl=%2Fbuild-your-own-computer
    - listitem:
      - link "Log in":
        - /url: /login?returnUrl=%2Fbuild-your-own-computer
    - listitem:
      - link "Wishlist (0)":
        - /url: /wishlist
    - listitem:
      - link "Shopping cart (0)":
        - /url: /cart
  - link "nopCommerce demo store":
    - /url: /
    - img "nopCommerce demo store"
  - search:
    - textbox "Search store"
    - button "Search"
- navigation:
  - menu "Categories":
    - menuitem "Computers":
      - button "Computers"
    - menuitem "Electronics":
      - button "Electronics"
    - menuitem "Apparel":
      - button "Apparel"
    - menuitem "Digital downloads":
      - button "Digital downloads"
    - menuitem "Books":
      - button "Books"
    - menuitem "Jewelry":
      - button "Jewelry"
    - menuitem "Gift Cards":
      - button "Gift Cards"
- main:
  - list:
    - listitem:
      - link "Home":
        - /url: /
      - text: /
    - listitem:
      - link "Computers":
        - /url: /computers
      - text: /
    - listitem:
      - link "Desktops":
        - /url: /desktops
      - text: /
    - listitem:
      - strong: Build your own computer
  - article:
    - img "Picture of Build your own computer"
    - img "Picture of Build your own computer"
    - img "Picture of Build your own computer"
    - heading "Build your own computer" [level=1]
    - text: Build it
    - link "1 review(s)":
      - /url: "#productreviews"
    - text: "SKU: COMP_CUST Free shipping"
    - term: Processor *
    - definition:
      - combobox "Processor":
        - option "Please select"
        - option "2.2 GHz Intel Pentium Dual-Core E2200"
        - option "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]" [selected]
    - term: RAM *
    - definition:
      - combobox "RAM":
        - option "Please select" [selected]
        - option "2 GB"
        - option "4GB [+$20.00]"
        - option "8GB [+$60.00]"
    - term: HDD *
    - definition:
      - list:
        - listitem:
          - radio "320 GB"
          - text: 320 GB
        - listitem:
          - radio "400 GB [+$100.00]"
          - text: 400 GB [+$100.00]
    - term: OS *
    - definition:
      - list:
        - listitem:
          - radio "Vista Home [+$50.00]" [checked]
          - text: Vista Home [+$50.00]
        - listitem:
          - radio "Vista Premium [+$60.00]"
          - text: Vista Premium [+$60.00]
    - term: Software
    - definition:
      - list:
        - listitem:
          - checkbox "Microsoft Office [+$50.00]" [checked]
          - text: Microsoft Office [+$50.00]
        - listitem:
          - checkbox "Acrobat Reader [+$10.00]"
          - text: Acrobat Reader [+$10.00]
        - listitem:
          - checkbox "Total Commander [+$5.00]"
          - text: Total Commander [+$5.00]
    - text: $1,200.00
    - textbox "Enter a quantity": "1"
    - button "Add to cart"
    - button "Add to wishlist"
    - button "Add to compare list"
    - button "Email a friend"
    - img "whatsapp sharing button"
    - img "facebook sharing button"
    - paragraph: Fight back against cluttered workspaces with the stylish IBM zBC12 All-in-One desktop PC, featuring powerful computing resources and a stunning 20.1-inch widescreen display with stunning XBRITE-HiColor LCD technology. The black IBM zBC12 has a built-in microphone and MOTION EYE camera with face-tracking technology that allows for easy communication with friends and family. And it has a built-in DVD burner and Sony's Movie Store software so you can create a digital entertainment library for personal viewing at your convenience. Easy to setup and even easier to use, this JS-series All-in-One includes an elegantly designed keyboard and a USB mouse.
    - heading "Product tags" [level=2]
    - list:
      - listitem:
        - link "awesome":
          - /url: /awesome
        - text: (18)
      - listitem: ","
      - listitem:
        - link "computer":
          - /url: /computer
        - text: (14)
  - heading "Existing reviews" [level=2]
  - strong: Some sample review
  - text: "4 This sample review is for the Build your own computer. I've been waiting for this product to be available. It is priced just right. From: John | Date: 11/4/2025 4:41 AM Was this review helpful? Yes No (0/0) Only registered users can write reviews"
- contentinfo:
  - navigation:
    - heading "Information" [level=2]
    - menu "Information":
      - menuitem "Sitemap":
        - link "Sitemap":
          - /url: /sitemap
      - menuitem "Shipping & returns":
        - link "Shipping & returns":
          - /url: /shipping-returns
      - menuitem "Privacy notice":
        - link "Privacy notice":
          - /url: /privacy-notice
      - menuitem "Conditions of Use":
        - link "Conditions of Use":
          - /url: /conditions-of-use
      - menuitem "About us":
        - link "About us":
          - /url: /about-us
      - menuitem "Contact us":
        - link "Contact us":
          - /url: /contactus
    - heading "Customer service" [level=2]
    - menu "Customer service":
      - menuitem "Search":
        - link "Search":
          - /url: /search
      - menuitem "News":
        - link "News":
          - /url: /news
      - menuitem "Blog":
        - link "Blog":
          - /url: /blog
      - menuitem "Recently viewed products":
        - link "Recently viewed products":
          - /url: /recentlyviewedproducts
      - menuitem "Compare products list":
        - link "Compare products list":
          - /url: /compareproducts
      - menuitem "New products":
        - link "New products":
          - /url: /newproducts
    - heading "My account" [level=2]
    - menu "My account":
      - menuitem "My account":
        - link "My account":
          - /url: /customer/info
      - menuitem "Orders":
        - link "Orders":
          - /url: /order/history
      - menuitem "Addresses":
        - link "Addresses":
          - /url: /customer/addresses
      - menuitem "Shopping cart":
        - link "Shopping cart":
          - /url: /cart
      - menuitem "Wishlist":
        - link "Wishlist":
          - /url: /wishlist
      - menuitem "Apply for vendor account":
        - link "Apply for vendor account":
          - /url: /vendor/apply
  - heading "Follow us" [level=2]
  - list:
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/nopCommerce
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/nopCommerce
    - listitem:
      - link "RSS":
        - /url: /news/rss/1
    - listitem:
      - link "YouTube":
        - /url: https://www.youtube.com/user/nopCommerce
    - listitem:
      - link "Instagram":
        - /url: https://www.instagram.com/nopcommerce_official
  - form:
    - heading "Newsletter" [level=2]
    - textbox "Sign up for our newsletter":
      - /placeholder: Enter your email here...
    - button "Subscribe"
  - text: Copyright © 2026 nopCommerce demo store. All rights reserved. Powered by
  - link "nopCommerce":
    - /url: https://www.nopcommerce.com/
```

# Test source

```ts
  28  | 
  29  |     // Verify URL changed
  30  |     await expect(page)
  31  |         .toHaveURL(/search/);
  32  | 
  33  |     // Verify products visible
  34  |     await expect(
  35  |         page.locator('.item-box')
  36  |             .first()
  37  |     ).toBeVisible({
  38  |         timeout: 20000
  39  |     });
  40  | });
  41  | 
  42  | 
  43  | 
  44  | // ======================================================
  45  | // TC_PRODUCT_002 - Search Non Existing Product
  46  | // ======================================================
  47  | test(
  48  | 'TC_PRODUCT_002 - Search Non Existing Product',
  49  | async ({ page }) => {
  50  | 
  51  |     await page.goto(
  52  |         'https://demo.nopcommerce.com'
  53  |     );
  54  | 
  55  |     await page.locator('#small-searchterms')
  56  |         .fill('abcdefxyz');
  57  | 
  58  |     await page.locator(
  59  |         'button.search-box-button'
  60  |     ).click();
  61  | 
  62  |     await expect(
  63  |         page.locator('.no-result')
  64  |     ).toBeVisible({
  65  |         timeout: 20000
  66  |     });
  67  | 
  68  |     await expect(
  69  |         page.locator('.no-result')
  70  |     ).toContainText(
  71  |         'No products were found'
  72  |     );
  73  | });
  74  | 
  75  | 
  76  | 
  77  | 
  78  | // ======================================================
  79  | // TC_PRODUCT_003 - Open Product Details Page
  80  | // ======================================================
  81  | 
  82  | test(
  83  | 'TC_PRODUCT_003 - Open Product Details Page',
  84  | async ({ page }) => {
  85  | 
  86  |     await page.goto(
  87  | 'https://demo.nopcommerce.com/desktops'
  88  |     );
  89  | 
  90  |     await page.locator(
  91  | 'a:has-text("Build your own computer")'
  92  |     ).click();
  93  | 
  94  |     await expect(
  95  |         page.locator('.product-name h1')
  96  |     ).toBeVisible({
  97  |         timeout: 20000
  98  |     });
  99  | 
  100 |     await expect(
  101 |         page.locator('.product-name h1')
  102 |     ).toContainText(
  103 |         'Build your own computer'
  104 |     );
  105 | });
  106 | 
  107 | 
  108 | 
  109 | 
  110 | // ======================================================
  111 | // TC_PRODUCT_004 - Verify Product Price Visible
  112 | // ======================================================
  113 | 
  114 | test(
  115 | 'TC_PRODUCT_004 - Verify Product Price Visible',
  116 | async ({ page }) => {
  117 | 
  118 |     await page.goto(
  119 | 'https://demo.nopcommerce.com/desktops'
  120 |     );
  121 | 
  122 |     await page.locator(
  123 | 'a:has-text("Build your own computer")'
  124 |     ).click();
  125 | 
  126 |     await expect(
  127 |         page.locator('.price-value')
> 128 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  129 |         timeout: 20000
  130 |     });
  131 | });
  132 | 
  133 | 
  134 | 
  135 | 
  136 | // ======================================================
  137 | // TC_PRODUCT_005 - Verify Product Image Visible
  138 | // ======================================================
  139 | 
  140 | test(
  141 | 'TC_PRODUCT_005 - Verify Product Image Visible',
  142 | async ({ page }) => {
  143 | 
  144 |     await page.goto(
  145 | 'https://demo.nopcommerce.com/desktops'
  146 |     );
  147 | 
  148 |     await page.locator(
  149 | 'a:has-text("Build your own computer")'
  150 |     ).click();
  151 | 
  152 |     await expect(
  153 |         page.locator('.picture img')
  154 |     ).toBeVisible({
  155 |         timeout: 20000
  156 |     });
  157 | });
```