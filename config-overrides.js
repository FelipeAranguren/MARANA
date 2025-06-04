const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    'react-router-dom': path.resolve(__dirname, 'node_modules/react-router-dom'),
  })
);