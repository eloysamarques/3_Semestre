import { useState } from 'react'

function App () {
  // obejto privado
  const [nome, setNome] = useState("Google")

  function trocarTexto () {
    setNome("Microsoft")
  }
  function fuiAbandonada () {
    setNome("Input foi abandonada")
  }

  return (
    <> 
    <h1>{nome} Page</h1>
    <button onClick={trocarTexto}>Trocar Texto</button>
    <button onClick={fuiAbandonada}>Fui Abandonada</button>
    <button onClick={() => {
      return setNome("Yahoo")
    }}>Trocar Texto</button>

    <br />
    {/* evento - evento disparado: change*/ }
    {/* target - quem disparou o evento*/ }
    {/* value - valor do input que disparou o evento change*/ }
    <input 
    type="text" onBlur={fuiAbandonada} 
    onChange={(evento) => setNome(evento.target.value  )} /> 

    <Contador   />
    </>
  );
}

export default App