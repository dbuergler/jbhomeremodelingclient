import React, { Component } from 'react'
import ProjectsUpdate from './ProjectsUpdate';
import ProjectsDelete from './ProjectsDelete';
import ProjectsCreate from './ProjectsCreate';

type ProjectData = {
    firstName: string,
    lastName: string,
    projectName: string,
    description: string,
    location: string,
    date: string,
    duration: string,
    projectId: number,
    
}

type PropsItems = {
    Token: string
    fetchProjectIndex: () => void,
    projectData: []
}

class ProjectsTable extends Component<PropsItems, ProjectData > {
    constructor(props: PropsItems){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            projectName: '',
            description: '',
            location: '',
            date: '',
            duration: "",
            projectId: 0,

        }
    }

    projectMapper = () => {
        return this.props.projectData.map((projects:ProjectData, index: number) => {
            return(
                <tr key={index}>
                    <th scope='row'></th>
                    <td>{projects.firstName}</td>
                    <td>{projects.lastName}</td>
                    <td>{projects.projectName}</td>
                    <td>{projects.description}</td>
                    <td>{projects.location}</td>
                    <td>{projects.date}</td>
                    <td>{projects.duration}</td>
                    <td>{projects.projectId}</td>
                    <td>
                        <ProjectsUpdate Token={this.props.Token} fetchProjectIndex={this.props.fetchProjectIndex}/>
                        <ProjectsDelete Token={this.props.Token} fetchProjectIndex={this.props.fetchProjectIndex}/>
                    </td>
                </tr>
            )

        })
    }


    render(){
        return(
            <div style={{fontFamily: "Montserrat", textAlign: 'center', padding: '2%' }}>
                <h1 style={{marginRight: '0%', color: 'white', textDecoration: 'underline'}}>Projects Table</h1>
                <table style={{textAlign: 'center', justifyContent: 'center', width: '90vw', marginLeft: '3%', backgroundColor: '#183446', color: 'white' }}>
                    <thead>
                    <tr>
                        <th style={{border: '1px solid white', textAlign: 'center', }}>First Name</th>
                        <th style={{border: '1px solid white', textAlign: 'center', }}>Last Name</th>
                        <th style={{border: '1px solid white', textAlign: 'center', }}>Project Name</th>
                        <th style={{border: '1px solid white', textAlign: 'center', }}>Description</th>
                        <th style={{border: '1px solid white', textAlign: 'center', }}>Location</th>
                        <th style={{border: '1px solid white', textAlign: 'center', }}>Duration</th>
                        <th style={{border: '1px solid white', textAlign: 'center', }}>Project ID</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.projectMapper()}
                    </tbody>
                </table>
                
            </div>
        )
    }

}

export default ProjectsTable;