import React from 'react';
import {Text, View, Button } from 'react-native';

const Perfil  = ({ navigation }) => {
    return (
      <View>
        <Text>Perfil</Text>
        <Button title="Sair" onPress={() => navigation.navigate('Anuncios')}/>
      </View>
    );
}

export default Perfil;