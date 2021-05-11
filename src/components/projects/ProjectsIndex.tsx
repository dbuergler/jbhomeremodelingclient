import React, { Component } from 'react'
import APIURL from '../../helpers/environment';
import ProjectsCreate from './ProjectsCreate';
import ProjectsTable from './ProjectsTable';


type ProjectData = {
    duration: string,
    projectId: number,
    projectData: []
}

type PropsItems = {
    Token: string
    fetchProjectIndex: () => void,
    
}

class ProjectsIndex extends Component<PropsItems, ProjectData>{
    constructor(props: PropsItems){
        super(props);
        this.state = {
            duration: '',
            projectId: 0,
            projectData: []
        }
    }

    fetchProjectIndex = () => {
        const url = `${APIURL}/project/${this.state.projectId}`
        fetch(url, {
            method:'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `${localStorage.getItem('token')}`
            })
        }).then(
            (response) => response.json()
        ).then((projectData) => {
            this.setState({
                projectData: projectData
            });
        })
}
    

componentDidMount(){
    this.fetchProjectIndex();
    }


    render(){
        return(
            <div style={{fontFamily: "Montserrat", backgroundColor: '#8c8c8c', width: 'auto', height:'100vh'}}>
                <ProjectsCreate Token={this.props.Token} fetchProjectIndex={this.fetchProjectIndex} />
                <ProjectsTable Token={this.props.Token} fetchProjectIndex={this.fetchProjectIndex} projectData={this.state.projectData}/>
            </div>
        )
    }


}

export default ProjectsIndex;