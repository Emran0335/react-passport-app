const express = require("express");
const router = express.Router();
const {
  checkSchema,
  validationResult,
  matchedData,
} = require("express-validator");
const User = require("../mongoose/schemas/user");
const {
  createUserValidationSchemaForBody,
} = require("../utils/validationSchemas");
const { hashPassword } = require("../utils/helper");

router.get("/api/user", (req, res) => {
  res.send({ message: "I am from users router" });
});

router.post(
  "/api/user",
  checkSchema(createUserValidationSchemaForBody),
  async (request, response) => {
    const result = validationResult(request);
    if (!result.isEmpty()) return response.status(400).send(result.array());

    const data = matchedData(request);
    console.log(data); // Data will return request.body object through
    data.password = await hashPassword(data.password);
    console.log(data);
    const newUser = new User(data);
    try {
      const savedUser = await newUser.save();
      return response.status(201).json(savedUser);
    } catch (error) {
      console.log(error);
      return response.sendStatus(400);
    }
  }
);

module.exports = router;
