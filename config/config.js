var development = {
  rethinkdb: {
    host: 'localhost',
    port: 28015,
    db: 'naija_material_db'
  }
};

var test = {
  rethinkdb: {
    host: 'localhost',
    port: 28015,
    db: 'naija_material_db'
  }
};

var production = {
  rethinkdb: {
    host: 'localhost',
    port: 28015,
    db: 'naija_material_db'
  }
};

var config = {
  development: development,
  test: test,
  production: production
};

module.exports = config;