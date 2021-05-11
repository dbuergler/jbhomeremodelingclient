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

interface DataMap  {
    accountData: AccountData[]
}
type PropsItems ={
    updateToken: (newToken: string, userRole: string) => void
}

class MyAccountAdmin extends Component<PropsItems, AccountData, DataMap>{
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
            accountData: []
            
        }
    }

    componentDidMount(){
        this.fetchUser()
    }


//ADMIN ONLY//
    fetchUser = () => {
            console.log('I am here')
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
                console.log("User", data);
                this.setState({ 
                    accountData: data
                })
            })
            .catch((err) => (err));
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
            <Button  icon={<UserOutlined />}onClick={this.showDrawer} style={{backgroundColor: '#183446', border: '1px solid white', borderRadius: '5px', color: 'white'}}>Admin Account</Button>

            <Drawer
            closable={false}
            onClose={this.onClose}
            visible={visible}
            width={1000}
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
                    <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your password!' }]}
                >
                <Input value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}  type="username" name="username" placeholder="Username" />
                </Form.Item>
                <Input.Password value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}  type="password" name="password" placeholder="Password" />
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
                </Form>

                <AccountDetails updateToken={this.props.updateToken}  accountData={this.state.accountData}/>

            </Drawer>
        </div>
    )
}

}


export default MyAccountAdmin;