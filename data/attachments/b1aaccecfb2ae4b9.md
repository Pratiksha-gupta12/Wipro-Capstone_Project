# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> 7. Login with Invalid Password
- Location: tests/auth/login.spec.js:154:1

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
  - code: a02af3947b3af64b
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  74  | //         .click();
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
  151 | test.setTimeout(120000);
  152 | 
  153 | 
  154 | test('7. Login with Invalid Password',
  155 | async ({ page }) => {
  156 | 
  157 |     await page.goto(
  158 |         'https://demo.nopcommerce.com/login'
  159 |     );
  160 | 
  161 |     await page.locator('#Email')
  162 |         .fill('pratiksha@gmail.com');
  163 | 
  164 |     await page.locator('#Password')
  165 |         .fill('WrongPassword123');
  166 | 
  167 |     await page.locator('.login-button')
  168 |         .click();
  169 | 
  170 |     await page.waitForTimeout(5000);
  171 |   
  172 |     await expect(
  173 |         page.locator('.message-error')
> 174 |     ).toBeVisible({ timeout: 15000 });
      |       ^ Error: expect(locator).toBeVisible() failed
  175 | 
  176 |     await expect(
  177 |         page.locator('.message-error')
  178 |     ).toContainText(
  179 |         'Login was unsuccessful'
  180 |     );
  181 | });
  182 | 
  183 | 
  184 | 
  185 | 
  186 | test('8. Login with Empty Fields',
  187 | async ({ page }) => {
  188 | 
  189 |     await page.goto(
  190 |         'https://demo.nopcommerce.com/login'
  191 |     );
  192 | 
  193 |     await page.locator('.login-button')
  194 |         .click();
  195 |         await page.waitForTimeout(5000);
  196 |     await expect(
  197 |         page.locator('.field-validation-error')
  198 |     ).toContainText(
  199 |         'Please enter your email'
  200 |     );
  201 | });
  202 | 
  203 | 
  204 | 
  205 | 
  206 | 
  207 | test('9. Successful Login',
  208 | async ({ page }) => {
  209 | 
  210 |     await page.goto(
  211 |         'https://demo.nopcommerce.com/login'
  212 |     );
  213 | 
  214 |     await page.locator('#Email')
  215 |         .fill('pratiksha@gmail.com');
  216 | 
  217 |     await page.locator('#Password')
  218 |         .fill('123456');
  219 | 
  220 |     await page.locator('.login-button')
  221 |         .click();
  222 | 
  223 |     await page.waitForTimeout(5000);
  224 | 
  225 |     await expect(
  226 |         page.locator('.ico-account')
  227 |     ).toBeVisible({
  228 |         timeout: 30000
  229 |     });
  230 | 
  231 | //     await expect(
  232 | //     page.locator('.message-error')
  233 | // ).not.toBeVisible();
  234 | 
  235 |     // console.log('Login Successful');
  236 | });
  237 | 
  238 | 
  239 | 
  240 | 
  241 | // test('11. Forgot Password',
  242 | // async ({ page }) => {
  243 | 
  244 | //     await page.goto(
  245 | //         'https://demo.nopcommerce.com/login'
  246 | //     );
  247 | 
  248 | //     await page.locator('.forgot-password')
  249 | //         .click();
  250 | 
  251 | 
  252 | //     await page.locator('#Email')
  253 | //         .fill('testing123@gmail.com');
  254 | 
  255 | //     await page.locator(
  256 | //         '.password-recovery-button'
  257 | //     ).click();
  258 | //     await page.waitForTimeout(5000);
  259 | //     await expect(
  260 | //         page.locator('.result')
  261 | //     ).toBeVisible({
  262 | //         timeout: 20000
  263 | //     });
  264 | 
  265 | //     await expect(
  266 | //         page.locator('.result')
  267 | //     ).toContainText(
  268 | //         'Email with instructions has been sent to you.'
  269 | //     );
  270 | // });
  271 | 
  272 | 
  273 | 
  274 | 
```