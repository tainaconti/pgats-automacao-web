import { HomePage } from '../support/pages/HomePage'
import { SignupPage } from '../support/pages/SignupPage'
import { CartPage } from '../support/pages/CartPage'

const homePage = new HomePage()
const signupPage = new SignupPage()
const cartPage = new CartPage()

describe('Test Case 15 – Place Order: Register before Checkout', () => {
  let user
  const uniqueEmail = `${Date.now()}@example.com`

  before(() => {
    cy.fixture('userData').then((data) => {
      user = data
    })
  })

  it('should complete an order flow after registering a new account', () => {
    homePage.visit()
    homePage.isVisible()

    homePage.clickSignupLogin()
    signupPage.startSignup(user.name, uniqueEmail)
    signupPage.verifyAccountInfoPage()
    signupPage.fillAccountDetails(user)
    signupPage.submitAccount()
    signupPage.verifyUserLoggedIn(user)

    cartPage.addFirstProductsToCart(2)
    cartPage.goToCart()

    cartPage.verifyCartVisible()
    cartPage.proceedToCheckout()

    cartPage.verifyAddressAndOrderReview()
    cartPage.placeOrder('Testing E2E Cypress automation flow.')

    cartPage.fillPaymentDetails({
      nameOnCard: 'Taina QA',
      cardNumber: '4111111111111111',
      cvc: '123',
      expiry: '12',
      year: '2028'
    })

    cartPage.confirmPayment()
    cartPage.verifyOrderSuccess()

    signupPage.deleteAccount()
  })
})
