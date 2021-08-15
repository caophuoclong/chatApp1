const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const dashboardRoute = require("./routes/dashboard.route");
const loginRoute = require("./routes/auth.route");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectDb = require("./database");
connectDb();
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

app.use("/dashboard", dashboardRoute);
app.use("/auth", loginRoute);
app.use("/message", messageRoute);
server.listen(process.env.PORT || 8000, () => {
  console.log("server on listening 8000");
});
