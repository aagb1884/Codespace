describe('template spec', () => {
  it('loads', () => {
    cy.visit('/')
  })

  it('should have an empty user option span before a button is clicked', ()=> {
    cy.visit('/');
      cy.get('#user-option-span').should('be.empty');
  })

  it('can click on the rock button', ()=> {
    cy.visit('/');
    cy.get('#rock').click();
    })

  it('puts Rock in the user option span when the rock button is clicked', ()=> {
    cy.visit('/');
    cy.get('#rock').click();
    cy.get('#user-option-span').contains('Rock')
  })

  it('can click on the paper button', ()=> {
    cy.visit('/');
    cy.get('#paper').click();
  })

  it('puts Paper in the user option span when the paper button is clicked', ()=> {
    cy.visit('/');
    cy.get('#paper').click();
    cy.get('#user-option-span').contains('Paper')
  })

  it('can click on the scissors button', ()=> {
    cy.visit('/');
    cy.get('#scissors').click();
  })

  it('puts Scissors in the user option span when the scissors button is clicked', ()=> {
    cy.visit('/');
    cy.get('#scissors').click();
    cy.get('#user-option-span').contains('Scissors')
  })

  it('should have an empty computer option span before a button is clicked', ()=> {
    cy.visit('/');
      cy.get('#computer-option-span').should('be.empty');
  })

  it('fills the Computer Option span when a button is clicked', ()=> {
    cy.visit('/');
    cy.get('#scissors').click();
    cy.get('#computer-option-span').should('not.be.empty');
  })

  it('should have an empty result span before a button is clicked', ()=> {
    cy.visit('/');
      cy.get('#result-span').should('be.empty');
  })

  it('fills the Result span when a button is clicked', ()=> {
    cy.visit('/');
    cy.get('#scissors').click();
    cy.get('#result-span').should('not.be.empty');
  })

})