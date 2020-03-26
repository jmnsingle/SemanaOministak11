import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import { Container } from './styles';

export default function NewIncident() {
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ value, setValue ] = useState('');

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = { title, description, value }

    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId,
        }
      });

      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar. Tente novamente');
    }
  }

  return (
    <Container >
      <div className="content">
        <section>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para 
            resolver isso.
          </p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição do caso ..."
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </Container>
  );
}
