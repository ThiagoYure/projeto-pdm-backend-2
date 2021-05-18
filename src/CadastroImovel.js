import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import api from './services/Api';
import ImovelService from './services/imovelService';
import { setId, setToken, getUser, getId, getToken } from './services/PersistToken';

const CadastroImovel = ({ navigation }) => {
  // TODO mover para context
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');
  
  const [cidade, onChangeCidade] = useState('');
  const [bairro, onChangeBairro] = useState('');
  const [rua, onChangeRua] = useState('');
  const [numero, onChangeNumero] = useState(null);
  const [descricao, onChangeDescricao] = useState('');
  const [metrosQuadrados, onChangeMetrosQuadrados] = useState('');
  const [preco, onChangePreco] = useState('');

  const [imagePath, onChangeImagePath] = useState('');
  const [imagem, onChangeImagem] = useState('');

  useEffect(() => {
    getId().then(res => setUserId(res));
    getToken().then(res => setToken(res));
  }, []);

  const handleSubmit = async () => {
    const data = {
      cidade,
      bairro,
      rua,
      numero,
      descricao,
      preco: parseInt(preco),
      metrosQuadrados: parseInt(metrosQuadrados),
    };
    api
      .post('real-estate', data, {headers: {authorization: token}})
      .then(async res => {
        const directoryName = `${userId}/${res.data.id}`;
        const uri = await ImovelService.create(imagePath, directoryName);
        console.log(uri);
        alert("Imóvel cadastrado com sucesso");
      })
      .catch(err => {
        alert('Erro ao registrar');
        console.log(err);
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
        onChangeImagePath(response.uri);
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./img/HomeMatcHAlpha.png')}
      />
      <TouchableOpacity style={styles.button} onPress={()=>{handleAddImage()}}>
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
      <View style={{paddingBottom: 20, }}>
        <TouchableOpacity style={{
          marginTop: 20,
          alignSelf: 'center',
          padding: 5,
          backgroundColor: '#E4B7A0',
          width: '33%',
        }} onPress={() => handleSubmit()}>
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