# JavaScript Server-Sent Events

Demonstração simples do funcionamento da tecnologia Server-Sent Events em um servidor local escrito com Node.js e Express.

## Características

- Unidirecional (Apenas o servidor envia as mensagens de eventos para o cliente).

- O servidor só envia informações quando existir dados novos.
  A conexão com o servidor será aberta uma única vez, e logo em seguida o mesmo envia as mensagens de atualizações para o cliente, que podem ser acessadas através da API EventSource.

- Diferentemente da técnica 'Pooling' na qual o cliente acessa constantemente o servidor em busca de novas informações.

- Menos tráfego de rede que o AJAX Pooling.

## Execução

- Em um terminal de sua preferência:
  - Navegue para a pasta do projeto
  - Instale as dependências com `npm install`
  - Inicie o servidor local com `node server.js`
  - Use o lite-server para ver o projeto em ação com `npx lite-server`
