# Open Negócios API

Esta API disponibiliza um mock dos dados disponíveis na rota /banks da API de Open Banking da XP Investimentos.

A Documentação desta API pode ser acessada por este endereço: https://developer.xpinc.com/product/openapi-openbanking/#/specification/openbanking/retorna-a-lista-de-bancos-

## Como utilizar

Este servidor foi criado utilizando Node.js e o framework Express. Para utilizá-lo em seu ambiente, certifique-se de que você possui o Node.js e o NPM instalados. Com o ambiente configurado:

1. Faça o clone deste repositório;
2. Acesse o diretório raiz do projeto;
3. Rode o comando npm install para instalar as dependências no package.json;
4. Rode o comando npm start para ligar o servidor. Por padrão, arquivos serão servidos no endereço http://localhost:3001;

Todas as rotas podem ser chamadas pela api Fetch do JavaScript ou uma biblioteca como a Axios usando o método GET na requisição.

## Endpoints

- /banks/list - mostra todos os investimentos que retornam pela API Open Banking;
- /banks/list/{type}&{withdrawDate} - mostra todos os investimentos que atendem as condições dos filtros passados como parâmetros. Os parâmetros são:
-- type: tipo de investimento;
-- withdrawDate: prazo de resgate do investimento (YYYY-MM-DD).
- /logos/{code} - retorna o endereço da imagem do banco. Os parâmetros são:
-- code: código do banco. Pode ser xp, bank-a, bank-b ou bank-c.

## Possíveis problemas

- Este site não pode ser aberto: verifique se a porta que foi atribuída ao Node é a 3001. Caso não seja, verifique no console qual a porta que foi alocada e acesse o localhost pela porta apropriada. Você pode também configurar manualmente a porta editando o arquivo index.js, na raiz do projeto.
