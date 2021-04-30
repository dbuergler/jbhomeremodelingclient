import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Auth from './components/auth/Auth';
import Home from './components/home/Home';
import NavBar from './components/home/NavBar';
import {Route, Switch} from "react-router-dom";
import Footer from './components/home/Footer';
// import Payment from './components/payments/Payment';
import CalendarIndex from './components/calendar/CalendarIndex';
// import ScrollUp from './components/home/ScrollUp';
import {BackTop} from 'antd'
import { UpCircleOutlined } from '@ant-design/icons';




type Token ={
  Token: string
  userRole: string
}

class App extends Component<{}, Token> { 
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
    this.setState({
      Token: Token
    })
  };


  clearToken = () => {
    localStorage.clear();
    
  }
  
  protectedViews = () => {
    return (this.state.Token === localStorage.getItem('token') ? <Home token={this.state.Token}/>
    : <Auth updateToken={this.updateToken}  />)
  }
  render(){
    return (
      <div style={{backgroundImage: `url(/gray-parquet.jpg)`, width: 'auto', height:'100vh'}}>
        <NavBar clearToken={this.clearToken} updateToken={this.updateToken} />
        <Switch>
        <Route exact path ='/' component={Home}/>
        <Route exact path = '/account'><Auth updateToken={this.updateToken}/></Route> 
        {/* <Route exact path = '/payment' component={Payment} /> */}
        <Route exact path = '/calendar' component={CalendarIndex} />
        </Switch>
        <Footer />
        <BackTop >
          <div style={{fontFamily: 'Montserrat', backgroundColor: '#183446', color: 'white', height: '40px', width: '50px', lineHeight: '40px', textAlign: 'center', border: '5px', borderRadius: '5px', borderColor: 'white'}}>Up</div>
        </BackTop>
      </div> 
    );
  }
}

export default App;
