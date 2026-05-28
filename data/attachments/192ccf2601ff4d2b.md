# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_007 - Login with Invalid Password
- Location: tests/auth/login.spec.js:156:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.message-error')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('.message-error')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a01a40f61f28aa12
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  75  | 
  76  |    
  77  | //     const errorMessage = await page
  78  | //     .locator('.message-error')
  79  | //     .textContent();
  80  | 
  81  | // console.log(errorMessage);
  82  | // });
  83  | 
  84  | 
  85  | 
  86  | // test(
  87  | // 'TC_AUTH_010 - Logout Functionality',
  88  | // async ({ page }) => {
  89  | 
  90  | //     // Open Login Page
  91  | //     await page.goto(
  92  | //         'https://demo.nopcommerce.com/login'
  93  | //     );
  94  | 
  95  | //     // Enter Valid Email
  96  | //     await page.locator('#Email')
  97  | //         .fill('testing123@gmail.com');
  98  | 
  99  | //     // Enter Valid Password
  100 | //     await page.locator('#Password')
  101 | //         .fill('Testing@12345');
  102 | 
  103 | //     // Click Login Button
  104 | //     await page.locator('.button-1.login-button')
  105 | //         .click();
  106 | 
  107 | //     // Wait After Login
  108 | //     await page.waitForTimeout(3000);
  109 | 
  110 | //     // Click Logout
  111 | //     await page.locator('.ico-logout')
  112 | //         .click();
  113 | 
  114 | //     // Verify Login Link Visible
  115 | //     await expect(
  116 | //         page.locator('.ico-login')
  117 | //     ).toBeVisible();
  118 | // });
  119 | 
  120 | 
  121 | 
  122 | // test(
  123 | // 'TC_AUTH_011 - Forgot Password',
  124 | // async ({ page }) => {
  125 | 
  126 | //     await page.goto(
  127 | //         'https://demo.nopcommerce.com/login'
  128 | //     );
  129 | 
  130 | //     await page.locator('.forgot-password')
  131 | //         .click();
  132 | 
  133 | //     await page.locator('#Email')
  134 | //         .fill('YOUR_REGISTERED_EMAIL@gmail.com');
  135 | 
  136 | //     await page.locator(
  137 | //         'button.password-recovery-button'
  138 | //     ).click();
  139 | 
  140 | //     await page.waitForLoadState('networkidle');
  141 | //     await expect(
  142 | //         page.locator('.result')
  143 | //     ).toContainText(
  144 | //         'Email with instructions has been sent to you.'
  145 | //     );
  146 | // });
  147 | 
  148 | 
  149 | const { test, expect } = require('@playwright/test');
  150 | 
  151 | 
  152 | // ======================================================
  153 | // TC_AUTH_007 - Login with Invalid Password
  154 | // ======================================================
  155 | 
  156 | test('TC_AUTH_007 - Login with Invalid Password',
  157 | async ({ page }) => {
  158 | 
  159 |     await page.goto(
  160 |         'https://demo.nopcommerce.com/login'
  161 |     );
  162 | 
  163 |     await page.locator('#Email')
  164 |         .fill('testing123@gmail.com');
  165 | 
  166 |     await page.locator('#Password')
  167 |         .fill('WrongPassword123');
  168 | 
  169 |     await page.locator('.login-button')
  170 |         .click();
  171 | 
  172 |     // Wait for error message
  173 |     await expect(
  174 |         page.locator('.message-error')
> 175 |     ).toBeVisible({ timeout: 15000 });
      |       ^ Error: expect(locator).toBeVisible() failed
  176 | 
  177 |     // Verify Error Text
  178 |     await expect(
  179 |         page.locator('.message-error')
  180 |     ).toContainText(
  181 |         'Login was unsuccessful'
  182 |     );
  183 | });
  184 | 
  185 | 
  186 | 
  187 | // ======================================================
  188 | // TC_AUTH_008 - Login with Empty Fields
  189 | // ======================================================
  190 | 
  191 | test('TC_AUTH_008 - Login with Empty Fields',
  192 | async ({ page }) => {
  193 | 
  194 |     await page.goto(
  195 |         'https://demo.nopcommerce.com/login'
  196 |     );
  197 | 
  198 |     await page.locator('.login-button')
  199 |         .click();
  200 | 
  201 |     // Verify validation message
  202 |     await expect(
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
```