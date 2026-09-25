const { LoginPage } = require('../pageObject/LoginPage');
const { DashboardPage } = require('../pageObject/DashboardPage');
const { CheckoutPage } = require('../pageObject/CheckoutPage');
const { test } = require('@playwright/test');
const dataSet = require('../testdata/data.json');

test(' check out', async ({ page }) => {


    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigateToLoginPage();
    await page.waitForLoadState('networkidle');
    await loginPage.validLogin(
        dataSet[0].userName,
        dataSet[0].passWord
    );

    await dashboardPage.addProductToCart(dataSet[0].productName);
    await checkoutPage.checkOut()
});

  
