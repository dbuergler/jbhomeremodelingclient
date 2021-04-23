import React, { Component } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import {Button} from 'antd'



type PropsItems ={
    updateToken: (newToken: string) => void
}

class Auth extends Component<PropsItems, {}> {
    constructor(props: any) {
    super(props);
    this.state= {
        showLogin: false,
    }
    
}


    render() {
        return (
            <div>
                <SignUp updateToken={this.props.updateToken}/>
                <Login updateToken={this.props.updateToken}/>
            </div>
        )
    }
};   
    


export default Auth;
