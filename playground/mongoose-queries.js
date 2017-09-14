const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var id = "59ba0b60dfb6a4490fe9898833";
if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
} else {
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
  }).catch((e) => {
    console.log(e);
  });
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
