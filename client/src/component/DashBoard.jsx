import Navbar from './Navbar';
import Card from './Card'; 
import data from '../data/data'; 
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [allCourse, setAllcourse] = useState({});
  async function getAllCourse() {
    try {
      const response = await axios.get("https://freecodecamp-bxal.vercel.app/allcourse");
      // console.log(response.data);
      setAllcourse(response.data.msg);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllCourse();
  }, []);

  return (
    <div>
      <Navbar isSignedIn={true} />
      <div className="container mx-auto mt-10 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to freeCodeCamp.org</h1>
        <div className="text-center mb-4">
          <p className="text-lg">"I have not failed. I've just found 10,000 ways</p>
          <p className="text-lg">that won't work"</p>
          <span className="text-xs">- Thomas A. Edison</span>
        </div>
        <div className="flex flex-col items-left mb-10 w-1/2 px-5">
          {allCourse.length>0 ? allCourse.map((course, index) => (
            <div key={index}>
              <Card title={course.title} duration={course.duration} />
            </div>
          ))
            :
            "No Any Course Available , Add New Courses !"
          }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
