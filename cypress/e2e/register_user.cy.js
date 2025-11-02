import { HomePage } from '../support/pages/HomePage'
import { SignupPage } from '../support/pages/SignupPage'

const homePage = new HomePage()
const signupPage = new SignupPage()

describe('Test Case 1 & 5 – Register User Scenarios', () => {
  let user
  const existingEmail = `${Date.now()}@example.com`

  before(() => {
    cy.fixture('userData').then((data) => {
      user = data
    })
  })

  it('TC1 – should register, log in, and delete the user successfully', () => {
    homePage.visit()
    homePage.isVisible()
    homePage.clickSignupLogin()  

    signupPage.startSignup(user.name, existingEmail)
    signupPage.verifyAccountInfoPage()
    signupPage.fillAccountDetails(user)
    signupPage.submitAccount()
    signupPage.verifyUserLoggedIn(user)
    signupPage.deleteAccount()
  })

  it('TC5 – should show error when registering with existing email', () => {
    homePage.visit()
    homePage.isVisible()
    homePage.clickSignupLogin()

    signupPage.startSignup(user.name, existingEmail)
    signupPage.verifyAccountInfoPage()
    signupPage.fillAccountDetails(user)
    signupPage.submitAccount()
    signupPage.logout()

    homePage.clickSignupLogin() 
    cy.contains('h2', 'New User Signup!').should('be.visible')
    signupPage.startSignup(user.name, existingEmail)

    cy.contains('p', 'Email Address already exist!').should('be.visible')
  })
})
