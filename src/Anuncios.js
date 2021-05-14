import React from 'react';
import {Text, View, Button } from 'react-native';

const Anuncios  = ({ navigation }) => {
    return (
      <View>
        <Text>bem vindo ao HomeMatcH!</Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')}/>
      </View>
    );
}

export default Anuncios;