const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const firefoxExtra = require('./src/manifest_extra.firefox.json');

const target = process.env.TARGET;
if (target && ['chrome', 'firefox', 'opera', 'edge'].includes(target)) {
  console.info(`\x1b[1;32mBuilding for ${process.env.TARGET}...\x1b[m`);
} else {
  throw new Error("Please specify environment variable TARGET: 'chrome', 'firefox', 'opera' or 'edge'");
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  devtool: 'cheap-module-source-map',
  entry: {
    './popup/popup': './popup/popup.js',
    './options/options': './options/options.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist', process.env.TARGET),
    filename: '[name].js',
  },
  node: {
    global: false,
  },
  plugins: [
    new CopyPlugin([
      {
        from: `./manifest.json`,
        to: './manifest.json',
        transform(content) {
          if (target === 'firefox') {
            let manifest = JSON.parse(content.toString());
            manifest = { ...manifest, ...firefoxExtra };
            return JSON.stringify(manifest, null, 2);
          }

          return content;
        },
      },
      {
        from: './icons/*',
        to: './icons',
        flatten: true,
      },
      {
        from: './options/*',
        to: './options/',
        flatten: true,
        ignore: ['*.js', '*.html'],
      },
      {
        from: './popup/*',
        to: './popup/',
        flatten: true,
        ignore: ['*.js'],
      },
      {
        from: './popup/vendors/js/*',
        to: './popup/vendors/js/',
        flatten: true,
      },
      {
        from: './popup/img/*',
        to: './popup/img/',
        flatten: true,
      },
    ]),
    new webpack.DefinePlugin({
      global: 'window', // Placeholder for global used in any node_modules
    }),
  ],
};

if (process.env.TARGET === 'edge') {
  module.exports.plugins.push(
    new CopyPlugin([
      {
        from: './options/options.edge.html',
        to: './options/options.html',
      },
    ]),
  );
} else {
  module.exports.plugins.push(
    new CopyPlugin([
      {
        from: './options/options.html',
        to: './options/options.html',
      },
    ]),
  );
}
