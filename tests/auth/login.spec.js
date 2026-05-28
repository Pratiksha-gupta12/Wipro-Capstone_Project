// const { test, expect } = require('@playwright/test');


// //Failing in webkit

// test('TC_AUTH_007 - Login with Invalid Password',
// async ({ page }) => {

//     // Open Login Page
//     await page.goto(
//         'https://demo.nopcommerce.com/login'
//     );

//     // Enter Valid Email
//     await page.locator('#Email')
//         .fill('testing123@gmail.com');

//     // Enter Invalid Password
//     await page.locator('#Password')
//         .fill('WrongPassword123');

//     // Click Login Button
//     await page.locator('button.login-button')
//         .click();

//     // Verify Error Message
//     await expect(
//         page.locator('.message-error')
//     ).toContainText(
//         'Login was unsuccessful'
//     );
// });



// test('TC_AUTH_008 - Login with Empty Fields',
// async ({ page }) => {

//     // Open Login Page
//     await page.goto(
//         'https://demo.nopcommerce.com/login?returnUrl=%2F'
//     );

//     // Click Login Button
//     await page.locator('.button-1.login-button').click();

//     // Verify Email Validation Message
//     await expect(
//         page.locator('#Email-error')
//     ).toHaveText(
//         'Please enter your email'
//     );
// });

// test(
// 'TC_AUTH_009 - Successful Login',
// async ({ page }) => {

//     // Open Login Page
//     await page.goto(
//         'https://demo.nopcommerce.com/login'
//     );

//     // Enter Valid Email
//     await page.locator('#Email')
//         .fill('testing123@gmail.com');

    
//     await page.locator('#Password')
//         .fill('Testing@12345');

  
//     await page.locator('.button-1.login-button')
//         .click();

   
//     const errorMessage = await page
//     .locator('.message-error')
//     .textContent();

// console.log(errorMessage);
// });



// test(
// 'TC_AUTH_010 - Logout Functionality',
// async ({ page }) => {

//     // Open Login Page
//     await page.goto(
//         'https://demo.nopcommerce.com/login'
//     );

//     // Enter Valid Email
//     await page.locator('#Email')
//         .fill('testing123@gmail.com');

//     // Enter Valid Password
//     await page.locator('#Password')
//         .fill('Testing@12345');

//     // Click Login Button
//     await page.locator('.button-1.login-button')
//         .click();

//     // Wait After Login
//     await page.waitForTimeout(3000);

//     // Click Logout
//     await page.locator('.ico-logout')
//         .click();

//     // Verify Login Link Visible
//     await expect(
//         page.locator('.ico-login')
//     ).toBeVisible();
// });



// test(
// 'TC_AUTH_011 - Forgot Password',
// async ({ page }) => {

//     await page.goto(
//         'https://demo.nopcommerce.com/login'
//     );

//     await page.locator('.forgot-password')
//         .click();

//     await page.locator('#Email')
//         .fill('YOUR_REGISTERED_EMAIL@gmail.com');

//     await page.locator(
//         'button.password-recovery-button'
//     ).click();

//     await page.waitForLoadState('networkidle');
//     await expect(
//         page.locator('.result')
//     ).toContainText(
//         'Email with instructions has been sent to you.'
//     );
// });


const { test, expect } = require('@playwright/test');

test.setTimeout(120000);


test('7. Login with Invalid Password',
async ({ page }) => {

    await page.goto(
        'https://demo.nopcommerce.com/login'
    );

    await page.locator('#Email')
        .fill('pratiksha@gmail.com');

    await page.locator('#Password')
        .fill('WrongPassword123');

    await page.locator('.login-button')
        .click();

    await page.waitForTimeout(5000);
  
    await expect(
        page.locator('.message-error')
    ).toBeVisible({ timeout: 15000 });

    await expect(
        page.locator('.message-error')
    ).toContainText(
        'Login was unsuccessful'
    );
});




test('8. Login with Empty Fields',
async ({ page }) => {

    await page.goto(
        'https://demo.nopcommerce.com/login'
    );

    await page.locator('.login-button')
        .click();
        await page.waitForTimeout(5000);
    await expect(
        page.locator('.field-validation-error')
    ).toContainText(
        'Please enter your email'
    );
});





