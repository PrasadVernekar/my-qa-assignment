import { test, expect } from '../pages/fixture.js';

test.describe('Checkout', () => {
   test('should complete checkout successfully', async ({page, loginPage, productPage, checkoutPage  }) => {
   await loginPage.goto();
   await loginPage.validUser();
   await productPage.addToCart();
   await checkoutPage.completeOrder();
   await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible();
});


});
