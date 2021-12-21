const express = require("express");
const UserController = require("../controller/userController");

class UserRoutes {
  constructor() {
    this.router = express.Router();
    this.config();
  }

  config() {
    //Crear objeto UserController
    const userController = new UserController();
    this.router.post("/user", userController.saveUserAndScore);
    this.router.get("/user", userController.getUsers);
  }
}

module.exports = UserRoutes;
