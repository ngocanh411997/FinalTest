import ContactUsPage from "../page/contact-us-page";
import Message from "../fixtures/message.json";
import ContactUsData from "../fixtures/contact-us-data.json";

let contactUsPage = new ContactUsPage();


describe('Contact us page', () => {
  it('Verify that error message display when user left blank any fields', () => {
    //1. Leave blank all required field
    // Visit Contact us page
    contactUsPage.visitContactUsPage();
    // Click to Submit button
    contactUsPage.clickToSubmitBtn();
    // Verify error message of First Name 
    contactUsPage.assertFirstNameErrorMessage(Message["Blank Error Message"]);
    // Verify error message of Last Name
    contactUsPage.assertLastNameErrorMessage(Message["Blank Error Message"]);
    // Verify error message of Email Address
    contactUsPage.assertEmailAddressErrorMessage(Message["Blank Error Message"]);
    // Verify error message of Message
    contactUsPage.assertMessageErrorMessage(Message["Blank Error Message"]);

    //2. Leave blank only First Name
    // Visit Contact us page
    contactUsPage.visitContactUsPage();
    // Input valid value to Last Name
    contactUsPage.inputValueToLastName(ContactUsData["Valid value"]["Last Name"]);
    // Input valid value to Email Address
    contactUsPage.inputValueToEmaillAddress(ContactUsData["Valid value"]["Email Address"]);
    // Input valid value to Message
    contactUsPage.inputValueToMessage(ContactUsData["Valid value"].Message);
    // Click to Submit button
    contactUsPage.clickToSubmitBtn();
    // Verify error message of First Name
    contactUsPage.assertFirstNameErrorMessage(Message["Blank Error Message"]);
    // Verify that Last Name does not have error message
    contactUsPage.assertLastNameErrorMessageIsHiden();
    // Verify that Email Address does not have error message
    contactUsPage.assertEmailAddressErrorMessageIsHiden();
    // Verify that Message does not have error message
    contactUsPage.assertMessageErrorMessageIsHiden();

    //3. Leave blank only Last Name
    // Visit Contact us page
    contactUsPage.visitContactUsPage();
    // Input valid value to First Name
    contactUsPage.inputValueToFirstName(ContactUsData["Valid value"]["First Name"]);
    // Input valid value to Email Address
    contactUsPage.inputValueToEmaillAddress(ContactUsData["Valid value"]["Email Address"]);
    // Input valid value to Message
    contactUsPage.inputValueToMessage(ContactUsData["Valid value"].Message);
    // Click to Submit button
    contactUsPage.clickToSubmitBtn();
    // Verify error message of Last Name
    contactUsPage.assertLastNameErrorMessage(Message["Blank Error Message"]);
    // Verify that First Name does not have error message
    contactUsPage.assertFirstNameErrorMessageisHiden();
    // Verify that Email Address does not have error message
    contactUsPage.assertEmailAddressErrorMessageIsHiden();
    // Verify that Message does not have error message
    contactUsPage.assertMessageErrorMessageIsHiden();


    //4. Leave blank only Email Address
    // Visit Contact us page
    contactUsPage.visitContactUsPage();
    // Input valid value to First Name
    contactUsPage.inputValueToFirstName(ContactUsData["Valid value"]["First Name"]);
    // Input valid value to Last Name
    contactUsPage.inputValueToLastName(ContactUsData["Valid value"]["Last Name"]);
    // Input valid value to Message
    contactUsPage.inputValueToMessage(ContactUsData["Valid value"].Message);
    // Click to Submit button
    contactUsPage.clickToSubmitBtn();
    // Verify error message of Email Address
    contactUsPage.assertEmailAddressErrorMessage(Message["Blank Error Message"]);
    // Verify that First Name does not have error message
    contactUsPage.assertFirstNameErrorMessageisHiden();
    // Verify that Last Name does not have error message
    contactUsPage.assertLastNameErrorMessageIsHiden();
    // Verify that Message does not have error message
    contactUsPage.assertMessageErrorMessageIsHiden();

    //5. Leave blank only Message
    // Visit Contact us page
    contactUsPage.visitContactUsPage();
    // Input valid value to First Name
    contactUsPage.inputValueToFirstName(ContactUsData["Valid value"]["First Name"]);
    // Input valid value to Last Name
    contactUsPage.inputValueToLastName(ContactUsData["Valid value"]["Last Name"]);
    // Input valid value to Email Address
    contactUsPage.inputValueToEmaillAddress(ContactUsData["Valid value"]["Email Address"]);
    // Click to Submit button
    contactUsPage.clickToSubmitBtn();
    // Verify error message of Message
    contactUsPage.assertMessageErrorMessage(Message["Blank Error Message"]);
    // Verify that First Name does not have error message
    contactUsPage.assertFirstNameErrorMessageisHiden();
    // Verify that Last Name does not have error message
    contactUsPage.assertLastNameErrorMessageIsHiden();
    // Verify that Email Address does not have error message
    contactUsPage.assertEmailAddressErrorMessageIsHiden();

  })

  it('Verify that error message display when user inputted invalid value to any fields', () => {

    // 1. Input invalid value (all spaces) to only First Name
    // Visit Contact us page
    contactUsPage.visitContactUsPage();
    // Input invalid value to First Name
    contactUsPage.inputValueToFirstName(ContactUsData["Invalid value"]["First Name"]);
    // Input valid value to Last Name
    contactUsPage.inputValueToLastName(ContactUsData["Valid value"]["Last Name"]);
    // Input valid value to Email Address
    contactUsPage.inputValueToEmaillAddress(ContactUsData["Valid value"]["Email Address"]);
    // Input valid value to Message
    contactUsPage.inputValueToMessage(ContactUsData["Valid value"].Message);
    // Click to Submit button
    contactUsPage.clickToSubmitBtn();
    // Verify error message of First Name
    contactUsPage.assertFirstNameErrorMessage(Message["Blank Error Message"]);
    // Verify that Last Name does not have error message
    contactUsPage.assertLastNameErrorMessageIsHiden();
    // Verify that Email Address does not have error message
    contactUsPage.assertEmailAddressErrorMessageIsHiden();
    // Verify that Message does not have error message
    contactUsPage.assertMessageErrorMessageIsHiden();


    //2. Input invalid value (all spaces) to only Last Name
    // Visit Contact us page
    contactUsPage.visitContactUsPage();
    // Input valid value to First Name
    contactUsPage.inputValueToFirstName(ContactUsData["Valid value"]["First Name"]);
    // Input invalid value to Last Name
    contactUsPage.inputValueToLastName(ContactUsData["Invalid value"]["Last Name"]);
    // Input valid value to Email Address
    contactUsPage.inputValueToEmaillAddress(ContactUsData["Valid value"]["Email Address"]);
    // Input valid value to Message
    contactUsPage.inputValueToMessage(ContactUsData["Valid value"].Message);
    // Click to Submit button
    contactUsPage.clickToSubmitBtn();
    // Verify error message of Last Name
    contactUsPage.assertLastNameErrorMessage(Message["Blank Error Message"]);
    // Verify that First Name does not have error message
    contactUsPage.assertFirstNameErrorMessageisHiden();
    // Verify that Email Address does not have error message
    contactUsPage.assertEmailAddressErrorMessageIsHiden();
    // Verify that Message does not have error message
    contactUsPage.assertMessageErrorMessageIsHiden();


    //3. Input invalid value (all spaces) to only Email Address
    // Visit Contact us page
    contactUsPage.visitContactUsPage();
    // Input valid value to First Name
    contactUsPage.inputValueToFirstName(ContactUsData["Valid value"]["First Name"]);
    // Input valid value to Last Name
    contactUsPage.inputValueToLastName(ContactUsData["Valid value"]["Last Name"]);
    // Input invalid value to Email Address
    contactUsPage.inputValueToMessage(ContactUsData["Invalid value"]["Email Address"][0]["Email Address"]);
    // Input valid value to Message
    contactUsPage.inputValueToMessage(ContactUsData["Valid value"].Message);
    // Click to Submit button
    contactUsPage.clickToSubmitBtn();
    // Verify error message of Email Addrress
    contactUsPage.assertEmailAddressErrorMessage(Message["Blank Error Message"]);
    // Verify that First Name does not have error message
    contactUsPage.assertFirstNameErrorMessageisHiden();
    // Verify that Last Name does not have error message
    contactUsPage.assertLastNameErrorMessageIsHiden();
    // Verify that Message does not have error message
    contactUsPage.assertMessageErrorMessageIsHiden();

    //4. Input invalid value (wrong format email) to Email Address
    // Visit Contact us page
    contactUsPage.visitContactUsPage();
    // Input valid value to First Name
    contactUsPage.inputValueToFirstName(ContactUsData["Valid value"]["First Name"]);
    // Input valid value to Last Name
    contactUsPage.inputValueToLastName(ContactUsData["Valid value"]["Last Name"]);
    // Input invalid value to Email Address
    contactUsPage.inputValueToEmaillAddress(ContactUsData["Invalid value"]["Email Address"][1]["Email Address"]);
    // Input valid value to Message
    contactUsPage.inputValueToMessage(ContactUsData["Valid value"].Message);
    // Click to Submit button
    contactUsPage.clickToSubmitBtn();
    // Verify error message of Email Addrress
    contactUsPage.assertEmailAddressErrorMessage(Message["Invalid Email Address Message"]);
    // Verify that First Name does not have error message
    contactUsPage.assertFirstNameErrorMessageisHiden();
    // Verify that Last Name does not have error message
    contactUsPage.assertLastNameErrorMessageIsHiden();
    // Verify that Message does not have error message
    contactUsPage.assertMessageErrorMessageIsHiden();

    //5. Input invalid value (all spaces) to only Message
    // Visit Contact us page
    contactUsPage.visitContactUsPage();
    // Input valid value to First Name
    contactUsPage.inputValueToFirstName(ContactUsData["Valid value"]["First Name"]);
    // Input valid value to Last Name
    contactUsPage.inputValueToLastName(ContactUsData["Valid value"]["Last Name"]);
    // Input valid value to Email Address
    contactUsPage.inputValueToEmaillAddress(ContactUsData["Valid value"]["Email Address"]);
    // Input invalid value to Message
    contactUsPage.inputValueToMessage(ContactUsData["Invalid value"].Message);
    // Click to Submit button
    contactUsPage.clickToSubmitBtn();
    // Verify error message of Message
    contactUsPage.assertMessageErrorMessage(Message["Blank Error Message"]);
    // Verify that First Name does not have error message
    contactUsPage.assertFirstNameErrorMessageisHiden();
    // Verify that Last Name does not have error message
    contactUsPage.assertLastNameErrorMessageIsHiden();
    // Verify that Email Address does not have error message
    contactUsPage.assertEmailAddressErrorMessageIsHiden();

  })
  it('Verify that user can submit successfully when user inputted valid value', () => {
    // Visit Contact us page
    contactUsPage.visitContactUsPage();
    // Input valid value to First Name
    contactUsPage.inputValueToFirstName(ContactUsData["Valid value"]["First Name"]);
    // Input valid value to Last Name
    contactUsPage.inputValueToLastName(ContactUsData["Valid value"]["Last Name"]);
    // Input valid value to Email Address
    contactUsPage.inputValueToEmaillAddress(ContactUsData["Valid value"]["Email Address"]);
    // Input valid value to Message
    contactUsPage.inputValueToMessage(ContactUsData["Valid value"].Message);
    // Click to Submit button
    contactUsPage.clickToSubmitBtn();
    // Verify that user submit successfully
    //contactUsPage.assertSubmitSuccessfully(Message["Submit successfuly Message"]);

    
  })
  it.only('Verify that user will direct to brand listing page when clicked on [Shop All Our Brands At Once!]', () => {
    
    
  })
  // it('', () => {
    
  // })
})
