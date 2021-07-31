'use strict';

module.exports.connect = async(url) => {
    const mongoose = require('mongoose');
    const urlConnection = url;

    // connect it
    await mongoose.connect(urlConnection, {useNewUrlParser: true, useUnifiedTopology: true});
    // grab the connection
    const db = await mongoose.connection;

    // check the error connection
    db.on('error', console.error.bind(console, 'Error connect to the database'));
    console.log(`Connected to database ${db.name}`);
}