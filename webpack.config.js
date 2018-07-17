const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const path = require('path');
const argvs = require('yargs').argv;
const devMode = process.env.WEBPACK_SERVE || argvs.mode === 'development';

const DEFAULT_PORT = '8000';
const host = process.env.MONACA_TERMINAL ? '0.0.0.0': ( argvs.host ? argvs.host : '0.0.0.0' );
const port = process.env.MONACA_TERMINAL ? argvs.port: ( argvs.port ? argvs.port : DEFAULT_PORT );
const protocol = process.env.MONACA_TERMINAL ? 'https' : 'http';

let webpackConfig = {
  mode: devMode ? 'development' : 'production',

  entry: {
    app: ['./src/main.js']
  },

  output: {
    path: path.resolve(__dirname, 'www'),
    filename: '[name].bundle.js',
  },

  optimization: {
    removeAvailableModules: true,
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    providedExports: true,
  },
  
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css', '.html', '.styl'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src')
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [ 'env' ]
          } 
        }]
      },
      {
        test: /\.vue$/,
        include: path.resolve(__dirname, 'src'),
        use: 'vue-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?\S*)?$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        use: [          
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  
  // See below for dev plugin management.
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebPackPlugin({
      template: 'src/public/index.html.ejs',
      chunksSortMode: 'dependency'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
    }),
    new ProgressBarPlugin(),
  ],
 
  resolveLoader: {
    modules: [ 'node_modules' ]
  },
 
  performance: {
    hints: false
  }
};

/*
* Dev
*/
if(devMode) {

  webpackConfig.devtool = 'eval';

  webpackConfig.serve = {
    port: port,
    host: host,
    devMiddleware: {
      publicPath: '/',
      stats: {
        colors: true,
        errorDetails: true,
        performance: true,
        source: true,
        warnings: true,
        builtAt: true,
      }
    },
    hotClient: true
  };

  // reserve for development plugins
  let devPlugins = [];

  webpackConfig.plugins = webpackConfig.plugins.concat( devPlugins　);
}

module.exports = webpackConfig;