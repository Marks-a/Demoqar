import BasePage from "./Base.page";
class TextBoxPage{
    static get url(){
        return"/text-box";
    }
static get usernameField() {
    return cy.get("#userName");
}
static get emailField(){
    return cy.get("#userEmail");
}
static get currentAddressField() {
    return cy.get("#currentAddress");
}
static get permanentAddressField() {
    return cy.get("#permanentAddress");
}
static get submitButton() {
    return cy.get("#submit");
}
static get nameInfo() {
    return cy.get("#name")
}
static get emailInfo() {
   return cy.get("#email")
}
static get emailError() {
    return cy.get(".field-error")
}


}
export default TextBoxPage;