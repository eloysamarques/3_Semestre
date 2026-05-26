import Header from '../../components/header/Header'
import Footer from "../../components/footer/Footer"
import './CadastroGenero.css'
import Cadastro from "../../components/cadastro/Cadastro"
import { useEffect, useState } from 'react'
import api from '../../services/services'
import Lista from '../../components/lista/Lista'

const CadastroGenero = () => {
    
    // state e variaveis
    const [valor, setValor] = useState ("")
    const [editar, setEditar] = useState (false)
    const [listaGeneros, setListaGeneros] = useState ([])


    // POST
    const cadastrarGenero = async (e) => {
        e.preventDefault()
        // validacao dos dados preenchidos
        if (valor.trim().length == 0) {
            alert("Genero deve ser preenchido")
            return false
        }

        const objCadastro = {
            nome: valor,
        }

        try {
            // cadastra na api, no endpoint
            const retornoAPI = await api.post("/Genero", objCadastro)

            if (retornoAPI.status == 201) {
                alert("Genero cadastrado com sucesso!")
                limpaFormulario()
                // Atualiza a lista de gêneros
                setListaGeneros([...listaGeneros, retornoAPI.data])
            } else {
                alert ("Houve algum problema ao cadastrar!")
            }

        } catch (error) {
            alert ("Erro na chamada da API")
            console.log(error)
        }
    }

    const limpaFormulario = () => {
        setValor("")
    }

    const excluirGenero = async (item) => {
        console.log(item)

        try {
            const retornoAPI = await api.delete(`/Genero/${item.idGenero}`)
            console.log(retornoAPI)

        } catch (error) {
            alert ("Erro na chamada da API")
            console.log(error)
        }
        
        getGeneros()
    }

    const editarGenero = (item) => {
        alert("Funcao editar genero em desenvolvimento")
    }

    useEffect(() => {
        // chamar os dados da API
        getGeneros()
    }, [])

    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero")
            const dados = retornoAPI.data
            setListaGeneros(dados)

        } catch (error) {
            alert("Erro ao buscar os gêneros")
            
        }
    }
    
    return(
        <>
        <Header />
        <main>
            <Cadastro 
            tituloCadastro = "Cadastro de Gêneros"
            visibilidade = "none"
            placeholder = "gênero"
            valor = {valor}

            //funcao q muda o state
            setValor={setValor}
            funcCadastro = {editar ? editarGenero : cadastrarGenero}
            funcEditar = {editarGenero}
            />

            <Lista
                tituloLista="Lista de Gêneros"
                visibilidade="none"
                lista={listaGeneros}
                tipoLista="genero"
                setEditar={setEditar}
                setValor={setValor}
                
                funcExcluir = {excluirGenero}
                funcEditar = {editarGenero}
            />         
        </main>
        <Footer />
        </>
    )
}

export default CadastroGenero