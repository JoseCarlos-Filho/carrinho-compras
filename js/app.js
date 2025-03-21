const {log} = console;

function adicionar() {
    const selecaoDeProduto = document.getElementById("produto").value;
    const qtdaDoProduto = document.getElementById("quantidade").value;
    const listaDeProduto = document.querySelector(".carrinho__produtos__produto");
    // log(listaDeProduto);
    // log(qtdaDoProduto);
    let valorDoProduto = resgatarValorDoProdutoSelecionado(selecaoDeProduto);
    let nomeDoProduto = resgatarNomeDoProdutoSelecionado(selecaoDeProduto);
    // log(nomeDoProduto);
    adicionarProdutoNaLista(listaDeProduto,qtdaDoProduto, nomeDoProduto, valorDoProduto);
    // log(valorDoProduto);
}

function resgatarValorDoProdutoSelecionado(valor) {
    let removeSifrao = valor.replace("R$", "").trim();
    let valorNumerico = parseFloat(removeSifrao.match(/\d+/g));
    return valorNumerico;
}

function resgatarNomeDoProdutoSelecionado(valor) {
    let nomeDoProduto = valor.replace("- R$", "").trim();
    let produto = nomeDoProduto.replace(nomeDoProduto.match(/\d+/g), "").trim();
    return produto;
}

function resgatarValorTotalDoProduto(valor) {
    let total = valor.replace("R$", "").trim();
    let valorNumerico = parseFloat(total.match(/\d+/g));
    return valorNumerico;
}

function adicionarProdutoNaLista(listaDeProduto, qtdaDoProduto, nomeDoProduto, valorDoProduto) {
    let elementoTotal = document.getElementById("valor-total");
    let apresentaTotal = document.querySelector(".carrinho__total");
    let valorTotal = resgatarValorTotalDoProduto(elementoTotal.textContent);
    log(valorTotal = valorTotal + (qtdaDoProduto * valorDoProduto));
    listaDeProduto.innerHTML += `
        <br>
        <span class="texto-azul">${qtdaDoProduto}x</span> ${nomeDoProduto} <span class="texto-azul">R$${valorDoProduto}</span>
    `;

    apresentaTotal.innerHTML = `
        Total: <span class="texto-azul" id="valor-total">R$${valorTotal}</span>
    `
}

function limpar() {
    let listaDeProduto = document.querySelector(".carrinho__produtos__produto");
    listaDeProduto.innerHTML = "";

    let elementoTotal = document.getElementById("valor-total")
    elementoTotal.innerHTML = `
        <span class="texto-azul" id="valor-total">R$0</span>
    `;
}