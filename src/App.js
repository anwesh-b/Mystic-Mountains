import React from 'react';
import Login from '../src/component/login/Login';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Register from './component/login/Register';
import Forgotpassword from './component/login/Forgotpassword';
import Dashboard from './component/dashboard/Dashboard';


function App() {
  return (
    <div>
      <Router>
      <Route path="/" component={Login}/>  
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/forgotpassword" component={Forgotpassword}/>
      </Router>
    </div>
    
  );
}

export default App;
