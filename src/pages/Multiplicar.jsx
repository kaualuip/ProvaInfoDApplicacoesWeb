import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Multiplicar.scss'

function Multiplicar() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useState(null)

  const calcular = () => {
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)
    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Erro: Insira números válidos')
    } else {
      setResultado(n1 * n2)
    }
  }

  return (
    <div className="multiplicar-container">
      <h1>Multiplicador de Números</h1>
      <input
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={calcular}>Calcular</button>

      {resultado !== null && (
        <h2>Resultado: {resultado}</h2>
      )}
      <Link to="/">Voltar ao Início</Link>
    </div>
  )
}

export default Multiplicar
