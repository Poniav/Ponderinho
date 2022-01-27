const { ProvidePlugin } = require("webpack");

module.exports = function override(config, env) {
  config.resolve.fallback = {
    url: require.resolve("url"),
    fs: false,
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify"),
    crypto: require.resolve("crypto-browserify"),
    path: require.resolve("path-browserify"),
    stream: require.resolve("stream-browserify"),
  };

  config.plugins.push(
    new ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    })
  );

  return config;
};
