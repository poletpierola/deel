// deel.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("Select", () => {
 
    beforeEach(() => {
      //To solve the uncaught exception error
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })  
        cy.visit('https://growth.deel.training/dev/salary-insights') // yup all good
        cy.wait(5000);
    
         
    })
   
    
    //Selects Accountant from Role dropdown and Brazil from Coutry dropdown
    it('should select Accountant and Brazil select from dropdown', () => {
      
      //Role
      cy.get('#mui-2').click()
      
      //Accountant
      cy.get('#mui-2-option-0').click()
      
      //Brazil
      cy.get('#mui-4').click()
      cy.get('#mui-4-option-3').click()
          
    
    });
  
    //Selects Accountant from Role dropdown and Brazil from Coutry dropdown
    it('should select QA Engineer and Canada select from dropdown', () => {
      //Role
      cy.get('#mui-2').click()
      //QA Engineer
      cy.get('#mui-2-option-104').click()

      //Canada
      cy.get('#mui-4').click()
      cy.get('#mui-4-option-4').click()

    });
    
    //Selects Accountant from Role dropdown and Brazil from Coutry dropdown
    it('should select Software Engineer and Japan select from dropdown', () => {
       //Role
       cy.get('#mui-2').click()

       //QA Engineer
       cy.get('#mui-2-option-124').click()
 
       //Brazil
       cy.get('#mui-4').click()
       cy.get('#mui-4-option-13').click()
 
    });
   
  
  });

  