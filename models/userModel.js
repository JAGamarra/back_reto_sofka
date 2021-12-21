const { Schema, model } = require("mongoose");

const userSchema = Schema({
  username: {
    type: String,
    require,
  },
  score: {
    type: Number,
    require,
  },
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const User = model("User", userSchema);

module.exports = User;
