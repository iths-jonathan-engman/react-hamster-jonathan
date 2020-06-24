const { db } = require('./../db');
const { Router } = require('express');

const router = new Router();

router.get('/', async (req, res) => {

    let hamsters = db
    .get('hamsters')
    .value()
    
    res.send(hamsters);
})

router.get('/random', (req, res) => {

    let hamsters = db
    .get('hamsters')
    .value();
    const randomHamster = hamsters[Math.floor(Math.random() * hamsters.length)];

    res.send(randomHamster);
})

router.get('/:id', (req, res) => {
    
    let hamster = db
    .get('hamsters')
    .find({ id: parseInt(req.params.id )})
    .value();

    res.send(hamster);
})

router.put('/:id/results', async (req, res) => {

    let hamster = await db
    .find({ id: parseInt(req.params.id )})
    .value();

    let updatedHamster = {
        ...hamster,
        wins: hamster.wins + 1,
        defeats: hamster.defeats + 1,
        games: hamster.games + 1
    }

    db.find({ id: parseInt(req.params.id)})
    .assign(updatedHamster)
    .write();

    res.send({ msg: 'Results updated!' });
})

module.exports = router;