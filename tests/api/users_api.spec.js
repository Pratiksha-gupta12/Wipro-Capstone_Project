// import { test, expect } from '@playwright/test';

// test.describe('Users API Tests', () => {

//     test('TC_API_006 - Verify Get All Users',
//     async ({ request }) => {

//         const response = await request.get(
//             'https://fakestoreapi.com/users'
//         );

//         expect(response.status()).toBe(200);
//     });

//     test('TC_API_007 - Verify Get Single User',
//     async ({ request }) => {

//         const response = await request.get(
//             'https://fakestoreapi.com/users/1'
//         );

//         expect(response.status()).toBe(200);
//     });

//     test('TC_API_008 - Verify User Has Username',
//     async ({ request }) => {

//         const response = await request.get(
//             'https://fakestoreapi.com/users/1'
//         );

//         const data = await response.json();

//         expect(data.username).toBeTruthy();
//     });

//     test('TC_API_009 - Verify User Has Email',
//     async ({ request }) => {

//         const response = await request.get(
//             'https://fakestoreapi.com/users/1'
//         );

//         const data = await response.json();

//         expect(data.email).toContain('@');
//     });

//     test('TC_API_010 - Verify Users Count Greater Than Zero',
//     async ({ request }) => {

//         const response = await request.get(
//             'https://fakestoreapi.com/users'
//         );

//         const data = await response.json();

//         expect(data.length).toBeGreaterThan(0);
//     });

// });



const { test, expect } =
require('@playwright/test');

const { ApiPage } =
require('../../pages/ApiPage');

test.describe('Users API Tests', () => {

    let apiPage;

    test.beforeEach(async ({ request }) => {
        apiPage = new ApiPage(request);
    });

    test('TC_API_006 - Verify Get All Users',
    async () => {

        const response =
            await apiPage.getAllUsers();

        expect(
            response.status()
        ).toBe(200);
    });

    test('TC_API_007 - Verify Get Single User',
    async () => {

        const response =
            await apiPage.getSingleUser();

        expect(
            response.status()
        ).toBe(200);
    });

    test('TC_API_008 - Verify User Has Username',
    async () => {

        const response =
            await apiPage.getSingleUser();

        const data =
            await response.json();

        expect(
            data.username
        ).toBeTruthy();
    });

    test('TC_API_009 - Verify User Has Email',
    async () => {

        const response =
            await apiPage.getSingleUser();

        const data =
            await response.json();

        expect(
            data.email
        ).toContain('@');
    });

    test('TC_API_010 - Verify Users Count Greater Than Zero',
    async () => {

        const response =
            await apiPage.getAllUsers();

        const data =
            await response.json();

        expect(
            data.length
        ).toBeGreaterThan(0);
    });

});