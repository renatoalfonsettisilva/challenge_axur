class CartPage {
  accessCart() {
    cy.get('#nav-cart-count').click();
  }

  validateProductPrice(ExpectedPrice) {
    cy.get('.sc-list-item-content .sc-product-price').first().invoke('text').then((text) => {
      const cartPrice = parseFloat(text.replace('R$', '').replace('.', '').replace(',', '.').trim());
      expect(cartPrice).to.be.closeTo(ExpectedPrice, 0.05);
    });
  }

  changeQuantity(qtt) {
    cy.get('select[name="quantity"]').first().select(qtt.toString());
  }

  validateQuantity(expectedQtt) {
    cy.get('select[name="quantity"]').first().should('have.value', expectedQtt.toString());
  }

  validateSubtotal(qtt, unitPrice) {
    cy.get('#sc-subtotal-amount-activecart span').invoke('text').then((text) => {
      const subtotal = parseFloat(text.replace('R$', '').replace('.', '').replace(',', '.').trim());
      const expected = qtd * unitPrice;
      expect(subtotal).to.be.closeTo(expected, 0.10);
    });
  }

  validateNonZeroQuantity() {
    cy.get('select[name="quantity"]').first().invoke('val').then((val) => {
      expect(parseInt(val)).to.be.greaterThan(0);
    });
  }
}

export default CartPage;
