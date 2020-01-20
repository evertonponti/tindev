const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb+srv://everton:13509@omnistack-ncwan.mongodb.net/tindev?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);