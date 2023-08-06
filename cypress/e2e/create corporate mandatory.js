Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});
describe('Contacts', () => {
    it('test2', () => {
        
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

        cy.get('#crm > .MuiPaper-root > .MuiAccordionSummary-root > .MuiAccordionSummary-content > .side-menu-item-wrapper > .btns-menu').click();
        cy.get('#ContactsView\\:contacts').click();
        cy.get("#contactsActionsRef").click();
        cy.get('#Id-corporate-2').click()

        cy.get('#company_name').type("Razan Automation Company")

       let randomNumber = Math.floor(Math.random()*999999999)
       cy.get('#landline_number').type(randomNumber);

           
       const language = [];

       cy.get('#language').click();
       
       cy.get('#language').type('{selectall}{backspace}');
       
       // Click to open the dropdown
       cy.wait(3000);
       
       // Wait for the dropdown to be visible
       cy.get('.MuiAutocomplete-popper')
         .should('be.visible')
         .within(() => {
           cy.get('li').each(($option) => { // Select all the options in the dropdown
             const optionText = $option.text().trim();
             language.push(optionText);
           });
         })
         .then(() => {
           const randomIndex = Math.floor(Math.random() * language.length);
           const randomOptionText = language[randomIndex];
       
           // Close the dropdown before clicking to handle any overlapping issues
           cy.get('#language').type('{esc}');
       
           // Reopen the dropdown and click the randomly selected option
           cy.get('#language').click().type(randomOptionText);
           cy.contains('.MuiAutocomplete-popper li', randomOptionText).click();
         });
         


         const multi_property_owner = [];

cy.get('#multi_property-owner').click();

cy.get('#multi_property-owner').type('{selectall}{backspace}');

// Click to open the dropdown
cy.wait(3000);

// Wait for the dropdown to be visible
cy.get('.MuiAutocomplete-popper')
  .should('be.visible')
  .within(() => {
    cy.get('li').each(($option) => { // Select all the options in the dropdown
      const optionText = $option.text().trim();
      multi_property_owner.push(optionText);
    });
  })
  .then(() => {
    const randomIndex = Math.floor(Math.random() * multi_property_owner.length);
    const randomOptionText = multi_property_owner[randomIndex];

    // Close the dropdown before clicking to handle any overlapping issues
    cy.get('#multi_property-owner').type('{esc}');

    // Reopen the dropdown and click the randomly selected option
    cy.get('#multi_property-owner').click().type(randomOptionText);
    cy.contains('.MuiAutocomplete-popper li', randomOptionText).click();
  });




  const promo_smsemail = [];

  cy.get('#promo_smsemail').click();
  
  cy.get('#promo_smsemail').type('{selectall}{backspace}');
  
  // Click to open the dropdown
  cy.wait(3000);
  
  // Wait for the dropdown to be visible
  cy.get('.MuiAutocomplete-popper')
    .should('be.visible')
    .within(() => {
      cy.get('li').each(($option) => { // Select all the options in the dropdown
        const optionText = $option.text().trim();
        promo_smsemail.push(optionText);
      });
    })
    .then(() => {
      const randomIndex = Math.floor(Math.random() * promo_smsemail.length);
      const randomOptionText = promo_smsemail[randomIndex];
  
      // Close the dropdown before clicking to handle any overlapping issues
      cy.get('#promo_smsemail').type('{esc}');
  
      // Reopen the dropdown and click the randomly selected option
      cy.get('#promo_smsemail').click().type(randomOptionText);
      cy.contains('.MuiAutocomplete-popper li', randomOptionText).click();
    });


    cy.get('#contacts-next').click()

cy.wait(1000)
const city = [];

  cy.get('#city').click();
  
  cy.get('#city').type('{selectall}{backspace}');
  
  // Click to open the dropdown
  cy.wait(3000);
  
  // Wait for the dropdown to be visible
  cy.get('.MuiAutocomplete-popper')
    .should('be.visible')
    .within(() => {
      cy.get('li').each(($option) => { // Select all the options in the dropdown
        const optionText = $option.text().trim();
        city.push(optionText);
      });
    })
    .then(() => {
      const randomIndex = Math.floor(Math.random() * city.length);
      const randomOptionText = city[randomIndex];
  
      // Close the dropdown before clicking to handle any overlapping issues
      cy.get('#city').type('{esc}');
  
      // Reopen the dropdown and click the randomly selected option
      cy.get('#city').click().type(randomOptionText);
      cy.contains('.MuiAutocomplete-popper li', randomOptionText).click();
    });


    const contact_preference = [];

    cy.get('#contact_preference').click();
    
    cy.get('#contact_preference').type('{selectall}{backspace}');
    
    // Click to open the dropdown
    cy.wait(3000);
    
    // Wait for the dropdown to be visible
    cy.get('.MuiAutocomplete-popper')
      .should('be.visible')
      .within(() => {
        cy.get('li').each(($option) => { // Select all the options in the dropdown
          const optionText = $option.text().trim();
          contact_preference.push(optionText);
        });
      })
      .then(() => {
        const randomIndex = Math.floor(Math.random() * contact_preference.length);
        const randomOptionText = contact_preference[randomIndex];
    
        // Close the dropdown before clicking to handle any overlapping issues
        cy.get('#contact_preference').type('{esc}');
    
        // Reopen the dropdown and click the randomly selected option
        cy.get('#contact_preference').click().type(randomOptionText);
        cy.contains('.MuiAutocomplete-popper li', randomOptionText).click();
      });

      cy.get('#contacts-next').click()
      cy.get('#contacts-next').click()
      cy.get('#contacts-next').click()
      cy.get('#contacts-finish').click()


    });
});