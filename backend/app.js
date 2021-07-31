var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

// auth0
const { auth } = require('express-openid-connect');
var configAuth = require('./config/auth');
// config env
var dotenv = require('dotenv').config();
// setup the connection
var { connect } = require('./config/connection');

var indexRouter = require('./routes/index');
var candidateRouter = require('./routes/candidate');
var questionRouter = require('./routes/question');
var videoRouter = require('./routes/video');

var app = express();

// set-auth0
app.use(auth(configAuth));
// connection-to-db
connect(process.env.MONGO_CONNECTION_URL);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const api = process.env.API_V1;
app.use('/', indexRouter);
app.use(`${api}/candidate`, candidateRouter);
app.use(`${api}/question`, questionRouter);
app.use(`${api}/video`, videoRouter);

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
