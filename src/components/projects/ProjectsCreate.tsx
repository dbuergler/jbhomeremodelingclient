import { Button, Form, Input, InputNumber } from 'antd';
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
            
        }
    }

    fetchProjectCreate = () => {
        const url =`${APIURL}/project/create`
        fetch (url, {
            method: 'POST',
            body: JSON.stringify({firstName: this.state.firstName, lastName: this.state.lastName, projectName: this.state.projectName, description: this.state.description, location: this.state.location, date: this.state.date,duration: this.state.duration}),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `${localStorage.getItem('token')}`
            })
        }).then(
            (response) => response.json()
        ).then((projectData) => {
            console.log(projectData);
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
                <Form onFinish={this.fetchProjectCreate}
                style={{textAlign: 'center'}}
                labelCol={{ span: 9}}
                wrapperCol={{ span: 8 }}
                layout="horizontal">
                <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                <Input  onChange={(e) => this.setState({firstName: e.target.value})} placeholder="First Name"/>
                </Form.Item>
                <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                <Input onChange={(e) => this.setState({lastName: e.target.value})}placeholder="Last Name" />
                </Form.Item>
                <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                <Input onChange={(e) => this.setState({projectName: e.target.value})} placeholder="Project Name"/>
                </Form.Item>
                <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                <Input.TextArea onChange={(e) => this.setState({description: e.target.value})}placeholder="Project Description"/>
                </Form.Item>
                <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                <Input onChange={(e) => this.setState({location: e.target.value})}placeholder="Location"/>
                </Form.Item>
                <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                <Input onChange={(e) => this.setState({date: e.target.value})} type='date' name='date' placeholder="date placeholder"/>
                </Form.Item>
                <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                <Input onChange={(e) => this.setState({duration: e.target.value})} placeholder="Duration" />
                </Form.Item>
                <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                <Button htmlType='submit'  style={{backgroundColor: '#183446', color: 'white', border: '1px solid white', borderRadius: '5px'}}>Submit Button</Button>
                </Form.Item>
                </Form>
            </div>
        )
    }

}

export default ProjectsCreate;