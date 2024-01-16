describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
  })
})

it('can add two integers together', ()=>{
  cy.visit('http://127.0.0.1:5500/index.html')
  cy.get('#1').click();
  cy.get('#add').click();
  cy.get('#2').click();
  cy.get('#equals').click();
  cy.get('#display').should('have.value', 3)
})

it('can multiply two integers together', ()=>{
  cy.visit('http://127.0.0.1:5500/index.html')
  cy.get('#2').click();
  cy.get('#multiply').click();
  cy.get('#4').click();
  cy.get('#equals').click();
  cy.get('#display').should('have.value', 8)
 
})