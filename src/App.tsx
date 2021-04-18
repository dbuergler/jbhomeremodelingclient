import React, { Component } from 'react';
import './App.css';
import Auth from './components/auth/Auth';
import SignUp from './components/auth/SignUp';
import Home from './components/home/Home';
import NavBar from './components/home/NavBar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



type Token ={
  SessionToken: string
}

class App extends Component<{}, Token> {
  constructor(props: any){
    super(props)
    this.state={
      SessionToken: '',
    }
  }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken);
    this.setState({
      SessionToken: newToken
    })
  };
  
  clearToken = () => {
    localStorage.clear();
    this.setState({
      SessionToken: ''
    })
  }
  
  protectedViews = () => {
    return (this.state.SessionToken === localStorage.getItem('token') ? <Home token={this.state.SessionToken}/>
    : <Auth updateToken={this.updateToken}/>)
  }
  render(){
    return (
      <div>
        <Router>
        <Switch>
        <NavBar updateToken={this.updateToken}/>
        <Route exact path = '/' component={Home}/>
        {this.protectedViews()}
        </Switch>
        </Router>

      </div> 
    );
  }
}

export default App;
