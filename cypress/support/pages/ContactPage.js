export class ContactPage {
  contactButton = 'a[href="/contact_us"]'
  nameInput = 'input[data-qa="name"]'
  emailInput = 'input[data-qa="email"]'
  subjectInput = 'input[data-qa="subject"]'
  messageTextarea = 'textarea[data-qa="message"]'
  uploadInput = 'input[name="upload_file"]'
  submitButton = 'input[data-qa="submit-button"]'
  successMessage = 'div.status.alert.alert-success'
  homeButton = 'a.btn.btn-success'

  goToContactPage() {
    cy.get(this.contactButton).click()
  }

  verifyContactPageVisible() {
    cy.contains('h2', 'Get In Touch').should('be.visible')
  }

  fillContactForm({ name, email, subject, message }) {
    cy.get(this.nameInput).type(name)
    cy.get(this.emailInput).type(email)
    cy.get(this.subjectInput).type(subject)
    cy.get(this.messageTextarea).type(message)
  }

uploadFile(fileName) {
  cy.get(this.uploadInput).selectFile(`cypress/fixtures/files/${fileName}`, { force: true })
}


  submitForm() {
    cy.get(this.submitButton).click()
    cy.on('window:confirm', () => true) 
  }

  verifySuccessMessage() {
    cy.contains(this.successMessage, 'Success! Your details have been submitted successfully.').should('be.visible')
  }

  returnHome() {
    cy.get(this.homeButton).click()
  }
}
