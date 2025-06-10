# Automação do Carrinho de Compras - Amazon Brasil

## Tecnologias Utilizadas

- Cypress (framework de automação de testes end-to-end)
- Cucumber (BDD com arquivos `.feature` para cenários em Gherkin)
- JavaScript (linguagem escolhida pela simplicidade e ampla adoção)

## Estrutura do Projeto

- `cypress/e2e`: Arquivos `.feature` com cenários BDD
- `cypress/pages`: Páginas implementadas em Page Object Model para facilitar manutenção e reuso
- `cypress/support`: Comandos e configurações globais do Cypress
- `cypress.config.js`: Configuração do Cypress
- `package.json`: Dependências e scripts para rodar os testes

## Como Executar

1. Instale o Node.js (versão recomendada >=14)
2. Rode `npm install` para instalar as dependências
3. Para abrir o Cypress UI e executar os testes manualmente: markdown
4. Para rodar os testes em modo headless (linha de comando): npm run test

   ## Estratégia de Automação

- Uso do Cypress pela facilidade e robustez em testes web, suporte nativo para espera automática e manipulação de elementos dinâmicos.
- Cucumber para criar testes em linguagem natural e facilitar entendimento e manutenção.
- Page Object Model para encapsular seletores e ações por página, tornando o código mais organizado e reutilizável.
- Captura dinâmica do preço do produto para garantir que a validação do carrinho seja sempre precisa, independente do produto.
- Inclusão de cenário negativo para testar comportamento em situação inesperada (alterar quantidade para zero).
- Relatórios padrão do Cypress podem ser gerados para análise pós-execução.

## Limitações

- Como o site da Amazon pode mudar sua estrutura a qualquer momento, seletores podem quebrar.
- Testes dependem da disponibilidade do produto escolhido.
- Testes não fazem login, limitando validações que requerem autenticação.
- O pop-up pós adição ao carrinho pode variar conforme a região e versão do site.

