import { Button, notification } from 'antd';
import React, { Component } from 'react'
import APIURL from '../../helpers/environment';

type PropsItems ={
    updateToken: (newToken: string, userRole: string) => void
    accounts: number
}

class DeleteAccount extends Component<PropsItems, {}>{
    constructor(props: PropsItems){
        super(props);
        this.state = {
            
        }
    }

    handleDelete = () => {
    
        const url = `${APIURL}/user/delete/${this.props.accounts}`
        fetch(url, {
            method: "DELETE",
                headers: new Headers({
                    "Content-Type": "application/json",
                    Authorization: `${localStorage.getItem('token')}`
                }),
        }) 
        .then((res) => {
            console.log("User deleted")
            notification.open({
                message: 'Account Deleted!',
                description: 'Your account has been successfully deleted!'
            })
        })
        .catch((err) => console.log("error", err));
    
        }
        
        render(){
            return(
                <div>
                    <Button style={{backgroundColor: '#A5A58D', color: 'white', border: '1px solid white', borderRadius: '5px'}} onClick={this.handleDelete}>Delete</Button>
                </div>
            )
        }

}


export default DeleteAccount;