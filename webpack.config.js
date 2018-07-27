const path = require('path');

module.exports = {
    context:  path.resolve(__dirname + "/src/Frontend/"),
    entry:  path.resolve(__dirname + "/src/Frontend/index.tsx"),
    mode: 'development',
    output: {
        filename: "main.bundle.js",
        path: path.resolve(__dirname , 'public/js'),
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader"
            },
        ]
    },
};