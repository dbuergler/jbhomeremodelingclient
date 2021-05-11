import React, { Component } from 'react'
import APIURL from '../../helpers/environment';
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

    
class ProjectsGetAll extends Component<PropsItems, ProjectData>{
        constructor(props: PropsItems){
            super(props);
            this.state = {
                duration: '',
                projectId: 0,
                projectData: []
            }
        }
    
        fetchProjectIndex = () => {
            const url = `${APIURL}/project/`
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

            <ProjectsTable Token={this.props.Token} fetchProjectIndex={this.fetchProjectIndex} projectData={this.state.projectData}/>
        )
            
            
        
    }

}

export default ProjectsGetAll;