import React, { useState } from 'react';
import axios from 'axios'; 
import { NavLink } from 'react-router-dom';

const CourseForm = () => {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !duration) return;

    try {
      const data = {
        title: title,
        duration: duration
      };
      console.log("course data ", data);
      
      const response = await axios.post("https://freecodecamp-bxal.vercel.app/courses", data);

      console.log(response.data); 
      setTitle('');
      setDuration('');
    } catch (error) {
      console.error('Error adding course:', error.message);
      setErrorMessage('An error occurred while adding the course');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className="text-2xl font-semibold mb-4">Course Details</h1>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto ">
      <input
        type="text"
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="block w-full mt-2 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
      />
      <NavLink to="/dashboard"  type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Add Course
      </NavLink>
    </form>
    </div>
  );
};

export default CourseForm;



