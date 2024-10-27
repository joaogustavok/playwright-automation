export class AccountPage {
  constructor(page) {
    this.page = page;
    this.passwordInput = "#password";
    this.daySelect = "#days";
    this.monthSelect = "#months";
    this.yearSelect = "#years";
    this.firstNameInput = "#first_name";
    this.lastNameInput = "#last_name";
    this.companyInput = "#company";
    this.address1Input = "#address1";
    this.address2Input = "#address2";
    this.countrySelect = "#country";
    this.stateInput = "#state";
    this.cityInput = "#city";
    this.zipcodeInput = "#zipcode";
    this.mobileNumberInput = "#mobile_number";
    this.createAccountButton = 'button[data-qa="create-account"]';
  }

  async fillAccountDetails(userData) {
    await this.page.fill(this.passwordInput, userData.password);
    await this.page.selectOption(this.daySelect, userData.birth_date);
    await this.page.selectOption(this.monthSelect, userData.birth_month);
    await this.page.selectOption(this.yearSelect, userData.birth_year);
    await this.page.fill(this.firstNameInput, userData.firstname);
    await this.page.fill(this.lastNameInput, userData.lastname);
    await this.page.fill(this.companyInput, userData.company);
    await this.page.fill(this.address1Input, userData.address1);
    await this.page.fill(this.address2Input, userData.address2);
    await this.page.selectOption(this.countrySelect, userData.country);
    await this.page.fill(this.stateInput, userData.state);
    await this.page.fill(this.cityInput, userData.city);
    await this.page.fill(this.zipcodeInput, userData.zipcode);
    await this.page.fill(this.mobileNumberInput, userData.mobile_number);
    await this.page.click(this.createAccountButton);
  }
}
