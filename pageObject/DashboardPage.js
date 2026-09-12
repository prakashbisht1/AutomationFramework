const { expect } = require('@playwright/test');

class DashboardPage {

    constructor(page) {
        this.page = page;

        this.products = page.locator(".card-body");
        this.cartbutton = page.locator("[routerlink*='cart']");
        this.list = page.locator("div li");
        this.selectedProduct = page.locator("h3:has-text('iphone 13 pro')");
    }

    async addProductToCart(productName) {

        const count = await this.products.count();

        for (let i = 0; i < count; i++) {

            const product = this.products.nth(i);

            const productNameLocator = product.locator("b");

            if (await productNameLocator.textContent() === productName) {

                await product.getByRole('button', {
                    name: ' Add To Cart'
                }).click();

                break;
            }
        }

        await this.cartbutton.click();

        await this.list.first().waitFor();

        await expect(this.selectedProduct).toBeVisible();
    }
}

module.exports = { DashboardPage };