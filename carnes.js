function adicionarAoCarrinho(nomeProduto, precoProduto) {
  alert(`${nomeProduto} adicionado ao carrinho por R$${precoProduto.toFixed(2)}`);

}

function carrinho() {
alert("Erro ao carregar o carrinho. ");
}

function pesquisar(){
let inputPesquisa = document.getElementById("inputPesquisa");
let valorPesquisa = inputPesquisa.value;
alert(`Pesquisando por ${valorPesquisa}...`);
inputPesquisa.value = "";
  }