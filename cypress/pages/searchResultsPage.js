class SearchResultsPage {
  getPriceFirstProduct() {
    return cy.get('span.a-price > span.a-offscreen').first().invoke('text').then((text) => {
      // Converter para número (ex: "R$ 74,90" -> 74.90)
      const price = parseFloat(text.replace('R$', '').replace('.', '').replace(',', '.').trim());
      return price;
    });
  }

  addFirstProductToCart() {
    cy.get('div.s-main-slot div[data-component-type="s-search-result"]').first().find('h2 a').click();
    cy.get('#add-to-cart-button', { timeout: 10000 }).should('be.visible').click();
    cy.get('#attach-close_sideSheet-link').click({ force: true, multiple: true, timeout: 5000 }).catch(() => {});
  }
}

export default SearchResultsPage;
