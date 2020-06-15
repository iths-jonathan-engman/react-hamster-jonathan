const { Router } = require('express');
const { db } = require('./../db');

const router = new Router();

router.get('/', (req, res) => {
    
    let games = db
    .get('games')
    .value()

    res.send(games);
})

router.post('/', async (req, res) => {

    db
    .get('games')
    .push({
        id: Date.now(),
        timeStamp: Date.now(),
        ...req.body
    })
    .write()

    res.send({ msg: 'Game saved!' });
})

module.exports = router;