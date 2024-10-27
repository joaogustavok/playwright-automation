export class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = 'a[data-product-id="1"]';
    this.continueShoppingButton = "button.close-modal"; // Botão para fechar o modal
    this.viewCartButton = 'a[href="/view_cart"]';
  }

  async addProductToCart() {
    await this.page.hover(this.addToCartButton);
    await this.page.click(this.addToCartButton);
    await this.page.click(this.continueShoppingButton);
  }

  async goToCart() {
    await this.page.click(this.viewCartButton);
  }
}
