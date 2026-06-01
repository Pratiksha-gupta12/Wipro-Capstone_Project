// import { test, expect } from '@playwright/test';

// test.describe('Products API Tests', () => {

//     test('TC_API_001 - Verify Get All Products',
//     async ({ request }) => {

//         const response = await request.get(
//             'https://fakestoreapi.com/products'
//         );

//         expect(response.status()).toBe(200);
//     });

//     test('TC_API_002 - Verify Get Single Product',
//     async ({ request }) => {

//         const response = await request.get(
//             'https://fakestoreapi.com/products/1'
//         );

//         expect(response.status()).toBe(200);
//     });

//     test('TC_API_003 - Verify Product Count Greater Than Zero',
//     async ({ request }) => {

//         const response = await request.get(
//             'https://fakestoreapi.com/products'
//         );

//         const data = await response.json();

//         expect(data.length).toBeGreaterThan(0);
//     });

//     test('TC_API_004 - Verify Product Has Title',
//     async ({ request }) => {

//         const response = await request.get(
//             'https://fakestoreapi.com/products/1'
//         );

//         const data = await response.json();

//         expect(data.title).toBeTruthy();
//     });

//     test('TC_API_005 - Verify Product Has Price',
//     async ({ request }) => {

//         const response = await request.get(
//             'https://fakestoreapi.com/products/1'
//         );

//         const data = await response.json();

//         expect(data.price).toBeGreaterThan(0);
//     });

// });



const { test, expect } =
require('@playwright/test');

const { ApiPage } =
require('../../pages/ApiPage');

test.describe('Products API Tests', () => {

    let apiPage;

    test.beforeEach(async ({ request }) => {
        apiPage = new ApiPage(request);
    });

    test('TC_API_001 - Verify Get All Products',
    async () => {

        const response =
            await apiPage.getAllProducts();

        expect(
            response.status()
        ).toBe(200);
    });

    test('TC_API_002 - Verify Get Single Product',
    async () => {

        const response =
            await apiPage.getSingleProduct();

        expect(
            response.status()
        ).toBe(200);
    });

    test('TC_API_003 - Verify Product Count Greater Than Zero',
    async () => {

        const response =
            await apiPage.getAllProducts();

        const data =
            await response.json();

        expect(
            data.length
        ).toBeGreaterThan(0);
    });

    test('TC_API_004 - Verify Product Has Title',
    async () => {

        const response =
            await apiPage.getSingleProduct();

        const data =
            await response.json();

        expect(
            data.title
        ).toBeTruthy();
    });

    test('TC_API_005 - Verify Product Has Price',
    async () => {

        const response =
            await apiPage.getSingleProduct();

        const data =
            await response.json();

        expect(
            data.price
        ).toBeGreaterThan(0);
    });

});