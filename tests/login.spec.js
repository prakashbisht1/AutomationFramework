import { test } from '@playwright/test';
const { LoginPage } = require('../pageObject/LoginPage');
const dataSet = require('../testdata/data.json');

test.describe.configure({mode:'serial'})

for(const data of dataSet)
{

test(` @fixcheck Login with valid credentials ${data.userName}`, async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await page.waitForLoadState('networkidle');
  await loginPage.validLogin(data.userName, data.passWord);

  
})}
