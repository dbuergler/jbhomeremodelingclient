import React, { Component } from 'react'
import {
    Form,
    Input,
    Button,
    DatePicker,
    InputNumber,
} from 'antd';
import APIURL from '../../helpers/environment';


type CalendarData = {
    firstName: string,
    lastName: string,
    projectName: string,
    description: string,
    location: string,
    date: string,
    projectId: string,

}

type PropsItems = {
    updateToken: (newToken: string) => void,
}



class CalendarForm extends Component<PropsItems, CalendarData>{
    constructor(props: PropsItems){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            projectName: '',
            description: '',
            location: '',
            date: '',
            projectId: '',
        }

    }

    handleSubmit = () => {
        console.log('form submitted', this.state);
        const url = `${APIURL}/calendar/create`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({firstName: this.state.firstName, lastName: this.state.lastName, projectName: this.state.projectName, description: this.state.description, location: this.state.location, date: this.state.date, projectId: this.state.projectId }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data.sessionToken, this.props)
            this.props.updateToken(data.sessionToken)
        })
};

// handleGet = () => {
//     const url = `${APIURL}/calendar/`
//     fetch(url, {
//         method: 'GET',
//         headers: new Headers({
//             'Content-Type': 'application/json',
//             'Authorization': 
//         })
//     })
// }






    render(){
        return(
            <div style={{fontFamily: "Montserrat", marginTop: '2%'}}>
                <h2 style={{textAlign: 'center', textDecoration: 'underline'}}>Project Inquiry</h2>
                
                <Form 
                style={{textAlign: 'center'}}
                labelCol={{ span: 9}}
                wrapperCol={{ span: 6 }}
                layout="horizontal">
                <Form.Item label="First Name">
                <Input />
                </Form.Item>
                <Form.Item label="Last Name">
                <Input />
                </Form.Item>
                <Form.Item label="Project Name">
                <Input />
                </Form.Item>
                <Form.Item label="Description">
                <Input.TextArea/>
                </Form.Item>
                <Form.Item label="Location">
                <Input />
                </Form.Item>
                <Form.Item label="Date">
                <DatePicker />
                </Form.Item>
                <Form.Item label="ProjectId">
                <InputNumber />
                </Form.Item>
                <Form.Item style={{textAlign: 'center'}} label= 'Button'>
                <Button onClick={this.handleSubmit} style={{backgroundColor: '#183446', color: 'white'}}>Submit Button</Button>
                </Form.Item>
                </Form>
            </div>
        )
    }
}

export default CalendarForm;