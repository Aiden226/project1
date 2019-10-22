const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})

module.exports = {
    mode: 'development', //production 
    
    module: {
        rules: [
          { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
          
          {
            test: /\.(png|jpg|gif|bmp|jpeg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                },
            }, ],
        }, 
        {
          test: /.vue$/,
          loader: 'vue-loader'
        },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
            }
          },
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              'sass-loader',
          ]
          },
          {
            test: /\.less$/,
            use: [ 'style-loader', 'css-loader','less-loader' ]
          },
    
    ],
    },

    plugins: [
        htmlPlugin,
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
        filename: "css/[name].css"
        }),
          new webpack.DefinePlugin({
            'SERVICE_URL': JSON.stringify('https://www.baidu.com')
          })
       ],
    resolve:{
      alias:{
      "vue$":"vue/dist/vue.js"
      }
    }
}