import { HomePage } from '../support/pages/HomePage'
import { ProductsPage } from '../support/pages/ProductsPage'

const homePage = new HomePage()
const productsPage = new ProductsPage()

describe('Products feature – Test Cases 8, 9 & 10', () => {

  it('TC8 – should display all products and show product details', () => {
    homePage.visit()
    homePage.isVisible()

    productsPage.goToProductsPage()
    productsPage.verifyAllProductsPage()
    productsPage.verifyProductsListVisible()

    productsPage.openFirstProductDetail()
    productsPage.verifyProductDetailInfo()
  })

  it('TC9 – should search and display matching products', () => {
    homePage.visit()
    homePage.isVisible()

    productsPage.goToProductsPage()
    productsPage.verifyAllProductsPage()

    const productName = 'Sleeveless Dress'
    productsPage.searchProduct(productName)
    productsPage.verifySearchResults(productName)
  })

  it('TC10 – should subscribe successfully from home page footer', () => {
    homePage.visit()
    homePage.isVisible()

    homePage.scrollToFooter()
    homePage.verifySubscriptionSection()
    homePage.subscribeWithEmail(`${Date.now()}@example.com`)
    homePage.verifySubscriptionSuccess()
  })
})
