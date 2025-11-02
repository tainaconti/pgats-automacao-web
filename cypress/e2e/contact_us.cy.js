import { HomePage } from '../support/pages/HomePage'
import { ContactPage } from '../support/pages/ContactPage'

const homePage = new HomePage()
const contactPage = new ContactPage()

describe('Test Case 6 – Contact Us Form', () => {
  let user

  before(() => {
    cy.fixture('userData').then((data) => {
      user = data
    })
  })

  it('should send a message successfully through the contact form', () => {
    homePage.visit()
    homePage.isVisible()
    contactPage.goToContactPage()

    contactPage.verifyContactPageVisible()
    contactPage.fillContactForm({
      name: user.name,
      email: `${Date.now()}@example.com`,
      subject: 'Test Contact Form',
      message: 'This is an automated test message.'
    })

    contactPage.uploadFile('testfile.txt')
    contactPage.submitForm()

    contactPage.verifySuccessMessage()
    contactPage.returnHome()
    homePage.isVisible()
  })
})  
