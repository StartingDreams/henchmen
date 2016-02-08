var path = require("path"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    cache: true,
    //context: path.resolve("src"),
    entry: [
        "bootstrap-loader",
        "font-awesome-webpack",
        "./node_modules/angular-gridster/dist/angular-gridster.min.css",
        "./src/angular/index",
        "./src/scss/styles.scss"
    ],
    output: {
        path: path.resolve("public/"),
        publicPath: "/",
        filename: "js/bundle.js"
    },
    plugins: [
        new ExtractTextPlugin("./css/styles.css")
    ],
    devServer: {
        contentBase: "src/html",
        historyApiFallback: true
    },
    resolve: {
        extensions: ["", ".js"]
    },
    module: {
        preLoaders: [
            {
                test: /\.js/,
                loader: "jshint-loader",
                exclude: /(node_modules)/
            },
            {
                test: /\.js/,
                loader: "jscs-loader",
                exclude: /(node_modules)/
            }
        ],
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader"),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
                include: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader"),
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: "file-loader?name=./media/images/[hash].[ext]",
                exclude: /node_modules/
            },
            {
                test: /\.(ttf|eot)$/,
                loader: "file-loader?name=./media/[hash].[ext]",
                exclude: /node_modules/
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?minetype=application/font-woff&name=./media/fonts/[hash].[ext]"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=./media/fonts/[hash].[ext]"
            },
            {
                test: /\.html$/,
                loader: "raw-loader",
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loaders: ["ng-annotate", "babel-loader"],
                exclude: /node_modules/
            }
        ]
    },
    jshint: {
        emitErrors: true,
        failOnHint: true
    }
};
