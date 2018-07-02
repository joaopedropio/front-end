const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./server/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/client/public'));
app.use(express.static(__dirname + '/client/views'));
app.use('/', routes);

const { appPort } = require('./configs/app');
app.listen(appPort, () => console.log(`Running on port ${appPort}...`));