require('dotenv').config();
const mongoose = require('mongoose')

const connection = {};

const connectMongo = async () => {
  if(connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;

  //console.log(connection.isConnected);
};

//export default connectMongo;
module.exports = connectMongo;
