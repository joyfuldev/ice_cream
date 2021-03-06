const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: {
        main: "./src/frontend/js/main.js",
        postdetail: "./src/frontend/js/postdetail.js",
        search: "./src/frontend/js/search.js",
        comment: "./src/frontend/js/comment.js",
        profile: "./src/frontend/js/profile.js",
        bookmark: "./src/frontend/js/bookmark.js",
        subscription: "./src/frontend/js/subscription.js",
        editprofile: "./src/frontend/js/editprofile.js",
        date: "./src/frontend/js/date.js"
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "css/styles.css",
    })],
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "assets"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env", { targets: "defaults" }]],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
};