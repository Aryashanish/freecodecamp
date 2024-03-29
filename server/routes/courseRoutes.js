const express = require('express');
const router = express.Router();
const Course = require('../models/Course');


router.post('/courses', async (req, res) => {
  try {
    const { title, duration } = req.body;
    const course = new Course({ title, duration });
    await course.save();
    res.status(201).json({ message: 'Course created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;