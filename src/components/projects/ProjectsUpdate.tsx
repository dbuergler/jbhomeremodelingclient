import { Button, Form, Input, Modal } from 'antd';
import React, { Component } from 'react'
import APIURL from '../../helpers/environment';
import {ModalHeader, ModalBody} from 'reactstrap'


type ProjectData = {
    firstName: string,
    lastName: string,
    projectName: string,
    description: string,
    location: string,
    date: string,
    duration: string,
    loading: boolean,
    visible: boolean
}

type PropsItems = {
    Token: string
    fetchProjectIndex: () => void
    projects: number
}


class ProjectsUpdate extends Component<PropsItems, ProjectData>{
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
            loading: false,
            visible: false
        }
    }

    fetchProjectUpdate = () => {
        const url =`${APIURL}/project/${this.props.projects}`
        fetch (url, {
            method: 'PUT',
            body: JSON.stringify({firstName: this.state.firstName, lastName: this.state.lastName, projectName: this.state.projectName, description: this.state.description, location: this.state.location, date: this.state.date,duration: this.state.duration}),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `${localStorage.getItem('token')}`
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
            this.props.fetchProjectIndex();
        })
    }

    componentDidMount(){
        this.fetchProjectUpdate();
    }


    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = () => {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false, visible: false});
        }, 3000)
    }

    handleCancel = () => {
        this.setState({visible: false})
    }

    render(){
        return(
            <div>
                <Button style={{backgroundColor: '#A5A58D', color: 'white', border: '1px solid white', borderRadius: '5px'}} onClick={this.showModal}>
                    Update
                </Button>
                <Modal visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <ModalHeader></ModalHeader>
                        <ModalBody>
                        <Form 
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
                        </Form>
                            <Button key='back' onClick={this.handleCancel}>Close</Button>
                            <Button key='submit' loading={this.state.loading} onClick={this.handleOk}>Submit</Button>
                        </ModalBody>
                </Modal>
                    
            </div>
        )
    }

}

export default ProjectsUpdate;