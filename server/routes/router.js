const express = require("express");
const route = express.Router();

const controller = require("../controller/controller");


// API
route.post("/api/users", controller.createUser);
route.get("/api/users", controller.findUser);
route.get("/api/users/:id", controller.findUserById)
route.put("/api/users/:id", controller.updateUser);
route.delete("/api/users/:id", controller.deleteUser);

module.exports = route;
