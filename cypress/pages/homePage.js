class HomePage {
  searchProduto(produto) {
    cy.get('#twotabsearchtextbox').clear().type(produto);
    cy.get('#nav-search-submit-button').click();
  }
}

export default HomePage;
