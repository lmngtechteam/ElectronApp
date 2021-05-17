const isProd = process.env.NODE_ENV === "production";
const withImages = require('next-images');
const withPWA = require('next-pwa');
// const withPlugins = require('next-compose-plugins');
const path = require('path');

const nextConfig = {
  distDir: 'build',
  webpack: (config) => Object.assign(config, {
    target: 'electron-renderer',
  }),
};


if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

module.exports = withImages({nextConfig,exclude: path.resolve(__dirname, 'src/assets/svg')});

