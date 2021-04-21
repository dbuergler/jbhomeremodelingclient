import React, { Component } from 'react';
import SignUp from '../auth/SignUp';
import Login from '../auth/Login';
import {Button} from 'antd'


type Toggle = {
    showLogin: boolean
}

type Token ={
    token: string
}

type PropsItems = {
    updateToken: (newToken: string) => void,
}

class Home extends Component <PropsItems,Toggle, Token>{
    constructor(props: any) {
        super(props);
        this.state= {
            showLogin: false,
        }
        
    }
        handleToggle = () => {
            this.setState({
                showLogin: !this.state.showLogin
            })
        }

    render() {
        return(
            <div>{this.state.showLogin === true ? <SignUp updateToken={this.props.updateToken}/>:<Login updateToken={this.props.updateToken}/>}

            <Button onClick={this.handleToggle}>SignUp or Login</Button>
            
            </div>
        )
    }
}


export default Home;
