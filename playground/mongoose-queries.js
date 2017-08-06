const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const id = '59877bbd3c43e42d0cd59f18';
if (!ObjectID.isValid(id)) {
    return console.log('Id is not valid');
}

//
// Todo.find({
//     _id: id
// }).then(todos => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then(todo => {
//     console.log('Todo: ', todo);
// });

Todo.findById(id).then(todo => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by id: ', todo);
}).catch(e => console.log(e));


User.findById('5987836add2834d425be968e')
    .then(user => {
        if (!user) {
            return console.log('User not found');
        }
        console.log(JSON.stringify(user, undefined, 2));
    }).catch(e => console.log(e));