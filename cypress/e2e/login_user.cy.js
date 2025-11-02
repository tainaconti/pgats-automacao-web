import { HomePage } from '../support/pages/HomePage'
import { SignupPage } from '../support/pages/SignupPage'
import { LoginPage } from '../support/pages/LoginPage'

const homePage = new HomePage()
const signupPage = new SignupPage()
const loginPage = new LoginPage()

describe('Login feature – Test Cases 2, 3 and 4', () => {
  let user
  const uniqueEmail = `${Date.now()}@example.com`

  before(() => {
    cy.fixture('userData').then((data) => {
      user = data
    })
  })

  it('TC2 – should login successfully with correct credentials', () => {
    homePage.visit()
    homePage.isVisible()
    homePage.clickSignupLogin()

    signupPage.startSignup(user.name, uniqueEmail)
    signupPage.verifyAccountInfoPage()
    signupPage.fillAccountDetails(user)
    signupPage.submitAccount()
    signupPage.logout()

    loginPage.goToLoginSection()
    loginPage.login(uniqueEmail, user.password)
    signupPage.verifyUserLoggedIn(user)
    signupPage.deleteAccount()
  })

  it('TC3 – should show error for invalid credentials', () => {
    homePage.visit()
    homePage.isVisible()
    homePage.clickSignupLogin()

    loginPage.goToLoginSection()
    loginPage.login('wrong_email@example.com', 'WrongPass123')
    loginPage.verifyInvalidLoginMessage()
  })

  it('TC4 – should logout user and navigate back to login page', () => {
    const newEmail = `${Date.now()}@example.com`

    homePage.visit()
    homePage.isVisible()
    homePage.clickSignupLogin()

    signupPage.startSignup(user.name, newEmail)
    signupPage.verifyAccountInfoPage()
    signupPage.fillAccountDetails(user)
    signupPage.submitAccount()
    signupPage.verifyUserLoggedIn(user)

    signupPage.logout()
    loginPage.verifyOnLoginPage()

    loginPage.login(newEmail, user.password)
    signupPage.deleteAccount()
  })
})
