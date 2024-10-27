export class HomePage {
  constructor(page) {
    this.page = page;
    this.signupLoginLink = 'a[href="/login"]';
    this.productsLink = 'a[href="/products"]';
  }

  async navigate() {
    await this.page.goto("https://automationexercise.com");
  }

  async clickSignupLogin() {
    await this.page.click(this.signupLoginLink);
  }

  async clickProducts() {
    await this.page.click(this.productsLink);
  }
}
