import { useState } from "react"
import Contador from "./assets/componentes/contador/contador"
import CadFruta from "./assets/componentes/cadFruta/cadFruta"
import CicloDeVida from "./assets/componentes/ciclodevida/ciclodevida"

function App () {
  const[mostrar, setMostar] = useState(true)
  // objeto privado
  const[nome, setNome] = useState("Google")
  
  function trocartexto() {
    setNome("Microsoft")
  }

  function fuiAbandonado() {
    setNome("Fui abandonado")
  }
  
  return(
    <>
{/*     
    <h1>{nome} Page</h1>
    <button onClick={trocartexto}>Mudar Nome</button>
    <button onClick={() => {
      return setNome("Yahoo")
    }}> Mudar Nome</button>
  
    
    <br />
     */}
    {/* evento - evento disparado: change
    target - elemento que disparou o evento: input
    value - valor do input: texto digitado */}

    {/* <input type="text" onblur={fuiAbandonado}
     onChange={(evento) => setNome(evento.target.value)} />



    <Contador />
      <br /> <br />
      <p>Lorem ipsum <strong>{nome}</strong> dolor sit amet</p> */}
      {/* <CadFruta /> */}

    <button onClick={() => {
        setMostar(!mostrar);
    }}>Mostrar / Ocultar</button>
    {mostrar && <CicloDeVida/>}
    </>
  );  
}

export default App;