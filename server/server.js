const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');
const Course =require('./models/Course')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const URL = "mongodb+srv://aryashanish:9525633767@cluster0.j7tl5vl.mongodb.net/freecodecamp?retryWrites=true&w=majority";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors(
    {
        origin: ["https://freecodecamp-nine.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true 
    }
));
mongoose.connect(URL).then( ()=>{
  console.log("DataBase Connected sucessfully");
}).catch( (err)=> {
  console.log(" Database connection failed : "+err);
});

app.post('/signin', async (req, res) => {
  const { name, email, password } = req.body;
  
  try {

    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(404).json({ "msg": "Email already exists" });
    }
  
    const result = await User.create({
      "name": name,
      "email": email,
      "password": password,
    })

    if (result)
      return res.status(201).json({ "msg": result });
    
  } catch (error) {
    console.error('Error signing in:', error);
    return res.status(404).json({ message: 'Somthing Went Wrong' });
  }
});


app.post('/courses', async (req, res) => {
  const { title, duration } = req.body;
  try {
    const newCourse = await Course.create({
      title,
      duration,
    });

    return res.status(201).json({ msg: "Course created successfully", course: newCourse });
    
  } catch (error) {
    console.error('Error creating course:', error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
});

app.get("/allcourse", async (req, res) => {
  const allData = await Course.find({});
  return res.status(201).json({ msg: allData });
})





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
