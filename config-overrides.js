const rewireReactHotLoader = require('react-app-rewire-hot-loader');

/* config-overrides.js */
module.exports = function override(config, env) {
  config.target = 'electron-renderer';
  config = rewireReactHotLoader(config, env);
  return config;
};
