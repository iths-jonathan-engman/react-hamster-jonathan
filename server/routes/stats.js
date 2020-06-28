const { Router } = require('express');
const { db } = require('./../db/index.js');

const router = new Router();

router.get('/', async (req, res) => {
    console.log('GET /api/stats');
    
    let hamsterArray = db
    .get('hamsters')
    .value();
    console.log('GET /api/stats hamsterArray=', hamsterArray);
    

    // res.send({ total: -1 });
    res.send( { hamsterArray } );
})

module.exports = router;