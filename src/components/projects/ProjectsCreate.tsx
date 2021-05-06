import { Button, DatePicker, Form, Input, InputNumber } from 'antd';
import React, { Component } from 'react'
import APIURL from '../../helpers/environment';


type ProjectData = {
    firstName: string,
    lastName: string,
    projectName: string,
    description: string,
    location: string,
    date: string,
    duration: string,
    projectId: number
}

type PropsItems = {
    Token: string
    fetchProjectIndex: () => void
}

class ProjectsCreate extends Component<PropsItems, ProjectData>{
    constructor(props:PropsItems){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            projectName: '',
            description: '',
            location: '',
            date: '',
            duration: '',
            projectId: 0
        }
    }

    fetchProjectCreate = () => {
        const url =`${APIURL}/project/create`
        fetch (url, {
            method: 'POST',
            body: JSON.stringify({firstName: this.state.firstName, lastName: this.state.lastName, projectName: this.state.projectName, description: this.state.description, location: this.state.location, date: this.state.date,duration: this.state.duration, projectId: this.state.projectId}),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: this.props.Token
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
            this.props.fetchProjectIndex();
        })
    }

    componentDidMount(){
        this.fetchProjectCreate();
    }

    render(){
        return(
            <div>
                <div style={{fontFamily: "Montserrat", marginTop: '2%'}}/>
                <h1 style={{textAlign: 'center', textDecoration: 'underline', color: 'white'}}>Project Inquiry</h1>
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
                <Button onClick={this.fetchProjectCreate} style={{backgroundColor: '#183446', color: 'white'}}>Submit Button</Button>
                </Form.Item>
                </Form>
            </div>
        )
    }

}

export default ProjectsCreate;