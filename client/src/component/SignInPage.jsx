import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth,provider} from "../firebase/config"
import {signInWithPopup} from "firebase/auth"
import DashBoard from "./DashBoard"
import axios from 'axios';

const SignInPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [value,setValue] =useState('');
  const navigate = useNavigate();


  const handlerclick=()=>{
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
      navigate("/dashboard");
  })
  }
    useEffect(()=>{
      setValue(localStorage.getItem('email'))
    })

  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = {
      "name": name,
      "email": email,
      "password": password,
    }
    try {
      axios.post("http://localhost:5000/signin", data)
        .then((res) => {
          console.log(res);
          navigate("/dashboard");
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setErrorMessage(err.response.data.msg);
            return;
          }
        })

    } catch (error) {
      console.error('Error signing in:', error.message);
      setErrorMessage('An error occurred while signing in');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form onSubmit={handleSignIn} className="w-64">
        <input required type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full mb-2 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
        <input required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-2 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
        <input required type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mb-2 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
      </form>
      <div className="mt-4">
      <button onClick ={handlerclick}   className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
