import React from 'react';
import {Text, View, Button } from 'react-native';

const Home  = ({ navigation }) => {
    return (
      <View>
        <Text>Home</Text>
        <Button title="Editar Imóvel" onPress={() => navigation.navigate('EdicaoImovel')}/>
      </View>
    );
}

export default Home;