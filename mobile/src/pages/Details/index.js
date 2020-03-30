import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';

import logo from '../../assets/logo.png';

import {
  Container,
  Header,
  Incident,
  IncidentProperty,
  IncidentValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ActionText,
} from './styles';

export default function Details({ navigation }) {
  //const incident = navigation.getParam('incident');
  const route = useRoute();
  const incident = route.params.incident;
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de "${incident.value}"`;

  function sendEmail() {
    Linking.openURL((Platform.OS === 'android')
      ? `mailto:${incident.email}?cc=Be the Hero&subject=Herói do caso: ${incident.title}&body=${message}`
      : `mailto:${incident.email}?cc=Be the Hero&subject=Herói do caso: ${incident.title}&body=${message}`);
  }

  function sendWhatsapp() {
    var message = 'Hello world';
    Linking.openURL((Platform.OS === 'android')
      ? `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
      : `whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={28} color='#e82041' />
        </TouchableOpacity>

        <Image source={logo} />
      </Header>

      <Incident> 
        <IncidentProperty style={{ marginTop: 0 }}>ONG: </IncidentProperty>
        <IncidentValue>{incident.name} de {incident.city}/{incident.uf}</IncidentValue>

        <IncidentProperty>CASO: </IncidentProperty>
        <IncidentValue>{incident.title}</IncidentValue>

        <IncidentProperty>VALOR: </IncidentProperty>
        <IncidentValue>{Intl.NumberFormat('pt-BR', {
            style: 'currency', 
            currency: 'BRl' 
          }).format(incident.value)}
        </IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o heroi deste caso.</HeroTitle>
      
        <HeroDescription>Entre em contato:</HeroDescription>

        <Actions>
          <Action onPress={sendWhatsapp}>
            <ActionText>WhatsApp</ActionText>
          </Action>

          <Action onPress={sendEmail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
