import React, { useState } from 'react';
import { FlatList, Image, TouchableOpacity, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import api from './services/Api';
import { setId, setToken, getId, getUser, setUser } from './services/PersistToken';

const Home = ({ navigation }) => {
  const [pesquisa, onChangePesquisa] = useState('');
  const [anuncios, onChangeAnuncios] = useState([{}]);

  api
    .get(`users/${getId}`)
    .then(res => {
      setUser(res);
    })
    .catch(error => {
      alert("Erro");
      console.log(error);
    });

  api
    .get(`real-states/${getId}`)
    .then(res => {
      onChangeAnuncios(res);
    })
    .catch(error => {
      alert("Erro");
      console.log(error);
    });

  const handlePesquisaImovel = () => {
    if (pesquisa != '') {
      api
        .get(`real-states/${getId}`)
        .then(res => {
          onChangeAnuncios(res);
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
      <Text style={styles.title}>Seus imóveis</Text>
      <View style={{ flexDirection: row }}>
        <TextInput
          style={{ marginTop: 10 }}
          placeholder={'Pesquisa por cidade...'}
          onChangeText={onChangePesquisa}
          value={pesquisa}
        />
        <TouchableOpacity style={styles.button} onPress={() => handlePesquisaImovel()}>
          <Text style={styles.buttonLabel}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
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
              <Text style={styles.buttonLabel}>{item.metrosQuadrados}</Text>
              <Text style={styles.buttonLabel}>{getUser.nome}</Text>
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