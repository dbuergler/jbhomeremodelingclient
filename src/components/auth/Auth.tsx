import React, { Component } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import {Button, Col} from 'antd'
import {BrowserRouter as  Router } from 'react-router-dom';
import MyAccount from './MyAccountAdmin';
import MyAccountID from './MyAccountID';
import MyAccountAdmin from './MyAccountAdmin';

type AuthData = {
    showLogin: boolean;
}

type PropsItems = {
    updateToken: (newToken: string, userRole: string) => void
    clearToken: () => void
}

class Auth extends Component<PropsItems, AuthData> {
    constructor(props: PropsItems) {
    super(props);
    this.state= {
        showLogin: false,
    }
    
}

handleToggle = () => {
    this.setState({
    showLogin :!this.state.showLogin
    })
}


    render() {
        console.log(this.props.updateToken)
        return (
            <div style={{backgroundColor: '#8c8c8c', fontFamily: "Montserrat", textAlign: 'center', width: 'auto', height: '100vh'}}>
                
                <Col >{this.state.showLogin === true ? <SignUp updateToken={this.props.updateToken}/> : <Login updateToken={this.props.updateToken}/> }
                <Button style={{backgroundColor: '#183446', color: 'white', marginLeft: '10%', textAlign: 'center', bottom: '149px', border: '1px solid white', borderRadius: '5px'}} onClick={this.handleToggle}>Toggle</Button>
                </Col>
                {(localStorage.getItem('role') === 'Admin') ?
                <MyAccountAdmin updateToken={this.props.updateToken}/>
                : <MyAccountID updateToken={this.props.updateToken}/> }
                
            </div>
        )
    }
};   
    


export default Auth;
