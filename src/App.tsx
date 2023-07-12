import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Auth from './components/auth/Auth';
import Home from './components/home/Home';
import NavBar from './components/home/NavBar';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Footer from './components/home/Footer';
import CalendarIndex from './components/calendar/CalendarIndex';
import {BackTop} from 'antd'
import ProjectsIndex from './components/projects/ProjectsIndex';
import PaymentIndex from './components/payments/PaymentIndex';



//const

type Token ={
  Token: string
  userRole: string,
  
}

class App extends Component<{}, Token> {
  fetchPaymentIndex!: () => void;
  constructor(props: any){
    super(props)
    this.state={
      Token: '',
      userRole: '',
      
    }
  }
  
  userRole = (role: string) => {
    localStorage.setItem('role', role)
    this.setState({
      userRole: role
    })
  }
  
  updateToken = (Token : string, userRole: string) => {
    console.log("updateToken")
    localStorage.setItem('token', Token);
    this.userRole(userRole)
    this.setState({
      Token: Token
    })
  };


  clearToken = () => {
    localStorage.clear();
    
  }
  
  protectedViews = () => {
    return (this.state.Token === localStorage.getItem('token') ? <Home token={this.state.Token}/>
    : <Auth updateToken={this.updateToken} clearToken={this.clearToken}  />)
  }
  render(){
    return (
      <div style={{backgroundColor:'#8c8c8c', width: 'auto', height:'100vh'}}>
        <BrowserRouter>
        <NavBar clearToken={this.clearToken} updateToken={this.updateToken} />
        <Switch>
        <Route exact path ='/' component={Home}/>
        <Route exact path = '/account'><Auth updateToken={this.updateToken} clearToken={this.clearToken}/></Route> 
        <Route exact path = '/projects' component={ProjectsIndex}/>
        <Route exact path = '/calendar' component={CalendarIndex} />
        <Route exact path = '/payment' component={PaymentIndex} /> 
        </Switch>
        </BrowserRouter>
        <Footer />
        <BackTop >
          <div style={{fontFamily: 'Montserrat', backgroundColor: '#A5A58D', color: 'white', height: '40px', width: '50px', lineHeight: '40px', textAlign: 'center', border: '5px', borderRadius: '5px', borderColor: 'white'}}>Top</div>
        </BackTop>
      </div> 
    );
  }
}

export default App;
