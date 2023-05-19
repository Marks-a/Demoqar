import TextBoxPage from "../pageObjects/TextBox.page";
import CheckBox from "../pageObjects/Checkbox.page";
import RadioButtonPage from "../pageObjects/RadioButton.page";
describe("DemoQA spec", () => {
  context("Textbox scenarios", () => {
    beforeEach(() => {
      cy.visit("/text-box");
    });

    it.skip("Textbox - positive case", () => {
      // Set Full Name
      TextBoxPage.usernameField.type("Donald Duck");
      // Set Email
      TextBoxPage.emailField.type("random@email.com");
      // Set Current Address
      TextBoxPage.currentAddressField.type("Valmiera - A");
      // Set Permanent Address
      TextBoxPage.permanentAddressField.type("Valmiera - B");
      // Click Submit
     TextBoxPage.submitButton.click();
      // Validate that the values are correct
      //cy.get("#name").should("have.text", "Name:D")
// Validate that the values are correct
      TextBoxPage.nameInfo.should("have.text", "Name:Donald Duck");
      TextBoxPage.emailInfo.should("have.text", "Email:random@email.com");
    });


    it.skip("Textbox - negative case", () => {
      TextBoxPage.usernameField.type("Donald Duck");
      TextBoxPage.emailField.type("random@emai@ramdp@radom.com");
    //  cy.get(".field-error").should("be.visible");
      TextBoxPage.submitButton.click();
      TextBoxPage.emailError.should("be.visible");
      TextBoxPage.emailError.should("have.class","field-error");;
    });

  })


  context.skip("CheckBox scenarion", () => {
    before(()=> {
      cy.visit("/checkbox");
    })
    it.skip("Check values", () => {
      CheckBox.expandButton.click();
      // Click Expand button
      CheckBox.checkBoxTitles.contains("Private").click();
      // Select values - Notes, Angular, Private, Excel file.doc
      // Validate that information line contains the checked values
      CheckBox.checkBoxTitlesSucces.should("contain.text", "office public private classified general");




    }) ;
    it.skip("Check values", () => {
        CheckBox.expandButton.click();
        CheckBox.checkBoxTitles.contains("Public").click();
        CheckBox.checkBoxTitlesSucces.should("have.text","public");


    });


})




context.skip("Radio button scenarion", () => {
  beforeEach(() => {
    cy.visit("/radio-button");
  })
  it("Click on radio button", () => {
    RadioButtonPage.yesRadioButton.click({force: true});
   // RadioButtonPage.textSucces.should("have.text","Yes");
     RadioButtonPage.impressiveRadioButton.click({force: true});
//     RadioButtonPage.textSucces.should("have.text","Impressive");
// //cy.get("#noRadio").click({force:true});
//     RadioButtonPage.noRadioButton.should("have.class","disabled");
  })

})


context("Button Clicking scenarion", () => {
  beforeEach(() => {
    cy.visit("/buttons");
  })
  it("Click on radio button", () => {
   cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage").should("have.text","You have done a double click");
    cy.get("#rightClickBtn").rightclick();
    cy.get("#rightClickMessage").should("have.text","You have done a right click");
    cy.get('.btn-primary').contains("Click Me").click();
    cy.get(".btn-primary").contains(/^Click Me$/).click();

  })

})









})
