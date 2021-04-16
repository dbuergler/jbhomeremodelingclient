import React, { Component, MouseEvent } from 'react';
import {Form, Input, Button, Select} from 'antd';
import { FormInstance } from 'antd/lib/form';
import APIURL from '../../helpers/environment';


const {Option} = Select;

const layout = {
    lableCol: {span: 8},
    warpperCol: {span: 16},
};

const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};





type SignUpData = {
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    role: string,
    token: string

}

class SignUp extends Component<{}, SignUpData>{
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

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: MouseEvent){
        console.log('handle change', event)
    }

    handleSubmit(event: MouseEvent ){
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
        // this.props.updateToken(data.sessionToken)
    })
};
    

formRef = React.createRef<FormInstance>();

render() {
    return (
    <div>
        <h1>Sign Up</h1>
    <Form>
    <Form.Item
        name="first name"
        rules={[{ required: true, message: 'Please input your username!' }]}
    >
        <Input type ="firstName" name="first name" placeholder="First Name"  />
    </Form.Item>
    <Form.Item
        name="last name"
        rules={[{ required: true, message: 'Please input your username!' }]}
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