import { Button, notification } from 'antd';
import React, { Component } from 'react'
import APIURL from '../../helpers/environment';

type AccountData = {
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    role: string,
    id: number
    visible: boolean
    accountData: {}
}


type PropsItems ={
    updateToken: (newToken: string, userRole: string) => void
    accounts: number
}

class UpdateAccount extends Component<PropsItems, AccountData>{
    constructor(props: PropsItems){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            role: '',
            id: 0,
            visible: false,
            accountData: []
        }
    }

    editUser = () => {
        
        const url = `${APIURL}/user/update/${this.state.id}`
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({firstName: this.state.firstName,lastName: this.state.lastName,username: this.state.username, password: this.state.password, role: this.state.role }),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `${localStorage.getItem('token')}`
            })
        }) 
        .then((res) => {
            if (res.status !== 200) {
                res.json().then(err => { alert(err.error) })
                // throw new Error("fetch error");
            }
            else {
                console.log("User edited successfully")
                notification.open({
                    message: 'Account Updated!',
                    description: 'Your Account has been successfully updated!'
                })
                

            }
        })
        .catch((err) => console.log("error", err));

    }

    componentDidMount(){
        this.editUser();
    }

    render(){
        return(
            <div>
                <Button style={{backgroundColor: '#A5A58D', color: 'white', border: '1px solid white', borderRadius: '5px'}} onClick={this.editUser}>Update</Button>
            </div>
        )
    }
    
}

export default UpdateAccount;