// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
      name:'Rolyan'
    },{
      $set: {
        name: 'Lolo'
      }
      }
    ,{
      returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    // client.close();

});
