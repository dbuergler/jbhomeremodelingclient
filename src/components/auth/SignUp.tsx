import React, {Component} from 'react';
import {Form, Input, Button, Select, message, Alert, notification} from 'antd';
import APIURL from '../../helpers/environment';


const {Option} = Select;


const tailLayout = {
    wrapperCol: {offset: 5, span: 11},
};


type SignUpData = {
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    role: string,

}

type PropsItems = {
    updateToken: (newToken: string, userRole: string) => void
}

class SignUp extends React.Component<PropsItems, SignUpData>{
    constructor(props:PropsItems) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            role: '',
            
        }
    }

    handleChangeFirstName = (event: any) => {
        this.setState({
            firstName: event.target.value
        })
        console.log('handle change firstName', event)
    }

    handleChangeLastName= (event: any) => {
        this.setState({
            lastName: event.target.value
        })
        console.log('handle change lastName', event)
    }

    handleChangeUsername = (event: any) => {
        this.setState({
            username: event.target.value
        })
        console.log('handle change username', event)
    }

    handleChangePassword = (event: any) => {
        this.setState({
            password: event.target.value
        })
        console.log('handle change password', event)
    }

    handleChangeRole = (event: any) => {
        console.log('handle change role', event)
        this.setState({
            role: event
        })
    }

    handleSubmit = () => {
        console.log('form submitted', this.state);
        // event.preventDefault();
        const url = `${APIURL}/user/create`
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({firstName: this.state.firstName, lastName: this.state.lastName, username: this.state.username, password: this.state.password, role: this.state.role}),
                headers: new Headers({
                    'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data.sessionToken, this.props)
            console.log(this.props.updateToken)
            this.props.updateToken(data.sessionToken, data.user.role)
        })
        notification.info({
            message: "You have successfully signed up!"
        })
};
    




render() {
    return (
    <div style={{fontFamily: "Montserrat", textAlign: 'center', padding: '5%'}}>
        <h1 style={{color: 'white', textDecoration: 'underline'}}>Sign Up</h1>
    <Form 
    labelCol= {{span: 10}}
    wrapperCol= {{offset: 9, span: 6}}
    layout="horizontal"
    style={{textAlign: 'center'}}
    onFinish={this.handleSubmit}>
    <Form.Item
        name="first name"
        rules={[{ required: true, message: 'Please input your First Name!' }]}
    >
        <Input onChange={this.handleChangeFirstName} type ="firstName" name="first name" placeholder="First Name"  />
    </Form.Item>
    <Form.Item
        name="last name"
        rules={[{ required: true, message: 'Please input your Last Name!' }]}
    >
        <Input  onChange={this.handleChangeLastName} type ="lastName" name="last name" placeholder="Last Name" />
    </Form.Item>
    <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
    >
        <Input onChange={this.handleChangeUsername} type="username" name="username" placeholder="Username" />
    </Form.Item>

    <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
    >
        <Input.Password onChange={this.handleChangePassword} type="password" name="password" placeholder="Password" />
    </Form.Item>
        <Form.Item name="role" rules={[{ required: true }]}>
        <Select
            onChange={this.handleChangeRole}
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
                <Input type="role" />
            </Form.Item>
            ) : null
        }
        </Form.Item>
        <Form.Item {...tailLayout}>
        <Button  style={{backgroundColor: '#183446', border: '1px solid white', borderRadius: '5px', color: 'white' }} onClick={this.handleSubmit} >
            Submit
        </Button>
        

        
        </Form.Item>
    </Form>
</div>
        
        );
    }
}



export default SignUp;