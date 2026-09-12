import {  expect } from '@playwright/test';


class SignUpPage
{

  constructor(page)
  {
      this.page = page;
      this.registerNewUser = page.getByRole('link', { name: 'Register' })
      this.fistName = page.getByRole('textbox', { name: 'First Name' })
      this.lastName =page.getByRole('textbox', { name: 'Last Name' })
      this.eamil = page.getByRole('textbox', { name: 'email@example.com' })
      this.number = page.getByRole('textbox', { name: 'enter your number' })
      this.occupation = page.getByRole('combobox')
      this.gender = page.getByRole('radio', { name: 'Male', exact: true })
      this.password = page.getByRole('textbox', { name: 'Passsword' })
      this.confirmPassword = page.getByRole('textbox', { name: 'Confirm Password' })
      this.termsAndConditions = page.locator('.col-md-1')
      this.registerButton = page.getByRole('button', { name: 'Register' })
      this.registerSuccessMessage = page.locator('.headcolor')

  }

   async signUp(fname, lname, email, number, occupation, gender, password, confirmPassword, containText)
    {
       
       await this.registerNewUser.click();
       await this.fistName.fill(fname);
       await this.lastName.fill(lname);
       await this.eamil.fill(email);
       await this.number.fill(number);
       await this.occupation.selectOption(occupation);
       await this.gender.check();
       await this.password.fill(password);
       await this.confirmPassword.fill(confirmPassword);
       await this.termsAndConditions.click();
       await this.registerButton.click();
       await expect(this.registerSuccessMessage).toContainText(containText);
    }

} 

module.exports = { SignUpPage };
