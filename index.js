'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dashboardRoutes = require('./routes/dashboard-Routes');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(dashboardRoutes.routes);


app.listen(3000, () => console.log('App is listning on url http://localhost:3000'));