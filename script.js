import { carrinho } from "./src/menuCarrinho"

const catalogo = [
    {
        id: 1,
        nome: "Camisa Larga com Bolsos",
        marca: "Zara",
        preco: 70,
        nomeArquivoImagem: "product-1.jpg",
        feminino: false
    },
    {
        id: 2,
        nome: "Casaco Reto com Lã",
        marca: "Zara",
        preco: 85,
        nomeArquivoImagem: "product-2.jpg",
        feminino: true
    },
    {
        id: 3,
        nome: "Jaqueta com Efeito Camurça",
        marca: "Zara",
        preco: 60,
        nomeArquivoImagem: "product-3.jpg",
        feminino: false
    },
    {
        id: 4,
        nome: "Sobretudo em Mescla de Lã",
        marca: "Zara",
        preco: 160,
        nomeArquivoImagem: "product-4.jpg",
        feminino: false
    },
    {
        id: 5,
        nome: "Camisa Larga Acolchoada de Veludo Cotelê",
        marca: "Zara",
        preco: 110,
        nomeArquivoImagem: "product-5.jpg",
        feminino: false
    },
    {
        id: 6,
        nome: "Casaco de Lã com Botôes",
        marca: "Zara",
        preco: 170,
        nomeArquivoImagem: "product-6.jpg",
        feminino: true
    },
    {
        id: 7,
        nome: "Casaco com Botôes",
        marca: "Zara",
        preco: 75,
        nomeArquivoImagem: "product-7.jpg",
        feminino: true
    },
    {
        id: 8,
        nome: "Colete Comprido com Cinto",
        marca: "Zara",
        preco: 88,
        nomeArquivoImagem: "product-8.jpg",
        feminino: true
    }
]

for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class="border-solid border-2 border-sky-500 m-2 w-48 id="produtc-${produtoCatalogo.id}">
    <img src="./assets/img/${produtoCatalogo.nomeArquivoImagem}" alt="imagem1" style="height: 300px;">
    <p>${produtoCatalogo.marca}</p>
    <p>${produtoCatalogo.nome}</p>
    <p>$${produtoCatalogo.preco}</p>
    <button>Adicionar</button>
    </div>`

    document.getElementById("container").innerHTML += cartaoProduto
}

carrinho()



