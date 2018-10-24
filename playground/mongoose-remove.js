const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndDelete({text: "nodejs"}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndDelete('5bd054d2060e664fbad3c3d9').then((todo) => {
  console.log(todo);
})
