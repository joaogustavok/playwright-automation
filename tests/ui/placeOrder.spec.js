// tests/ui/placeOrder.spec.js
const { test, expect } = require("@playwright/test");
const { HomePage } = require("../../page-objects/HomePage");
const { LoginPage } = require("../../page-objects/LoginPage");
const { AccountPage } = require("../../page-objects/AccountPage");
const { ProductPage } = require("../../page-objects/ProductPage");
const { CartPage } = require("../../page-objects/CartPage");
const { CheckoutPage } = require("../../page-objects/CheckoutPage");
const { PaymentPage } = require("../../page-objects/PaymentPage");
const { createUserData } = require("../../utils/userUtils");

test("Realizar pedido: Registrar antes do checkout", async ({ page }) => {
  // Instanciar os Page Objects
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const paymentPage = new PaymentPage(page);

  // Gerar dados do usuário
  const userData = await createUserData();

  // 1. Navegar para a página inicial
  await homePage.navigate();

  // 2. Verificar se a página inicial é exibida corretamente
  await expect(page).toHaveTitle("Automation Exercise");

  // 3. Clicar em 'Signup / Login'
  await homePage.clickSignupLogin();

  // 4. Registrar um novo usuário
  await loginPage.registerUser(userData.name, userData.email);

  // 5. Preencher os detalhes da conta
  await accountPage.fillAccountDetails(userData);

  // 6. Verificar se a conta foi criada com sucesso
  await expect(page.locator('h2:has-text("Account Created!")')).toBeVisible();
  await page.click('a[data-qa="continue-button"]');

  // 7. Adicionar um produto ao carrinho
  await homePage.clickProducts();
  await productPage.addProductToCart();

  // 8. Ir para o carrinho
  await productPage.goToCart();

  // 9. Proceder para o checkout
  await cartPage.proceedToCheckout();

  // 10. Confirmar o endereço de entrega e cobrança
  await checkoutPage.confirmAddress();

  // 11. Prosseguir para o pagamento
  await checkoutPage.placeOrder();

  // 12. Inserir detalhes de pagamento
  const paymentData = {
    nameOnCard: userData.name,
    cardNumber: "4111111111111111",
    cvc: "123",
    expiryMonth: "12",
    expiryYear: "2025",
  };
  await paymentPage.enterPaymentDetails(paymentData);

  // 13. Verificar se o pedido foi concluído com sucesso
  await paymentPage.verifyOrderConfirmation();
});

//npx playwright test --headed
//npx playwright show report
