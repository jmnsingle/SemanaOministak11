import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';
import Context from '../../styles/thems/context';

import { 
  Container, 
  Header, 
  HeaderText, 
  HeaderTextBold, 
  Title, 
  Description, 
  IncidentList,
  Incident,
  IncidentProperty,
  IncidentValue,
  DetailButton,
  DetailButtonText,
  ToggleThemeButton,
  ThemeIcon,
} from './styles';

import logo from '../../assets/logo.png';

export default function Incidents({ navigation }) {
  const { title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(Context);

  const [ incidents, setIncidents ] = useState([]);
  const [ total, setTotal ] = useState(0);
  const [ page, setPage ] = useState(1);
  const [ loading, setLoading ] = useState(false);

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('/incidents', {
      params: {
        page,
      }
    });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1)
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  },[])

  return (
    <Container >
      <Header>
        <Image source={logo} />

        <ToggleThemeButton onPress={toggleTheme}>
          <ThemeIcon name={title === 'light' ? 'sun' : 'moon'} />
        </ToggleThemeButton>

        <HeaderText>Total de <HeaderTextBold>{total} casos</HeaderTextBold></HeaderText>

      </Header>

      <Title>Bem-vindo !</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentList 
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.01}
        renderItem={({item: incident}) => (
          <Incident>
            <IncidentProperty>ONG: </IncidentProperty>
            <IncidentValue>{incident.name}</IncidentValue>

            <IncidentProperty>CASO: </IncidentProperty>
            <IncidentValue>{incident.title}</IncidentValue>

            <IncidentProperty>VALOR: </IncidentProperty>
            <IncidentValue>{Intl.NumberFormat('pt-BR', {
                style: 'currency', 
                currency: 'BRl' 
              }).format(incident.value)}
            </IncidentValue>

            <DetailButton 
              onPress={() => navigation.navigate('Details', { incident })}
            >
              <DetailButtonText>Ver mais detalhes</DetailButtonText>
              <Icon name='arrow-right' size={16} color='#e02041' />
            </DetailButton>
          </Incident>
        )}
      />
      {/* {loading && <ActivityIndicator style={{marginTop: 50}} size="large" color='#e02041' />} */}
    </Container>
  );
}
