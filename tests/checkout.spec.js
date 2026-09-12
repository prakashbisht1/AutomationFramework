const { LoginPage } = require('../pageObject/loginPage');
const { DashboardPage } = require('../pageObject/DashboardPage');
const { CheckoutPage } = require('../pageObject/CheckoutPage');
const { test, expect } = require('@playwright/test');
const dataSet = JSON.parse(JSON.stringify(require('../testdata/data.json')));

test(' check out', async ({ page }) => {


    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigateToLoginPage();
    await page.waitForLoadState('networkidle');
    await loginPage.validLogin(
        dataSet.userName,
        dataSet.passWord
    );

    await dashboardPage.addProductToCart(dataSet.productName);
    await checkoutPage.checkOut()
});

  
