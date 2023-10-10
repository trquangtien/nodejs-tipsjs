const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const compression = require('compression');

const app = express();

// init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init database
require('./dbs/init.mongodb');

const { checkOverloadConnect } = require('./helpers/check.connect');

checkOverloadConnect();

// init routes
app.get('/', (req, res, next) => {
  const strCompress = 'Hello TipsJS';

  return res.status(200).json({
    message: 'Welcome Fan Tips JS',
    metadata: strCompress.repeat(1000)
  });
});

// handle errors

module.exports = app;
