import React, { useState, useEffect } from 'react';
import { TextInput, FlatList, Image, TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';
import api from './services/Api';
import { setId, setToken, getId, getUser, setUser } from './services/PersistToken';

const PesquisaImovel = ({ navigation }) => {
  const [pesquisa, onChangePesquisa] = useState('');
  const [anuncios, onChangeAnuncios] = useState('');

  const handlePesquisaImovel = () => {
    if (pesquisa != '') {
      api
        .get(`real-estate?cidade=${pesquisa}`)
        .then(res => {
          onChangeAnuncios(res.data);
        })
        .catch(error => {
          alert("Erro");
          console.log(error);
        });
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./img/HomeMatcHAlpha.png')}
      />
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ marginTop: 10, flex: 1 }}
          placeholder={'digite o nome da cidade...'}
          onChangeText={onChangePesquisa}
          value={pesquisa}
        />
        <TouchableOpacity style={styles.button} 
          onPress={() => handlePesquisaImovel()}>
          <Text style={styles.buttonLabel}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Resultado da Pesquisa</Text>
      <FlatList
        style={{ marginBottom: 150 }}
        data={anuncios}
        renderItem={
          ({ item }) => (
            <View style={styles.imovel}>
              <Image
                style={styles.image}
                source={{
                  uri: item.imagens,
                }}
              />
              <Text style={styles.buttonLabel}>{item.rua}, nº {item.numero} - {item.bairro}, {item.cidade}</Text>
              <Text style={styles.buttonLabel}>{item.metrosQuadrados} m²</Text>
              <Text style={styles.buttonLabel}>Proprietário: {item.user.nome}</Text>
              <TouchableOpacity style={{
                marginTop: 10,
                alignSelf: 'center',
                padding: 5,
                backgroundColor: '#633015',
                width: '33%',
              }} onPress={() => navigation.navigate('DetalheImovel', item)}>
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
};

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
    width: 155,
    height: 60,
  }
});

export default PesquisaImovel;