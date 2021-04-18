import React, { Component} from 'react';
import {Form, Input, Button, Select} from 'antd';
import APIURL from '../../helpers/environment';


const {Option} = Select;

const layout = {
    lableCol: {span: 8},
    warpperCol: {span: 16},
};

const tailLayout = {
    wrapperCol: {offset: 4, span: 16},
};


type SignUpData = {
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    role: string,
    token: string

}

type PropsItems ={
    updateToken: (newToken: string) => void
}

class SignUp extends Component<PropsItems, SignUpData>{
    constructor(props: any) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            role: '',
            token: '',
            
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
        this.setState({
            role: event.target.value
        })
        console.log('handle change role', event)
    }

    handleSubmit(event: any){
        console.log('form submitted');
        event.preventDefault();
        fetch(`${APIURL}/user/create`, {
            method: 'POST',
            body: JSON.stringify({firstName: this.state.firstName, lastName: this.state.lastName, username: this.state.username, password: this.state.password, role: this.state.role }),
            headers: new Headers({
                'Content-Type': 'application/json'
        })
    }).then(
        (response) => response.json()
    ).then((data) => {
        this.props.updateToken(data.sessionToken)
    })
};
    

render() {
    return (
    <div>
        <h1>Sign Up</h1>
    <Form {...layout} onFinish={this.handleSubmit}>
    <Form.Item
        name="first name"
        rules={[{ required: true, message: 'Please input your First Name!' }]}
    >
        <Input type ="firstName" name="first name" placeholder="First Name"  />
    </Form.Item>
    <Form.Item
        name="last name"
        rules={[{ required: true, message: 'Please input your Last Name!' }]}
    >
        <Input type ="lastName" name="last name" placeholder="Last Name" />
    </Form.Item>
    <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
    >
        <Input type="username" name="username" placeholder="Username" />
    </Form.Item>

    <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
    >
        <Input.Password type="password" name="password" placeholder="Password" />
    </Form.Item>
        <Form.Item name="role" label="Role" rules={[{ required: true }]}>
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
                <Input type="role" />
            </Form.Item>
            ) : null
        }
        </Form.Item>
        <Form.Item {...tailLayout}>
        <Button type="primary" onClick={this.handleSubmit}>
            Submit
        </Button>
        </Form.Item>
    </Form>
</div>
        
        );
    }
}



export default SignUp;