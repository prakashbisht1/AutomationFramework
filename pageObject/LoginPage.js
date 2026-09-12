import {  expect } from '@playwright/test';

class LoginPage
{

    constructor(page)
    {
        this.page = page;
        this.signInButton = page.getByRole('button', { name: 'Login' })
        this.userName = page.getByPlaceholder('email@example.com');
        this.password = page.getByPlaceholder('enter your passsword');
        this.signOutButton = page.getByRole('button', { name: 'Sign Out' });


    }

    async navigateToLoginPage()
    {
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
       
    }

    async validLogin(userName, password)
    {
         await this.userName.fill(userName)
         await this.password.fill(password)
         await this.signInButton.click()
         await expect(this.signOutButton).toBeVisible();

    }

}

module.exports = { LoginPage };