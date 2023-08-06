Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Create unit Sale', () => {

    it('Create Unit', () => {

        cy.visit("https://dev.psi-crm.com/account/login")
        cy.get('#identityRef').type("wessam")
        cy.get('#passwordRef').type("123")        
        cy.get('.MuiButton-label').click()
        cy.wait(6000)
      
        cy.get('.save-wrapper > .MuiButtonBase-root').click()

        cy.get('#fty-d > .MuiDialogContent-root > .save-cancel-wrapper > .save-wrapper > .MuiButtonBase-root').click()

        cy.get('#identityRef').type("wessam")
        cy.get('#passwordRef').type("123")        
        cy.get('.MuiButton-label').click()

cy.get('#sales').click()
cy.wait(4000)
cy.get('#UnitsView\\:units').click()
cy.get('.actions-buttons-wrapper > :nth-child(1) > .MuiButtonBase-root').click()
cy.get('#operation_type').click()
cy.get('#operation_type').type('Sale{downarrow}{downarrow}{enter}');

//The following is a random unit type picker
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

    cy.get('#property_name').click()
    cy.get('#property_name').type("wessam automation")
    cy.get('#property_name').type("{downarrow}{enter}")
    cy.get('#units-next').click()
    cy.get('#units-next').click()
    cy.get('#units-next').click()
    cy.get('#units-next').click()


    const sale_type = [];

 

    cy.get('#sale_type').click();

   

    cy.get('#sale_type').type('{selectall}{backspace}');

   

    // Click to open the dropdown

    cy.wait(3000);

   

    // Wait for the dropdown to be visible

    cy.get('.MuiAutocomplete-popper')

      .should('be.visible')

      .within(() => {

        cy.get('li').each(($option) => { // Select all the options in the dropdown

          const optionText = $option.text().trim();

          sale_type.push(optionText);

        });

      })

      .then(() => {

        const randomIndex = Math.floor(Math.random() * sale_type.length);

        const randomOptionText = sale_type[randomIndex];

   

        // Close the dropdown before clicking to handle any overlapping issues

        cy.get('#sale_type').type('{esc}');

   

        // Reopen the dropdown and click the randomly selected option

        cy.get('#sale_type').click().type(randomOptionText);

        cy.contains('.MuiAutocomplete-popper li', randomOptionText).click();

        cy.get('#units-finish').click()

        

            cy.get(':nth-child(1) > .container-wrapper > .cards-wrapper > .cards-footer-wrapper > .MuiButtonBase-root').click()

            cy.get('#tab-marketing').click()
            cy.get('#titleEnRef').type("Automation created marketing")
            cy.get('#descriptionEnRef').type("Random_Description")
            cy.get('.d-flex-v-center-h-end > .theme-solid').click()

            cy.get('#tab-Gallery').click
            cy.get('#tab-Gallery').click()


            

            const categoryIdRef = [];
            
            cy.get('#categoryIdRef').click();
        
           
        
            cy.get('#categoryIdRef').type('{selectall}{backspace}');
        
           
        
            // Click to open the dropdown
        
            cy.wait(3000);
        
           
        
            // Wait for the dropdown to be visible
        
            cy.get('.MuiAutocomplete-popper')
        
              .should('be.visible')
        
              .within(() => {
        
                cy.get('li').each(($option) => { // Select all the options in the dropdown
        
                  const optionText = $option.text().trim();
        
                  categoryIdRef.push(optionText);
        
                });
        
              })
        
              .then(() => {
        
                const randomIndex = Math.floor(Math.random() * categoryIdRef.length);
        
                const randomOptionText = categoryIdRef[randomIndex];
        
           
        
                // Close the dropdown before clicking to handle any overlapping issues
        
                cy.get('#categoryIdRef').type('{esc}');
        
                // Reopen the dropdown and click the randomly selected option
        
                cy.get('#categoryIdRef').click().type(randomOptionText);
        
                cy.contains('.MuiAutocomplete-popper li', randomOptionText).click();
        
              });
        });

      });


  });
})


