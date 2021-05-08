import { Button } from 'antd';
import React, { Component } from 'react'
import APIURL from '../../helpers/environment';




type PropsItems = {
    Token: string;
    fetchProjectIndex: () => void
    projects: Number
}


class ProjectsDelete extends Component<PropsItems,{}>{
    constructor(props: PropsItems){
        super(props);
        this.state = {
            
        }
    }

    fetchProjectDelete = () => {
        const url = `${APIURL}/project/${this.props.projects}`
        fetch(url, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `${localStorage.getItem('token')}`
            })
        })
        .then(() => this.props.fetchProjectIndex())
    }

    render(){
        return(
            <div>
                <Button style={{backgroundColor: '#A5A58D', color: 'white', border: '1px solid white', borderRadius: '5px'}} onClick={this.fetchProjectDelete}>Delete</Button>
            </div>
        )
    }
}

export default ProjectsDelete;

