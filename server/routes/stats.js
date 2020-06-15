const { Router } = require('express');
const { db } = require('./../db');

const router = new Router();

router.get('/', async (req, res) => {

    let games = db
    .get('games')
    .value();

    res.send({ total: games.length });
})

module.exports = router;