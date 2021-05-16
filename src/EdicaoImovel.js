import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import api from './services/Api';
import { setId, setToken, getUser } from './services/PersistToken';

const EdicaoImovel = ({ navigation, route }) => {
  const [id, onChangeId] = useState(route.params.id);
  const idUser = getUser.id;
  const [cidade, onChangeCidade] = useState(route.params.cidade);
  const [bairro, onChangeBairro] = useState(route.params.bairro);
  const [rua, onChangeRua] = useState(route.params.rua);
  const [numero, onChangeNumero] = useState(route.params.numero);
  const [descricao, onChangeDescricao] = useState(route.params.descricao);
  const [metrosQuadrados, onChangeMetrosQuadrados] = useState(route.params.metrosQuadrados);
  const [preco, onChangePreco] = useState(route.params.preco);

  const handleEdicaoImovel = () => {
    const data = { metrosQuadrados, descricao, idUser, cidade, rua, bairro, numero,preco };
    api
      .put(`real-states/${id}`, data)
      .then(res => {
        alert("Imóvel atualizado com sucesso!");
      })
      .catch(error => {
        alert("Erro ao atualizar Imóvel!");
        console.log(error);
      });
  };

  const handleDeleteImovel = () => {
    const data = { metrosQuadrados, descricao, cidade, rua, bairro, numero, preco };
    api
      .delete(`real-states/${id}`)
      .then(res => {
        alert("Imóvel removido com sucesso!");
        navigation.navigate('Home');
      })
      .catch(error => {
        alert("Erro ao remover Imóvel!");
        console.log(error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./img/HomeMatcHAlpha.png')}
      />
      <Image
        style={styles.image}
        source={require('./img/HomeMatcHAlpha.png')}
      />
      <TouchableOpacity style={styles.button} onPress={() => ''}>
        <Text style={styles.buttonLabel}>Nova Foto</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ marginTop: 10, flex: 1 }}
          placeholder={'Cidade...'}
          onChangeText={onChangeCidade}
          value={cidade}
        />
        <TextInput
          style={{ marginTop: 10, flex: 1 }}
          placeholder={'Bairro...'}
          onChangeText={onChangeBairro}
          value={bairro}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ marginTop: 10, flex: 1 }}
          placeholder={'Rua...'}
          onChangeText={onChangeRua}
          value={rua}
        />
        <TextInput
          style={{ marginTop: 10, flex: 1 }}
          placeholder={'Número...'}
          onChangeText={onChangeNumero}
          value={numero}
        />
      </View>
      <TextInput
        style={{ marginTop: 10 }}
        placeholder={'Descrição...'}
        onChangeText={onChangeDescricao}
        value={descricao}
      />
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ marginTop: 10 }}
          placeholder={'Metragem Quadrática...'}
          onChangeText={onChangeMetrosQuadrados}
          value={metrosQuadrados}
        />
        <TextInput
          style={{ marginTop: 10 }}
          placeholder={'Preco...'}
          onChangeText={onChangePreco}
          value={preco}
        />
      </View>
      <View style={{ flexDirection: 'row', paddingBottom: 20, }}>
        <TouchableOpacity style={styles.buttonMenor} onPress={() => handleDeleteImovel()}>
          <Text style={{
            alignSelf: 'center',
            fontSize: 14,
            color: '#633015',
          }}>Deletar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          marginTop: 20,
          padding: 5,
          backgroundColor: '#E4B7A0',
          width: '33%',
        }} onPress={() => handleEdicaoImovel()}>
          <Text style={styles.buttonLabel}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  buttonMenor: {
    marginRight: 15,
    marginLeft: 50,
    marginTop: 20,
    alignSelf: 'center',
    padding: 5,
    backgroundColor: '#E4B7A0',
    width: '33%',
    height: '50%',
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
  buttonLabel: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#633015',
  },
  logo: {
    marginTop: 30,
    alignSelf: 'center',
    width: 180,
    height: 70,
  }
});

export default EdicaoImovel;