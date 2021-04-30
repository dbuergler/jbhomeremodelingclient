import React, { Component } from 'react'
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


class CalendarUpdate extends Component<PropsItems, CalendarData>{
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



    fetchCalendarUpdate = () => {
        const url = `${APIURL}/calendar/:id`
        fetch(url, {
            method: 'PUT',
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
    }
    
    componentDidMount(){
        this.fetchCalendarUpdate();
    }

render(){
    return(
        <div></div>
    )
}


}

export default CalendarUpdate;
