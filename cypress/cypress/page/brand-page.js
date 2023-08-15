class BrandPage {

    url = "https://prep.brownells.com/brands/";

    elements = {
        //submitBtn: () => cy.get(),
        shopAllOurBrandsBtn: () => cy.get('.content-block__content > p > a'),
        brandABtn: () => cy.get('.manufacturer-list > :nth-child(1) > a'),
        detailBrandTitle: () => cy.get('.manufacturer-detail__title > .upper-case'),
        brandA: () => cy.get('.row > :nth-child(2) > a')

    }

    visitBrandPage() {
        cy.visit(this.url);
    }
    clickOnShopAllOurBrandsBtn() {
        this.elements.shopAllOurBrandsBtn().click();
    }
    clickOnBrandABtn() {
        this.elements.brandABtn().click();
    }
    assertDetailBrandTitle(expectedText) {
        
        const actual = this.elements.detailBrandTitle().invoke("text");
        actual.should('contain', expectedText);
    }
    clickOnBrandA() {
        this.elements.brandA().click();
    }

}
export default BrandPage