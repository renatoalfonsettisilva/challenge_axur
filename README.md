Shopping Cart Automation - Amazon Brazil

Technologies Used
- Cypress (end-to-end test automation framework)
- Cucumber (BDD with `.feature` files for scenarios in Gherkin)
- JavaScript (language chosen for its simplicity and wide adoption)

Project Structure
- `cypress/e2e`: `.feature` files with BDD scenarios
- `cypress/pages`: Pages implemented in Page Object Model to facilitate maintenance and reuse
- `cypress/support`: Cypress global commands and configurations
- `cypress.config.js`: Cypress configuration
- `package.json`: Dependencies and scripts to run the tests

How to Run
1. Install Node.js (recommended version >=14)
2. Run `npm install` to install dependencies
3. To open the Cypress UI and run the tests manually: markdown
4. To run tests in headless mode (command line): npm run test

Automation Strategy
- Use of Cypress for ease and robustness in web testing, native support for automatic waiting and handling of dynamic elements.
- Cucumber to create tests in natural language and facilitate understanding and maintenance.
- Page Object Model to encapsulate selectors and actions per page, making the code more organized and reusable.
- Dynamic capture of the product price to ensure that cart validation is always accurate, regardless of the product.
- Inclusion of a negative scenario to test behavior in unexpected situations (changing quantity to zero).
- Standard Cypress reports can be generated for post-execution analysis.

Limitations
- Since the Amazon website can change its structure at any time, selectors can break.
- Tests depend on the availability of the chosen product.
- Tests do not log in, limiting validations that require authentication.
- The post-add-to-cart pop-up may vary according to the region and version of the website.
