const path = require('path');

module.exports = {
    mode: 'production',
    entry: './functions/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/functions'),
        filename: 'app.js',
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    resolve: {
        extensions: ['.js', '.php']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};
