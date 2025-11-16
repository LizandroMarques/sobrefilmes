const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = function override(config) {
  config.plugins.push(
    new WorkboxPlugin.GenerateSW({
      skipWaiting: true,
      clientsClaim: true,
    })
  );

  return config;
};
