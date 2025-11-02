Cypress.Commands.add('getAllMenuTitles', () => {
  return cy.get('ul.nav.navbar-nav li a').then(($links) => {
    const titles = [...$links].map(link => link.innerText.trim())
    return titles
  })
})