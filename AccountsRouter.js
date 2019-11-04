//imports and dependencies
const express = require('express');
const db = require('./data/dbConfig');
const router = express.Router();

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

router.get('/', (req, res) =>{
    db('accounts')
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

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

module.exports = router