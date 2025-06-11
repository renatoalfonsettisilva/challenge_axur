Resource: Validate Shopping Cart on Amazon

Background:
Given that I access the Amazon homepage

Scenario: Add product to cart and validate prices
When I search for the product "Huggies Premium Natural Care Diaper M 32 Units"
And add the first product displayed to the cart
And go to the shopping cart
Then I validate that the price in the cart matches the price of the added product
When I increase the quantity to 2 units
Then I validate that the quantity was updated correctly
And validate that the subtotal is correct

Scenario: Trying to change quantity to zero (negative)
When I go to the shopping cart
And try to change the quantity to 0
Then I validate that the quantity was not changed to zero
