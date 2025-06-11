import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import HomePage from '../pages/homePage';
import SearchResultsPage from '../pages/searchResultsPage';
import CartPage from '../pages/cartPage';

const homePage = new HomePage();
const searchResults = new SearchResultsPage();
const cartPage = new CartPage();

let productPrice = 0;

Given('which accesses the Amazon home page', () => {
cy.visit('/');
});

When('search for product {string}', (product) => {
homePage.searchProduct(product);
});

When('I add the first displayed product to the cart', () => {
searchResults.getFirstProductPrice().then((price) => {
productPrice = price;
searchResults. addFirstProductToCart();
});
});

When('I go to the shopping cart', () => {
cartPage.accessCart();
});

Then('I validate that the price in the cart matches the price of the added product', () => {
cartPage.validateProductPrice(productPrice);
});

When('I increase the quantity to {int} units', (quantity) => {
cartPage.changeQuantity(quantity);
});

Then('I validate that the quantity was updated correctly', () => {
cartPage.validateQuantity(2);
});

Then('I validate that the subtotal is correct', () => {
cartPage.validateSubtotal(2, productPrice);
});

When('I try to change the quantity to 0', () => {
cartPage.changeQuantity(0);
});

Then('I validate that the quantity was not changed to zero', () => {
cartPage.validateQuantityDifferentFromZero();
});
