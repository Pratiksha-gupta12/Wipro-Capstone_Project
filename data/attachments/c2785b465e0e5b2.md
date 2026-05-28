# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_011 - Forgot Password
- Location: tests/auth/login.spec.js:300:1

# Error details

```
TimeoutError: locator.fill: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('#Email')

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
        - code [ref=e16]: a01bd36dbce9a7e0
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
  212 |         page.locator('.field-validation-error')
  213 |     ).toContainText(
  214 |         'Please enter your email'
  215 |     );
  216 | });
  217 | 
  218 | 
  219 | 
  220 | 
  221 | // ======================================================
  222 | // TC_AUTH_009 - Successful Login
  223 | // ======================================================
  224 | test('TC_AUTH_009 - Successful Login',
  225 | async ({ page }) => {
  226 | 
  227 |     await page.goto(
  228 |         'https://demo.nopcommerce.com/login'
  229 |     );
  230 | 
  231 |     await page.locator('#Email')
  232 |         .fill('pratiksha@gmail.com');
  233 | 
  234 |     await page.locator('#Password')
  235 |         .fill('abcdef');
  236 | 
  237 |     await page.locator('.login-button')
  238 |         .click();
  239 | 
  240 |     // wait for redirect
  241 |     await page.waitForTimeout(5000);
  242 | 
  243 |     // verify login success
  244 |     await expect(
  245 |         page.locator('.ico-account')
  246 |     ).toBeVisible({
  247 |         timeout: 30000
  248 |     });
  249 | 
  250 |     console.log('Login Successful');
  251 | });
  252 | 
  253 | // ======================================================
  254 | // TC_AUTH_010 - Logout Functionality
  255 | // ======================================================
  256 | 
  257 | test('TC_AUTH_010 - Logout Functionality',
  258 | async ({ page }) => {
  259 | 
  260 |     await page.goto(
  261 |         'https://demo.nopcommerce.com/login'
  262 |     );
  263 | 
  264 |     await page.locator('#Email')
  265 |         .fill('testing123@gmail.com');
  266 | 
  267 |     await page.locator('#Password')
  268 |         .fill('Testing@12345');
  269 | 
  270 |     await page.locator('.login-button')
  271 |         .click();
  272 |         await page.waitForTimeout(5000);
  273 | 
  274 |     // Wait for logout button
  275 |     await expect(
  276 |         page.locator('.ico-logout')
  277 |     ).toBeVisible({
  278 |         timeout: 20000
  279 |     });
  280 | 
  281 |     // Click Logout
  282 |     await page.locator('.ico-logout')
  283 |         .click();
  284 | 
  285 |     // Verify login button visible again
  286 |     await expect(
  287 |         page.locator('.ico-login')
  288 |     ).toBeVisible({
  289 |         timeout: 15000
  290 |     });
  291 | });
  292 | 
  293 | 
  294 | 
  295 | 
  296 | // ======================================================
  297 | // TC_AUTH_011 - Forgot Password
  298 | // ======================================================
  299 | 
  300 | test('TC_AUTH_011 - Forgot Password',
  301 | async ({ page }) => {
  302 | 
  303 |     await page.goto(
  304 |         'https://demo.nopcommerce.com/login'
  305 |     );
  306 | 
  307 |     await page.locator('.forgot-password')
  308 |         .click();
  309 | 
  310 |     // Use registered email
  311 |     await page.locator('#Email')
> 312 |         .fill('testing123@gmail.com');
      |          ^ TimeoutError: locator.fill: Timeout 15000ms exceeded.
  313 | 
  314 |     await page.locator(
  315 |         '.password-recovery-button'
  316 |     ).click();
  317 |     await page.waitForTimeout(5000);
  318 | 
  319 |     // DO NOT use networkidle here
  320 |     // Cloudflare causes infinite wait sometimes
  321 | 
  322 |     // Verify result message
  323 |     await expect(
  324 |         page.locator('.result')
  325 |     ).toBeVisible({
  326 |         timeout: 20000
  327 |     });
  328 | 
  329 |     await expect(
  330 |         page.locator('.result')
  331 |     ).toContainText(
  332 |         'Email with instructions has been sent to you.'
  333 |     );
  334 | });
  335 | 
  336 | 
  337 | 
  338 | // ======================================================
  339 | // TC_AUTH_012 - Password Minimum Length Validation
  340 | // ======================================================
  341 | 
  342 | test('TC_AUTH_012 - Password Minimum Length Validation',
  343 | async ({ page }) => {
  344 | 
  345 |     await page.goto(
  346 |         'https://demo.nopcommerce.com/register'
  347 |     );
  348 | 
  349 |     await page.locator('#gender-male').check();
  350 | 
  351 |     await page.locator('#FirstName')
  352 |         .fill('Pratiksha');
  353 | 
  354 |     await page.locator('#LastName')
  355 |         .fill('Gupta');
  356 | 
  357 |     await page.locator('#Email')
  358 |         .fill(`user${Date.now()}@gmail.com`);
  359 | 
  360 |     // Short Password
  361 |     await page.locator('#Password')
  362 |         .fill('123');
  363 | 
  364 |     await page.locator('#ConfirmPassword')
  365 |         .fill('123');
  366 | 
  367 |     await page.locator('#register-button')
  368 |         .click();
  369 | 
  370 |     await expect(
  371 |         page.locator('.field-validation-error')
  372 |     ).toContainText(
  373 |         'Password must meet the following rules'
  374 |     );
  375 | });
  376 | 
  377 | 
  378 | // ======================================================
  379 | // TC_AUTH_013 - Empty Confirm Password
  380 | // ======================================================
  381 | 
  382 | test('TC_AUTH_013 - Empty Confirm Password',
  383 | async ({ page }) => {
  384 | 
  385 |     await page.goto(
  386 |         'https://demo.nopcommerce.com/register'
  387 |     );
  388 | 
  389 |     await page.locator('#gender-male').check();
  390 | 
  391 |     await page.locator('#FirstName')
  392 |         .fill('Pratiksha');
  393 | 
  394 |     await page.locator('#LastName')
  395 |         .fill('Gupta');
  396 | 
  397 |     await page.locator('#Email')
  398 |         .fill(`user${Date.now()}@gmail.com`);
  399 | 
  400 |     await page.locator('#Password')
  401 |         .fill('Testing@12345');
  402 | 
  403 |     // Empty confirm password
  404 |     await page.locator('#ConfirmPassword')
  405 |         .fill('');
  406 | 
  407 |     await page.locator('#register-button')
  408 |         .click();
  409 | 
  410 |     await expect(
  411 |         page.locator('#ConfirmPassword-error')
  412 |     ).toContainText(
```