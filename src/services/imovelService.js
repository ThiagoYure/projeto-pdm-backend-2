import storage from '@react-native-firebase/storage';

export default {
  async create(imagePath) {
    const fullPath = await this.uploadImage(imagePath);
    return await storage().ref(fullPath).getDownloadURL();
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

  async uploadImage(imagePath) {
    let timestamp = new Date().getTime();
    let snapshot = await storage().ref(`/${timestamp}.jpg`).putFile(imagePath);
    return snapshot.metadata.fullPath;
  },
};
