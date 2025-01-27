
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

let carrossel = document.querySelector(".carrossel");


const images = ["thebest.jpg", "imagemCarousel2.jpg", "imagemCarousel3.jpg", "imagemCarousel4.jpg"];
let currentIndex = 0;

function updateBackgroundImage() {
  carrossel.style.backgroundImage = `url(${images[currentIndex]})`;
}

updateBackgroundImage();

let intervalo = setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateBackgroundImage();
}, 5000);
