import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';

import logo from '../../assets/logo.png';

import styles from './styles';

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
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={28} color='#e82041' />
        </TouchableOpacity>

        <Image source={logo} />
      </View>

      <View style={styles.incident}> 
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG: </Text>
        <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

        <Text style={styles.incidentProperty}>CASO: </Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALOR: </Text>
        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {
            style: 'currency', 
            currency: 'BRl' 
          }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox} >
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroi deste caso.</Text>
      
        <Text style={styles.heroDescription} >Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity onPress={sendWhatsapp} style={styles.action}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={sendEmail} style={styles.action}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
