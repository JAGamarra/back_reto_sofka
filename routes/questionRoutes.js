const express = require("express");
const QuestionController = require("../controller/questionController");

class QuestionRoutes {
  constructor() {
    this.router = express.Router();
    this.config();
  }
  config() {
    const questionController = new QuestionController();
    this.router.get("/question", questionController.getQuestions);
    this.router.post("/question", questionController.createQuestion);
  }
}

module.exports = QuestionRoutes;
