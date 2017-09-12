/**
 * Created by wayne.zeng on 2016/6/8.
 */

const path = require('path')

const config = {
    
    entry: path.resolve(__dirname + 'main.js'),

    output: {
        path: path.resolve(__dirname + 'dist'),
        filename: 'bundle.js'
    },

    devtool: 'eval-source-map'

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
    }
}

module.exports = config