import storage from '@react-native-firebase/storage';

export default {
  async create(imovel) {
    this.uploadImage(imovel.userId, imovel.imagePath).then(res => {
      imovel.imagens = res.toString();
      return imovel;
    }).catch(err=>{
      console.log(err);
    });
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
    let timestamp = new Date().getTime();
    let snapshot;
    let snapshots = '';
    imagePath.split(",").forEach( () => {
      storage()
      .ref(`/${directory}/${timestamp}.jpg`)
      .putFile(imagePath).then(snap => {
        snapshot = snap;
        snapshots.push(snapshot.metadata.fullPath);
      }).catch(err=>{
        console.log(err);
      });
    })
    return snapshots;
  },
};
