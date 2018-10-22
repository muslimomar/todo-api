// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Users').insertOne({
    //   name: 'Rolyan Ali',
    //   location: 'Efrin',
    //   age: 19
    // }, (err,result) => {
    //   if(err) {
    //     return console.log('Unable to insert the data: ', err);
    //   }
    //
    //   console.log(result.ops[0]._id.getTimestamp());
    // })

    client.close();

});
