const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://renurose2402:user@cluster0.930i3w2.mongodb.net/?retryWrites=true&w=majority"; 

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  client.connect();

  module.exports = client;