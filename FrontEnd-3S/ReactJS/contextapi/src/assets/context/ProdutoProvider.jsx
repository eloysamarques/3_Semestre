import { useState } from "react"
import { ProdutoContext } from "./ProdutoContext"

// disponibiliza o state do produto de forma global para
// todos os seus componentes filhos ( children )
export const ProdutoProvider = ({children}) => {
    const [listaProdutos, setListaProdutos] = useState([])
    
    return (
        <ProdutoContext.Provider
         
        value={{listaProdutos, 
            setListaProdutos}}
        >
            {children}
        </ProdutoContext.Provider>
    )
}