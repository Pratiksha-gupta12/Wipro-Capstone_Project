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
    - text: $1,315.00
    - textbox "Enter a quantity": "1"
    - button "Add to cart"
    - button "Add to wishlist"
    - button "Add to compare list"
    - button "Email a friend"
    - img "whatsapp sharing button"
    - img "facebook sharing button"
    - img "twitter sharing button"
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