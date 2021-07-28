const mongoose = require('mongoose');
require('dotenv').config();

module.exports = {
    init: () =>{
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        };
        
        mongoose.connect(process.env.mongooseDB, dbOptions)
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () =>{
            console.log('Database Connected successtion !');
        });

        mongoose.connection.on('disconnected', () =>{
            console.log('Database Connected fail !');
        });

        mongoose.connection.on('erro', (err) =>{
            console.log('Database Fail cmnr ! because : ' + err );
        });
    }
}