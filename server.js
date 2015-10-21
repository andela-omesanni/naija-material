global._ = require('lodash');
global.t = require('moment');

var cookieParser = require('cookie-parser'),
    env = process.env.NODE_ENV || 'development',
    config = require('./config/config')[env],
    thinky = require('./config/thinky'),
    express = require('express'),
    session = require('express-session'),
    RDBStore = require('express-session-rethinkdb')(session),
    app = express(),
    bodyParser = require('body-parser'),
    routes = require('./api/routes');

(function run(appdir) {

  app.use(cookieParser());

  app.dir = appdir;

  // things to do on each request
  app.use(function (req, res, next) {
    // log each request in development environment
    if(env !== 'production') console.log(t().format('HH:MM'), req.method, req.url, req.socket.bytesRead); 
    // tell the client what firebase to use
    //res.cookie('rootRef', rootRef.toString());

    next();
  });

  // static files
  app.use(express.static(app.dir + '/public'));

  // Standard error handling
  app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  // to support JSON-encoded bodies
  app.use(bodyParser.json());
  // to support URL-encoded bodies
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  thinky.r.connect(config.rethinkdb, function(err, conn) { 
    thinky.r.db(config.rethinkdb.db).tableCreate('session').run(conn, function(){});
  });
  
  var rDBStore = new RDBStore({
    connectOptions: {
      db: config.rethinkdb.db,
      host: config.rethinkdb.host,
      port: config.rethinkdb.port
    },
    table: 'session',
    sessionTimeout: 86400000,
    flushInterval: 60000
  });

  app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false, store: rDBStore}));

  routes(app, config);

  // Fire up server
  var server = app.listen(process.env.PORT || 8000, function() {
    console.log('Listening on port %d', server.address().port);
  });

})(process.cwd());

module.exports = app;