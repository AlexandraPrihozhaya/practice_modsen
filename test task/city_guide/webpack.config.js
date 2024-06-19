const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let target = 'web'; 
if (process.env.NODE_ENV === 'production') { 
  mode = 'production';
  target = 'browserslist'; 
}

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css', 
  }), 
];

module.exports = {
  mode,
  target,
  entry: './src/index.tsx',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  
  devServer: {
    hot: true,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      { test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }, // Добавляем загрузчики стилей
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === 'production' ? 'asset' : 'asset/resource', 
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, 
            presets: [
              '@babel/preset-env', 
              '@babel/preset-react',
              '@babel/preset-typescript', 
            ], 
          },
        },
      },
    ],
  },
  plugins,
};