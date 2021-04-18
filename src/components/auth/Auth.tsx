import React, { Component } from 'react';
import SignUp from './SignUp';


type PropsItems ={
    updateToken: (newToken: string) => void
}

class Auth extends Component<PropsItems, {}> {

    render() {
        return (
            <div>
                <SignUp updateToken={this.props.updateToken}/>
            </div>
        )
    }
};   
    


export default Auth;
