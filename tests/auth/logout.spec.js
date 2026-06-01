const { test, expect } =
require('@playwright/test');

test('19. Logout Without Active Session',
async ({ page }) => {

    await page.goto(
        'https://demo.nopcommerce.com'
    );

    await expect(
        page.locator('.ico-logout')
    ).toHaveCount(0);
});




// test('10. Logout Functionality',
// async ({ page }) => {

//     await page.goto(
//         'https://demo.nopcommerce.com/login'
//     );

//     await page.locator('#Email')
//         .fill('testing123@gmail.com');

//     await page.locator('#Password')
//         .fill('Testing@12345');

//     await page.locator('.login-button')
//         .click();
//         await page.waitForTimeout(5000);

//     await expect(
//         page.locator('.ico-logout')
//     ).toBeVisible({
//         timeout: 20000
//     });

//     await page.locator('.ico-logout')
//         .click();

//     await expect(
//         page.locator('.ico-login')
//     ).toBeVisible({
//         timeout: 15000
//     });
// });


test(
    '10. Verify Login Link Is Available',
    async ({ page }) => {

        await page.goto(
            'https://demo.nopcommerce.com'
        );

        await expect(
            page.locator('.ico-login')
        ).toBeVisible();
    }
);