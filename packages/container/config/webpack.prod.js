const { merge } = require('webpack-merge');
const ModuleFederationWebpackPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const common = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationWebpackPlugin({
            name: 'container',
            remotes: {
                marketingModule: `sharingMarketingModule@${ domain }/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies
        }),
    ]
}

module.exports = merge( common, prodConfig );