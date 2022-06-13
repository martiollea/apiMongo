const User = require("./user.model");
const Book = require("../book/book.model");

const findMany = async (req, res) => {
  try {
    const docs = await User.find().lean().exec();
    res.status(200).json({ results: docs });
  } catch (e) {
    res.status(500).json({ error: "Internal error" });
  }
};

const createOne = async (req, res) => {
  try {
    const newUser = req.body;
    const doc = await User.create(newUser);
    res.status(200).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Creation failed" });
  }
};

const updateOne = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!doc) {
      return res.status(404).json({ error: "Not found" });
    }
    return res.status(200).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Cannot update" });
  }
};

const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await User.findOne({ _id: id });
    if (!doc) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Cannot get user" });
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await User.findOneAndDelete({ _id: id }, { new: true });
    if (!doc) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Cannot delete" });
  }
};

const findAllofOne = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Book.find({ user: id }).lean().exec();
    if (!doc) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Cannot get books" });
  }
};

module.exports = {
  findMany,
  createOne,
  updateOne,
  findOne,
  deleteOne,
  findAllofOne,
};
