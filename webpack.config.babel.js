/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';

const BUILD_DIR = path.resolve(__dirname, 'build/');
const APP_DIR = path.resolve(__dirname, 'src/');

const config = {
    entry: `${APP_DIR}/index.js`,
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
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: APP_DIR,
                loaders: ['react-hot', 'babel'],
            },
            {
                test: /\.json$/,
                loaders: ['json'],
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]',
            },
            {
                test: /\.css$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                ],
                exclude: [
                    path.resolve(`${APP_DIR}/index.css`),
                    path.resolve('node_modules'),
                ],
            },
            {
                test: /\.css$/,
                loader: 'file?name=[name].[ext]',
                include: [
                    path.resolve(`${APP_DIR}/index.css`),
                    path.resolve('node_modules'),
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
                ],
            },
        ],
    },
};

export default config;
