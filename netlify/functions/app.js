const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
    // Construir la ruta al archivo app.php
    const scriptPath = path.resolve(__dirname, 'app.php');

    // Imprimir la ruta construida para depuración
    console.log(`Script path: ${scriptPath}`);

    try {
        // Ejecutar el script PHP y capturar la salida
        const output = execSync(`php ${scriptPath}`);
        return {
            statusCode: 200,
            body: output.toString(),
        };
    } catch (error) {
        // Imprimir el mensaje de error para depuración
        console.error(`Error executing PHP script: ${error.message}`);
        return {
            statusCode: 500,
            body: `Error: ${error.message}`,
        };
    }
};
