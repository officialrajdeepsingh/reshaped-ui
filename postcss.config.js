/** @type {import('postcss-load-config').Config} */

const config = require("reshaped/config/postcss");

module.exports = {
  plugins: {
    ...config.plugins,
    tailwindcss: {},
  },
};
