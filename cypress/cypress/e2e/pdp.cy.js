import ProductData from "../fixtures/products.json";
import PdpPage from "../page/pdp-page";

let pdpPage = new PdpPage();

describe('PDP page', () => {
  it('QDP apply successfully when user checkout enough quantity', () => {
    // Visit PDP URL
    cy.visit(ProductData.productQDP.url);

    // Choose variant
    for (let variant of ProductData.productQDP.variantItems) {
      pdpPage.chooseVariant(variant);
    }

    // Assert qdp label  display
    pdpPage.assertQDPLabelDisplay();

    // Input quantity
    pdpPage.inputQuantity(ProductData.productQDP.quantityDiscounts[0].quantity);

    //click to Add to cart button
    pdpPage.clickOnAddToCartBtn();

    // Assert item values in mini cart display correctly
    pdpPage.assertItemPriceEqual(ProductData.productQDP.quantityDiscounts[0].totalAmount);

  });
  it('QDP apply successfully when user checkout enough quantity', () => {
    // Visit PDP URL
    cy.visit(ProductData.productQDP.url);

    // Choose variant
    for (let variant of ProductData.productQDP.variantItems) {
      pdpPage.chooseVariant(variant);
    }

    // Assert qdp label  display
    pdpPage.assertQDPLabelDisplay();

    // Input quantity
    pdpPage.inputQuantity(ProductData.productQDP.quantityDiscounts[0].quantity);

    //click to Add to cart button
    pdpPage.clickOnAddToCartBtn();

    // Input more quantity in mini cart 
    pdpPage.inputQuantityInMiniCart(ProductData.productQDP.quantityDiscounts[1].quantity + 3);

    // Assert item values in mini cart display correctly
    pdpPage.assertItemPriceEqual(ProductData.productQDP.quantityDiscounts[1].totalAmount + 3 * ProductData.productQDP.quantityDiscounts[1].pricePerUnit);


  });
})