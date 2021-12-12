const mongoose = require('mongoose');
let password = 'admin';
let databaseName = 'db';
if (process.env.NODE_ENV === 'test') {
    databaseName = 'testdb';
}

mongoose.connect(`mongodb+srv://admin:test@cluster0.ezoad.mongodb.net/databaseName?retryWrites=true&w=majority`, 
    {useNewUrlParser: true, useUnifiedTopology: true});