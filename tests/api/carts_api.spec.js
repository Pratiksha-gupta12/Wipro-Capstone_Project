import { test, expect } from '@playwright/test';

test.describe('Carts API Tests', () => {

    test('TC_API_011 - Verify Get All Carts',
    async ({ request }) => {

        const response = await request.get(
            'https://fakestoreapi.com/carts'
        );

        expect(response.status()).toBe(200);
    });

    test('TC_API_012 - Verify Get Single Cart',
    async ({ request }) => {

        const response = await request.get(
            'https://fakestoreapi.com/carts/1'
        );

        expect(response.status()).toBe(200);
    });

    test('TC_API_013 - Verify Cart Has User ID',
    async ({ request }) => {

        const response = await request.get(
            'https://fakestoreapi.com/carts/1'
        );

        const data = await response.json();

        expect(data.userId).toBeTruthy();
    });

    test('TC_API_014 - Verify Cart Has Products Array',
    async ({ request }) => {

        const response = await request.get(
            'https://fakestoreapi.com/carts/1'
        );

        const data = await response.json();

        expect(Array.isArray(data.products))
            .toBeTruthy();
    });

    test('TC_API_015 - Verify Cart Count Greater Than Zero',
    async ({ request }) => {

        const response = await request.get(
            'https://fakestoreapi.com/carts'
        );

        const data = await response.json();

        expect(data.length).toBeGreaterThan(0);
    });

});