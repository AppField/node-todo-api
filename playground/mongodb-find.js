const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server ', err);
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('59872d5edca62d25f058af5d')
    // }).toArray()
    //     .then(docs => {
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     })
    //     .catch(err => {
    //         console.log('Unable to fetch todos ', err);
    //     });

    // db.collection('Todos').find().count()
    //     .then(count => {
    //         console.log(`Todos count: ${count}`);
    //     })
    //     .catch(err => {
    //         console.log('Unable to fetch todos ', err);
    //     });

    db.collection('Users').find({name: 'Roman'})
        .toArray()
        .then(docs => {
            console.log(JSON.stringify(docs, undefined, 2));
        })
        .catch(err => {
            console.log(err);
        });


    db.close();
});



