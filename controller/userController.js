const User = require("../models/userModel.js");

class UserController {
  async saveUserAndScore(req, res) {
    try {
      const { body } = req;
      const { username, score } = body;
      const user = new User({
        username,
        score,
      });

      const savedUser = await user.save();
      res.status(200).json(savedUser);
    } catch (error) {
      console.log(error);
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
