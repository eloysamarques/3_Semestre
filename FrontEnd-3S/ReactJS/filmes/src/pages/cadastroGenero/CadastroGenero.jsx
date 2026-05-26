import Header from '../../components/header/Header'
import Footer from "../../components/footer/Footer"
import './CadastroGenero.css'
import Cadastro from "../../components/cadastro/Cadastro"
import { useEffect, useState } from 'react'
import api from '../../services/services'
import Lista from '../../components/lista/Lista'

import Swal from 'sweetalert2'
import { Alerta } from '../../alerta/Alerta'

const CadastroGenero = () => {

    const [valor, setValor] = useState("")
    const [idEditar, setIdEditar] = useState("")
    const [editar, setEditar] = useState(false)
    const [listaGeneros, setListaGeneros] = useState([])

    const cadastrarGenero = async (e) => {

        e.preventDefault()

        if (valor.trim().length === 0) {

            const retornoAlerta = await Alerta({
                title: "Cadastro de gênero",
                text: "Gênero deve ser preenchido",
                icon: "warning",
                confirmButtonText: "OK",
            })

            console.log(retornoAlerta)

            return false
        }

        const objCadastro = {
            nome: valor
        }

        try {

            const retornoAPI = await api.post(
                "/Genero",
                objCadastro
            )

            if (retornoAPI.status === 201) {

                Alerta({
                    title: "Cadastro gênero",
                    text: `Gênero (${valor}) cadastrado com sucesso!`,
                    icon: "success",
                    confirmButtonText: "OK",
                })

                limpaFormulario()
                getGeneros()
            }

        } catch (error) {

            Alerta({
                title: "Erro",
                text: "Erro na chamada da API",
                icon: "error",
                confirmButtonText: "OK",
            })

            console.log(error)
        }
    }

    const editarGenero = async (e) => {

        e.preventDefault()

        if (valor.trim().length === 0) {

            Alerta({
                title: "Erro",
                text: "Gênero deve ser preenchido",
                icon: "error",
                confirmButtonText: "OK",
            })

            return
        }

        const objEditar = {
            idGenero: idEditar,
            nome: valor
        }

        try {

            const retornoAPI = await api.put(
                `/Genero/${idEditar}`,
                objEditar
            )

            if (
                retornoAPI.status === 200 ||
                retornoAPI.status === 204
            ) {

                Alerta({
                    title: "Sucesso",
                    text: "Gênero editado com sucesso!",
                    icon: "success",
                    confirmButtonText: "OK",
                })

                limpaFormulario()
                getGeneros()
            }

        } catch (error) {

            Alerta({
                title: "Erro",
                text: "Erro na chamada da API",
                icon: "error",
                confirmButtonText: "OK",
            })

            console.log(error)
        }
    }

    const excluirGenero = async (item) => {

        const result = await Alerta({
            title: "Cadastro de gênero",
            text: `Deseja realmente excluir o gênero (${item.nome})?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar exclusão!",
            cancelButtonText: "Cancelar",
        })

        if (!result.isConfirmed) {
            return
        }

        try {

            const retornoAPI = await api.delete(
                `/Genero/${item.idGenero}`
            )

            if (
                retornoAPI.status === 204 ||
                retornoAPI.status === 200
            ) {

                Alerta({
                    title: "Sucesso",
                    text: "Gênero excluído com sucesso!",
                    icon: "success",
                    confirmButtonText: "OK",
                })

                getGeneros()
            }

        } catch (error) {

            Alerta({
                title: "Erro",
                text: "Não é possível excluir esse gênero, pois ele está vinculado a um filme!",
                icon: "error",
                confirmButtonText: "OK",
            })

            console.log(error)
        }
    }

    const preEditar = (item) => {

        setValor(item.nome)
        setEditar(true)
        setIdEditar(item.idGenero)

        console.log(item)
    }

    const limpaFormulario = () => {

        setValor("")
        setEditar(false)
        setIdEditar("")
    }

    const getGeneros = async () => {

        try {

            const retornoAPI = await api.get("/Genero")

            setListaGeneros(retornoAPI.data)

        } catch (error) {

            Alerta({
                title: "Erro",
                text: "Erro ao buscar os gêneros",
                icon: "error",
                confirmButtonText: "OK",
            })

            console.log(error)
        }
    }

    useEffect(() => {

        getGeneros()

    }, [])

    return (
        <>
            <Header />

            <main>

                <Cadastro
                    tituloCadastro="Cadastro de Gêneros"
                    visibilidade="none"
                    placeholder="gênero"
                    valor={valor}
                    cancelarEdicao={limpaFormulario}
                    setValor={setValor}
                    funcCadastro={
                        editar
                            ? editarGenero
                            : cadastrarGenero
                    }
                    btnEditar={editar}
                />

                <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"
                    lista={listaGeneros}
                    tipoLista="genero"
                    funcExcluir={excluirGenero}
                    funcEditar={preEditar}
                />

            </main>

            <Footer />
        </>
    )
}

export default CadastroGenero