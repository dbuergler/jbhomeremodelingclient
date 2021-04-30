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
    projectId: number,

}

type PropsItems = {
    Token: string,
    fetchCalendarIndex: () => void
}



class CalendarCreate extends Component<PropsItems, CalendarData>{
    constructor(props: PropsItems){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            projectName: '',
            description: '',
            location: '',
            date: '',
            projectId: 0,
        }

    }

    fetchCalendarCreate = () => {
        console.log('form submitted', this.state);
        const url = `${APIURL}/calendar/create`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({firstName: this.state.firstName, lastName: this.state.lastName, projectName: this.state.projectName, description: this.state.description, location: this.state.location, date: this.state.date, projectId: this.state.projectId }),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: this.props.Token
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
            this.props.fetchCalendarIndex();
        })
};


componentDidMount(){
    this.fetchCalendarCreate();
}


    render(){
        return(
            <div style={{fontFamily: "Montserrat", marginTop: '2%'}}>
                <h2 style={{textAlign: 'center', textDecoration: 'underline'}}>Project Inquiry</h2>
                {/* {(localStorage.getItem('token'))} */}
                <Form 
                style={{textAlign: 'center'}}
                labelCol={{ span: 9}}
                wrapperCol={{ span: 8 }}
                layout="horizontal">
                <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                <Input  placeholder="First Name"/>
                </Form.Item>
                <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                <Input placeholder="Last Name" />
                </Form.Item>
                <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                <Input placeholder="Project Name"/>
                </Form.Item>
                <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                <Input.TextArea placeholder="Project Description"/>
                </Form.Item>
                <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                <Input placeholder="Location"/>
                </Form.Item>
                <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                <DatePicker placeholder="Date"/>
                </Form.Item>
                <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                <InputNumber placeholder="ProjectId" />
                </Form.Item>
                <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                <Button onClick={this.fetchCalendarCreate} style={{backgroundColor: '#183446', color: 'white'}}>Submit Button</Button>
                </Form.Item>
                </Form>
            </div>
        )
    }
}

export default CalendarCreate;