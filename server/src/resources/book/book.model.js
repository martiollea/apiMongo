const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    author: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    finalDate: {
      type: Date,
      required: true,
    },
    user: {
      type: Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: false }
);

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
