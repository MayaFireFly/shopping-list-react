const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry:'./src/index.js',
    module:{
      rules:[
        {
          test:/\.(js|jsx)$/,
          exclude:/node_modules/,
          use:['babel-loader','eslint-loader']       
        },
        {
          test: /\.css$/, use: ['style-loader','css-loader']
        },
        {
          test: /\.(png|svg|jpg|gif|ico)$/,
          use: ['file-loader']
        }
      ]
    },
    resolve:{
      extensions:['*', '.js', '.jsx', '.css']
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
    ], 
  };   
};