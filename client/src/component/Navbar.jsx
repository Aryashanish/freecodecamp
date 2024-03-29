import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const Navbar = (props) => {
    const navigate = useNavigate();


    const handleSignOut = () => {
        setIsSignedIn(false); 
        navigate('/'); 
    };

    return (
        <nav className="flex justify-between items-center bg-gray-800 p-2">
            <div className="flex items-center bg-gray-800 rounded-lg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 20l9-9M3 11a8 8 0 113.73 6.77L21 21"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            <div className="flex items-center justify-center">
                <h1 className="text-white text-2xl font-bold text-center">freeCodeCamp</h1>
            </div>

            <div>
                {props.isSignedIn ? (
                    <NavLink to="/courses" className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Course
                    </NavLink>
                ) : (
                    ""
                )}
                {props.isSignedIn ? (
                    
                    <NavLink to="" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Menu
                    </NavLink>
                ) : (
                    
                    <NavLink to="/signin" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                        Sign In 
                    </NavLink>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
