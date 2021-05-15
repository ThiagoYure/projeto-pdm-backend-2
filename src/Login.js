import React from 'react';
import {Text, View, Button } from 'react-native';

const Login  = ({ navigation }) => {
    return (
      <View>
        <Text>Login</Text>
        <Button title="Logar" onPress={() => navigation.navigate('TabsUser')}/>
        <Button title="Me Cadastrar" onPress={() => navigation.navigate('CadastroUsuario')}/>
      </View>
    );
}

export default Login;