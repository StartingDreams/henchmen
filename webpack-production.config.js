var WebpackStrip = require("strip-loader"),
    devConfig = require("./webpack.config");

var striploader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: WebpackStrip.loader("console.log")
};

devConfig.module.loaders.push(striploader);

module.exports = devConfig;
