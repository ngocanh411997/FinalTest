class BrandListingPage {

    url = "https://prep.brownells.com/brand-listing-page/";

    elements = {
        //submitBtn: () => cy.get(),
       
    }
   
   visitBrandListingPage(){
    cy.visit(this.url);
   }
   

}
export default BrandListingPage