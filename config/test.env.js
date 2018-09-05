const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"test"',
  API_ROOT: '"http://test.xx.com:8080"',
});
