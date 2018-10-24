const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5bd02997060e664fbad3b1f8';

if(!ObjectID.isValid(id)) {
console.log('Object not valid');
}

//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo ', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   console.log('Todo By Id:  ', todo);
// }).catch((e) => {
//   console.log('Invalid id');
// });
