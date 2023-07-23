class LandingNav {
    static clickOnContactUs() {
        cy.get('div[class="header__actions"] p:nth-child(1)').click()
    }
    static fillOutTheForm() {
        cy.get('h1:contains("Interested in Helium? Get in touch with our team.")').should('be.visible')  
        cy.fixture('contactInformation').then(user => {
            cy.get('#input_1_1').type(user.newUserInformation.first_name, {force: true})
            cy.get('#input_1_2').type(user.newUserInformation.last_name, {force: true} )
            cy.get('#input_1_5').type(user.newUserInformation.email, {force: true})
            cy.get('#input_1_6').type(user.newUserInformation.phone_number, {force: true})
            cy.get('#input_1_7').type(user.newUserInformation.hospital_name, {force: true})
            cy.get('#input_1_9').type(user.newUserInformation.location, {force: true})
            cy.get('#input_1_10').type(user.newUserInformation.estimated_patients_seen, {force: true})
            cy.get('#input_1_11').type(user.newUserInformation.message, {force: true})
            cy.get('input[value = "Send message"]').eq(0).click({force: true})           
        })
    }
}
export default LandingNav

