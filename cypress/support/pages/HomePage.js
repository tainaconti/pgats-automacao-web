export class HomePage {
  homeMenu = 'ul.nav.navbar-nav li a[href="/"]'
  signupLoginMenu = 'ul.nav.navbar-nav li a[href="/login"]'
  subscriptionTitle = 'h2:contains("Subscription")'
  subscriptionInput = '#susbscribe_email'
  subscriptionButton = '#subscribe'

  visit() {
    cy.visit('/')
  }

  isVisible() {
    cy.get(this.homeMenu).should('be.visible')
  }

  clickSignupLogin() {
    cy.get(this.signupLoginMenu).click()
  }

  scrollToFooter() {
    cy.scrollTo('bottom')
  }

  verifySubscriptionSection() {
    cy.contains('h2', 'Subscription').should('be.visible')
  }

  subscribeWithEmail(email) {
    cy.get(this.subscriptionInput).type(email)
    cy.get(this.subscriptionButton).click()
  }

  verifySubscriptionSuccess() {
    cy.contains('You have been successfully subscribed!').should('be.visible')
  }
}
