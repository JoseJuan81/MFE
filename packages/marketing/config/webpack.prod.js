const { merge } = require('webpack-merge');
const ModuleFederationWebpackPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const common = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationWebpackPlugin({
            name: 'sharingMarketingModule',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/boostrap.js'
            },
            shared: packageJson.dependencies
        }),
    ]
}

module.exports = merge( common, prodConfig );