import react from 'react';
import React, { Component } from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Users from './component/users/users'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import USERITEM from './component/users/UserItem';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <Router>
      <react.Fragment>
        <Navbar/>  
        <div className="container mt-2" >
        <Switch>
            <Route exact path="/users"  component={Users}></Route>
            <Route exact path="/users/:login"  component={USERITEM}></Route>
            <Route exact path='/'  component={Users}></Route>
        </Switch>
        </div>    
      </react.Fragment>
    </Router>
    
     );
  }
}
 
export default App;