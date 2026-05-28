const { test, expect } = require("@playwright/test");

const { AuthPage } = require("../../pages/AuthPage");

const { userData } = require("../../utils/testData");


test('1.Valid Registration', async ({ page }) => {

    const authPage = new AuthPage(page);

    await authPage.gotoRegisterPage();

    await authPage.registerUser(userData);

    await page.waitForLoadState(
        'domcontentloaded'
    );

    await page.waitForTimeout(5000);

    await expect(
        page.locator('.result')
    ).toBeVisible({
        timeout: 30000
    });

    await expect(
        page.locator('.result')
    ).toHaveText(
        'Your registration completed'
    );
});



test("2.Registration with Empty Fields", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  await page.locator("#register-button").click();

  await expect(page.locator(".field-validation-error")).toContainText([
    "First name is required.",
    "Last name is required.",
    "Email is required.",
    "Password is required.",
  ]);
});

test("Registration with Invalid Email", async ({ page }) => {
  
  await page.goto("https://demo.nopcommerce.com/register");

  await page.locator("#gender-male").check();
  await page.locator("#FirstName").fill("Pratiksha");
  await page.locator("#LastName").fill("Gupta");

  await page.locator("#Email").fill("abc.com");

  
  await page.locator("#Password").fill("Testing@12345");

  await page.locator("#ConfirmPassword").fill("Testing@12345");

  await page.locator("#register-button").click();

  await expect(page.locator(".field-validation-error")).toContainText(
    "Please enter a valid email address.",
  );
});

test("4.Registration with Password Mismatch", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");
  await page.locator("#gender-male").check();
  await page.locator("#FirstName").fill("Pratiksha");
  await page.locator("#LastName").fill("Gupta");

  await page.locator("#Email").fill(`pratiksha${Date.now()}@gmail.com`);

  await page.locator("#Password").fill("Testing@12345");

  await page.locator("#ConfirmPassword").fill("Testing@11111");

  await page.locator("#register-button").click();

  await expect(page.locator(".field-validation-error")).toContainText(
    "The password and confirmation password do not match.",
  );
});


test('5. Registration with Existing Email',
async ({ page }) => {

    await page.goto(
        'https://demo.nopcommerce.com/register'
    );

    await page.locator('#gender-male').check();

    await page.locator('#FirstName')
        .fill('Pratiksha');

    await page.locator('#LastName')
        .fill('Gupta');

    await page.locator('#Email')
        .fill('testing123@gmail.com');

    await page.locator('#Password')
        .fill('Testing@12345');

    await page.locator('#ConfirmPassword')
        .fill('Testing@12345');

    await page.locator('#register-button')
        .click();

   
    await expect(
        page.locator('.message-error')
    ).toBeVisible({
        timeout: 20000
    });

    await expect(
        page.locator('.message-error')
    ).toContainText(
        'The specified email already exists'
    );
});



test("6. Successful Registration", async ({ page }) => {
  const authPage = new AuthPage(page);
  await page.goto("https://demo.nopcommerce.com/register");

  await page.waitForTimeout(3000);
  await page.locator("#gender-male").check();

  await authPage.fillFirstName("Pratiksha");

  await page.locator("#LastName").fill("Gupta");
  await page.locator("#Email").fill(`pratiksha${Date.now()}@gmail.com`);

  await page.locator("#Password").fill("Testing@12345");
  await page.locator("#ConfirmPassword").fill("Testing@12345");

  await page.locator("#register-button").click();
  await page.waitForTimeout(5000);

  const bodyText = await page.locator("body").textContent();
  console.log(bodyText);
});
