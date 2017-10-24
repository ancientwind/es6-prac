/**
 * Created by wayne.zeng on 2016/6/8.
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
const ENV = process.env.npm_lifecycle_event
const isTest = ENV === 'test'
const isProd = ENV === 'build'

const getDevtool = () => {
    if (isProd) {
        return 'source-map'
    }
    else if (isTest) {
        return 'inline-source-map'
    }
    else {
        return 'eval-source-map'
    }
}

const config = {
    
    entry: './main.js',

    output: {
        path: path.resolve(__dirname + 'dist'),
        filename: 'bundle.js'
    },

    devtool: getDevtool(),

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower-components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })
    ]
}

module.exports = config