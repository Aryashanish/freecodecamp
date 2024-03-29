
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAPIAjpTbJ5aq_V144ZqjSoLra_qOgvLoM",
  authDomain: "freecodecamp-ee5b3.firebaseapp.com",
  projectId: "freecodecamp-ee5b3",
  storageBucket: "freecodecamp-ee5b3.appspot.com",
  messagingSenderId: "905427368405",
  appId: "1:905427368405:web:40f9d053f50ee193ae655c",
  measurementId: "G-V8SRQRZS6Q"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider();
export {auth,provider};