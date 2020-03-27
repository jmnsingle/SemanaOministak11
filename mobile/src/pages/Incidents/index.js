import React, { useEffect, useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
import { View, SafeAreaView, FlatList, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';

import styles from './styles';

import logo from '../../assets/logo.png';

export default function Incidents({ navigation }) {
  // const navigation = useNavigation();
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>Total de <Text style={styles.headerTextBold}>{total} casos</Text></Text>
      </View>

      <Text style={styles.title}>Bem-vindo !</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList 
        style={styles.incidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.01}
        renderItem={({item: incident}) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG: </Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO: </Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR: </Text>
            <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {
                style: 'currency', 
                currency: 'BRl' 
              }).format(incident.value)}
            </Text>

            <TouchableOpacity 
              style={styles.detailButton}
              onPress={() => navigation.navigate('Details', { incident })}
            >
              <Text style={styles.detailButtonText} >Ver mais detalhes</Text>
              <Icon name='arrow-right' size={16} color='#e02041' />
            </TouchableOpacity>
          </View>
        )}
      />
      {/* {loading && <ActivityIndicator style={{marginTop: 50}} size="large" color='#e02041' />} */}
    </SafeAreaView>
  );
}
