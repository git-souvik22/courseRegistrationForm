const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: Number, min: 10, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  gender: { type: String, required: true },
  course: { type: String, required: true },
});

const CourseModel = mongoose.model("courses", CourseSchema);

module.exports = CourseModel;
