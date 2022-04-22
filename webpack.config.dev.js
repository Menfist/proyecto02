//archivo de configuración de webpack
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//objeto de configuraciones
module.exports = {
    entry: './src/index.js', //punto de entrada principal
    output: {
        path: path.resolve(__dirname,'dist'), //directorio de salida de la compilacion
        filename: 'bundle.js', //nombre del archivo de salida
    },
    resolve:{
        extensions: ['.js','.jsx'] //extensiones a utilizar
    },
    mode: 'development',
    module:{ //Reglas a tener
        rules: [
            {
                test:/\.(js|jsx)$/, //estructura de extensiones
                exclude:/node_modules/, //excluimos carpeta
                use: {
                    loader:'babel-loader', //
                }
            },
            {   //configurar loader de HTML
                test: /\.html$/, //Identificar archivos HTML
                use : {
                    loader: 'html-loader', //Definimos el loader a utilizar
                }
            },
            { // Reglas para Css
                test: /\.s[ac]ss$/,//Expresion para identificar si es un css o un sass
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]                
            }            
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html', //Indicamos el template a utilizar
            filename: './index.html', //lo que resulte nombrarlo y ubicarlo así
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer:{ //configuración del servidor de webpack
        static: {
            directory: path.join(__dirname, "dist")
          },
        compress: true,
        historyApiFallback:true,
        port: 3006,
    }
}