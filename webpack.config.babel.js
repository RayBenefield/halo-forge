import webpack from 'webpack';
import path from 'path';

const BUILD_DIR = path.resolve(__dirname, 'build/');
const APP_DIR = path.resolve(__dirname, 'src/');

const config = {
    entry: `${APP_DIR}/index.js`,
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: APP_DIR,
                loaders: ['react-hot', 'babel'],
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]',
            },
        ],
    },
};

export default config;
