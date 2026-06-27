import { test, expect } from '../pages/fixture.js';


test.describe('Login Functionality', () => {
 test('should successfully log in with valid credentials and display the Products page', async ({ page, loginPage }) => {
   await loginPage.goto();
   await loginPage.validUser();
   await expect(
     page.getByText('Products', { exact: true })
   ).toBeVisible();
 });


 test('should display an error message when a locked-out user attempts to log in', async ({ page, loginPage }) => {
   await loginPage.goto();
   await loginPage.invalidUser();
   await expect(
     page.getByText(
       'Epic sadface: Sorry, this user has been locked out.'
     )
   ).toBeVisible();
 });


});
