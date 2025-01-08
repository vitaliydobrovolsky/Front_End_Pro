const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  
  entry: './src/index.js',

  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  
  mode: 'production',

  
  plugins: [
    new CleanWebpackPlugin(), 
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],

  
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(), 
      new OptimizeCssAssetsPlugin(), 
    ],
  },

 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'sass-loader', 
        ],
      },
    ],
  },

 
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true, 
    hot: true, 
    open: true, 
    port: 8080, 
  },

  
  watch: true,
};
