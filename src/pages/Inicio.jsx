import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Inicio.scss';

function Inicio() {
  const [formData, setFormData] = useState({
    cpf: '',
    nomeCompleto: '',
    escolaridade: '',
    email: '',
    telefone: '',
    interesseCurso: '',
    previsaoChegada: '',
    exAluno: '',
    comoSoube: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dados = formData;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$|^\d{11}$/;
    if (!cpfRegex.test(dados.cpf)) {
      alert('CPF inválido! Digite no formato XXX.XXX.XXX-XX ou apenas números.');
      return;
    }
    alert('Cadastro realizado com sucesso!');
    setFormData({
      cpf: '',
      nomeCompleto: '',
      escolaridade: '',
      email: '',
      telefone: '',
      interesseCurso: '',
      previsaoChegada: '',
      exAluno: '',
      comoSoube: ''
    });
  };

  return (
    <div className="container">
      <header>
        <img src="https://i.imgur.com/AW0j8Zy.png" alt="Logo Instituto Social Nossa Senhora de Fátima" />
        <div className="header-text">
          <div style={{ color: '#1a5dba', fontWeight: 'bold', fontSize: '18px', marginBottom: 0 }}>
            Instituto Social Nossa Senhora de Fátima
          </div>
          <h1>Feira De Profissões</h1>
          <p>“Esforço que transforma, e o orgulho permanece”</p>
        </div>
      </header>

      <hr className="separator" />

      <form id="feiraForm" onSubmit={handleSubmit}>
        <div className="col-2">
          <label htmlFor="cpf">CPF</label>
          <input type="text" id="cpf" name="cpf" placeholder="" required maxLength="14" value={formData.cpf} onChange={handleChange} />
        </div>
        <div className="col-2">
          <label htmlFor="nomeCompleto">Nome completo</label>
          <input type="text" id="nomeCompleto" name="nomeCompleto" placeholder="" required value={formData.nomeCompleto} onChange={handleChange} />
        </div>

        <div className="col-3">
          <label htmlFor="escolaridade">Escolaridade</label>
          <select id="escolaridade" name="escolaridade" required value={formData.escolaridade} onChange={handleChange}>
            <option value="" disabled selected>
              Selecione
            </option>
            <option>Ensino Fundamental</option>
            <option>Ensino Médio</option>
            <option>Ensino Técnico</option>
            <option>Superior</option>
            <option>Outro</option>
          </select>
        </div>
        <div className="col-3">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="" required value={formData.email} onChange={handleChange} />
        </div>
        <div className="col-3">
          <label htmlFor="telefone">Telefone</label>
          <input type="text" id="telefone" name="telefone" placeholder="" required value={formData.telefone} onChange={handleChange} />
        </div>

        <div className="full-width">
          <label htmlFor="interesseCurso">Interesse em algum curso</label>
          <input type="text" id="interesseCurso" name="interesseCurso" placeholder="Que a escola tem / outro curso" value={formData.interesseCurso} onChange={handleChange} />
        </div>

        <div className="col-3">
          <label htmlFor="previsaoChegada">Previsão de chegada à feira</label>
          <select id="previsaoChegada" name="previsaoChegada" required value={formData.previsaoChegada} onChange={handleChange}>
            <option value="" disabled selected>
              Hora
            </option>
            <option>08:00</option>
            <option>09:00</option>
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
          </select>
        </div>
        <div className="col-3">
          <label htmlFor="exAluno">Já foi um aluno do frei</label>
          <select id="exAluno" name="exAluno" required value={formData.exAluno} onChange={handleChange}>
            <option value="" disabled selected>
              Sim / Não
            </option>
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>

        <div className="full-width">
          <label htmlFor="comoSoube">Como ficou sabendo da feira?</label>
          <select id="comoSoube" name="comoSoube" required value={formData.comoSoube} onChange={handleChange}>
            <option value="" disabled selected>
              Selecione
            </option>
            <option>Redes sociais</option>
            <option>Escola</option>
            <option>Família/Amigos</option>
            <option>Outros</option>
          </select>
        </div>

        <button className="btn-submit" type="submit">
          CADASTRAR
        </button>
      </form>

      <div className="event-date">
        Data do evento
        <br />
        27/09/2025
      </div>

      <footer>
        <div className="footer-container">
          <div className="address">
            <img src="https://i.imgur.com/yo4w3jv.png" alt="Logo Instituto Social" />
            <div>
              Instituto Social Nossa Senhora de Fátima
              <br />
              Av. Cel. Octaviano de Freitas Costa, 463
              <br />
              Veleiros - São Paulo - SP 047773-000
            </div>
          </div>
          <div className="contact">
            <strong>Contato</strong>
            <br />
            (11) 3798 - 5037 - secretaria
            <br />
            (11) 96398 - whatsapp secretaria
            <br />
            <div className="social-icons" style={{ marginTop: 5 }}>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                📷
              </a>
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                📘
              </a>
              <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                ▶️
              </a>
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                🔗
              </a>
            </div>
          </div>
        </div>
      </footer>

      <Link to="/multiplicar">Ir para Multiplicar</Link>
    </div>
  );
}

export default Inicio;
