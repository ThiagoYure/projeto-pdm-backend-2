import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import api from './services/Api';
import imovelService from './services/imovelService';
import { setId, setToken, getUser, getId } from './services/PersistToken';

const CadastroImovel = ({ navigation }) => {
  const userId = getId;
  const [cidade, onChangeCidade] = useState('');
  const [bairro, onChangeBairro] = useState('');
  const [rua, onChangeRua] = useState('');
  const [numero, onChangeNumero] = useState('');
  const [imagens, onChangeImagens] = useState('');
  const [imagePath, onChangeImagePath] = useState('');
  const [descricao, onChangeDescricao] = useState('');
  const [metrosQuadrados, onChangeMetrosQuadrados] = useState('');
  const [preco, onChangePreco] = useState('');
  const [imagem, onChangeImagem] = useState('');

  const handleCadastroImovel = () => {
    console.log(imagePath);
    const data = { metrosQuadrados, imagens, imagePath, descricao, userId, cidade, rua, bairro, numero, preco };
    const newData = imovelService.create(data);
    api
      .post(`real-estates`, newData)
      .then(res => {
        alert("Imóvel cadastrado com sucesso!");
      })
      .catch(error => {
        console.log(error);
      });
  };

  const addImagem = () => {
    onChangeImagePath(imagePath+","+imagem);
  };

  const handlePhoto = () => {
    launchImageLibrary({}, response => {
      if(response.didCancel){
        return;
      }
      onChangeImagem(response.uri);
      addImagem();
    })
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./img/HomeMatcHAlpha.png')}
      />
      <TouchableOpacity style={styles.button} onPress={()=>{handlePhoto()}}>
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
        <TouchableOpacity style={{
          marginTop: 20,
          alignSelf: 'center',
          padding: 5,
          backgroundColor: '#E4B7A0',
          width: '33%',
        }} onPress={() => handleCadastroImovel()}>
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

export default CadastroImovel;