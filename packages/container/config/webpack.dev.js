const { merge } = require('webpack-merge');
const ModuleFederationWebpackPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const common = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationWebpackPlugin({
            name: 'container',
            remotes: {
                marketingModule: 'sharingMarketingModule@http://localhost:8081/remoteEntry.js'
            }     ,
            shared: packageJson.dependencies
        }),
    ]
}

module.exports = merge( common, devConfig );