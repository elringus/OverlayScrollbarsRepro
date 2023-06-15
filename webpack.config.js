const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),
        new webpack.EnvironmentPlugin({ "PUBLIC_URL": "./" })
    ],
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "main.js",
        clean: true
    },
    devtool: "source-map"
};
