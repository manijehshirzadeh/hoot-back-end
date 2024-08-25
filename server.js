const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const testJWTRouter = require("./controllers/test-jwt");
const usersRouter = require("./controllers/users");
const profilesRouter = require("./controllers/profiles");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
server.use(cors());
server.use(express.json());

// Routes go here
server.use("/test-jwt", testJWTRouter);
server.use("/users", usersRouter);
server.use("/profiles", profilesRouter);

server.listen(3005, () => {
  console.log("The express server is ready!");
});
