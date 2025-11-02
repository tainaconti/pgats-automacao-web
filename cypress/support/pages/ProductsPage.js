export class ProductsPage {
  productsMenu = 'a[href="/products"]'
  productsGridItems = '.features_items .product-image-wrapper'
  searchInput = '#search_product'
  searchButton = '#submit_search'

  goToProductsPage() {
    cy.get(this.productsMenu).should('be.visible').click()
  }

  verifyAllProductsPage() {
    cy.contains('h2', 'All Products').should('be.visible')
  }

  verifyProductsListVisible() {
    cy.get(this.productsGridItems).should('have.length.greaterThan', 0)
  }

  searchProduct(productName) {
    cy.get(this.searchInput).should('be.visible').clear().type(productName)
    cy.get(this.searchButton).click()
  }

  verifySearchResults(productName) {
    cy.contains('h2', 'Searched Products').should('be.visible')
    cy.get(this.productsGridItems)
      .should('have.length.greaterThan', 0)
      .each(($el) => {
        cy.wrap($el).should('contain.text', productName)
      })
  }

  openFirstProductDetail() {
    cy.get(this.productsGridItems).first().within(() => {
      cy.contains('a', 'View Product').click({ force: true })
    })
  }

  verifyProductDetailInfo() {
    cy.get('.product-information').should('be.visible').within(() => {
      cy.get('h2').should('be.visible')
      cy.contains('p', 'Category').should('be.visible')
      cy.contains('span', /Rs\.\s*\d+/).should('be.visible')
      cy.contains('p', 'Availability').should('be.visible')
      cy.contains('p', 'Condition').should('be.visible')
      cy.contains('p', 'Brand').should('be.visible')
    })
  }
}
