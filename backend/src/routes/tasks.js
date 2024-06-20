const express = require("express");
const router = express.Router();

const Task = require("../mongoose/schemas/task");

router.post("/api/task/create", async (request, response) => {
  const { body } = request;
  console.log(body);
  const newTask = new Task(body);
  try {
    const savedUser = await newTask.save();
    return response.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
    return response.sendStatus(400);
  }
});

router.get("/api/tasks", async (req, res) => {
  try {
    const allTasks = await Task.find({});
    return res.status(200).json(allTasks);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Tasks not Found!" });
  }
});

module.exports = router;
