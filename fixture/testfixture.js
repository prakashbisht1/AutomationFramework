const { test: base } = require('@playwright/test');
const { LoginPage } = require('../pageObject/LoginPage');
const dataSet = require('../testdata/data.json');

const test = base.extend({

    loggedInPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();
        await page.waitForLoadState('networkidle');

        await loginPage.validLogin(dataSet[0].userName, dataSet[0].passWord);

        await use(page);
    }
});

module.exports = { test };