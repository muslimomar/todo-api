// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');


    db.collection('Users').find({name: 'Rolyan Ali'}).toArray().then( (data) => {
      console.log('Data: ',data);
    }, (err) => {
      console.log('Error: ', err);
    })

    // client.close();

});
