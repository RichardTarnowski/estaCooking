const path = require('path');

module.exports = {
    mode: 'production',
    entry: './functions/app.php',
    output: {
        path: path.resolve(__dirname, 'dist/functions'),
        filename: 'app.php',
    },
    module: {
        rules: [
            {
                test: /\.php$/,
                use: 'raw-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.php'],
    },
};
