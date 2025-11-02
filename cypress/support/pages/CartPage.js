export class CartPage {
  cartMenu = 'a[href="/view_cart"]'
  firstProduct = '.features_items .product-image-wrapper'
  continueShopping = '.btn.btn-success.close-modal.btn-block'
  cartTable = '#cart_info_table'
  proceedButton = '.btn.btn-default.check_out'
  commentTextArea = 'textarea[name="message"]'
  placeOrderButton = 'a[href="/payment"]'
  nameOnCard = 'input[name="name_on_card"]'
  cardNumber = 'input[name="card_number"]'
  cvc = 'input[name="cvc"]'
  expiry = 'input[name="expiry_month"]'
  year = 'input[name="expiry_year"]'
  payButton = '#submit'

  addFirstProductsToCart(quantity = 1) {
    cy.get(this.firstProduct).each(($el, index) => {
      if (index < quantity) {
        cy.wrap($el).trigger('mouseover')
        cy.wrap($el).find('a[data-product-id]').first().click({ force: true })
        cy.get(this.continueShopping).click()
      }
    })
  }

  goToCart() {
  cy.get(this.cartMenu).first().click()
  }

  verifyCartVisible() {
    cy.get(this.cartTable).should('be.visible')
  }

  proceedToCheckout() {
    cy.contains('Proceed To Checkout').click({ force: true })
  }

  verifyAddressAndOrderReview() {
    cy.contains('Address Details').should('be.visible')
    cy.contains('Review Your Order').should('be.visible')
  }

  placeOrder(comment) {
    cy.get(this.commentTextArea).type(comment)
    cy.get(this.placeOrderButton).click()
  }

  fillPaymentDetails({ nameOnCard, cardNumber, cvc, expiry, year }) {
    cy.get(this.nameOnCard).type(nameOnCard)
    cy.get(this.cardNumber).type(cardNumber)
    cy.get(this.cvc).type(cvc)
    cy.get(this.expiry).type(expiry)
    cy.get(this.year).type(year)
  }

  confirmPayment() {
    cy.get(this.payButton).click()
  }

  verifyOrderSuccess() {
  cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
  }
}
