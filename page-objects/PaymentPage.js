const { expect } = require("@playwright/test");

export class PaymentPage {
  constructor(page) {
    this.page = page;
    this.nameOnCardInput = 'input[name="name_on_card"]';
    this.cardNumberInput = 'input[name="card_number"]';
    this.cvcInput = 'input[name="cvc"]';
    this.expiryMonthInput = 'input[name="expiry_month"]';
    this.expiryYearInput = 'input[name="expiry_year"]';
    this.payAndConfirmOrderButton = "#submit";
    this.confirmationMessage = 'p:has-text("Your order has been confirmed!")';
  }

  async enterPaymentDetails(paymentData) {
    await this.page.fill(this.nameOnCardInput, paymentData.nameOnCard);
    await this.page.fill(this.cardNumberInput, paymentData.cardNumber);
    await this.page.fill(this.cvcInput, paymentData.cvc);
    await this.page.fill(this.expiryMonthInput, paymentData.expiryMonth);
    await this.page.fill(this.expiryYearInput, paymentData.expiryYear);
    await this.page.click(this.payAndConfirmOrderButton);
  }

  async verifyOrderConfirmation() {
    await expect(this.page.locator(this.confirmationMessage)).toBeVisible();
  }
}
