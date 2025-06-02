const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
  entry: {
    main: './index.js',
    analitic: './analitic.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  } ,
  resolve: {
    extensions: ['.js', '.json', '.png'],
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
        template: './index.html'
    }),
    new CleanWebpackPlugin()
  ] ,
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        },
        {
               test: /\.(png|jpe?g|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'images/[hash][ext][query]'
      }
        },
        {
          test: /\.(ttf|woff|woff2|eot)$/,
            use: ['file-loader']
        },
        {
          test: /\.xml$/,
            use: ['xml-loader']
        },
         {
          test: /\.csv$/,
            use: ['csv-loader']
        }

    ]
  }
}