import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import logo from '../../assets/logo.svg';

import { Container } from './styles';

export default function Register() {
  const history = useHistory();

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ city, setCity ] = useState('');
  const [ whatsapp, setWhatsapp ] = useState('');
  const [ uf, setUf ] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { name, email, city, whatsapp, uf }

    try {
      const response = await api.post('ongs', data);

      alert(`Seu ID de acesso é: ${response.data.id}`);

      history.push('/')
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <Container >
      <div className="content">
        <section>
          <img src={logo} alt="Logo"/>
          <h1>Faça seu cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a 
            encontrarem os casos da sua ONG.
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#e02041"/>
            Tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleSubmit}>
          <input 
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input 
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input 
              placeholder="UF" 
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
              />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </Container>
  );
}
