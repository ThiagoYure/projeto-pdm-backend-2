import 'react-native-gesture-handler';
import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';
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
          <Stack.Navigator initialRouteName="Anuncios" >
            <Stack.Screen name="Anuncios" options={{title: ""}} component={Anuncios} />
            <Stack.Screen name="DetalheImovel" options={{title: ""}} component={DetalheImovel} />
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
            <Stack.Screen name="Login" options={{title: ""}} component={Login} />
            <Stack.Screen name="CadastroUsuario" options={{title: ""}} component={CadastroUsuario} />
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
            <Stack.Screen name="Home" component={Home} options={{
              title: "",
              headerLeft: () => { null }
            }} />
            <Stack.Screen name="EdicaoImovel" component={EdicaoImovel} options={{title: ""}}/>
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <Icon name="home-plus" color={color} size={26} />
        ),
      }} name="CadastroImovel">
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="CadastroImovel" component={CadastroImovel} options={{
              title: "",
              headerLeft: () => { null }
            }} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <Icon name="cog" color={color} size={26} />
        ),
      }} name="Perfil">
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="Perfil" component={Perfil} options={{
              title: "",
              headerLeft: () => { null }
            }} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tab">
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="TabsUser" component={TabsUser} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tela: {
    backgroundColor: '#F6EEE0',
  },
});

export default Routes;