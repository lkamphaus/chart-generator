var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  mode: "development",
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
                    ["@babel/preset-env", {loose: true, modules: false}],
                    "@babel/preset-react",
                      {
                        plugins: ['@babel/plugin-proposal-class-properties'
                        , '@babel/plugin-transform-runtime'
                        ],
                      },
                  ],
          plugins: ["@babel/plugin-syntax-jsx"]
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          }
        ]
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      }
    ],
  },
};
