const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')
const keysTransformer = require('ts-transformer-keys/transformer').default;


module.exports = {
  // entry: {
  //   app:'./src/index.js',
  // },
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  devServer: {
    contentBase: './dist',
    port: 9000,
    hot: true
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  devtool: 'inline-source-map',
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'public/index.html'
    }),

    //热更新
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
        'file-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader', // or 'awesome-typescript-loader'
        options: {
          // make sure not to set `transpileOnly: true` here, otherwise it will not work
          getCustomTransformers: program => ({
              before: [
                  keysTransformer(program)
              ]
          })
        }
      }
    ]
  }
};