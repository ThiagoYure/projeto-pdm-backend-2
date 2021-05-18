import React, { useState, useEffect } from 'react';
import { FlatList, Image, TouchableOpacity, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import api from './services/Api';
import { setId, setToken, getId, getToken } from './services/PersistToken';
import { useFocusEffect } from '@react-navigation/native';

const Home = ({ navigation }) => {
  const [id, onChangeId] = useState('');
  const [token, onChangeToken] = useState('');
  const [user, onChangeUser] = useState('');
  const [pesquisa, onChangePesquisa] = useState('');
  const [anuncios, onChangeAnuncios] = useState('');

  if (anuncios == '') {
    api
      .get('real-estate/user', { headers: { 'authorization': token } })
      .then(res => {
        if (res.data == undefined) {
          onChangeAnuncios('Sem Resultado');
        } else {
          onChangeAnuncios(res.data);
        }
      })
      .catch(error => {
        console.log(error.error);
      });
  }

  useEffect(() => {
    getToken().then(res => {
      onChangeToken(res);
      getId().then(r => {
        api
          .get(`users/${r}`)
          .then(res => {
            onChangeUser(res);
          })
          .catch(error => {
            console.log(error.error);
          });
      });
    });
  }, []);

  const handleAtualizar = () => {
    api
      .get('real-estate/user', { headers: { 'authorization': token } })
      .then(res => {
        if (res.data == undefined) {
          onChangeAnuncios('Sem Resultado');
        } else {
          onChangeAnuncios(res.data);
        }
      })
      .catch(error => {
        console.log(error.error);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./img/HomeMatcHAlpha.png')}
      />
      <TouchableOpacity style={{
        alignSelf: 'center',
        marginTop: 20,
        padding: 5,
        backgroundColor: '#E4B7A0',
        width: '50%',
      }} onPress={() => { handleAtualizar() }}>
        <Text style={styles.buttonLabel}>Atualizar Página</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Seus imóveis</Text>
      {/*<View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ marginTop: 10, flex: 1 }}
          placeholder={'Pesquisa por cidade...'}
          onChangeText={onChangePesquisa}
          value={pesquisa}
        />
        <TouchableOpacity style={styles.button} onPress={() => handlePesquisaImovel()}>
          <Text style={styles.buttonLabel}>Pesquisar</Text>
        </TouchableOpacity>
  </View>*/}
      <FlatList
        style={{ marginBottom: 170 }}
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