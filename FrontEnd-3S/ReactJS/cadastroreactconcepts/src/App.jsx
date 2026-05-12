import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/homepage';
import QuemSomosPage from './pages/quemsomos/quemsomospage';
import Header from './componentes/header/header';
import CadastroFrutasPage from './pages/cadastrofrutas/cadastrofrutas';

export default function App() {
  
  return(
    <>
    <BrowserRouter>
    <Header />

      <Routes>
        <Route element = {<HomePage/>} path="/"/>
        <Route element = {<QuemSomosPage/>} path="/quemsomos"/>
        <Route element = {<CadastroFrutasPage/>} path='/cadfrutas'/>
      </Routes>

    </BrowserRouter>
    </>
  )
}