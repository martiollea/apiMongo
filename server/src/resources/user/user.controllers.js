const User = require("./user.model");

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

module.exports = {
  findMany,
  createOne,
};
