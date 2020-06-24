import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login';
import Home from './home';
import Dashboard from './dashboard';

import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom';

function App() {
  return (
    <Router> 
           <div className="App"> 
            <Switch> 
              <Route exact path='/' component={Login}></Route> 
              <Route exact path='/home' component={Home}></Route> 
              <Route exact path='/dashboard' component={Dashboard}></Route>
            </Switch> 
          </div> 
       </Router> 
   
  );
}

export default App;
