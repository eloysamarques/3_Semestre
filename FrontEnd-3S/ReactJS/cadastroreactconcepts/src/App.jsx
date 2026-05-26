import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './pages/produtos/produtospage'
import HomePage from './pages/home/homepage'
import QuemsomosPage from './pages/cadastrofrutas/cadastrofrutas'
import Header from './componentes/header/header'  
import CadastroFrutasPage from './pages/cadastrofrutas/cadastrofrutas'
import { Produtos } from './pages/produtos/produtospage'

function App() {
  return (


    //Titulo,Descrição, preço imagem

    <>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<Produtos/>} path="/Produtos"/>
          <Route element={<QuemsomosPage />} path="/quemsomospage" />
          <Route element={<CadastroFrutasPage/>} path="/cadastrofrutaspage"/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App