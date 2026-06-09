const express = require("express");
const router = express.Router();

const Course = require("../models/Courses");

router.post("/", async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
});

router.post("/courses", async (req, res) => {
  const course = await Course.insertMany(req.body);
  res.json(course);
});

router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

router.delete("/:id", async (req, res) => {
    const course = await Course.findByIdAndDelete(req.params.id);

    res.json(course);
});

router.delete("/", async (req, res) => {
    const result = await Course.deleteMany({});

    res.json({
        deletedCount: result.deletedCount,
        message: "All Courses Deleted Successfully..."
    });
});


router.put("/:id", async (req, res) => {
    const course = await Course.findByIdAndUpdate(
        req.params.id,
        req.body,
        // @ts-ignore
        { returnDocument: true }
    );

    res.json(course);
});

module.exports = router;
