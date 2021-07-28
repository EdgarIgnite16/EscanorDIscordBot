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
        mongoose.Promise = global.Promise;
        //connected
        mongoose.connection.on('connected', () =>{
            console.log('Database Connected successtion !');
        });
        // disconnected
        mongoose.connection.on('disconnected', () =>{
            console.log('Database Connected fail !');
        });
        // error
        mongoose.connection.on('error', (err) =>{
            console.log('Database Fail ! Because : ' + err );
        });
    }
}