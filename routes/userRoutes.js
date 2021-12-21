const express = require("express");
const UserController = require("../controller/userController");

class UserRoutes {
  constructor() {
    this.router = express.Router();
    this.config();
  }

  config() {
    //Crear objeto UserController
    const userC = new UserController();
    this.router.post("/user", userC.saveUserAndScore);
    this.router.get("/user", userC.getUsers);
  }
}

module.exports = UserRoutes;
