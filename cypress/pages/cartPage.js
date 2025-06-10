class CartPage {
  acessarCarrinho() {
    cy.get('#nav-cart-count').click();
  }

  validarPrecoProduto(precoEsperado) {
    cy.get('.sc-list-item-content .sc-product-price').first().invoke('text').then((text) => {
      const precoCarrinho = parseFloat(text.replace('R$', '').replace('.', '').replace(',', '.').trim());
      expect(precoCarrinho).to.be.closeTo(precoEsperado, 0.05);
    });
  }

  alterarQuantidade(qtd) {
    cy.get('select[name="quantity"]').first().select(qtd.toString());
  }

  validarQuantidade(qtdEsperada) {
    cy.get('select[name="quantity"]').first().should('have.value', qtdEsperada.toString());
  }

  validarSubtotal(qtd, precoUnitario) {
    cy.get('#sc-subtotal-amount-activecart span').invoke('text').then((text) => {
      const subtotal = parseFloat(text.replace('R$', '').replace('.', '').replace(',', '.').trim());
      const esperado = qtd * precoUnitario;
      expect(subtotal).to.be.closeTo(esperado, 0.10);
    });
  }

  validarQuantidadeDiferenteDeZero() {
    cy.get('select[name="quantity"]').first().invoke('val').then((val) => {
      expect(parseInt(val)).to.be.greaterThan(0);
    });
  }
}

export default CartPage;
