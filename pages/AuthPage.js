// class AuthPage {

//     constructor(page){

//         this.page = page;

//         // Locators
//         this.registerButton = page.locator('#register-button');

//         this.firstNameError =
//             page.locator('#FirstName-error');

//         this.lastNameError =
//             page.locator('#LastName-error');

//         this.emailError =
//             page.locator('#Email-error');

//         this.passwordError =
//             page.locator('#Password-error');

//         this.confirmPasswordError =
//             page.locator('#ConfirmPassword-error');
//     }

//     async gotoRegisterPage(){

//         await this.page.goto(
//             'https://demo.nopcommerce.com/register'
//         );
//     }

//     async clickRegisterButton(){

//         await this.registerButton.click();
//     }

//     async fillFirstName(name){
//         await this.page.locator('#FirstName').fill(name);
//     }
// }

// module.exports = { AuthPage };





// class AuthPage {

//     constructor(page){

//         this.page = page;

//         // Locators
//         this.genderMale =
//             page.locator('#gender-male');

//         this.firstName =
//             page.locator('#FirstName');

//         this.lastName =
//             page.locator('#LastName');

//         this.email =
//             page.locator('#Email');

//         this.password =
//             page.locator('#Password');

//         this.confirmPassword =
//             page.locator('#ConfirmPassword');

//         this.registerButton =
//             page.locator('#register-button');

//        this.successMessage =
//     page.locator('div.result');
//         // Error Locators
//         this.firstNameError =
//             page.locator('#FirstName-error');

//         this.lastNameError =
//             page.locator('#LastName-error');

//         this.emailError =
//             page.locator('#Email-error');

//         this.passwordError =
//             page.locator('#Password-error');

//         this.confirmPasswordError =
//             page.locator('#ConfirmPassword-error');
//     }


//     // =========================================
//     // Open Register Page
//     // =========================================

//     async gotoRegisterPage(){

//         await this.page.goto(
//             'https://demo.nopcommerce.com/register'
//         );
//     }


//     // =========================================
//     // Register User
//     // =========================================

//   async registerUser(user){

//     await this.genderMale.check();

//     await this.firstName.fill(
//         user.firstName
//     );

//     await this.lastName.fill(
//         user.lastName
//     );

//     const randomEmail =
//         `user${Date.now()}@gmail.com`;

//     await this.email.fill(randomEmail);

//     await this.password.fill(
//         user.password
//     );

//     await this.confirmPassword.fill(
//         user.password
//     );

//     await this.registerButton.click();
// }

//     // =========================================
//     // Click Register Button
//     // =========================================

//     async clickRegisterButton(){

//         await this.registerButton.click();
//     }


//     // =========================================
//     // Fill First Name
//     // =========================================

//     async fillFirstName(name){

//         await this.firstName.fill(name);
//     }
// }

// module.exports = { AuthPage };










class AuthPage {

    constructor(page){

        this.page = page;

        this.genderMale =
            page.locator('#gender-male');

        this.firstName =
            page.locator('#FirstName');

        this.lastName =
            page.locator('#LastName');

        this.email =
            page.locator('#Email');

        this.password =
            page.locator('#Password');

        this.confirmPassword =
            page.locator('#ConfirmPassword');

        this.registerButton =
            page.locator('#register-button');

        this.successMessage =
            page.locator('div.result');


        this.loginButton =
            page.locator('.login-button');

        this.logoutButton =
            page.locator('.ico-logout');

        this.accountLink =
            page.locator('.ico-account');

        this.loginErrorMessage =
            page.locator('.message-error');

        this.rememberMeCheckbox =
            page.locator('#RememberMe');

        this.forgotPasswordLink =
            page.locator('.forgot-password');

        this.firstNameError =
            page.locator('#FirstName-error');

        this.lastNameError =
            page.locator('#LastName-error');

        this.emailError =
            page.locator('#Email-error');

        this.passwordError =
            page.locator('#Password-error');

        this.confirmPasswordError =
            page.locator('#ConfirmPassword-error');
    }

    async gotoRegisterPage(){

        await this.page.goto(
            'https://demo.nopcommerce.com/register'
        );
    }

    async gotoLoginPage(){

        await this.page.goto(
            'https://demo.nopcommerce.com/login'
        );
    }

    async registerUser(user){

        await this.genderMale.check();

        await this.firstName.fill(
            user.firstName
        );

        await this.lastName.fill(
            user.lastName
        );

        const randomEmail =
            `user${Date.now()}@gmail.com`;

        await this.email.fill(randomEmail);

        await this.password.fill(
            user.password
        );

        await this.confirmPassword.fill(
            user.password
        );

        await this.registerButton.click();
    }

    async loginUser(email, password){

        await this.email.fill(email);

        await this.password.fill(password);

        await this.loginButton.click();
    }

    async logoutUser(){

        await this.logoutButton.click();
    }

    async clickRegisterButton(){

        await this.registerButton.click();
    }

    async fillFirstName(name){

        await this.firstName.fill(name);
    }
}

module.exports = { AuthPage };