// const express = require('express');
// const app = express();

// const PORT = process.env.PORT || 3000;

// app.use(express.json());

// let path = require('path');
// app.get('/*', (req, res) => {
//     let filePath = path.resolve('./build/index.html')
//     res.sendFile(filePath)
// })
// app.use(express.static(__dirname + '/../build'));

// // app.use('/', express.static('public'));
// app.use('/assets', express.static('assets'));

// const hamstersRoute = require('./routes/hamsters');
// app.use('/api/hamsters', hamstersRoute);

// const chartsRoute = require('./routes/charts');
// app.use('/api/charts', chartsRoute);

// const gamesRoute = require('./routes/games');
// app.use('/api/games', gamesRoute);

// const statsRoute = require('./routes/stats');
// app.use('/api/stats', statsRoute);


// app.listen(PORT, () => {
//     console.info('Hamsterwars armed and ready on port 3000.')
// })

const express = require('express');
const app = express();
const path = require('path');
const serverPort = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/pictures'))
app.use(express.json());
app.use(express.static(__dirname + '/../build'));

//Require routes
const chartsRoute = require('./routes/charts');
app.use('/api/charts', chartsRoute);

const gamesRoute = require('./routes/games');
app.use('/api/games', gamesRoute);

const hamstersRoute = require('./routes/hamsters');
app.use('/api/hamsters', hamstersRoute);

const statsRoute = require('./routes/stats');
app.use('/api/stats', statsRoute);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/../build/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
//App listening to port 
app.listen(serverPort, () => {
    console.log(`Get ready for hamster wars on port ${serverPort}!`)
})