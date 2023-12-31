
class ContactUsPage {

    url = "https://prep.brownells.com/contact-us/";

    elements = {
        //submitBtn: () => cy.get(),
        submitBtn: () => cy.get('button[id="0baea710-1e57-4cf7-82b5-6822ee904f99"][name="submit"][data-f-type="submitbutton"]'),
        firstNameErrorMessage: () => cy.get('#__field_12633_desc'),
        lastNameErrorMessage: () => cy.get('#__field_12634_desc'),
        emailAddressErrorMessage: () => cy.get('#__field_12635_desc'),
        messageErrorMessage: () => cy.get('#__field_12638_desc'),

        firstNameTextBox: () => cy.get('input[name="__field_12633"][id="8fa1dfc4-6c55-4ae4-a843-f1a9376593b7"][type="text"][placeholder="First Name"][required][aria-required="true"]'),
        lastNameTextBox: () => cy.get('input[name="__field_12634"][id="86fd0825-dcff-4360-8972-fc5f00fb7e02"][type="text"][placeholder="Last Name"][required][aria-required="true"]'),
        emailAddressTextBox: () => cy.get('#f605ed5e-efb0-4e16-8576-47b661767b8e'),
        messageTextBox: () => cy.get('#ea86b844-fc8e-4ad2-b08a-c61b1a6a141e'),
        textSubmitSuccessfully: () => cy.get('#ed0fd8ce-dbc2-4318-a1e1-cb4b2d957485 > :nth-child(7) > :nth-child(1) > :nth-child(1)')


    }
    visitContactUsPage() {
        cy.visit(this.url);
    }
    clickToSubmitBtn() {
        this.elements.submitBtn().click();
    }
    assertFirstNameErrorMessage(text) {
        this.elements.firstNameErrorMessage().invoke("text").should("equal", text);
    }
    assertLastNameErrorMessage(text) {
        this.elements.lastNameErrorMessage().invoke("text").should("equal", text);
    }
    assertEmailAddressErrorMessage(text) {
        this.elements.emailAddressErrorMessage().invoke("text").should("equal", text);
    }
    assertMessageErrorMessage(text) {
        this.elements.messageErrorMessage().invoke("text").should("equal", text);
    }
    inputValueToFirstName(text) {
        this.elements.firstNameTextBox().clear().type(text);
    }
    inputValueToLastName(text) {
        this.elements.lastNameTextBox().clear().type(text);
    }
    inputValueToEmaillAddress(text) {
        this.elements.emailAddressTextBox().clear().type(text);
    }
    inputValueToMessage(text) {
        this.elements.messageTextBox().clear().type(text);
    }
    assertFirstNameErrorMessageisHiden() {
        this.elements.firstNameErrorMessage().should('have.attr', 'style').and('include', 'none');
    }
    assertLastNameErrorMessageIsHiden() {
        this.elements.lastNameErrorMessage().should('have.attr', 'style').and('include', 'none');
    }
    assertEmailAddressErrorMessageIsHiden() {
        this.elements.emailAddressErrorMessage().should('have.attr', 'style').and('include', 'none');
    }
    assertMessageErrorMessageIsHiden() {
        this.elements.messageErrorMessage().should('have.attr', 'style').and('include', 'none');
    }
    assertSubmitSuccessfully(text){
        this.elements.textSubmitSuccessfully().invoke(text).should("equal",text);
    }

}
export default ContactUsPage