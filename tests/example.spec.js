import { test, expect } from '@playwright/test';

const productName = 'iphone 13 pro'

test('Register New User', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('prakash');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('bisht');
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('paasfdasfs@gmail.com');
  await page.getByRole('textbox', { name: 'enter your number' }).fill('5452545454');
  await page.getByRole('combobox').selectOption('3: Engineer');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'Passsword' }).fill('India@123');
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('India@123');
  await page.locator('.col-md-1').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect (page.locator('.headcolor')).toContainText('Account Created Successfully')

});

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByPlaceholder('email@example.com').fill('prakashbisht1990@gmail.com');
  await page.getByPlaceholder('enter your passsword').fill('India@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('button', { name: 'Sign Out' })).toBeVisible();

});

test('Login with invalid credentials', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByPlaceholder('email@example.com').fill('prakashbisht190@gmail.com');
  await page.getByPlaceholder('enter your passsword').fill('India@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('button', { name: 'Sign Out' })).not.toBeVisible();

});

test('add product to cart', async ({ page }) => {

  const products =  page.locator(".card-body");

  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByPlaceholder('email@example.com').fill('prakashbisht1990@gmail.com');
  await page.getByPlaceholder('enter your passsword').fill('India@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForLoadState('networkidle');
  const count = await products.count();

  for(let i=0; i<count; ++i)
  {
      
      if (await products.nth(i).locator("b").textContent() === productName)
      {   
          await products.nth(i).getByRole('button', { name: ' Add To Cart' }).click();
          break;
      }
  }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    expect(await page.locator("h3:has-text('iphone 13 pro')").isVisible()).toBeTruthy();
})

test.only('check out', async ({ page }) => {

  const products =  page.locator(".card-body");

  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByPlaceholder('email@example.com').fill('prakashbisht1990@gmail.com');
  await page.getByPlaceholder('enter your passsword').fill('India@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForLoadState('networkidle');
  const count = await products.count();

  for(let i=0; i<count; ++i)
  {
      
      if (await products.nth(i).locator("b").textContent() === productName)
      {   
          await products.nth(i).getByRole('button', { name: ' Add To Cart' }).click();
          break;
      }
  }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    await page.getByRole('button', {name: 'Checkout'}).click();
    await page.locator("//input[@value='4542 9931 9292 2293']").fill('4542 9931 9292 1083');
    await page.getByRole('combobox').first().selectOption('08');
    await page.getByRole('combobox').last().selectOption('30');
    await page.getByRole('textbox').nth(1).fill('003');
    await page.getByRole('textbox').nth(2).fill('prakash bisht');
    await page.getByRole('textbox').nth(3).fill('coupen');
    await page.getByRole('button', {name: 'Apply Coupon'}).click();
    await page.waitForTimeout(4000);
    await page.getByRole('textbox', { name: 'Select Country' }).pressSequentially('India')
    await page.waitForTimeout(2000);
    await page.locator(':text-is("India")').click();
    await page.locator('a:has-text("PLACE ORDER")').click();
    await expect(page.locator(".hero-primary")).toContainText('Thankyou for the order.')

})