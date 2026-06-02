import './index.css'
import App from './App.jsx'
import Produto from './assets/components/produto/Produto.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UsuarioProvider } from './assets/context/UsuarioProvider.jsx'
import { ProdutoProvider } from './assets/context/ProdutoProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioProvider>
      <ProdutoProvider>
        <App />
      </ProdutoProvider>
    </UsuarioProvider>
  </StrictMode>,
)
