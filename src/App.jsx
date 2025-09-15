import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import Multiplicar from './pages/Multiplicar.jsx'

function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Início</Link>
        <Link to="/multiplicar">Multiplicar</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/multiplicar" element={<Multiplicar />} />
      </Routes>
    </div>
  )
}

export default App
