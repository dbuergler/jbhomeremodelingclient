import React, { Component } from 'react'
import APIURL from '../../helpers/environment';

type PropsItems = {
    Token: string;
    fetchProjectIndex: () => void
}


class ProjectsDelete extends Component<PropsItems,{}>{
    constructor(props: PropsItems){
        super(props);
        this.state = {

        }
    }

    fetchCalenderDelete = () => {
        const url = `${APIURL}/project/:id`
        fetch(url, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: this.props.Token
            })
        })
        .then(() => this.props.fetchProjectIndex())
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}

export default ProjectsDelete;

