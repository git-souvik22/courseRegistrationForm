const CourseModel = require("../models/CourseModel.js");

const CourseController = {
  SaveData: async (req, res) => {
    try {
      const userData = new CourseModel({
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        gender: req.body.gender,
        course: req.body.course,
      });
      const savedData = await userData.save();
      if (savedData) {
        res.status(201).json({
          success: true,
          message: "Data successfully saved",
          result: savedData,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Data cannot be Saved",
        });
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Something went wrong: " + err,
      });
    }
  },
};

module.exports = CourseController;
