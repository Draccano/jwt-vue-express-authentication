const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

require('./passport');

const loginRouter = require('./routes/user');
app.use('/user', loginRouter);

const userMessages = require('./routes/message');
app.use('/', userMessages);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('connected to mongo DB');
});

app.listen(process.env.PORT || 8081);
