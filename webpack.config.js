const path = require("path");

module.exports = {
  entry: "./src/components/Card.js",
  output: {
    filename: "card.bundle.js",
    path: path.resolve(__dirname, "public"), // Save output in the public folder
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
};
