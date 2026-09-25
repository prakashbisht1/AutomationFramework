const { DashboardPage } = require('../pageObject/DashboardPage');
const { test } = require('../fixture/testfixture');
const dataSet = require('../testdata/data.json');

test('@fixcheck zadd product to cart', async ({ loggedInPage }) => {

    const dashboardPage = new DashboardPage(loggedInPage);

    await dashboardPage.addProductToCart(dataSet[0].productName);
});