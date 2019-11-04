//imports and dependencies
const express = require('express');
const AccountsRouter = ('./AccountsRouter.js');
const db = require('./data/dbConfig.js');

//server
const server = express();


//middleware
server.use(express.json());
server.use('/api/accounts', AccountsRouter)

//export
module.exports = server;