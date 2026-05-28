import { expect, test } from '@playwright/test';

test.describe('Product Sorting Tests', () => {

    let page;

    test.beforeEach(async ({ page }) => {

        const page = new page(page);

        await page.goto('https://demo.nopcommerce.com/desktops');
    });

    test(
        'TC_PRODUCT_013 - Sort Products By Name A-Z',
        {
            annotation: {
                type: 'Sorting',
                description: 'Verify products can be sorted from A to Z'
            }
        },
        async ({ page }) => {

            await page.sortProduct('Name: A to Z');

            await expect(page.locator('#products-orderby'))
                .toHaveValue('5');
        }
    );

    test(
        'TC_PRODUCT_014 - Sort Products By Name Z-A',
        {
            annotation: {
                type: 'Sorting',
                description: 'Verify products can be sorted from Z to A'
            }
        },
        async ({ page }) => {

            await page.sortProduct('Name: Z to A');

            await expect(page.locator('#products-orderby'))
                .toHaveValue('6');
        }
    );

    test(
        'TC_PRODUCT_015 - Sort Products By Price Low To High',
        {
            annotation: {
                type: 'Sorting',
                description: 'Verify products can be sorted by low to high price'
            }
        },
        async ({ page }) => {

            await page.sortProduct('Price: Low to High');

            await expect(page.locator('#products-orderby'))
                .toHaveValue('10');
        }
    );

    test(
        'TC_PRODUCT_016 - Sort Products By Price High To Low',
        {
            annotation: {
                type: 'Sorting',
                description: 'Verify products can be sorted by high to low price'
            }
        },
        async ({ page }) => {

            await page.sortProduct('Price: High to Low');

            await expect(page.locator('#products-orderby'))
                .toHaveValue('11');
        }
    );

    test(
    'TC_PRODUCT_017 - Verify Selected Sorting Option Remains Active',
    {
        annotation: {
            type: 'Sorting',
            description: 'Verify selected sorting option stays selected after page reload'
        }
    },
    async ({ page }) => {

        await page.sortProduct('Name: A to Z');

        await page.reload();

        await expect(page.locator('#products-orderby'))
            .toBeVisible();
    }
);

test(
    'TC_PRODUCT_018 - Verify Product Count After Sorting',
    {
        annotation: {
            type: 'Sorting',
            description: 'Verify product count remains same after applying sorting'
        }
    },
    async ({ page }) => {

        const productsBeforeSorting = await page.locator('.product-item').count();

        await page.sortProduct('Price: Low to High');

        const productsAfterSorting = await page.locator('.product-item').count();

        expect(productsBeforeSorting).toBe(productsAfterSorting);
    }
);

test(
    'TC_PRODUCT_019 - Verify Sorting Dropdown Is Enabled',
    {
        annotation: {
            type: 'Sorting',
            description: 'Verify sorting dropdown is enabled for user interaction'
        }
    },
    async ({ page }) => {

        await expect(page.locator('#products-orderby'))
            .toBeEnabled();
    }
);

test(
    'TC_PRODUCT_020 - Verify Products Are Visible After Applying Sorting',
    {
        annotation: {
            type: 'Sorting',
            description: 'Verify products remain visible after sorting is applied'
        }
    },
    async ({ page }) => {

        await page.sortProduct('Name: Z to A');

        const products = page.locator('.product-item');

        await expect(products.first())
            .toBeVisible();
    }
);

test(
    'TC_PRODUCT_021 - Verify User Can Change Sorting Multiple Times',
    {
        annotation: {
            type: 'Sorting',
            description: 'Verify user can apply multiple sorting options consecutively'
        }
    },
    async ({ page }) => {

        await page.sortProduct('Name: A to Z');

        await page.sortProduct('Price: High to Low');

        await expect(page.locator('#products-orderby'))
            .toHaveValue('11');
    }
);

});