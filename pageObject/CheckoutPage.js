const { expect } = require('@playwright/test');

class CheckoutPage {

    constructor(page) {
        this.page = page;

        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
        this.cardNumber = page.locator("//input[@value='4542 9931 9292 2293']");
        this.expiryMonth = page.getByRole('combobox').first();
        this.expiryYear = page.getByRole('combobox').last();
        this.cvv = page.getByRole('textbox').nth(1);
        this.coupon = page.getByRole('button', { name: 'Apply Coupon' });
        this.country = page.getByRole('textbox', { name: 'Select Country' });
        this.selectCountry = page.locator(':text-is("India")');
        this.placeOrderButton = page.locator('a:has-text("PLACE ORDER")');
        this.successMessage = page.locator('.hero-primary');
    }

    async checkOut() {
        await this.checkoutButton.click();

        await this.cardNumber.fill('4542 9931 9292 1083');
        await this.expiryMonth.selectOption('08');
        await this.expiryYear.selectOption('30');
        await this.cvv.fill('003');

        await this.coupon.click();

        await this.country.pressSequentially('India');
        await this.selectCountry.click();

        await this.placeOrderButton.click();

        await expect(this.successMessage).toContainText(
            'Thankyou for the order.'
        );
    }
}

module.exports = { CheckoutPage };