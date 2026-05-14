import { useEffect, useState } from "react";
import "./produtospage.css";
import fotoProduto from "/images/hero.png";

const ProdutosPage = () => {
    //states
    const [listaProdutos, setListaProdutos] = useState([]);
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [preco, setPreco] = useState(0)
    const [imagem, setImagem] = useState("hero.png")

useEffect( () => {
    getDados()

}, [])

const cadastrar = async (e) => {
    e.preventDefault() // nao deixa o fomrulario ser postado

    // validar os dados
    if (titulo.trim().length == 0  || 
        descricao.trim().length == 0 ||
        isNaN(preco)
    ) { //se deixou de preencher algum campo
        alert("Preencher todos os campos corretamente");
        return false;
    }

    // cadastrar na API
    const objProduto = {
        titulo,
        descricao,
        preco,
        imagem
    }

    console.log(objProduto);
    const retornoAPI = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        body: JSON.stringify(objProduto),
        headers: {
            "Content-Type" : "application/json; charset=UTF-8"
        }
    })

    const produtoCadastrado = await retornoAPI.json()
    console.log (produtoCadastrado);
    setListaProdutos([...listaProdutos, produtoCadastrado])

    // chamar a listagem novamente

    // ou ent, jogar o novo cadastro na listaProdutos

}

const deletar = async (id) => {
        // fazer o fetch para apagar
            const retornoAPI = await fetch(`http://localhost:3000/produtos/${id}`, {
            method: "delete",
        })
        getDados();
        

        
}

const getDados = async () => {
        try {
            const retornoAPI = await fetch("http://localhost:3000/produtos")
            const dados = await retornoAPI.json()
            // console.log(dados);
            setListaProdutos(dados)
        } catch (error) {
        console.log(error)
        }
    }

  return (
    <>
      <h1 className="Titulo">Página de Produtos</h1>

<form action="" onSubmit={cadastrar}>
    <div className="linha">
      <label htmlFor="titulo">Título</label>
      <input
        type="text"
        placeholder="Digite o título"
        id="titulo"
        onChange={(e) => {
          setTitulo(e.target.value)
        }}
      />
    </div>

    <div className="linha">
      <label htmlFor="descricao">Descrição</label>
      <input
        type="text"
        placeholder="Digite a descrição"
        id="descricao"
        onChange={(e) => {
          setDescricao(e.target.value)
        }}
      />
    </div>

    <div className="linha">
      <label htmlFor="preco">Preço</label>
      <input
        type="text"
        placeholder="Digite o preço"
        id="preco"
        onChange={(e) => {
          setPreco(parseFloat(e.target.value))
        }}
      />
    </div>
    <button>Cadastrar</button>
</form>

      <section className="listagem">
        {listaProdutos.map((p) => {
          return (
            <article className="produtos" key={p.id}>
              <img className="foto-produto" src={fotoProduto} alt="" />
              <h2>{p.titulo}</h2>
              <p>R${p.preco}</p>
              <p>{p.descricao}</p>

              <a href="" onClick={(e) => {
                e.preventDefault()
                deletar(p.id)
              }}>Apagar</a>

            </article>
          );
        })}

      </section>
    </>
  );
};

export default ProdutosPage;