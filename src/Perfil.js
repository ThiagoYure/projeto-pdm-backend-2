import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import api from './services/Api';
import { setId, setToken, getId, getToken } from './services/PersistToken';

const Perfil = ({ navigation }) => {

  const [id, onChangeId] = useState('');
  const [token, onChangeToken] = useState('');
  const [nome, onChangeNome] = useState('');
  const [cidade, onChangeCidade] = useState('');
  const [bairro, onChangeBairro] = useState('');
  const [rua, onChangeRua] = useState('');
  const [numero, onChangeNumero] = useState('');
  const [telefone, onChangeTelefone] = useState('');
  const [email, onChangeEmail] = useState('');
  const [senha, onChangeSenha] = useState('');
  useEffect(() => {
    getToken().then(res => {
      onChangeToken(res);
      getId().then(r => {
        api
          .get(`users/${r}`)
          .then(res => {
            onChangeId(r);
            onChangeNome(res.data.nome);
            onChangeRua(res.data.rua);
            onChangeBairro(res.data.bairro);
            onChangeCidade(res.data.cidade);
            onChangeNumero(res.data.numero);
            onChangeEmail(res.data.email);
            onChangeSenha(res.data.senha);
            onChangeTelefone(res.data.telefone);
          })
          .catch(error => {
            console.log(error.error);
          });
      });
    });
  }, []);

  const handleEdicaoUser = () => {
    const data = { id, nome, email, telefone, cidade, rua, bairro, numero };
    console.log("Oi" + token);
    api
      .put(`users/${id}`, data, { headers: { 'authorization': token } })
      .then(res => {
        alert("Usuário atualizado com sucesso!");
      })
      .catch(error => {
        alert("Problemas ao atualizar usuário!")
        console.log(error);
      });
  };

  const handleLogout = () => {
    setId('');
    setToken('');
    navigation.navigate('Tabs');
  };

  const handleDeletarUser = () => {
    api
      .delete(`users/${id}`, { headers: { 'authorization': token } })
      .then(res => {
        alert("Conta apagada com sucesso!");
        handleLogout();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./img/HomeMatcHAlpha.png')}
      />
      <Text style={styles.title}>Perfil</Text>
      <TextInput
        style={{ marginTop: 10 }}
        placeholder={'Digite aqui seu nome...'}
        onChangeText={onChangeNome}
        value={nome}
      />
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
        placeholder={'Telefone...'}
        onChangeText={onChangeTelefone}
        value={telefone}
      />
      <TextInput
        style={{ marginTop: 10 }}
        placeholder={'Email...'}
        onChangeText={onChangeEmail}
        value={email}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleEdicaoUser()}>
        <Text style={styles.buttonLabel}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
        <Text style={styles.buttonLabel}>Sair</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        marginBottom: 20,
        marginTop: 20,
        alignSelf: 'center',
        padding: 5,
        backgroundColor: '#E4B7A0',
        width: '50%',
      }} onPress={() => handleDeletarUser()}>
        <Text style={styles.buttonLabel}>Apagar Conta</Text>
      </TouchableOpacity>
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

export default Perfil;