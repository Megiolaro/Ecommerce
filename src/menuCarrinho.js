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
