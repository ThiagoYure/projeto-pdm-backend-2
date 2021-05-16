import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

const CadastroUsuario = ({ navigation }) => {
  const [nome, onChangeNome] = useState('');
  const [cidade, onChangeCidade] = useState('');
  const [bairro, onChangeBairro] = useState('');
  const [rua, onChangeRua] = useState('');
  const [numero, onChangeNumero] = useState('');
  const [telefone, onChangeTelefone] = useState('');
  const [email, onChangeEmail] = useState('');
  const [senha, onChangeSenha] = useState('');

  const handleCadastroUser = () => {
    const data = { email, senha, nome, telefone, cidade, rua, bairro, numero };
    api
      .post('users', data)
      .then(res => {
        alert("Usuário cadastrado com sucesso!");
        navigation.navigate('Login');
      })
      .catch(error => {
        alert("Erro ao cadastrar usuário!");
        console.log(error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./img/HomeMatcHAlpha.png')}
      />
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={{ marginTop: 10 }}
        placeholder={'Digite aqui seu nome...'}
        onChangeText={onChangeNome}
        value={nome}
      />
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ marginTop: 10, flex: 1  }}
          placeholder={'Cidade...'}
          onChangeText={onChangeCidade}
          value={cidade}
        />
        <TextInput
          style={{ marginTop: 10, flex: 1  }}
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
          style={{ marginTop: 10, flex: 1  }}
          placeholder={'Número...'}
          onChangeText={onChangeNumero}
          value={numero}
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
      <TextInput
        style={{ marginTop: 10 }}
        placeholder={'Senha...'}
        onChangeText={onChangeSenha}
        value={senha}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleCadastroUser()}>
        <Text style={styles.buttonLabel}>Cadastrar</Text>
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

export default CadastroUsuario;