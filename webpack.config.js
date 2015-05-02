webpack = require("webpack");

module.exports = {
    context: __dirname + "/assets/themes/bootstrap/resources/",
    entry: [
        "./material/js/ripples.min.js",
        "./material/js/material.min.js",
        "./app/main.js"
    ],
    output: {
        path: __dirname + "/assets/",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]

};