test('9. Successful Login',
async ({ page }) => {

    await page.goto(
        'https://demo.nopcommerce.com/login'
    );

    await page.locator('#Email')
        .fill('pratiksha@gmail.com');

    await page.locator('#Password')
        .fill('abcdef');

    await page.locator('.login-button')
        .click();

    await page.waitForTimeout(5000);

    await expect(
        page.locator('.ico-account')
    ).toBeVisible({
        timeout: 30000
    });

    console.log('Login Successful');
});




test('11. Forgot Password',
async ({ page }) => {

    await page.goto(
        'https://demo.nopcommerce.com/login'
    );

    await page.locator('.forgot-password')
        .click();


    await page.locator('#Email')
        .fill('testing123@gmail.com');

    await page.locator(
        '.password-recovery-button'
    ).click();
    await page.waitForTimeout(5000);
    await expect(
        page.locator('.result')
    ).toBeVisible({
        timeout: 20000
    });

    await expect(
        page.locator('.result')
    ).toContainText(
        'Email with instructions has been sent to you.'
    );
});




test('12. Password Minimum Length Validation',
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
        .fill(`user${Date.now()}@gmail.com`);

    await page.locator('#Password')
        .fill('123');

    await page.locator('#ConfirmPassword')
        .fill('123');

    await page.locator('#register-button')
        .click();

    await expect(
        page.locator('.field-validation-error')
    ).toContainText(
        'Password must meet the following rules'
    );
});




test('13. Empty Confirm Password',
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
        .fill(`user${Date.now()}@gmail.com`);

    await page.locator('#Password')
        .fill('Testing@12345');

    await page.locator('#ConfirmPassword')
        .fill('');

    await page.locator('#register-button')
        .click();

    await expect(
        page.locator('#ConfirmPassword-error')
    ).toContainText(
        'Password is required.'
    );
});




test('14. Login With Invalid Email Format',
async ({ page }) => {

    await page.goto(
        'https://demo.nopcommerce.com/login'
    );

    await page.locator('#Email')
        .fill('abc.com');

    await page.locator('#Password')
        .fill('Testing@12345');

    await page.locator('.login-button')
        .click();

   await expect(
   page.locator('.field-validation-error')
).toContainText(
   'Wrong email'
);
});




test('15. Login With Unregistered Email',
async ({ page }) => {

    await page.goto(
        'https://demo.nopcommerce.com/login'
    );

    await page.locator('#Email')
        .fill(`random${Date.now()}@gmail.com`);

    await page.locator('#Password')
        .fill('Testing@12345');

    await page.locator('.login-button')
        .click();

    await expect(
        page.locator('.message-error')
    ).toContainText(
        'Login was unsuccessful'
    );
});


test('16. Verify Password Field Is Hidden',
async ({ page }) => {

    await page.goto(
        'https://demo.nopcommerce.com/login'
    );

    await expect(
        page.locator('#Password')
    ).toHaveAttribute(
        'type',
        'password'
    );
});

test('17. Forgot Password Invalid Email',
async ({ page }) => {

    await page.goto(
        'https://demo.nopcommerce.com/login'
    );

    await page.locator('.forgot-password')
        .click();

    await page.locator('#Email')
        .fill('abc.com');

    await page.locator(
        '.password-recovery-button'
    ).click();

  await expect(
   page.locator('.field-validation-error')
).toContainText(
   'Wrong email'
);
});



test('18. Remember Me Checkbox Visible',
async ({ page }) => {

   await page.goto(
      'https://demo.nopcommerce.com/login'
   );

   await expect(
      page.locator('#RememberMe')
   ).toBeVisible();

});


test('20. Multiple Invalid Login Attempts',
async ({ page }) => {

    await page.goto(
        'https://demo.nopcommerce.com/login'
    );

    for(let i = 0; i < 2; i++){
        await page.waitForTimeout(3000);

        await page.locator('#Email')
            .fill('testing123@gmail.com');

        await page.locator('#Password')
            .fill('WrongPassword');

        await page.locator('.login-button')
            .click();

        await expect(
            page.locator('.message-error')
        ).toContainText(
            'Login was unsuccessful'
        );
    }
});