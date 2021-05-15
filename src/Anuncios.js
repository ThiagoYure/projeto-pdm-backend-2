import React from 'react';
import {Text, View, Button } from 'react-native';

const Anuncios  = ({ navigation }) => {
    return (
      <View>
        <Text>bem vindo ao HomeMatcH!</Text>
        <Button title="Detalhes do Imóvel" onPress={() => navigation.navigate('DetalheImovel')}/>
      </View>
    );
}

export default Anuncios;