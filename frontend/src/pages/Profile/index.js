import React, { useEffect, useState, useContext } from 'react';
import { FiPower, FiTrash2, FiSun, FiMoon } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import api from '../../services/api';
import Context from '../../styles/thems/context';

import logo from '../../assets/logo.svg';

import { Container } from './styles';

export default function Profile() {
  const history = useHistory();
  const { toggleTheme } = useContext(Context);
  const { colors, title } = useContext(ThemeContext)

  const ongId = localStorage.getItem('ongId');
  const name = localStorage.getItem('ongName');
  const [ incidents, setIncidents ] = useState([]);

  useEffect(() => {
    async function loadIncidents() {
      const { data } = await api.get('/profiles', {
        headers: {
          Authorization: ongId,
        }
      })
      setIncidents(data.map(item => ({
        ...item,
        price: Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(item.value)
      })));
    }
    loadIncidents();

  }, [ongId]);

  async function handleDeletIncident(id) {
    await api.delete(`/incidents/${id}`, {
      headers: {
        Authorization: ongId,
      }
    });
    setIncidents(incidents.filter(incident => incident.id !== id)); 
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/')
  }

  return (
    <Container>
      <header>
        <div className="content-header">
          <img src={logo} alt="Logo"/>
          <span>Bem vindo(a), <b>{name}</b></span>
        </div>

        <div className="content-header">
          <Switch 
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            // width={50}
            offHandleColor='#383838'
            offColor="#525252"
            uncheckedIcon={ <FiSun size={20} color='#fff' style={{ marginTop: 3, marginLeft: 4 }}/>}
            checkedIcon={<FiMoon size={20} color="fff" style={{ marginTop: 3, marginLeft: 4 }}/>}
            onColor='#525252'
          />

          <Link className="button" to="/incidents/new">Cadastrar no caso</Link>
          <button onClick={handleLogout} type="button">
            <FiPower size={18} color={title === 'dark' ? '#fff' : '#c62e65' }/>
          </button>
        </div>
      </header>

      <h1>Casos cadastrados</h1>

      <ul >
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO: </strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÂO: </strong>
            <p> {incident.description} </p>

            <strong>VALOR: </strong>
            <p>{incident.price}</p>

            <button onClick={() => handleDeletIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3"/> 
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
