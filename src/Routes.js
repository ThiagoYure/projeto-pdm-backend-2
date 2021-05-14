import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Home from './Home';
import Anuncios from './Anuncios';
import Login from './Login';
/*import CadastroUsuario from './CadastroUsuario';
import CadastroImovel from './CadastroImovel';
import DetalheImovel from './DetalheImovel';
import EdicaoImovel from './EdicaoImovel';
import Perfil from './Perfil';

<Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Perfil" component={Perfil} />
          <Stack.Screen name="CadastroImovel" component={CadastroImovel} />
          <Stack.Screen name="DetalheImovel" component={DetalheImovel} />
          <Stack.Screen name="EdicaoImovel" component={EdicaoImovel} />*/

const Stack = createStackNavigator();

const Routes = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Anuncios" component={Anuncios} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Routes;