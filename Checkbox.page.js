import BasePage from "./Base.page";

class CheckBox extends BasePage{  
    static get url() {
    return "/checkbox";
}
static get visit() {
    cy.visit(this.url);

}
static get expandButton() {
    return cy.get(".rct-option-expand-all");
}
static get checkBoxTitles() {
    return cy.get(".rct-title");
}
static get checkBoxTitlesSucces() {
    return cy.get(".text-success");
}

}
export default CheckBox;