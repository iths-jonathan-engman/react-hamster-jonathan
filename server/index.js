const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

let path = require('path');
app.get('*', (req, res) => {
    let filePath = path.resolve('./build/index.html')
    res.sendFile(filePath)
})
app.use(express.static(__dirname + '/../build'));
//app.use('/', express.static('public'));
app.use('/assets', express.static('assets'));

const hamstersRoute = require('./routes/hamsters');
app.use('/api/hamsters', hamstersRoute);

const chartsRoute = require('./routes/charts');
app.use('/api/charts', chartsRoute);

const gamesRoute = require('./routes/games');
app.use('/api/games', gamesRoute);

const statsRoute = require('./routes/stats');
app.use('/api/stats', statsRoute);


app.listen(PORT, () => {
    console.info('Hamsterwars armed and ready on port 3000.')
})