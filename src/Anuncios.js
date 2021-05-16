import React from 'react';
import { FlatList, Image, TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';

const Anuncios = ({ navigation }) => {
  const anuncios = [
    { id: '01', endereco: 'Rua dos Alfeneiros, nº 4', metragem: '200 m²', proprietario: 'Eu mesmo', image: './img/HomeMatcHAlpha.png' },
    { id: '02', endereco: 'Rua dos Alfeneiros, nº 4', metragem: '200 m²', proprietario: 'Eu mesmo', image: './img/HomeMatcHAlpha.png' },
  ];
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./img/HomeMatcHAlpha.png')}
      />
      <Text style={styles.title}>Anuncios</Text>
      <FlatList
        progressViewOffset="200"
        data={anuncios}
        renderItem={
          ({ item }) => (
            <View style={styles.imovel}>
              <Image
                style={styles.image}
                source={require('./img/HomeMatcHAlpha.png')}
              />
              <Text style={styles.buttonLabel}>{item.endereco}</Text>
              <Text style={styles.buttonLabel}>{item.metragem}</Text>
              <Text style={styles.buttonLabel}>{item.proprietario}</Text>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DetalheImovel', { imovel: item })}>
                <Text style={styles.buttonLabel}>Detalhes</Text>
              </TouchableOpacity>
            </View>
          )
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  title: {
    marginTop: 20,
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
    marginTop: 10,
    padding: 15,
    alignSelf: 'center',
    backgroundColor: '#E4B7A0',
  },
  image: {
    alignSelf: 'center',
    width: 170,
    height: 170,
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

export default Anuncios;