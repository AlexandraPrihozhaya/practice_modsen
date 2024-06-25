const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let target = 'web'; // в режиме разработки browserslist не используется
if (process.env.NODE_ENV === 'production') { // Режим production, если 
  // при запуске вебпака было указано --mode=production
  mode = 'production';
  target = 'browserslist'; // в продакшен режиме используем browserslist
}

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css', // Формат имени файла
  }), // Добавляем в список плагинов
];

module.exports = {
  mode, // Сокращенная запись mode: mode в ES6+
  target,
  entry: './src/index.tsx', 
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    assetModuleFilename: 'assets/[hash][ext][query]', 
    clean: true,
  },
  
  devServer: {
    hot: true,
    historyApiFallback: true, // Включает обработку истории для одностраничных приложений
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'], 
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets') 
    }
  },


  module: {
    rules: [
      { test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
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
            cacheDirectory: true, // Использование кэша для избежания рекомпиляции
            // при каждом запуске
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