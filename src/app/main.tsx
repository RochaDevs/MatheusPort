import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import { AppRoutes } from '../routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
