const express = require("express");
const router = express.Router();
const usersRouter = require("./users.js");
const tasksRouter = require("./tasks.js");

router.use(usersRouter);
router.use(tasksRouter);

module.exports = router;
