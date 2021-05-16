import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import api from './services/Api';
import { setId, setToken } from './services/PersistToken';

const Login = ({ navigation }) => {
  const [email, onChangeEmail] = useState('');
  const [senha, onChangeSenha] = useState('');

  const handleLogin = () => {
    const data = { email, password: senha };
    api
      .post('login', data)
      .then(res => {
        const token = res.data.token;
        const { id } = res.data;
        setToken(token);
        setId(id);
        navigation.navigate('Home');
      })
      .catch(error => {
        alert(error);
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./img/HomeMatcHAlpha.png')}
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={{ marginTop: 10 }}
        placeholder={'Digite aqui seu email...'}
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        style={{ marginTop: 10 }}
        placeholder={'Digite aqui sua senha...'}
        onChangeText={onChangeSenha}
        value={senha}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
        <Text style={styles.buttonLabel}>Entrar</Text>
      </TouchableOpacity>
      <View style={{ alignContent: 'center', flexDirection: 'row', paddingLeft: 40, paddingTop: 20 }}>
        <Text style={styles.buttonLabel}>Não possui conta?</Text>
        <TouchableOpacity style={{
          flex: 1,
          padding: 5,
          width: '33%',
        }} onPress={() => navigation.navigate('CadastroUsuario')}>
          <Text style={{
            fontSize: 18,
            color: '#633015',
          }}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    marginTop: 30,
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

export default Login;