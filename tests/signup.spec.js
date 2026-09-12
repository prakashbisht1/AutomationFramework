import { test } from '@playwright/test';
const { LoginPage } = require('../pageObject/loginPage');
const { SignUpPage } = require('../pageObject/SignUpPage');
const dataSet = JSON.parse(JSON.stringify(require('../testdata/data.json')));


test(' Register New User', async ({ page }) => {
 
  const signUpPage = new SignUpPage(page);
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await signUpPage.signUp
  (dataSet.fname, dataSet.lname, dataSet.eamil, dataSet.number,
    dataSet.jobTitle, dataSet.gender, dataSet.password, dataSet.confirmPassword, dataSet.registerSuccessMessage);

});

