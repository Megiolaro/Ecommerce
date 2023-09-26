import { catalogo } from "./utilidades"

const idsProdutoCarrinhoComQuantidade = {}

function abrirCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[-360px]")
  document.getElementById("carrinho").classList.add("right-0")
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-0")
  document.getElementById("carrinho").classList.add("right-[-360px]")
}

export function carrinho() {
  const botaoAbreCarrinho = document.querySelector("#botao-carrinho")
  const botaoFechaCarrinho = document.querySelector("#botao-fecha-carrinho")

  botaoAbreCarrinho.addEventListener("click", abrirCarrinho)
  botaoFechaCarrinho.addEventListener("click", fecharCarrinho)
}



function removerDoCarrinho(idProduto) {
  delete idsProdutoCarrinhoComQuantidade[idProduto]
  renderizarProdutosCarrinho()
}

function incrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++
  atualizarIrformacaoQuantidade(idProduto)
}

function decrementarQuantidadeProduto(idProduto) {
  if(idsProdutoCarrinhoComQuantidade[idProduto] === 1){
    removerDoCarrinho(idProduto)
    return
  }
  idsProdutoCarrinhoComQuantidade[idProduto]--
  atualizarIrformacaoQuantidade(idProduto)
}

function atualizarIrformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto]
}

function desenharProdutoNoCarrinho(idProduto) {
  const produto = catalogo.find((p) => p.id === idProduto)
  const containerProdutoCarrinho = document.getElementById("produtos-carrinho")

  const elementoArticle = document.createElement("article")
  const articleClasses = ["flex", "bg-slate-100", "rounded-lg", "p-1", "relative", "m-2"]

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass)
  }


  const cartaoProdutoCarrinho = `<button id="remover-item-${produto.id}"><i class="fa-solid fa-circle-xmark text-slate-800 absolute top-1 right-1 hover:text-slate-400"></i></button>
    <img src="assets/img/${produto.nomeArquivoImagem}" alt="produto 1" class="h-24 rounded-lg">
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">${produto.nome}</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$ ${produto.preco}</p>
    </div>
    <div class="flex text-slate-950 items-end gap-2 absolute bottom-0 right-2 text-lg">
      <button id="decrementar-produto-${produto.id}">-</button>
      <p id="quantidade-${idProduto}" class="ml-2">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
      <button class="ml-2" id="incrementar-produto-${produto.id}">+</button>
    </div>`


  elementoArticle.innerHTML = cartaoProdutoCarrinho
  containerProdutoCarrinho.appendChild(elementoArticle)

  document.getElementById(`decrementar-produto-${produto.id}`).addEventListener("click", () => decrementarQuantidadeProduto(produto.id))

  document.getElementById(`incrementar-produto-${produto.id}`).addEventListener("click", () => incrementarQuantidadeProduto(produto.id))

  document.getElementById(`remover-item-${produto.id}`).addEventListener("click", () => removerDoCarrinho(produto.id))
}

function renderizarProdutosCarrinho() {
  const containerProdutoCarrinho = document.getElementById("produtos-carrinho")
  containerProdutoCarrinho.innerHTML = ""
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoNoCarrinho(idProduto)
  }
}

export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutoCarrinhoComQuantidade) {
    incrementarQuantidadeProduto(idProduto)
    return
  }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1
  desenharProdutoNoCarrinho(idProduto)
}
