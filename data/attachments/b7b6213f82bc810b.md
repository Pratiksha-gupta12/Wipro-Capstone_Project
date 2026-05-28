# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/registration.spec.js >> TC_AUTH_007 - Login with Invalid Password
- Location: tests/auth/registration.spec.js:213:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.message-error')
Expected substring: "Login was unsuccessful"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.message-error')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a012070b6edf461f
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  137 | 
  138 |     // Confirm Password
  139 |     await page.locator('#ConfirmPassword')
  140 |         .fill('Testing@12345');
  141 | 
  142 |     // Click Register
  143 |     await page.locator('#register-button')
  144 |         .click();
  145 | 
  146 |     // Verify Error Message
  147 |    await expect(
  148 |     page.locator('.validation-summary-errors')
  149 | ).toContainText(
  150 |     'The specified email already exists'
  151 | );
  152 | });
  153 | 
  154 | 
  155 | test(
  156 | 'TC_AUTH_006 - Successful Registration',
  157 | async ({ page }) => {
  158 | 
  159 |     // Open Register Page
  160 |     await page.goto(
  161 |         'https://demo.nopcommerce.com/register'
  162 |     );
  163 | 
  164 |     // Wait for page to load
  165 |     await page.waitForTimeout(3000);
  166 | 
  167 |     // Select Gender
  168 |     await page.locator('#gender-male')
  169 |         .check();
  170 | 
  171 |     // Enter First Name
  172 |     await page.locator('#FirstName')
  173 |         .fill('Pratiksha');
  174 | 
  175 |     // Enter Last Name
  176 |     await page.locator('#LastName')
  177 |         .fill('Gupta');
  178 | 
  179 |     // Enter Unique Email
  180 |     await page.locator('#Email')
  181 |         .fill(`pratiksha${Date.now()}@gmail.com`);
  182 | 
  183 |     // Enter Password
  184 |     await page.locator('#Password')
  185 |         .fill('Testing@12345');
  186 | 
  187 |     // Confirm Password
  188 |     await page.locator('#ConfirmPassword')
  189 |         .fill('Testing@12345');
  190 | 
  191 |     // Click Register Button
  192 |     await page.locator('#register-button')
  193 |         .click();
  194 | 
  195 |     // Wait after registration
  196 |     await page.waitForTimeout(5000);
  197 | 
  198 |     // Verify Success Message
  199 |     const bodyText = await page.locator('body')
  200 |     .textContent();
  201 |     console.log(bodyText)
  202 | 
  203 | 
  204 | });
  205 | 
  206 | 
  207 | 
  208 | 
  209 | 
  210 | 
  211 | //Failing in webkit
  212 | 
  213 | test(
  214 | 'TC_AUTH_007 - Login with Invalid Password',
  215 | async ({ page }) => {
  216 | 
  217 |     // Open Login Page
  218 |     await page.goto(
  219 |         'https://demo.nopcommerce.com/login'
  220 |     );
  221 | 
  222 |     // Enter Valid Email
  223 |     await page.locator('#Email')
  224 |         .fill('testing123@gmail.com');
  225 | 
  226 |     // Enter Invalid Password
  227 |     await page.locator('#Password')
  228 |         .fill('WrongPassword123');
  229 | 
  230 |     // Click Login Button
  231 |     await page.locator('button.login-button')
  232 |         .click();
  233 | 
  234 |     // Verify Error Message
  235 |     await expect(
  236 |         page.locator('.message-error')
> 237 |     ).toContainText(
      |       ^ Error: expect(locator).toContainText(expected) failed
  238 |         'Login was unsuccessful'
  239 |     );
  240 | });
```