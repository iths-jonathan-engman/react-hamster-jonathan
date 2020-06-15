const express = require('express');
const app = express();

app.use(express.json());


app.use('/', express.static('public'));
app.use('/assets', express.static('assets'));

const hamstersRoute = require('./routes/hamsters');
app.use('/api/hamsters', hamstersRoute);

const chartsRoute = require('./routes/charts');
app.use('/api/charts', chartsRoute);

const gamesRoute = require('./routes/games');
app.use('/api/games', gamesRoute);

const statsRoute = require('./routes/stats');
app.use('/api/stats', statsRoute);


app.listen(3000, () => {
    console.info('Hamsterwars armed and ready on port 3000.')
})