const { Schema, model } = require("mongoose");

const questionSchema = Schema({
  question: {
    type: String,
    require,
  },
  answers: {
    type: Array,
    require,
  },
  correctAnswer: {
    type: String,
    require,
  },
  category: {
    type: String,
    require,
  },
});

questionSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Question = model("Question", questionSchema);

module.exports = Question;
