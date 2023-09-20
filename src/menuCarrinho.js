import { catalogo } from "./utilidades"

function abrirCarrinho(){
    document.getElementById("carrinho").classList.remove("right-[-360px]")
    document.getElementById("carrinho").classList.add("right-0")
}

function fecharCarrinho(){
    document.getElementById("carrinho").classList.remove("right-0")
    document.getElementById("carrinho").classList.add("right-[-360px]")
}

export function carrinho(){
    const botaoAbreCarrinho = document.querySelector("#botao-carrinho")
    const botaoFechaCarrinho = document.querySelector("#botao-fecha-carrinho")

    botaoAbreCarrinho.addEventListener("click", abrirCarrinho)
    botaoFechaCarrinho.addEventListener("click", fecharCarrinho)
}

export function adicionarAoCarrinho(idProduto){
    const produto = catalogo.find((p) => p.id === idProduto)
    const containerProdutoCarrinho = document.getElementById("produtos-carrinho")
    const cartaoProdutoCarrinho = `<article class="flex bg-slate-100 rounded-lg p-1 relative m-2">
    <button id="botao-fecha-carrinho"><i class="fa-solid fa-circle-xmark text-slate-800 absolute top-1 right-1 hover:text-slate-400"></i></button>
    <img src="assets/img/${produto.nomeArquivoImagem}" alt="produto 1" class="h-24 rounded-lg">
    <div class="py-2">
      <p class="text-slate-900 text-sm">${produto.nome}</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$ ${produto.preco}</p>
    </div>
  </article>`
  containerProdutoCarrinho.innerHTML += cartaoProdutoCarrinho
}
