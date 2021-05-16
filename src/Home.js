import React from 'react';
import { FlatList, Image, TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';

const Home  = ({ navigation}) => {
  const anuncios = [
    { id: '01', rua: 'Rua dos Alfeneiros', descricao: 'Esta casa é muito boa, não tem nada errado', numero: '04', bairro: 'Collington', cidade: 'Londres-ENG', metragem: '200 m²', proprietario: 'Eu mesmo', email: 'eumesmo@email.com', telefone: '(XX) XXXXX-XXXX', image: './img/HomeMatcHAlpha.png' },
    { id: '02', rua: 'Rua dos Alfeneiros', descricao: 'Esta casa é muito boa, não tem nada errado', numero: '05', bairro: 'Collington', cidade: 'Londres-ENG', metragem: '200 m²', proprietario: 'Eu mesmo', email: 'eumesmo@email.com', telefone: '(XX) XXXXX-XXXX', image: './img/HomeMatcHAlpha.png' },
    { id: '03', rua: 'Rua dos Alfeneiros', descricao: 'Esta casa é muito boa, não tem nada errado', numero: '06', bairro: 'Collington', cidade: 'Londres-ENG', metragem: '200 m²', proprietario: 'Eu mesmo', email: 'eumesmo@email.com', telefone: '(XX) XXXXX-XXXX', image: './img/HomeMatcHAlpha.png' },
  ];
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./img/HomeMatcHAlpha.png')}
      />
      <Text style={styles.title}>Seus imóveis</Text>
      <FlatList
        style={{ marginBottom: 100 }}
        data={anuncios}
        renderItem={
          ({ item }) => (
            <View style={styles.imovel}>
              <Image
                style={styles.image}
                source={require('./img/HomeMatcHAlpha.png')}
              />
              <Text style={styles.buttonLabel}>{item.rua}, nº {item.numero} - {item.bairro}, {item.cidade}</Text>
              <Text style={styles.buttonLabel}>{item.metragem}</Text>
              <Text style={styles.buttonLabel}>{item.proprietario}</Text>
              <TouchableOpacity style={{
                marginTop: 10,
                alignSelf: 'center',
                padding: 5,
                backgroundColor: '#633015',
                width: '33%',
              }} onPress={() => navigation.navigate('EdicaoImovel', item)}>
                <Text style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  color: '#E4B7A0',
                }}>+ Info</Text>
              </TouchableOpacity>
            </View>
          )
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30
  },
  title: {
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    fontSize: 30,
    color: '#633015',
  },
  button: {
    alignSelf: 'center',
    padding: 5,
    backgroundColor: '#E4B7A0',
    width: '33%',
  },
  imovel: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#E4B7A0',
  },
  image: {
    alignSelf: 'center',
    width: 300,
    height: 170,
    marginBottom: 10,
  },
  buttonLabel: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#633015',
  },
  logo: {
    alignSelf: 'center',
    width: 180,
    height: 70,
  }
});

export default Home;