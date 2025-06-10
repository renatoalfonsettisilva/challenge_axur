Feature: Validar Carrinho de Compras na Amazon

  Background:
    Given que acesso a página inicial da Amazon

  Scenario: Adicionar produto ao carrinho e validar preços
    When pesquiso pelo produto "Huggies Fralda Premium Natural Care M 32 Un"
    And adiciono o primeiro produto exibido ao carrinho
    And vou para o carrinho de compras
    Then valido que o preço no carrinho corresponde ao preço do produto adicionado
    When aumento a quantidade para 2 unidades
    Then valido que a quantidade foi atualizada corretamente
    And valido que o subtotal está correto

  Scenario: Tentar alterar quantidade para zero (negativo)
    When vou para o carrinho de compras
    And tento alterar a quantidade para 0
    Then valido que a quantidade não foi alterada para zero
