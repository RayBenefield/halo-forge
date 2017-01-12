/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const BabiliPlugin = require("babili-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, 'build/');
const APP_DIR = path.resolve(__dirname, 'src/');

const config = {
    devtool: 'source-map',
    entry: `${APP_DIR}/index.js`,
    resolve: {
        alias: {
            react: 'preact-compat',
            'react-dom': 'preact-compat',
            'react-addons-shallow-compare': 'shallow-compare',
        },
        extensions: ['.jsx', '.js', '.json'],
        modules: [
            'node_modules',
            path.resolve(__dirname),
        ],
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new CopyWebpackPlugin([
            { from: `${APP_DIR}/index.html` },
            { from: `${APP_DIR}/manifest.json` },
            { from: `${APP_DIR}/browserconfig.xml` },
            { from: `${APP_DIR}/icons`, to: `${BUILD_DIR}/icons` },
        ]),
        new webpack.optimize.AggressiveMergingPlugin(),
        new BabiliPlugin(),
        new OfflinePlugin({
            ServiceWorker: {
                entry: `${APP_DIR}/sw.js`,
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: APP_DIR,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ["es2015", { "modules": false }],
                        "react",
                    ],
                },
            },
            {
                test: /\.html$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                ],
                exclude: [
                    path.resolve('node_modules'),
                ],
            },
            {
                test: /\.css$/,
                loader: 'file-loader?name=[name].[ext]',
                include: [
                    path.resolve('node_modules'),
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
                ],
            },
        ],
    },
};

module.exports = config;
