export class SignupPage {
  signupName = 'input[data-qa="signup-name"]'
  signupEmail = 'input[data-qa="signup-email"]'
  signupButton = 'button[data-qa="signup-button"]'
  createAccountButton = 'button[data-qa="create-account"]'
  continueButton = 'a[data-qa="continue-button"]'

  startSignup(name, email) {
    cy.contains('h2', 'New User Signup!').should('be.visible')
    cy.get(this.signupName).type(name)
    cy.get(this.signupEmail).type(email)
    cy.get(this.signupButton).click()
  }

  verifyAccountInfoPage() {
    cy.contains('h2', 'Enter Account Information').should('be.visible')
  }

  fillAccountDetails(user) {
    cy.get('#id_gender2').check({ force: true })
    cy.get('#password').type(user.password)
    cy.get('#days').select('10')
    cy.get('#months').select('March')
    cy.get('#years').select('1995')
    cy.get('#newsletter').check({ force: true })
    cy.get('#optin').check({ force: true })
    cy.get('#first_name').type(user.firstName)
    cy.get('#last_name').type(user.lastName)
    cy.get('#company').type(user.company)
    cy.get('#address1').type(user.address1)
    cy.get('#address2').type(user.address2)
    cy.get('#country').select(user.country)
    cy.get('#state').type(user.state)
    cy.get('#city').type(user.city)
    cy.get('#zipcode').type(user.zipcode)
    cy.get('#mobile_number').type(user.mobile)
  }

  submitAccount() {
    cy.get(this.createAccountButton).click()
    cy.contains(/account created!/i).should('be.visible')
    cy.get(this.continueButton).click()
  }

  logout() {
    cy.contains('a', 'Logout').click()
  }

  verifyUserLoggedIn(user) {
    cy.contains('a', 'Logged in as').should('contain.text', user.firstName)
  }

  deleteAccount() {
    cy.contains('a', 'Delete Account').click({ force: true })
    cy.contains(/account deleted!/i).should('be.visible')
    cy.get(this.continueButton).click()
  }
}
