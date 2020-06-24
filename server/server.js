const express = require('express');
const app = express();
const path = require('path');
app.use(express.json())

const serverPort = process.env.PORT || 1234;


console.log('dirname', __dirname + '/../build');
app.use(express.static(__dirname + '/../build'));

//Routes
app.use('/api/', express.static('public'));
app.use('/api/assets', express.static('assets'));

const hamstersRoute = require('./routes/hamsters');
app.use('/api/hamsters', hamstersRoute);

const chartsRoute = require('./routes/charts');
app.use('/api/charts', chartsRoute);

const gamesRoute = require('./routes/games');
app.use('/api/games', gamesRoute);

const statsRoute = require('./routes/stats');
app.use('/api/stats', statsRoute);

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/../build/index.html'),
//     function(err) {
//         if (err) {
//             res.status(500).send(err)
//         }
//     })
// })

app.get('/api/hamsters', (req, res) => {
    console.log('GET /api', req.url);
    let array = getHamstersFromDatabase();
    res.send(JSON.stringify(array));
})

app.listen(serverPort, () => console.log('Server is listening on port: ' + serverPort));


function getHamstersFromDatabase() {
    return [
        { id: 1, name: 'Nils', favFood: 'morot', loves: 'backendprogrammering' },
        { id: 2, name: 'Greta', favFood: 'kål', loves: 'frontendprogrammering' }
    ]
}