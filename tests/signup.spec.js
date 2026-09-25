import { test } from '@playwright/test';
const { LoginPage } = require('../pageObject/LoginPage');
const { SignUpPage } = require('../pageObject/SignUpPage');
const dataSet = require('../testdata/data.json');


test(' Register New User', async ({ page }) => {
 
  const signUpPage = new SignUpPage(page);
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await signUpPage.signUp
  (dataSet[0].fname, dataSet[0].lname, dataSet[0].eamil, dataSet[0].number,
    dataSet[0].jobTitle, dataSet[0].gender, dataSet[0].password, dataSet[0].confirmPassword, dataSet[0].registerSuccessMessage);

});

