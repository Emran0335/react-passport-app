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

module.exports = router;
