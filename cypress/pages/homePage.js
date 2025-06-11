class HomePage {
  searchProduct(product) {
    cy.get('#twotabsearchtextbox').clear().type(product);
    cy.get('#nav-search-submit-button').click();
  }
}

export default HomePage;
