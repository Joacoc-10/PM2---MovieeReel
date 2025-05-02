//La app recibe las solicisitudes y las lleva hacia un Router

const express = require('express');
const router = require('./routes/moviesRoutes');
const morgan = require('morgan');
const cors = require ('cors');

const app = express();


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/movies',router);

module.exports = app;