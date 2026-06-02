import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/components/home/Home'
import Perfil from './assets/components/perfil/Perfil'
import Header from './assets/components/header/Header'
import Produto from './assets/components/produto/Produto'
import CadastrarProduto from './assets/components/cadastrarProduto/CadastrarProduto'
import ListarProdutos from './assets/components/listarProdutos/ListarProdutos'

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/cadProduto" element={<CadastrarProduto />} />
        <Route path="/lisProduto" element={<ListarProdutos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
