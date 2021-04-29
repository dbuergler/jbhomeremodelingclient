import React, { Component } from 'react';
import './App.css';
import Auth from './components/auth/Auth';
import Home from './components/home/Home';
import NavBar from './components/home/NavBar';
import {Route, Switch} from "react-router-dom";
import Footer from './components/home/Footer';
// import Payment from './components/payments/Payment';
import CalendarMain from './components/calendar/Calendar';



type Token ={
  SessionToken: string
}

class App extends Component<{}, Token> {
  randomString!: ((newString: string) => void); 
  constructor(props: any){
    super(props)
    this.state={
      SessionToken: '',
      
    }
  }

  updateToken = (newToken : string) => {
    console.log("updateToken")
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
    : <Auth updateToken={this.updateToken}  />)
  }
  render(){
    return (
      <div>
        <NavBar clearToken={this.clearToken} updateToken={this.updateToken} />
        <Switch>
        <Route exact path ='/' component={Home}/>
        <Route exact path = '/account' component={Auth} />
        {/* <Route exact path = '/payment' component={Payment} /> */}
        <Route exact path = '/calendar' component={CalendarMain} />
        </Switch>
        <Footer />
      </div> 
    );
  }
}

export default App;
