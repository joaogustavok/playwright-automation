export class CartPage {
  constructor(page) {
    this.page = page;
    this.proceedToCheckoutButton = 'a:has-text("Proceed To Checkout")';
  }

  async proceedToCheckout() {
    await this.page.click(this.proceedToCheckoutButton);
  }
}
