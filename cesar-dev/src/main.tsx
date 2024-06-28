import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Header  from "./Componentes/Header"
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <App />
      <Header />
  </React.StrictMode>,
)


