var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'liftedcrv'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/liftedcrv-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'liftedcrv'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/liftedcrv-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'liftedcrv'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/liftedcrv-production'
  }
};

module.exports = config[env];
