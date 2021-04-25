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

// handleToggle = () => {
//     this.setState(!this.state.showLogin);
// }


    render() {
        return (
            <div style={{backgroundColor:"#E2E2E2"}}>
                <SignUp updateToken={this.props.updateToken}/>
                <Login updateToken={this.props.updateToken}/>
            </div>
        )
    }
};   
    


export default Auth;
