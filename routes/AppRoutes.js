const AppRouter = require("express").Router();
const CourseController = require("../controller/CourseController.js");

AppRouter.post("/form", CourseController.SaveData);

module.exports = AppRouter;
