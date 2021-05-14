import AsyncStorage from '@react-native-community/async-storage';

export const setToken = value => {
  AsyncStorage.setItem('token', value).catch(err => console.log(err));
};

export const getToken = () => {
  return AsyncStorage.getItem('token')
    .then(res => {
      if (res !== null) {
        return res;
      }
    //   console.log('Erro');
    })
    .catch(err => console.log(err));
};

export const setId = value => {
  AsyncStorage.setItem('id', value).catch(err => console.log(err));
};

export const getId = () => {
  return AsyncStorage.getItem('id')
    .then(res => {
      if (res !== null) {
        return res;
      }
    //   console.log('Erro');
    })
    .catch(err => console.log(err));
};
