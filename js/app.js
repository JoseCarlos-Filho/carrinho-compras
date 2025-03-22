const {log} = console;
limpar();

function adicionar() {
    const selecaoDeProduto = document.getElementById("produto").value;
    const qtdaDoProduto = document.getElementById("quantidade").value;
    const listaDeProduto = document.querySelector(".carrinho__produtos__produto");
    let valorDoProduto = resgatarValorDoProdutoSelecionado(selecaoDeProduto);
    let nomeDoProduto = resgatarNomeDoProdutoSelecionado(selecaoDeProduto);
    
    if (selecaoDeProduto === "" || qtdaDoProduto === "") {
        alert("Selecione um produto e a quantidade");
        return;
    } else {
        adicionarProdutoNaLista(listaDeProduto,qtdaDoProduto, nomeDoProduto, valorDoProduto);
    }
    
    document.getElementById("quantidade").value = 0;
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
    let precoDoProduto = qtdaDoProduto * valorDoProduto;
    valorTotal = valorTotal + precoDoProduto;
    listaDeProduto.innerHTML += `
        <br>
        <span class="texto-azul">${qtdaDoProduto}x</span> ${nomeDoProduto} <span class="texto-azul">R$${precoDoProduto}</span>
    `;

    apresentaTotal.innerHTML = `
        Total: <span class="texto-azul" id="valor-total">R$${valorTotal}</span>
    `
}

function limpar() {
    document.querySelector(".carrinho__produtos__produto").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0";
}