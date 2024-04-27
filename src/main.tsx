import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Instrumentos from './componentes/Instrumentos'
import DetalleInstrumento from './componentes/DetalleInstrumento'
import Home from './componentes/Home'
import DondeEstamos from './componentes/DondeEstamos'
import GrillaInstrumentos from './componentes/GrillaInstrumentos'
import Formulario from './componentes/Formulario'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/productos" element={<Instrumentos />} />
      <Route path="/dondeestamos" element={<DondeEstamos />} />
      <Route path="/detalle">
        <Route path=":idinstrumento" element={<DetalleInstrumento />} />
      </Route>
      <Route path="/grilla" element={<GrillaInstrumentos />} />
      <Route path="/formulario/:idinstrumento" element={<Formulario />} />
      <Route path="*" element={<Home />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
