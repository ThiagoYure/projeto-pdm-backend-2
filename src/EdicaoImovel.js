import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import api from './services/Api';
import ImovelService from './services/imovelService';
import { setToken, getUser, getId, getToken } from './services/PersistToken';

const EdicaoImovel = ({ navigation, route }) => {
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');

  const [id, onChangeId] = useState(route.params.id);
  const [cidade, onChangeCidade] = useState(route.params.cidade);
  const [bairro, onChangeBairro] = useState(route.params.bairro);
  const [imagens, onChangeImagens] = useState(route.params.imagens);
  const [rua, onChangeRua] = useState(route.params.rua);
  const [numero, onChangeNumero] = useState(route.params.numero);
  const [descricao, onChangeDescricao] = useState(route.params.descricao);
  const [metrosQuadrados, onChangeMetrosQuadrados] = useState(route.params.metrosQuadrados+'');
  const [preco, onChangePreco] = useState(route.params.preco+'');
  const [imagePath, onChangeImagePath] = useState('');
  const [imagem, onChangeImagem] = useState(route.params.imagens);

  useEffect(() => {
    getId().then(res => setUserId(res));
    getToken().then(res => setToken(res));
  }, []);

  const handleEdicaoImovel = async () => {
    console.log(id);
    let imagens;
    if(imagePath != ''){
      imagens = await ImovelService.create(imagePath);
    }else{
      imagens = imagem;
    }
    console.log(imagePath);
    console.log(imagens);
    const data = {
      cidade,
      bairro,
      rua,
      numero,
      descricao,
      imagens,
      preco: parseInt(preco),
      metrosQuadrados: parseInt(metrosQuadrados),
    };
    console.log(data);
    api
      .put(`real-estate/${id}`, data,  {headers: {authorization: token}})
      .then(res => {
        alert("Imóvel atualizado com sucesso!");
      })
      .catch(error => {
        alert("Erro ao atualizar Imóvel!");
        console.log(error);
      });
  };

  const handleAddImage = () => {
    launchImageLibrary({}, response => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        console.log('ImagePicker error: ', response.error);
        return;
      } else {
        onChangeImagem(response.uri);
        onChangeImagePath(response.uri);
      }
    });
  };

  const handleDeleteImovel = () => {
    api
      .delete(`real-estate/${id}`, {headers: {authorization: token}})
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
        source={{
          uri: imagem
        }}
      />
      <TouchableOpacity style={styles.button} onPress={() =>{handleAddImage()} }>
        <Text style={styles.buttonLabel}>Mudar Foto</Text>
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
          keyboardType="numeric"
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
          keyboardType="numeric"
        />
        <TextInput
          style={{ marginTop: 10 }}
          placeholder={'Preco...'}
          onChangeText={onChangePreco}
          value={preco}
          keyboardType="numeric"
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