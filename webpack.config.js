var path = require('path');
var outputDirectory = './dist';

config= {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  
   module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader?minimize=false',
      query: {
        presets: ['es2015', 'react' ]
      }
  }],
   }

};
module.exports = config;