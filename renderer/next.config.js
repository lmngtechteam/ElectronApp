const isProd = process.env.NODE_ENV === "production";
const withImages = require('next-images');
const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');
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

module.exports = withPlugins([
  
  [withPWA, {
    pwa: {
      disable: !isProd,
      dest: 'public',
      runtimeCaching: [
        {
          urlPattern: /.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'static-font-assets',
            expiration: {
              maxEntries: 4,
              maxAgeSeconds: 7 * 24 * 60 * 60
            }
          }
        },
        {
          urlPattern: /.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'static-image-assets',
            expiration: {
              maxEntries: 64,
              maxAgeSeconds: 24 * 60 * 60 // 24 hours
            }
          }
        },
        {
          urlPattern: /.(?:js)$/i,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'static-js-assets',
            expiration: {
              maxEntries: 16,
              maxAgeSeconds: 24 * 60 * 60 // 24 hours
            }
          }
        },
        {
          urlPattern: /.(?:css|less)$/i,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'static-style-assets',
            expiration: {
              maxEntries: 16,
              maxAgeSeconds: 24 * 60 * 60 // 24 hours
            }
          }
        },
        {
          urlPattern: /.(?:json|xml|csv)$/i,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'static-data-assets',
            expiration: {
              maxEntries: 16,
              maxAgeSeconds: 24 * 60 * 60 // 24 hours
            }
          }
        },
        {
          urlPattern: /.*/i,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'others',
            expiration: {
              maxEntries: 16,
              maxAgeSeconds: 24 * 60 * 60 // 24 hours
            }
          }
        }
      ]
    },
  }],
],withImages({nextConfig,exclude: path.resolve(__dirname, 'src/assets/svg')}));

