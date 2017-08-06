const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save()
        .then(doc => {
            console.log('Todo successfully saved ', doc);
            res.send(doc);
        })
        .catch(err => {
            console.log('Unable to save doc ', err);
            res.status(400).send(err);
        })
});


app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});