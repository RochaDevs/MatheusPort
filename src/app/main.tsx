import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import { PaginaPrincipal } from './pages/paginaprincipal.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PaginaPrincipal />
  </React.StrictMode>
)
