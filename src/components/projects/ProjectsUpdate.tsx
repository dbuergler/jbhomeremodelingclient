import React, { Component } from 'react'
import APIURL from '../../helpers/environment';

type ProjectData = {
    duration: string,
    projectId: number
}

type PropsItems = {
    Token: string
    fetchProjectIndex: () => void
}


class ProjectsUpdate extends Component<PropsItems, ProjectData>{
    constructor(props:PropsItems){
        super(props);
        this.state = {
            duration: '',
            projectId: 0
        }
    }

    fetchProjectUpdate = () => {
        const url =`${APIURL}/project/:id`
        fetch (url, {
            method: 'PUT',
            body: JSON.stringify({duration: this.state.duration, projectId: this.state.projectId}),
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
        this.fetchProjectUpdate();
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }

}

export default ProjectsUpdate;