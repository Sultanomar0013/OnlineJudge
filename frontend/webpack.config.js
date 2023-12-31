const path = require('path');

module.exports = {
    entry: './src/index.js', 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), 
    },
    resolve: {
        fallback: {
            crypto: require.resolve('crypto-browserify'),
            util: require.resolve('util/'),
            stream: require.resolve('stream-browserify'),
        },
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },

        ],
    },

};
