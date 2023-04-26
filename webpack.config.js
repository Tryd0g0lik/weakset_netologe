// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const EslintPlugin = require("eslint-webpack-plugin");
var request = require("request");
var webpack = require("webpack");
// const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

module.exports = {
	entry: "./src/index.js",
	output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/js/",
    libraryTarget: "this"
  },
	devServer: {
		open: true,
		host: "localhost",
	},
	plugins: [
		new EslintPlugin({
      files: path.resolve(__dirname, "./src/index.js")
		}),
		new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: false
      }
		}),

		new MiniCssExtractPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        minimize: true,

      }
    })

		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				}
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, "css-loader"],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
  },

};

// module.exports = () => {
// 	if (isProduction) {
// 		config.mode = "production";
// 	} else {
// 		config.mode = "development";
// 	}
// 	return config;
// };
