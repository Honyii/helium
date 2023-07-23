import LandingNav from "../heliumPageObjects/LandingNav";

describe('contact us flow via landing page', () => {
    before(() => {
        cy.visit('/')
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      }); 
    it('clicks on respective CTA and fills out the form', () => {   
        LandingNav.clickOnContactUs()
        LandingNav.fillOutTheForm()
    })
})