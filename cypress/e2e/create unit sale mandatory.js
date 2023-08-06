Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});

it('Sale Unit', () => {

    cy.visit("https://dev.psi-crm.com/home/Contacts-CRM/view");

    cy.get('#identityRef').type("razanq");
    cy.get('#passwordRef').type("123");
    cy.get('.MuiButton-label').click();

    cy.wait(6000);
    cy.get('.save-wrapper > .MuiButtonBase-root').click()
    cy.get('#fty-d > .MuiDialogContent-root > .save-cancel-wrapper > .save-wrapper > .MuiButtonBase-root').click()
cy.get('#identityRef').type("razanq");
    cy.get('#passwordRef').type("123");
    cy.get('.MuiButton-label').click();
    cy.get('.menu-wrapper > .animated-open-close > .open-button > .mdi').click();

    

    cy.get('#leasing > .MuiPaper-root > .MuiAccordionSummary-root').click()
    cy.wait(3000)
    cy.get('#leasing > .MuiPaper-root > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiAccordionDetails-root > .menu-item-wrapper > #UnitsView\\:units').click()


    cy.get('.actions-buttons-wrapper > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000)
    cy.get('#operation_type').type('Rent{downarrow}{downarrow}{enter}');


    const unit_type = [];

    cy.get('#unit_type').click();
    
    cy.get('#unit_type').type('{selectall}{backspace}');
    
    // Click to open the dropdown
    cy.wait(3000);
    
    // Wait for the dropdown to be visible
    cy.get('.MuiAutocomplete-popper')
      .should('be.visible')
      .within(() => {
        cy.get('li').each(($option) => { // Select all the options in the dropdown
          const optionText = $option.text().trim();
          unit_type.push(optionText);
        });
      })
      .then(() => {
        const randomIndex = Math.floor(Math.random() * unit_type.length);
        const randomOptionText = unit_type[randomIndex];
    
        // Close the dropdown before clicking to handle any overlapping issues
        cy.get('#unit_type').type('{esc}');
    
        // Reopen the dropdown and click the randomly selected option
        cy.get('#unit_type').click().type(randomOptionText);
        cy.contains('.MuiAutocomplete-popper li', randomOptionText).click();
      });


      const property_name = [];

      cy.get('#property_name').click();
      
      cy.get('#property_name').type('{selectall}{backspace}');
      
      // Click to open the dropdown
      cy.wait(3000);
      
      // Wait for the dropdown to be visible
      cy.get('.MuiAutocomplete-popper')
        .should('be.visible')
        .within(() => {
          cy.get('li').each(($option) => { // Select all the options in the dropdown
            const optionText = $option.text().trim();
            property_name.push(optionText);
          });
        })
        .then(() => {
          const randomIndex = Math.floor(Math.random() * property_name.length);
          const randomOptionText = property_name[randomIndex];
      
          // Close the dropdown before clicking to handle any overlapping issues
          cy.get('#property_name').type('{esc}');
      
          // Reopen the dropdown and click the randomly selected option
          cy.get('#property_name').click().type(randomOptionText);
          cy.contains('.MuiAutocomplete-popper li', randomOptionText).click();
        });

        cy.get('#units-next').click()
        cy.get('#units-next').click()
        cy.get('#units-next').click()
        cy.get('#units-next').click()
        cy.get('#units-finish').click()












});