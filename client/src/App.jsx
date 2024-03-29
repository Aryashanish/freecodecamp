import React from 'react';
import { BrowserRouter as Router,  Route ,Routes} from 'react-router-dom';
import HomePage from './component/HomePage';
import SignInPage from './component/SignInPage';
import DashBoard from './component/DashBoard';
import Courseform from './component/Courseform';
const App = () => {
  return (
    <Router>
    
        <Routes>
        
        
          <Route exact path="/" element={<HomePage/>} />
          <Route  path="/signin" element={<SignInPage/>} />
          <Route  path="/dashboard" element={<DashBoard/>} />
          <Route path="/courses" element={<Courseform />} /> 
   
          </Routes>
      
    </Router>
  );
};

export default App;
