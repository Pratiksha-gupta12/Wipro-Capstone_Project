# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_011 - Forgot Password
- Location: tests/auth/login.spec.js:312:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.result')
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.result')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a01aba3a6d97ad28
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  237 |     // Check if login successful
  238 |     const accountVisible = await page
  239 |         .locator('.ico-account')
  240 |         .isVisible()
  241 |         .catch(() => false);
  242 | 
  243 |     if(accountVisible){
  244 | 
  245 |         console.log('Login Successful');
  246 | 
  247 |         await expect(
  248 |             page.locator('.ico-account')
  249 |         ).toBeVisible();
  250 | 
  251 |     } else {
  252 | 
  253 |         const body = await page.locator('body')
  254 |             .textContent();
  255 | 
  256 |         console.log(body);
  257 | 
  258 |         throw new Error(
  259 |             'Login failed or Cloudflare blocked request'
  260 |         );
  261 |     }
  262 | });
  263 | 
  264 | 
  265 | // ======================================================
  266 | // TC_AUTH_010 - Logout Functionality
  267 | // ======================================================
  268 | 
  269 | test('TC_AUTH_010 - Logout Functionality',
  270 | async ({ page }) => {
  271 | 
  272 |     await page.goto(
  273 |         'https://demo.nopcommerce.com/login'
  274 |     );
  275 | 
  276 |     await page.locator('#Email')
  277 |         .fill('testing123@gmail.com');
  278 | 
  279 |     await page.locator('#Password')
  280 |         .fill('Testing@12345');
  281 | 
  282 |     await page.locator('.login-button')
  283 |         .click();
  284 |         await page.waitForTimeout(5000);
  285 | 
  286 |     // Wait for logout button
  287 |     await expect(
  288 |         page.locator('.ico-logout')
  289 |     ).toBeVisible({
  290 |         timeout: 20000
  291 |     });
  292 | 
  293 |     // Click Logout
  294 |     await page.locator('.ico-logout')
  295 |         .click();
  296 | 
  297 |     // Verify login button visible again
  298 |     await expect(
  299 |         page.locator('.ico-login')
  300 |     ).toBeVisible({
  301 |         timeout: 15000
  302 |     });
  303 | });
  304 | 
  305 | 
  306 | 
  307 | 
  308 | // ======================================================
  309 | // TC_AUTH_011 - Forgot Password
  310 | // ======================================================
  311 | 
  312 | test('TC_AUTH_011 - Forgot Password',
  313 | async ({ page }) => {
  314 | 
  315 |     await page.goto(
  316 |         'https://demo.nopcommerce.com/login'
  317 |     );
  318 | 
  319 |     await page.locator('.forgot-password')
  320 |         .click();
  321 | 
  322 |     // Use registered email
  323 |     await page.locator('#Email')
  324 |         .fill('testing123@gmail.com');
  325 | 
  326 |     await page.locator(
  327 |         '.password-recovery-button'
  328 |     ).click();
  329 |     await page.waitForTimeout(5000);
  330 | 
  331 |     // DO NOT use networkidle here
  332 |     // Cloudflare causes infinite wait sometimes
  333 | 
  334 |     // Verify result message
  335 |     await expect(
  336 |         page.locator('.result')
> 337 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  338 |         timeout: 20000
  339 |     });
  340 | 
  341 |     await expect(
  342 |         page.locator('.result')
  343 |     ).toContainText(
  344 |         'Email with instructions has been sent to you.'
  345 |     );
  346 | });
  347 | 
  348 | 
  349 | 
  350 | // ======================================================
  351 | // TC_AUTH_012 - Password Minimum Length Validation
  352 | // ======================================================
  353 | 
  354 | test('TC_AUTH_012 - Password Minimum Length Validation',
  355 | async ({ page }) => {
  356 | 
  357 |     await page.goto(
  358 |         'https://demo.nopcommerce.com/register'
  359 |     );
  360 | 
  361 |     await page.locator('#gender-male').check();
  362 | 
  363 |     await page.locator('#FirstName')
  364 |         .fill('Pratiksha');
  365 | 
  366 |     await page.locator('#LastName')
  367 |         .fill('Gupta');
  368 | 
  369 |     await page.locator('#Email')
  370 |         .fill(`user${Date.now()}@gmail.com`);
  371 | 
  372 |     // Short Password
  373 |     await page.locator('#Password')
  374 |         .fill('123');
  375 | 
  376 |     await page.locator('#ConfirmPassword')
  377 |         .fill('123');
  378 | 
  379 |     await page.locator('#register-button')
  380 |         .click();
  381 | 
  382 |     await expect(
  383 |         page.locator('.field-validation-error')
  384 |     ).toContainText(
  385 |         'Password must meet the following rules'
  386 |     );
  387 | });
  388 | 
  389 | 
  390 | // ======================================================
  391 | // TC_AUTH_013 - Empty Confirm Password
  392 | // ======================================================
  393 | 
  394 | test('TC_AUTH_013 - Empty Confirm Password',
  395 | async ({ page }) => {
  396 | 
  397 |     await page.goto(
  398 |         'https://demo.nopcommerce.com/register'
  399 |     );
  400 | 
  401 |     await page.locator('#gender-male').check();
  402 | 
  403 |     await page.locator('#FirstName')
  404 |         .fill('Pratiksha');
  405 | 
  406 |     await page.locator('#LastName')
  407 |         .fill('Gupta');
  408 | 
  409 |     await page.locator('#Email')
  410 |         .fill(`user${Date.now()}@gmail.com`);
  411 | 
  412 |     await page.locator('#Password')
  413 |         .fill('Testing@12345');
  414 | 
  415 |     // Empty confirm password
  416 |     await page.locator('#ConfirmPassword')
  417 |         .fill('');
  418 | 
  419 |     await page.locator('#register-button')
  420 |         .click();
  421 | 
  422 |     await expect(
  423 |         page.locator('#ConfirmPassword-error')
  424 |     ).toContainText(
  425 |         'Password is required.'
  426 |     );
  427 | });
  428 | 
  429 | 
  430 | // ======================================================
  431 | // TC_AUTH_014 - Login With Invalid Email Format
  432 | // ======================================================
  433 | 
  434 | test('TC_AUTH_014 - Login With Invalid Email Format',
  435 | async ({ page }) => {
  436 | 
  437 |     await page.goto(
```