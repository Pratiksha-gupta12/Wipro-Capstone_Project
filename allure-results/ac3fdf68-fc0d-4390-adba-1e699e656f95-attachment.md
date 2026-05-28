# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_011 - Forgot Password
- Location: tests/auth/login.spec.js:291:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#Email')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - heading "demo.nopcommerce.com" [level=1] [ref=e5]
      - heading "Verifying you are human. This may take a few seconds." [level=2] [ref=e6]
      - paragraph [ref=e7]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e14]:
    - generic [ref=e16]:
      - generic [ref=e18]:
        - text: "Ray ID:"
        - code [ref=e19]: a01a42c1ea8a2961
      - generic [ref=e20]:
        - generic [ref=e21]:
          - text: Performance and Security by
          - link "Cloudflare" [ref=e22] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
        - link "Privacy" [ref=e24] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  203 |         page.locator('.field-validation-error')
  204 |     ).toContainText(
  205 |         'Please enter your email'
  206 |     );
  207 | });
  208 | 
  209 | 
  210 | 
  211 | 
  212 | // ======================================================
  213 | // TC_AUTH_009 - Successful Login
  214 | // ======================================================
  215 | 
  216 | test('TC_AUTH_009 - Successful Login',
  217 | async ({ page }) => {
  218 | 
  219 |     await page.goto(
  220 |         'https://demo.nopcommerce.com/login'
  221 |     );
  222 | 
  223 |     await page.locator('#Email')
  224 |         .fill('testing123@gmail.com');
  225 | 
  226 |     await page.locator('#Password')
  227 |         .fill('Testing@12345');
  228 | 
  229 |     await page.locator('.login-button')
  230 |         .click();
  231 | 
  232 |     // Wait for successful login
  233 |     await expect(
  234 |         page.locator('.ico-account')
  235 |     ).toBeVisible({
  236 |         timeout: 20000
  237 |     });
  238 | 
  239 |     console.log('Login Successful');
  240 | });
  241 | 
  242 | 
  243 | 
  244 | 
  245 | // ======================================================
  246 | // TC_AUTH_010 - Logout Functionality
  247 | // ======================================================
  248 | 
  249 | test('TC_AUTH_010 - Logout Functionality',
  250 | async ({ page }) => {
  251 | 
  252 |     await page.goto(
  253 |         'https://demo.nopcommerce.com/login'
  254 |     );
  255 | 
  256 |     await page.locator('#Email')
  257 |         .fill('testing123@gmail.com');
  258 | 
  259 |     await page.locator('#Password')
  260 |         .fill('Testing@12345');
  261 | 
  262 |     await page.locator('.login-button')
  263 |         .click();
  264 | 
  265 |     // Wait for logout button
  266 |     await expect(
  267 |         page.locator('.ico-logout')
  268 |     ).toBeVisible({
  269 |         timeout: 20000
  270 |     });
  271 | 
  272 |     // Click Logout
  273 |     await page.locator('.ico-logout')
  274 |         .click();
  275 | 
  276 |     // Verify login button visible again
  277 |     await expect(
  278 |         page.locator('.ico-login')
  279 |     ).toBeVisible({
  280 |         timeout: 15000
  281 |     });
  282 | });
  283 | 
  284 | 
  285 | 
  286 | 
  287 | // ======================================================
  288 | // TC_AUTH_011 - Forgot Password
  289 | // ======================================================
  290 | 
  291 | test('TC_AUTH_011 - Forgot Password',
  292 | async ({ page }) => {
  293 | 
  294 |     await page.goto(
  295 |         'https://demo.nopcommerce.com/login'
  296 |     );
  297 | 
  298 |     await page.locator('.forgot-password')
  299 |         .click();
  300 | 
  301 |     // Use registered email
  302 |     await page.locator('#Email')
> 303 |         .fill('testing123@gmail.com');
      |          ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  304 | 
  305 |     await page.locator(
  306 |         '.password-recovery-button'
  307 |     ).click();
  308 | 
  309 |     // DO NOT use networkidle here
  310 |     // Cloudflare causes infinite wait sometimes
  311 | 
  312 |     // Verify result message
  313 |     await expect(
  314 |         page.locator('.result')
  315 |     ).toBeVisible({
  316 |         timeout: 20000
  317 |     });
  318 | 
  319 |     await expect(
  320 |         page.locator('.result')
  321 |     ).toContainText(
  322 |         'Email with instructions has been sent to you.'
  323 |     );
  324 | });
```