Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});

describe('Contacts', () => {
  function generateRandomEmail() {

    const emailLength = 10; // Length of the random part of the email
  
    const emailDomain = "example.com"; // Domain for the email
  
   
  
    // Generate a random string of characters
  
    const randomString = Math.random()
  
      .toString(36)
  
      .substring(2, emailLength + 2);
  
   
  
    // Combine the random string with the email domain
  
    const email = randomString + "@" + emailDomain;
  
   
  
    return email;

  }
  
    it('test1', () => {
        cy.visit("https://dev.psi-crm.com/account/login");

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
        cy.get('#Id-individual-1').click();



        





        const title = [];



        // Get all the options and store their texts (with leading spaces removed) in the 'facilities' array

        cy.get('#title').click();
        cy.get('#title').clear();

        // Click to open the dropdown
cy.wait(3000)

        // Wait for the dropdown to be visible
        cy.get('.MuiAutocomplete-popper')
          .should('be.visible')
          .within(() => {
            cy.get('li').each(($option) => { // Select all the options in the dropdown
              const optionText = $option.text().trim();
              title.push(optionText);
            });
          })
          .then(() => {
            const randomIndex = Math.floor(Math.random() * title.length);
            const randomOptionText = title[randomIndex];
        
            // Close the dropdown before clicking to handle any overlapping issues
            cy.get('#title').type('{esc}');
        
            // Reopen the dropdown and click the randomly selected option
            cy.get('#title').click().type(randomOptionText);
            cy.contains('.MuiAutocomplete-popper li', randomOptionText).click();
          });


          
          const email = generateRandomEmail();
          cy.get('#email_address').type(email);

          cy.get('#first_name').type("Razan");
cy.get('#last_name').type("AutomationThree");

const gender = [];

cy.get('#gender').click();

cy.get('#gender').type('{selectall}{backspace}');

// Click to open the dropdown
cy.wait(3000);

// Wait for the dropdown to be visible
cy.get('.MuiAutocomplete-popper')
  .should('be.visible')
  .within(() => {
    cy.get('li').each(($option) => { // Select all the options in the dropdown
      const optionText = $option.text().trim();
      gender.push(optionText);
    });
  })
  .then(() => {
    const randomIndex = Math.floor(Math.random() * gender.length);
    const randomOptionText = gender[randomIndex];

    // Close the dropdown before clicking to handle any overlapping issues
    cy.get('#gender').type('{esc}');

    // Reopen the dropdown and click the randomly selected option
    cy.get('#gender').click().type(randomOptionText);
    cy.contains('.MuiAutocomplete-popper li', randomOptionText).click();
  });
  
  

  let randomNumber = Math.floor(Math.random()*999999999)
  cy.get('#mobile').type(randomNumber);
  




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
    



    const contact_class = [];

    cy.get('#contact_class').click();
    
    cy.get('#contact_class').type('{selectall}{backspace}');
    
    // Click to open the dropdown
    cy.wait(3000);
    
    // Wait for the dropdown to be visible
    cy.get('.MuiAutocomplete-popper')
      .should('be.visible')
      .within(() => {
        cy.get('li').each(($option) => { // Select all the options in the dropdown
          const optionText = $option.text().trim();
          contact_class.push(optionText);
        });
      })
      .then(() => {
        const randomIndex = Math.floor(Math.random() * contact_class.length);
        const randomOptionText = contact_class[randomIndex];
    
        // Close the dropdown before clicking to handle any overlapping issues
        cy.get('#contact_class').type('{esc}');
    
        // Reopen the dropdown and click the randomly selected option
        cy.get('#contact_class').click().type(randomOptionText);
        cy.contains('.MuiAutocomplete-popper li', randomOptionText).click();
      });


      cy.get('#multi_property-owner')
      .type('{downarrow}') 
      .type('{enter}');

      cy.wait(3000);

      cy.get('#contacts-next').click()


      

      cy.wait(3000);

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

        cy.wait(2000);

        cy.get('#contacts-next').click()


        cy.wait(2000);

        cy.get('#contacts-next').click()
        cy.wait(2000);2

        cy.get('#contacts-next').click()
        cy.wait(2000);2

        cy.get('#contacts-next').click()
        cy.wait(2000);

        cy.get('#contacts-next').click()

        cy.wait(2000);

        cy.get('#contacts-finish').click()

        });
    });

