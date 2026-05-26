import { useEffect, useState } from "react"
import './produtospage.css'
import axios from "axios"
import api from "../../Services/services"

export const Produtos = () => {

  // LISTA DE PRODUTOS
  const [listaproduto, setListaProduto] = useState([])

  // CAMPOS DO FORMULÁRIO
  const [produtos, setProduto] = useState("")
  const [preco, setPreco] = useState("")
  const [descricao, setDescricao] = useState("")
  const [imagem, setImagem] = useState("")

  // CONTROLE DE EDIÇÃO
  const [editar, setEditar] = useState(false)

  // ID DO PRODUTO QUE ESTÁ SENDO EDITADO
  const [idEditar, setIdEditar] = useState(null)

  // BUSCAR DADOS
  useEffect(() => {
    getDados()
  }, [])

  // PEGAR PRODUTOS
  const getDados = async () => {

    try {

      const retornoAPI = await api.get(
        "http://localhost:3000/produtos"
      )

      setListaProduto(retornoAPI.data)

    } catch (error) {

      console.error(
        "Erro ao buscar dados:",
        error
      )
    }
  }
  // CADASTRAR
  const handleCadastrar = async (e) => {

    e.preventDefault()

    // VALIDAÇÃO
    if (
      produtos.trim() === "" ||
      descricao.trim() === "" ||
      isNaN(preco) ||
      preco <= 0
    ) {
      alert("Preencha todos os campos corretamente")
      return
    }

    // OBJETO
    const objProduto = {

      produtos: produtos,
      descricao: descricao,
      preco: parseFloat(preco),
      imagem: imagem
    }

    try {

      const retornoAPI = await axios.post(
        "http://localhost:3000/produtos",
        objProduto
      )

      // ATUALIZA LISTA
      setListaProduto([
        ...listaproduto,
        retornoAPI.data
      ])

      // LIMPA FORMULÁRIO
      limparFormulario()

      alert(
        "Produto cadastrado com sucesso!"
      )

    } catch (error) {

      console.error(
        "Erro ao cadastrar:",
        error
      )
    }
  }

  // EDITAR
  const editarProduto = async (e) => {

    e.preventDefault()

    const objProduto = {
      produtos: produtos,
      descricao: descricao,
      preco: parseFloat(preco),
      imagem: imagem
    }

    try {

      const retornoAPI = await axios.put(
        `http://localhost:3000/produtos/${idEditar}`,
        objProduto
      )

      console.log(retornoAPI)

      if (retornoAPI.status == 200) {

        
        // ATUALIZA LISTA
        getDados()
        // DESATIVA EDIÇÃO
        setEditar(false)
        // LIMPA FORMULÁRIO
        limparFormulario()
        alert("Produto atualizado!")
      }

    } catch (error) {
      alert("Erro ao editar: ", error)
    }
  }

  // LIMPAR FORMULÁRIO
  function limparFormulario() {

    setProduto("")
    setDescricao("")
    setImagem("")
    setPreco("")
  }

  // DELETAR
  const deletar = async (id) => {

    const retornoAPI = await axios.delete(
      `http://localhost:3000/produtos/${id}`,
      {
        method: "DELETE",
      }
    )

    getDados()
  }

  return (

    <section className="sessao-cadastro">

      <h1 className="Titulo">
        Produtos
      </h1>

      {/* FORMULÁRIO */}
      <div className="formulario">

        <form
          onSubmit={
            editar
              ? editarProduto
              : handleCadastrar
          }
        >

          <fieldset className="cadastro">

            {/* NOME */}
            <input
              type="text"
              placeholder="Digite o nome do produto"
              className="cadastro_entrada"
              value={produtos}
              onChange={(e) =>
                setProduto(e.target.value)
              }
            />

            {/* PREÇO */}
            <input
              type="number"
              step="0.01"
              placeholder="Digite o preço do produto"
              className="cadastro_entrada"
              value={isNaN(preco) ? 0 : preco}
              onChange={(e) =>
                setPreco(parseFloat(e.target.value))
              }
            />

            {/* IMAGEM */}
            <input
              type="text"
              placeholder="Coloque a URL da imagem"
              className="cadastro_entrada"
              value={imagem}
              onChange={(e) =>
                setImagem(e.target.value)
              }
            />

            {/* DESCRIÇÃO */}
            <input
              type="text"
              placeholder="Coloque a descrição do produto"
              className="cadastro_entrada"
              value={descricao}
              onChange={(e) =>
                setDescricao(e.target.value)
              }
            />

            {/* BOTÃO */}
            <button
              type="submit"

              className="cadastro_cadastrar"
            >
              {
                editar ? "Salvar Alterações" : "Cadastrar"
              }


            </button>
              {editar && <button className="cadastro_cadastrar" onClick={(e) => {e.preventDefault(); setEditar(false); limparFormulario()}}> Cancelar</button>}

          </fieldset>

        </form>

      </div>

      {/* LISTAGEM */}
      <ul className="listagem">

        {listaproduto.map((p) => (

          <article
            key={p.id}
            className="produtos">

            {/* IMAGEM */}
            <img
              src={p.imagem} alt={p.produtos} className="imagem_produto"
            />

            {/* TEXTO */}
            <p> <strong>Produto:</strong> {" "} {p.produtos} </p>

            <p> <strong>Preço:</strong> {" "}R$ {p.preco} </p>

            <p> <strong>Descrição:</strong> {" "} {p.descricao}</p>

            {/* APAGAR */}
            <a
              href="" onClick={(e) => {
                e.preventDefault()
                deletar(p.id)
              }}
            >
              Apagar
            </a>

            {/* EDITAR */}
            <a
              href="" onClick={(e) => {
                e.preventDefault()
                setEditar(true)
                setIdEditar(p.id)
                setProduto(p.produtos)
                setImagem(p.imagem)
                setDescricao(p.descricao)
                setPreco(p.preco)
              }}
            >
              Editar
            </a>

          </article>

        ))}

      </ul>

    </section>
  )
}