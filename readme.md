# Projeto Carrinho de Compras Simples

![imagem do projeto](./assets/oculos.png)

Este projeto é uma aplicação web simples que simula um carrinho de compras. Ele permite que o usuário adicione produtos a uma lista, visualize o total da compra e limpe a lista de produtos.

## Funcionalidades

*   **Adicionar Produtos:** O usuário pode selecionar um produto (através de um input de texto) e a quantidade desejada. Ao adicionar, o produto é inserido na lista de compras.
*   **Visualizar Lista de Produtos:** A lista de produtos exibe os itens adicionados, incluindo a quantidade, o nome do produto e o valor unitário.
*   **Calcular Valor Total:** O sistema calcula automaticamente o valor total da compra, somando o valor de cada produto multiplicado pela sua quantidade.
*   **Limpar Lista:** O usuário pode limpar a lista de produtos, removendo todos os itens e zerando o valor total.

## Tecnologias Utilizadas

*   **HTML:** Estrutura da página web.
*   **CSS:** Estilização da interface.
*   **JavaScript:** Lógica da aplicação, manipulação do DOM e cálculos.

## Como Executar

1.  **Clone o Repositório:**
2.  usando o gitbash execute o seguinte comando em uma pasta de sua preferencia.
    ```bash
    git clone https://github.com/JoseCarlos-Filho/carrinho-compras.git
    ```
3.  **Abra o Arquivo `index.html`:** Navegue até a pasta do projeto e abra o arquivo `index.html` em seu navegador web.

## Estrutura do Projeto

*   **`index.html`:** Contém a estrutura HTML da página, incluindo os campos de entrada, a lista de produtos e o valor total.
*   **`style.css`:** Arquivo CSS para estilização da página.
*   **`app.js`:** Arquivo JavaScript que contém a lógica da aplicação.

## Lógica do JavaScript (`app.js`)

O arquivo `app.js` contém as seguintes funções principais:

*   **`adicionar()`:**
    *   Lê o nome do produto e a quantidade do produto dos campos de entrada.
    *   Chama `resgatarValorDoProdutoSelecionado()` para obter o valor unitário do produto.
    *   Chama `resgatarNomeDoProdutoSelecionado()` para obter o nome do produto.
    *   Chama `adicionarProdutoNaLista()` para adicionar o produto à lista.
*   **`resgatarValorDoProdutoSelecionado(valor)`:**
    *   Recebe uma string no formato "Nome do Produto - R$Valor".
    *   Remove o "R$" e espaços em branco.
    *   Extrai o valor numérico usando uma expressão regular.
    *   Retorna o valor como um número float.
*   **`resgatarNomeDoProdutoSelecionado(valor)`:**
    *   Recebe uma string no formato "Nome do Produto - R$Valor".
    *   Remove o "- R$" e espaços em branco.
    *   Remove o valor numerico da string.
    *   Retorna o nome do produto.
*   **`resgatarValorTotalDoProduto(valor)`:**
    *   Recebe uma string no formato "R$Valor".
    *   Remove o "R$" e espaços em branco.
    *   Extrai o valor numérico usando uma expressão regular.
    *   Retorna o valor como um número float.
*   **`adicionarProdutoNaLista(listaDeProdutos, qtdaDoProduto, nomeDoProduto, valorDoProduto)`:**
    *   Recebe o elemento pai da lista de produtos, a quantidade, o nome e o valor do produto.
    *   Calcula o valor total da compra.
    *   Cria um novo elemento HTML para o produto.
    *   Adiciona o novo elemento à lista de produtos.
    *   Atualiza o valor total exibido na página.
*   **`limpar()`:**
    *   Limpa a lista de produtos, removendo todos os itens.
    *   Zera o valor total da compra.

## Melhorias Futuras

*   **Persistência de Dados:** Implementar o uso de `localStorage` ou `sessionStorage` para manter os dados do carrinho mesmo após o fechamento do navegador.
*   **Remover Produtos Individualmente:** Adicionar a funcionalidade de remover produtos específicos da lista.
*   **Validação de Entradas:** Melhorar a validação dos campos de entrada para evitar erros.
*   **Interface Mais Intuitiva:** Melhorar a interface do usuário para torná-la mais amigável e intuitiva.
* **Lista de produtos:** Criar uma lista de produtos para o usuário selecionar, ao invés de digitar o nome do produto.

## Contribuições

Contribuições são bem-vindas! Se você encontrar algum bug ou tiver alguma sugestão de melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Autor

[José Carlos](https://github.com/JoseCarlos-Filho/carrinho-compras)

---
