const path = require("path");

module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "dist"), // dist/build
    filename: "main.bundle.js",
  },
  mode:'development' // development/production
};
