# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_009 - Successful Login
- Location: tests/auth/login.spec.js:224:1

# Error details

```
Error: Login failed or Cloudflare blocked request
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
        - code [ref=e16]: a01acdacdde99dfa
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
  163 | test('TC_AUTH_007 - Login with Invalid Password',
  164 | async ({ page }) => {
  165 | 
  166 |     await page.goto(
  167 |         'https://demo.nopcommerce.com/login'
  168 |     );
  169 | 
  170 |     await page.locator('#Email')
  171 |         .fill('pratiksha@gmail.com');
  172 | 
  173 |     await page.locator('#Password')
  174 |         .fill('WrongPassword123');
  175 | 
  176 |     await page.locator('.login-button')
  177 |         .click();
  178 | 
  179 |     await page.waitForTimeout(5000);
  180 |     // Wait for error message
  181 |     await expect(
  182 |         page.locator('.message-error')
  183 |     ).toBeVisible({ timeout: 15000 });
  184 | 
  185 |     // Verify Error Text
  186 |     await expect(
  187 |         page.locator('.message-error')
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
  232 |         .fill('testing123@gmail.com');
  233 | 
  234 |     await page.locator('#Password')
  235 |         .fill('Testing@12345');
  236 | 
  237 |     await page.locator('.login-button')
  238 |         .click();
  239 | 
  240 |     await page.waitForTimeout(5000);
  241 | 
  242 |     // Check if login successful
  243 |     const accountVisible = await page
  244 |         .locator('.ico-account')
  245 |         .isVisible()
  246 |         .catch(() => false);
  247 | 
  248 |     if(accountVisible){
  249 | 
  250 |         console.log('Login Successful');
  251 | 
  252 |         await expect(
  253 |             page.locator('.ico-account')
  254 |         ).toBeVisible();
  255 | 
  256 |     } else {
  257 | 
  258 |         const body = await page.locator('body')
  259 |             .textContent();
  260 | 
  261 |         console.log(body);
  262 | 
> 263 |         throw new Error(
      |               ^ Error: Login failed or Cloudflare blocked request
  264 |             'Login failed or Cloudflare blocked request'
  265 |         );
  266 |     }
  267 | });
  268 | 
  269 | 
  270 | // ======================================================
  271 | // TC_AUTH_010 - Logout Functionality
  272 | // ======================================================
  273 | 
  274 | test('TC_AUTH_010 - Logout Functionality',
  275 | async ({ page }) => {
  276 | 
  277 |     await page.goto(
  278 |         'https://demo.nopcommerce.com/login'
  279 |     );
  280 | 
  281 |     await page.locator('#Email')
  282 |         .fill('testing123@gmail.com');
  283 | 
  284 |     await page.locator('#Password')
  285 |         .fill('Testing@12345');
  286 | 
  287 |     await page.locator('.login-button')
  288 |         .click();
  289 |         await page.waitForTimeout(5000);
  290 | 
  291 |     // Wait for logout button
  292 |     await expect(
  293 |         page.locator('.ico-logout')
  294 |     ).toBeVisible({
  295 |         timeout: 20000
  296 |     });
  297 | 
  298 |     // Click Logout
  299 |     await page.locator('.ico-logout')
  300 |         .click();
  301 | 
  302 |     // Verify login button visible again
  303 |     await expect(
  304 |         page.locator('.ico-login')
  305 |     ).toBeVisible({
  306 |         timeout: 15000
  307 |     });
  308 | });
  309 | 
  310 | 
  311 | 
  312 | 
  313 | // ======================================================
  314 | // TC_AUTH_011 - Forgot Password
  315 | // ======================================================
  316 | 
  317 | test('TC_AUTH_011 - Forgot Password',
  318 | async ({ page }) => {
  319 | 
  320 |     await page.goto(
  321 |         'https://demo.nopcommerce.com/login'
  322 |     );
  323 | 
  324 |     await page.locator('.forgot-password')
  325 |         .click();
  326 | 
  327 |     // Use registered email
  328 |     await page.locator('#Email')
  329 |         .fill('testing123@gmail.com');
  330 | 
  331 |     await page.locator(
  332 |         '.password-recovery-button'
  333 |     ).click();
  334 |     await page.waitForTimeout(5000);
  335 | 
  336 |     // DO NOT use networkidle here
  337 |     // Cloudflare causes infinite wait sometimes
  338 | 
  339 |     // Verify result message
  340 |     await expect(
  341 |         page.locator('.result')
  342 |     ).toBeVisible({
  343 |         timeout: 20000
  344 |     });
  345 | 
  346 |     await expect(
  347 |         page.locator('.result')
  348 |     ).toContainText(
  349 |         'Email with instructions has been sent to you.'
  350 |     );
  351 | });
  352 | 
  353 | 
  354 | 
  355 | // ======================================================
  356 | // TC_AUTH_012 - Password Minimum Length Validation
  357 | // ======================================================
  358 | 
  359 | test('TC_AUTH_012 - Password Minimum Length Validation',
  360 | async ({ page }) => {
  361 | 
  362 |     await page.goto(
  363 |         'https://demo.nopcommerce.com/register'
```