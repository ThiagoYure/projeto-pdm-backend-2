import storage from '@react-native-firebase/storage';

export default {
  async create(imovel) {
    imovel.imagens = await this.uploadImage(imovel.userId, imovel.imagePath);
    return imovel;
  },

  async list(id) {
    const query = storage()
      .ref(id)
      .list()
      .then(result => {
        return result.items.forEach(ref => ref.fullPath);
      });
    console.log(query);
    return query;
  },

  async uploadImage(directory, imagePath) {
    let timestamp = new Date().getTime();
    let snapshot = await storage()
      .ref(`/${directory}/${timestamp}.jpg`)
      .putFile(imagePath);
    return snapshot.metadata.fullPath;
  },
};
