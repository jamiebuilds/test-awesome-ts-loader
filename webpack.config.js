const path = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'),

  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'bundle.js',
  },

  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          declaration: true,
          declarationDir: './types',
        },
      },
    ],
  },
  plugins: [new CheckerPlugin()],
};
