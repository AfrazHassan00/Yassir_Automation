Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

const CSS = require('../e2e/configuration.cy').CLASS_CSS
const URL = require('../e2e/configuration.cy').CONSTANTS.URL
const EXPLORER_LINKS = require('../e2e/configuration.cy').EXPLORER_PAGE_LINKS

describe ('TESTING OF GO CITY APPLICATION',()=>{


    it('Navigating to ALL INCLUSIVE PASS PAGE',()=>{
        cy.visit(URL + "/boston/en-us/products/all-inclusive")
        cy.get(CSS.ALL_INCLUSIVE_PAGE_TITLE).should('have.text','All-Inclusive Pass')

    })

    it('Redirecting user to the home page',()=>{
        cy.get(CSS.HOME_BUTTON).click()
        
        
    })

    
    it('Redirecting user to the pricing page, checking out and back to Home Page ',()=>{
         cy.get(CSS.BUY_BUTTON).click()
         cy.get(CSS.BUY_NOW_BUTTON).click()
         cy.get(CSS.PASSES_PARENT_CLASS).find(CSS.PASSES_CHILD_CLASS).eq(0).should('have.text','1 day pass')
         .click({force:true})
         cy.get(CSS.CHECKOUT).should('have.text','Checkout').click()
         cy.get(CSS.HOME_BUTTON).click()
     })

     it('Navigation to the EXPLORER PAGE and TESTING all EXPLORER LINKS',()=>{
        cy.get(CSS.EXPLORER_PAGE).click()
        cy.get(CSS.EXPLORER_ALL_LINK).each(($a,index,$list)=>{

          cy.get($list).click({multiple:true}) 
        
        })
    
     })
     it('Adding explrorer card to the cart',()=>{
        cy.get(CSS.SELECT_DROP_DOWN_EXPLORER_PAGE).select("2 Choice Pass from $52")
        .should('have.value','Bos_Prod_Exp_c2')
        cy.get(CSS.PLUS_SIGN).click()
        cy.get(CSS.CHECKOUT).should('have.text','Checkout').click()
        cy.get(CSS.CHECKOUT_PAGE_TITLE).should('have.text','Review your order')
        cy.get(CSS.DELETE_FROM_CART_TEXT).should('have.text','Delete')
        cy.get(CSS.DELETE_FROM_CART_ICON).click()
        cy.get(CSS.CONFIRMATION_ALERT).should('have.text','Yes, remove').click()

})
})