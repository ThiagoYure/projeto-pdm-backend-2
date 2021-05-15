import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import Anuncios from './Anuncios';
import Login from './Login';
import CadastroUsuario from './CadastroUsuario';
import CadastroImovel from './CadastroImovel';
import DetalheImovel from './DetalheImovel';
import EdicaoImovel from './EdicaoImovel';
import Perfil from './Perfil';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
Icon.loadFont();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Anuncios"
      activeColor="#633015"
      inactiveColor="#a17e6b"
      barStyle={{
        backgroundColor: '#E4B7A0',
      }}
      labeled={false}
    >
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),
      }} name="Anuncios">
        {() => (
          <Stack.Navigator initialRouteName="Anuncios">
            <Stack.Screen name="Anuncios" component={Anuncios} />
            <Stack.Screen name="DetalheImovel" component={DetalheImovel} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <Icon name="account-circle" color={color} size={26} />
        ),
      }} name="Login">
        {() => (
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const TabsUser = () => {
  return (
    <Tab.Navigator initialRouteName="Home"
      activeColor="#633015"
      inactiveColor="#a17e6b"
      barStyle={{
        backgroundColor: '#E4B7A0',
      }}
      labeled={false}
    >
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),
      }} name="Home">
        {() => (
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="EdicaoImovel" component={EdicaoImovel} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <Icon name="home-plus" color={color} size={26} />
        ),
      }} name="CadastroImovel" component={CadastroImovel} />
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <Icon name="cog" color={color} size={26} />
        ),
      }} name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tab">
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="TabsUser" component={TabsUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*<Stack.Navigator>
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="CadastroImovel" component={CadastroImovel} />
        <Stack.Screen name="DetalheImovel" component={DetalheImovel} />
        <Stack.Screen name="EdicaoImovel" component={EdicaoImovel} />
      </Stack.Navigator>*/

export default Routes;