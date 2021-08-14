const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(app);

io.on("connection", (socket) => {
  console.log(socket.id);
});

server.listen(process.env.PORT || 8000, () => {
  console.log("server on listening 8000");
});
