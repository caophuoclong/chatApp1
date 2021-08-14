const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const dashboardRoute = require("routes/dashboard.route");
const loginRoute = require("routes/login.route");
const registerRouter = require("routes/register.route");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const io = require("socket.io")(server, {
  cors: corsOptions,
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
io.on("connection", (socket) => {
  console.log(socket.id);
});

server.listen(process.env.PORT || 8000, () => {
  console.log("server on listening 8000");
});
