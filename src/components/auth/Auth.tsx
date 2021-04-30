import React, { Component } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import {Button, Col} from 'antd'

type AuthData = {
    showLogin: boolean;
}

type PropsItems = {
    updateToken: Function
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
            <div style={{backgroundImage: `url(/gray-parquet.jpg)`, fontFamily: "Montserrat", textAlign: 'center', width: 'auto', height: '100vh'}}>
                <Col >{this.state.showLogin === true ? <SignUp updateToken={this.props.updateToken}/> : <Login updateToken={this.props.updateToken}/> }
                <Button style={{backgroundColor: '#183446', color: 'white', marginLeft: '10%', textAlign: 'center', bottom: '149px', border: '5px', borderRadius: '5px', borderColor: 'white' }} onClick={this.handleToggle}>Toggle</Button>
                </Col>
            </div>
        )
    }
};   
    


export default Auth;
