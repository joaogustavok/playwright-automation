export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.placeOrderButton = 'a[href="/payment"]';
  }

  async confirmAddress() {}

  async placeOrder() {
    await this.page.click(this.placeOrderButton);
  }
}
