const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const Course = require('../models/Course'); 
const keys = require('../config/config');

exports.signup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    
    const savedUser = await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: savedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    const token = jwt.sign({ userId: user._id }, keys.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Authentication successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error signing in', error: error.message });
  }
};

exports.addCourse = async (req, res) => {
  try {
   
    const { title, duration } = req.body;
    console.log(req.body);
    
    const newCourse = new Course({
      title,
      duration
    });
    
    
    const savedCourse = await newCourse.save();

    res.status(201).json({ message: 'Course added successfully', course: savedCourse });
  } catch (error) {
    res.status(500).json({ message: 'Error adding course', error: error.message });
  }
};
