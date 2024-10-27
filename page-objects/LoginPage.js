export class LoginPage {
  constructor(page) {
    this.page = page;
    this.nameInput = 'input[data-qa="signup-name"]';
    this.emailInput = 'input[data-qa="signup-email"]';
    this.signupButton = 'button[data-qa="signup-button"]';
  }

  async registerUser(name, email) {
    await this.page.fill(this.nameInput, name);
    await this.page.fill(this.emailInput, email);
    await this.page.click(this.signupButton);
  }
}
