const Todo = require("../models/Todo");

// define route handle
exports.getTodo = async (req, res) => {
  try {
    //fetch all todo items from the database
    const todos = await Todo.find({});

    // response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire Todo data is fetched",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    // extract todo item based on ID
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    // data fro given id not find
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data found with given id",
      });
    }

    // data for given id is found
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data successfully fetched`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};
