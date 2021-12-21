const mongoose = require("mongoose");
const connectionString = `mongodb+srv://jgmrra:jgg123@cluster.9c563.mongodb.net/QuizApp?retryWrites=true&w=majority`;

class DatabaseConnection {
  constructor() {
    this.connection();
  }

  async connection() {
    this.conn = await mongoose
      .connect(connectionString)
      .then(() => {
        console.log("Database connected!");
      })
      .catch((err) => {
        console.error(err);
      });

    process.on("uncaughtException", () => {
      mongoose.disconnect();
    });
  }
}

module.exports = DatabaseConnection;
