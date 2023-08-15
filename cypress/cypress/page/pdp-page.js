import Converter from "../ultils/converter";

let converter = new Converter();

class PdpPage {

    elements = {
        qdpLabel: () => cy.get('.tablet-sticky-bottom > .variant__volume-discount > .pdp-favorite'),
        variantOption: (option) => cy.get("input[value='" + option + "']"),
        quantityInput: (option) => cy.get('#qty'),

        //quantityInput: (option) =>
        addToCartBtn: (option) => cy.get('.pdp-info__btn > .btn'),
        itemPriceInMiniCart: (option) => cy.get('.mini-cart__product-price--cost'),
        quantityInputOnMiniCart: () => cy.get('.mini-cart__product-quantity > .input'),


    }

    assertQDPLabelDoNotDisplay() {
        this.elements.qdpLabel().should("not.visible");
    }
    assertQDPLabelDisplay() {
        this.elements.qdpLabel().should("be.visible");
    }

    chooseVariant(variantName) {
        this.elements.variantOption(variantName).click();
    }
    inputQuantity(qty) {
        this.elements.quantityInput().clear().type(qty);
    }
    clickOnAddToCartBtn() {
        this.elements.addToCartBtn().click();
    }

    assertItemPriceEqual(expectedPrice) {

        this.elements.itemPriceInMiniCart()

            .invoke("text")

            .then(priceText=>{

                let actualPrice = converter.extractAmountFromPriceString(priceText);

                expect(actualPrice).to.be.closeTo(expectedPrice, 0.001);

            })

    }

    inputQuantityInMiniCart(qty) {

        cy.wait(1000)

        cy.intercept('POST', "**/DefaultCart/ChangeCartItem").as('changeCartItem')

        this.elements.quantityInputOnMiniCart()

            .clear({ force: true })

            .type(qty, { force: true })

            .type("{enter}", { force: true });

        cy.wait('@changeCartItem').its('response.statusCode').should('eq', 200)

    }

}
export default PdpPage