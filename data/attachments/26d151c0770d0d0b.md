# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_010 - Logout Functionality
- Location: tests/auth/login.spec.js:269:1

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
  - code: a01a68da7c313ca6
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  200 | 
  201 |     await page.locator('.login-button')
  202 |         .click();
  203 |         await page.waitForTimeout(5000);
  204 | 
  205 |     // Verify validation message
  206 |     await expect(
  207 |         page.locator('.field-validation-error')
  208 |     ).toContainText(
  209 |         'Please enter your email'
  210 |     );
  211 | });
  212 | 
  213 | 
  214 | 
  215 | 
  216 | // ======================================================
  217 | // TC_AUTH_009 - Successful Login
  218 | // ======================================================
  219 | test('TC_AUTH_009 - Successful Login',
  220 | async ({ page }) => {
  221 | 
  222 |     await page.goto(
  223 |         'https://demo.nopcommerce.com/login'
  224 |     );
  225 | 
  226 |     await page.locator('#Email')
  227 |         .fill('testing123@gmail.com');
  228 | 
  229 |     await page.locator('#Password')
  230 |         .fill('Testing@12345');
  231 | 
  232 |     await page.locator('.login-button')
  233 |         .click();
  234 | 
  235 |     await page.waitForTimeout(5000);
  236 | 
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
> 300 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
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
  311 | test('TC_AUTH_011 - Forgot Password',
  312 | async ({ page }) => {
  313 | 
  314 |     await page.goto(
  315 |         'https://demo.nopcommerce.com/login'
  316 |     );
  317 | 
  318 |     await page.locator('.forgot-password')
  319 |         .click();
  320 | 
  321 |     await page.locator('#Email')
  322 |         .fill('testing123@gmail.com');
  323 | 
  324 |     await page.locator(
  325 |         '.password-recovery-button'
  326 |     ).click();
  327 | 
  328 |     await page.waitForTimeout(5000);
  329 | 
  330 |     const resultExists = await page
  331 |         .locator('.result')
  332 |         .isVisible()
  333 |         .catch(() => false);
  334 | 
  335 |     if(resultExists){
  336 | 
  337 |         await expect(
  338 |             page.locator('.result')
  339 |         ).toContainText(
  340 |             'Email with instructions has been sent to you.'
  341 |         );
  342 | 
  343 |     } else {
  344 | 
  345 |         const body = await page.locator('body')
  346 |             .textContent();
  347 | 
  348 |         console.log(body);
  349 | 
  350 |         throw new Error(
  351 |             'Forgot password failed or blocked by Cloudflare'
  352 |         );
  353 |     }
  354 | });
```