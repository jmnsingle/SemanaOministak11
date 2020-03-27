import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    backgroundColor: '#f0f0f0'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 15,
    color: '#737380',
  },
  
  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    color: '#13131a',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },
  
  incidentList: {
    marginTop: 32,
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },

  detailButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold',
  }

});