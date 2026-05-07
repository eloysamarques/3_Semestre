import './App.css'
import Paragrafo from './componentes/paragrafo/paragrafo.jsx'
import Title from './componentes/titlle/title.jsx'

function App() {
  return (
    <>
      <Title nome = "Eloysa" sobrenome = "Marques" />
      <Title texto="Eu sou o título" />
      <Paragrafo textoParagrafo="Este é o texto do parágrafo"/>
    </>
  )
}

export default App
