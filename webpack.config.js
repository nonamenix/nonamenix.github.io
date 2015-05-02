var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + "/assets/themes/bootstrap/resources/",
    entry: [
        "./material/js/ripples.min.js",
        "./material/js/material.min.js",
        "./app/main.js"
    ],
    output: {
        path: __dirname + "/bundle/",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.s(c|a)ss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },
            {
                test: /\.(eot|woff|ttf|svg)$/,
                loader: "file"
            }
            //{
            //    test: /\.(eot|woff|ttf|svg|png|jpg)$/,
            //    loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            //}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        //new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        })
    ]
};
