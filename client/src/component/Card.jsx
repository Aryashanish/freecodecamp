import React from 'react';
import { FaJs, FaCode, FaChartBar, FaServer,FaReact } from 'react-icons/fa';
import { LuClipboardCheck } from "react-icons/lu";
import { FaLaptopFile } from "react-icons/fa6";
   

const Card = ({ title, duration }) => {
  
  const selectIcon = (title) => {
    if (title.toLowerCase().includes('responsive')) {
      return <FaLaptopFile className="inline-block mr-1" size={30} />;
    } else if (title.toLowerCase().includes('responsive')) {
      return <FaLaptopFile className="inline-block mr-1" />;
    } else if (title.toLowerCase().includes('javascript') || title.toLowerCase().includes('js')) {
      return <FaJs className="inline-block mr-1" size={30} />;
    } else if (title.toLowerCase().includes('front end')) {
      return <FaReact className="inline-block mr-1" size={30} />; // Use FaReact for React icon logo
    } else if (title.toLowerCase().includes('data visualization')) {
      return <FaChartBar className="inline-block mr-1" size={30} />;
    } else if (title.toLowerCase().includes('back end') || title.toLowerCase().includes('api')) {
      return <FaServer className="inline-block mr-1"  size={30}/>;
    } else if (title.toLowerCase().includes('quality assurance') || title.toLowerCase().includes('qa')) {
      return <LuClipboardCheck className="inline-block mr-1"  size={30}/>;
    } else {
      // Default icon if no specific match found
      return <FaCode className="inline-block mr-1" />;
    }
  };
  return (
    <div className="bg-gray-200 border-black border-2 shadow-md p-2 mb-2 h-15 w-full">
         <div className="flex items-center">
        {selectIcon(title)}
      <p>{title}</p>
      <p className="text-gray-600"> ({duration})</p>
      </div>
    </div>
  );
};

export default Card;



