const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
    const scriptPath = path.resolve(__dirname, 'app.php');

    try {
        const output = execSync(`php ${scriptPath}`);
        return {
            statusCode: 200,
            body: output.toString(),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: `Error: ${error.message}`,
        };
    }
};
