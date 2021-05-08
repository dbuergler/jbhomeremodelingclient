import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Auth from './components/auth/Auth';
import Home from './components/home/Home';
import NavBar from './components/home/NavBar';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Footer from './components/home/Footer';
// import Payment from './components/payments/Payment';
import CalendarIndex from './components/calendar/CalendarIndex';
// import ScrollUp from './components/home/ScrollUp';
import {BackTop} from 'antd'
import { UpCircleOutlined } from '@ant-design/icons';
import ProjectsIndex from './components/projects/ProjectsIndex';
import { StripeProvider } from 'react-stripe-elements';
import PaymentIndex from './components/payments/PaymentIndex';
import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import PaymentForm from './components/payments/PaymentForm';
import {loadStripe} from '@stripe/stripe-js'




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

  stripePromise = loadStripe('pk_test_51IjyM9DDEirNYEmUo722uaBLZ9Jjy6NPE4ZKYRgpCAnIVYgQYZwF6q6bqRezaRntvOkJ1gdRU5V6dwa0QEPBhJES00RhXKr7nJ')

  InjectedCheckoutForm = () => (
    <ElementsConsumer>
        {({stripe, elements}) => (
            <PaymentForm stripe={stripe} elements={elements}/>
        )}
    </ElementsConsumer>
)

  clearToken = () => {
    localStorage.clear();
    
  }
  
  protectedViews = () => {
    return (this.state.Token === localStorage.getItem('token') ? <Home token={this.state.Token}/>
    : <Auth updateToken={this.updateToken}  />)
  }
  render(){
    return (
      <div style={{backgroundColor:'#8c8c8c', width: 'auto', height:'100vh'}}>
        <Router>
        <NavBar clearToken={this.clearToken} updateToken={this.updateToken} />
        <Switch>
        <Route exact path ='/' component={Home}/>
        <Route exact path = '/account'><Auth updateToken={this.updateToken}/></Route> 
        <Route exact path = '/projects' component={ProjectsIndex}/>
        <Route exact path = '/calendar' component={CalendarIndex} />
        <Route exact path = '/payment' component={PaymentIndex}> 
        <Elements stripe={this.stripePromise}>
            <this.InjectedCheckoutForm/>
        </Elements>
        </Route>
        </Switch>
        <Footer />
        <BackTop >
          <div style={{fontFamily: 'Montserrat', backgroundColor: '#A5A58D', color: 'white', height: '40px', width: '50px', lineHeight: '40px', textAlign: 'center', border: '5px', borderRadius: '5px', borderColor: 'white'}}>Top</div>
        </BackTop>
        </Router>
      </div> 
    );
  }
}

export default App;
