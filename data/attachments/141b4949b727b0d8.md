# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_009 - Successful Login
- Location: tests/auth/login.spec.js:219:1

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
        - code [ref=e16]: a01a492f991431b8
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
  158 | test('TC_AUTH_007 - Login with Invalid Password',
  159 | async ({ page }) => {
  160 | 
  161 |     await page.goto(
  162 |         'https://demo.nopcommerce.com/login'
  163 |     );
  164 | 
  165 |     await page.locator('#Email')
  166 |         .fill('testing123@gmail.com');
  167 | 
  168 |     await page.locator('#Password')
  169 |         .fill('WrongPassword123');
  170 | 
  171 |     await page.locator('.login-button')
  172 |         .click();
  173 | 
  174 |     await page.waitForTimeout(5000);
  175 |     // Wait for error message
  176 |     await expect(
  177 |         page.locator('.message-error')
  178 |     ).toBeVisible({ timeout: 15000 });
  179 | 
  180 |     // Verify Error Text
  181 |     await expect(
  182 |         page.locator('.message-error')
  183 |     ).toContainText(
  184 |         'Login was unsuccessful'
  185 |     );
  186 | });
  187 | 
  188 | 
  189 | 
  190 | // ======================================================
  191 | // TC_AUTH_008 - Login with Empty Fields
  192 | // ======================================================
  193 | 
  194 | test('TC_AUTH_008 - Login with Empty Fields',
  195 | async ({ page }) => {
  196 | 
  197 |     await page.goto(
  198 |         'https://demo.nopcommerce.com/login'
  199 |     );
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
> 258 |         throw new Error(
      |               ^ Error: Login failed or Cloudflare blocked request
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