const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const GHHandler = require('./server/ghhandler.js');

const app = express();
const corsOptions = {
	origin: '*'
};

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(cors(corsOptions));

let h = new GHHandler();
app.get("/user/:name/repos", (req, res) => { h.getRepos(req, res); });
app.get('/user/:name/repos/count', (req, res) => { h.getRepoCount(req, res); });

app.listen(app.get('port'), () => {
	console.log("Listening on port ", app.get('port'));
});