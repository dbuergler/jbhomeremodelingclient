import { UserOutlined } from '@ant-design/icons';
import { Button, Drawer, Form, Input, message, notification, Select } from 'antd';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import APIURL from '../../helpers/environment';
import AccountDetails from './MyAccountDetails';

const {Option} = Select;


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
    clearToken: () => void
}

class MyAccount extends Component<PropsItems, AccountData>{
    constructor(props:PropsItems){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            role: '',
            id: 0,
            visible: false,
            accountData: {}
            
        }
    }

    componentDidMount(){
        this.fetchUser()
    }


//ADMIN ONLY//
    fetchUser = () => {
        
            const url = `${APIURL}/user/`
            fetch(url, {
                method:'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: `${localStorage.getItem('token')}`
                })
            }).then((res) => {
                if (res.status !== 200) {
                    // throw new Error("Error");
                } else return res.json();
            }).then((data) => {
                console.log("User", data.users);
                this.setState({ 
                    firstName: data.users.firstName,
                    lastName: data.users.lastName,
                    username: data.users.username,
                    role: data.users.role,
                })
            })
            .catch((err) => (err));
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

//ADMIN ONLY//

handleGetID = () => {
    
        const url = `${APIURL}/user/${this.state.id}`
            fetch(url, {
                method:'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: `${localStorage.getItem('token')}`
                })
            }).then((res) => {
                if (res.status !== 200) {
                    // throw new Error("Error");
                } else return res.json();
            }).then((data) => {
                console.log("User", data.users);
                this.setState({ 
                    firstName: data.users.firstName,
                    lastName: data.users.lastName,
                    username: data.users.username,
                    role: data.users.role,
                })
            })
            // .catch((err) => alert(err));
    }


handleDelete = () => {
    
        const url = `${APIURL}/user/delete/${this.state.id}`
        fetch(url, {
            method: "DELETE",
                headers: new Headers({
                    "Content-Type": "application/json",
                    Authorization: `${localStorage.getItem('token')}`
                }),
        }) 
        .then((res) => {
            console.log("User deleted")
            this.props.clearToken();
            notification.open({
                message: 'Account Deleted!',
                description: 'Your Account has been successfully deleted!'
            })
        })
        .catch((err) => console.log("error", err));
    
        }

    showDrawer = () => {
        this.setState({
        visible: true,
        });
    };
    
    onClose = () => {
        this.setState({
        visible: false,
        });
    };
    



render(){
    const { visible } = this.state;
    return(
        <div style={{fontFamily: "Montserrat", textAlign: 'center'}}>
            <Button icon={<UserOutlined />}onClick={this.showDrawer} style={{backgroundColor: '#183446', border: '1px solid white', borderRadius: '5px', color: 'white'}}>My Account</Button>

            <Drawer
            closable={false}
            onClose={this.onClose}
            visible={visible}
            width={720}
            style={{ position: 'absolute' }}>
                <h1 style={{color: 'white', textDecoration: 'underline', textAlign:'center', fontFamily: "Montserrat"}}>My Account</h1>
                <Form 
                labelCol= {{span: 12}}
                wrapperCol= {{offset: 7, span: 10}}
                layout="horizontal"
                style={{textAlign: 'center'}}
                >
                <Form.Item
                name="first name"
                rules={[{ required: true, message: 'Please input your First Name!' }]}>
                <Input value={this.state.firstName} onChange={(e) => this.setState({firstName: e.target.value})} type ="firstName" name="first name" placeholder="First Name"  />
                </Form.Item>
                <Form.Item
                name="last name"
                rules={[{ required: true, message: 'Please input your Last Name!' }]}>
                <Input value={this.state.lastName} onChange={(e) => this.setState({lastName: e.target.value})} type ="lastName" name="last name" placeholder="Last Name" />
                </Form.Item>
                <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                >
                <Input value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}  type="username" name="username" placeholder="Username" />
                </Form.Item>
                <Form.Item name="role" rules={[{ required: true }]}>
                <Select
                placeholder="Select a Role"
                allowClear
                >
                <Option value="Admin">Admin</Option>
                <Option value="User">User</Option>
                </Select>
                </Form.Item>
                <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                {({ getFieldValue }) =>
                getFieldValue('gender') === 'other' ? (
                <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[{ required: true }]}
                >
                <Input type="role"  value={this.state.role}/>
                </Form.Item>
                ) : null
                }
                </Form.Item>
                <Button style={{backgroundColor: '#183446', border: '1px solid white', borderRadius: '5px', color: 'white'}} onClick={this.editUser}>
                    Save Changes
                </Button>
                <Button style={{backgroundColor: '#183446', border: '1px solid white', borderRadius: '5px', color: 'white'}} onClick={this.handleDelete}>
                    Delete Account
                </Button>
                </Form>

                <AccountDetails updateToken={this.props.updateToken} clearToken={this.props.clearToken} accountData={this.state.accountData}/>

            </Drawer>
        </div>
    )
}

}


export default MyAccount;