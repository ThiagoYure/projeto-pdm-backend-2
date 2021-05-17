import storage from '@react-native-firebase/storage';

export default {
  async create(imagePath, directory) {
    return await this.uploadImage(directory, imagePath);
  },

  async list(id) {
    const query = storage()
      .ref(id)
      .list()
      .then(result => {
        return result.items.forEach(ref => ref.fullPath);
      }).catch(err=>{
        console.log(err);
      });
    console.log(query);
    return query;
  },

  async uploadImage(directory, imagePath) {
    let snapshot = await storage()
      .ref(`/${directory}/principal.jpg`)
      .putFile(imagePath);
    return snapshot.metadata.fullPath;
  },
};
