const { Router } = require('express');
const { db } = require('./../db');

const router = new Router();

router.get('/top', (req, res) => {

    let hamsters = db
    .get('hamsters')
    .value();

    let winValue = [...hamsters].sort((a, b) => (b.wins) - (a.wins))
    .slice(0,5);

    res.send(winValue);
})

router.get('/bottom', (req, res) => {
    
    let hamsters = db
    .get('hamsters')
    .value();

    let winValue = [...hamsters].sort((a, b) => (a.wins) - (b.wins))
    .slice(0,5);

    res.send(winValue);
})

module.exports = router;