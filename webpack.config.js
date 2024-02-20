const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ruleForJavascript =  {
  test: /\.js$/, // regex todos los archivos que terminen en .js
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic', // Por defecto, es classic. El automatic, cuando se necesite el import de React, babel lo va a importar solo
        }
      ]
    ],
  }
};

const ruleForStyles = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
};

const rules = [
  ruleForJavascript,
  ruleForStyles,
];


module.exports = (env, args) => {
  const { mode } = args;
  const isProduction = mode === 'production';

  return {
    // entry: './src/utils.js', -> Por defecto, es el punto de entrada de webpack
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build'),
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' }),
    ],
    module: { rules },
    devServer: {
      open: true, // Abre el browser automáticamente
      port: 3001,
      client: {
        overlay: true, // abre un overlay con los posibles errores
      }
    },
    devtool: 'source-map', // crea un map de tu código real - En cuanto a seguridad es para tener en cuenta
  }
};