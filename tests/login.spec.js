import { test, expect } from '@playwright/test';
const {LoginPage } = require('../pageObject/loginPage');
const dataSet = JSON.parse(JSON.stringify(require('../testdata/data.json')));
const {custometest} = require('../testdata/test_base')

test.describe.configure({mode:'serial'})

for(const data of dataSet)
{

test(` @web Login with valid credentials ${data.userName}`, async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await page.waitForLoadState('networkidle');
  await loginPage.validLogin(data.userName, data.passWord);

  
})}


custometest(`Login with valid credentialsure - fixture`, async ({ page, testDataForLogin }) => {

  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await page.waitForLoadState('networkidle');
  await loginPage.validLogin(testDataForLogin.userName, testDataForLogin.passWord);
})