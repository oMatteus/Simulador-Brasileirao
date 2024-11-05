const path = require('path');  //CommonJS
const Dotenv = require('dotenv-webpack');  //Chamando dotenv


module.exports = {
    mode: 'development', //modo desenvolvedor para manter a estrutura original
    entry: './src/assets/js/main.js', //arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'docs', 'assets', 'js'), //Caminho de saída usando o resolve para que a formatação do caminho fique de acordo com sistema operacional (__dirname é a pasta atual)
        filename: 'bundle.js' //nome do arquivo de Saida
    },
    plugins: [
        new Dotenv()
    ],
    module: {
        //Rules é um array de objetos para aplicarmos as regras do webpack
        rules: [
            //Como vamos trabalhar somente com js, vamos criar apenas uma regra, mas eventualmente em conversão de outras tecnologias, haverá a necessidade de mais regras.
            {
                exclude: /node_modules/, //pasta a ser desconsiderado pelo webpack (expressão regular)
                test: /\.js$/, //Arquivo de teste (expressão regular para indicar que termina com .js)
                use: {
                    loader: 'babel-loader', //loader que instalamos anteriormente
                    options: {
                        presets: ['@babel/env'] //preset do babel (é um array pois pode haver mais de um preset)
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'assets/resource',
            },
        ],
    },
    devtool: 'source-map' //mapeia o código compilado para facilitar o apontamento de erros no debug
};