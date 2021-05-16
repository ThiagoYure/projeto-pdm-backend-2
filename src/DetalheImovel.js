import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

const DetalheImovel = ({ navigation, route }) => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./img/HomeMatcHAlpha.png')}
      />
      <Text style={styles.title}>Detalhes do Imóvel</Text>
      <Image
        style={styles.image}
        source={require('./img/HomeMatcHAlpha.png')}
      />
      <Text style={styles.label}>{route.params.rua}, nº {route.params.numero} - {route.params.bairro}, {route.params.cidade}</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text style={{
          fontSize: 18,
          color: '#633015',
        }}>{route.params.descricao}</Text>
        <Text style={{
          fontSize: 18,
          color: '#633015',
        }}>{route.params.metragem}</Text>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text style={styles.label}>Proprietário(a): </Text>
        <Text style={styles.label}>{route.params.proprietario}</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{
          flex: 1,
          fontSize: 18,
          color: '#633015',
        }}>Contatos: </Text>
        <Text style={{
          marginLeft: '10%',
          marginRight: '10%',
          fontSize: 18,
          color: '#633015',
        }}>{route.params.email}</Text>
        <Text style={{
          marginLeft: '10%',
          marginRight: '10%',
          fontSize: 18,
          color: '#633015',
        }}>{route.params.telefone}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 30,
    color: '#633015',
  },
  button: {
    marginTop: 20,
    alignSelf: 'center',
    padding: 5,
    backgroundColor: '#E4B7A0',
    width: '33%',
  },
  imovel: {
    marginTop: 10,
    padding: 15,
    alignSelf: 'center',
    backgroundColor: '#E4B7A0',
  },
  image: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    width: 300,
    height: 170,
  },
  label: {
    fontSize: 18,
    color: '#633015',
  },
  logo: {
    alignSelf: 'center',
    width: 180,
    height: 70,
  }
});

export default DetalheImovel;