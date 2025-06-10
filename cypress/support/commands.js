import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import HomePage from '../pages/homePage';
import SearchResultsPage from '../pages/searchResultsPage';
import CartPage from '../pages/cartPage';

const homePage = new HomePage();
const searchResults = new SearchResultsPage();
const cartPage = new CartPage();

let productPrice = 0;

Given('que acesso a página inicial da Amazon', () => {
  cy.visit('/');
});

When('pesquiso pelo produto {string}', (produto) => {
  homePage.searchProduto(produto);
});

When('adiciono o primeiro produto exibido ao carrinho', () => {
  searchResults.pegarPrecoPrimeiroProduto().then((preco) => {
    productPrice = preco;
    searchResults.adicionarPrimeiroProdutoAoCarrinho();
  });
});

When('vou para o carrinho de compras', () => {
  cartPage.acessarCarrinho();
});

Then('valido que o preço no carrinho corresponde ao preço do produto adicionado', () => {
  cartPage.validarPrecoProduto(productPrice);
});

When('aumento a quantidade para {int} unidades', (quantidade) => {
  cartPage.alterarQuantidade(quantidade);
});

Then('valido que a quantidade foi atualizada corretamente', () => {
  cartPage.validarQuantidade(2);
});

Then('valido que o subtotal está correto', () => {
  cartPage.validarSubtotal(2, productPrice);
});

When('tento alterar a quantidade para 0', () => {
  cartPage.alterarQuantidade(0);
});

Then('valido que a quantidade não foi alterada para zero', () => {
  cartPage.validarQuantidadeDiferenteDeZero();
});
