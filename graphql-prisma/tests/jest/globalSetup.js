require("babel-register");
require("@babel/polyfill");
const server = require("../../src/server").default;
module.exports = async () => {
  // Do something to start the app up
  global.httpServer = await server.start({ port: 4000 });
};
