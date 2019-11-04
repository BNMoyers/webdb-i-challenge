//imports and dependencies
const express = require('express');
const AccountsRouter = require('./AccountsRouter.js');
const db = require('./data/dbConfig.js');

//server
const server = express();


//middleware
server.use(express.json());
server.use('/api/accounts', AccountsRouter);

//basic server test

// server.get('/', (req, res) => {
//     res.send('Testing')
// })
//export
module.exports = server;