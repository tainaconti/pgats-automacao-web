export class LoginPage {
  loginEmail = 'input[data-qa="login-email"]'
  loginPassword = 'input[data-qa="login-password"]'
  loginButton = 'button[data-qa="login-button"]'

  goToLoginSection() {
    cy.contains('a', 'Signup / Login').click()
    cy.contains('h2', 'Login to your account').should('be.visible')
  }

  login(email, password) {
    cy.get(this.loginEmail).type(email)
    cy.get(this.loginPassword).type(password)
    cy.get(this.loginButton).click()
  }

  verifyInvalidLoginMessage() {
    cy.contains('p', 'Your email or password is incorrect!').should('be.visible')
  }

  verifyOnLoginPage() {
  cy.contains('h2', 'Login to your account').should('be.visible')
}
}
