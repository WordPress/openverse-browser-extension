const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const target = process.env.TARGET;
if (target && ['chrome', 'firefox', 'opera', 'edge'].includes(target)) {
  console.info(`\x1b[1;32mBuilding for ${target}...\x1b[m`);
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
    path: path.resolve(__dirname, 'dist', target),
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

if (target === 'edge') {
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
