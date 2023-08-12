import BrandPage from "../page/brand-page";
import BrandListingPage from "../page/brand-listing-page";
import BrandData from "../fixtures/brand.json";

let brandPage = new BrandPage();
let brandListingPage = new BrandListingPage();

describe('Brand page', () => {
  it('Verify that user will redirect to brand listing page when clicked on [Shop All Our Brands At Once!] in Brand page', () => {
    // Visit Brand page
    brandPage.visitBrandPage();
    // Click on [Shop All Our Brands At Once!] button
    brandPage.clickOnShopAllOurBrandsBtn();
    // Verify that user will redirect to brand listing page
    cy.url().should('include', 'https://prep.brownells.com/brand-listing-page/');

  })
  it('Verify that brand displays correctly when user choose specific letter', () => {
    // Visit Brand page
    brandPage.visitBrandPage();
    // Click brand A button
    brandPage.clickOnBrandABtn();
    // Verify that brand A displays correctly
    brandPage.assertDetailBrandTitle(BrandData["Brand A"]);

  })
  it.only('Verify that user will redirect to brand page when click on specific letter', () => {
    // Visit Brand page
    brandPage.visitBrandPage();
    // Click brand A button
    brandPage.clickOnBrandABtn();
    // Click on a brand
    brandPage.clickOnBrandA();
    // Verify that redirecting to brand page
    cy.url().should('include','https://prep.brownells.com/brands/100-straight-products/');

  })

  // it('', () => {

  // })
})