const Question = require("../models/questionModel");

class QuestionController {
  async getQuestions(req, res) {
    try {
      const questions = await Question.find();
      res.status(200).json(questions);
    } catch (e) {
      console.error(e);
    }
  }

  async createQuestion(req, res) {
    try {
      const { body } = req;
      const { question, answers, correctAnswer, category } = body;
      const newQuestion = new Question({
        question,
        answers,
        correctAnswer,
        category,
      });

      const savedQuestion = await newQuestion.save();
      res.status(201).json(savedQuestion);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = QuestionController;
