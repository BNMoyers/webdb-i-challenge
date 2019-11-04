//imports and dependencies
const express = require('express');
const router = express.Router;
const db = require('./data/dbConfig');

//requests

//create

router
.post('/add-account', (req, res) => {
    const newAccount = req.body;
    db('accounts')
        .insert(newAccount, 'id')
    .then(accountID => {
        res.status(200).json(accountID)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//read

router.get('/:id', (req, res)=> {
    db('accounts')
    .select()
    .from('accounts')
    .where({ id: req.params.id })
    .first()
    .then(account => {
        account ?
        res.status(200).json(account)
        :  res.status(404).json({ errorMessage: 'Account not found'})
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//update

//delete