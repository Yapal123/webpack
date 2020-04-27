const path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.s[ac]ss/,
            use: [{
                    loader: 'file-loader',
                    options: {
                        regExp: /\.s[ac]ss/,
                        name: 'main.css',
                        outputPath: 'css'
                    }
                },
                'sass-loader'
            ]
        }]
    }
};