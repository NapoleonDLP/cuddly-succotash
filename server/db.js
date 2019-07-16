const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/succotash', {useNewUrlParser:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('We are connected to DB!'));

//TODO: build schema and model
module.export = db;
