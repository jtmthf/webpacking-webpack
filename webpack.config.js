const path = require("path");

module.exports = {
  entry: "./config/webpack.config.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "webpack.config.js",
    path: path.resolve(__dirname, "config", "build"),
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  node: {
      __dirname: false
  }
};
