class BasePage{
    static get url(){
        return "";
    }
    static visit() {
        cy.visit(this.url);
    }
    static get textSucces() {
        cy.get(".text-success");
    }
}
export default BasePage;