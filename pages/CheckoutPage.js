export default class CheckoutPage {
    constructor(page) {
        this.page = page;
    }
 
 
    async completeOrder() {
        await this.page.locator('//*[@id="shopping_cart_container"]').click();
        await this.page.getByRole('button', { name: 'Checkout' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).fill("Prasad");
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill("Vernekar");
        await this.page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill("560066");
        await this.page.locator("//*[@id='continue']").click();
        await this.page.getByRole('button', { name: 'Finish' }).click();
    }
 }
 