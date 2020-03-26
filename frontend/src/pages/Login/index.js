import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api'

import imgHero from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

import { Container } from './styles';

export default function Login() {
  const history = useHistory();

  const [ id, setId ] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id })
      setId(response.data.id);

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');

    } catch(err) {
      alert('Erro ao fazer login. Tente novamente.');
    }
  }

  return (
    <Container>
      <section className="form">
        <img src={logo} alt="Logo"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu cadastro</h1>

          <input 
            placeholder="Digite seu ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#e02041"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={imgHero} alt="Be the Hero"/>
    </Container>
  );
}
