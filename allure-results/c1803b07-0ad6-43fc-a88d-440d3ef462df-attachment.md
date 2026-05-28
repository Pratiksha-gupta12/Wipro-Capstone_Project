# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_010 - Logout Functionality
- Location: tests/auth/login.spec.js:257:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.ico-login')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('.ico-login')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a01ae36d18ad179a
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  188 |     ).toContainText(
  189 |         'Login was unsuccessful'
  190 |     );
  191 | });
  192 | 
  193 | 
  194 | 
  195 | // ======================================================
  196 | // TC_AUTH_008 - Login with Empty Fields
  197 | // ======================================================
  198 | 
  199 | test('TC_AUTH_008 - Login with Empty Fields',
  200 | async ({ page }) => {
  201 | 
  202 |     await page.goto(
  203 |         'https://demo.nopcommerce.com/login'
  204 |     );
  205 | 
  206 |     await page.locator('.login-button')
  207 |         .click();
  208 |         await page.waitForTimeout(5000);
  209 | 
  210 |     // Verify validation message
  211 |     await expect(
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
> 288 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
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
  312 |         .fill('testing123@gmail.com');
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
```