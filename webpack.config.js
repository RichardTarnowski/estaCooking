const path = require('path');

module.exports = {
    mode: 'production',
    entry: './functions/app.js', // ajusta esto si es necesario
    output: {
        path: path.resolve(__dirname, 'dist/functions'),
        filename: 'app.js', // ajusta esto si es necesario
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
        extensions: ['.js', '.php'], // asegúrate de que incluya .php si estás utilizando archivos PHP
    },
};
