import React, { Component } from 'react'
import APIURL from '../../helpers/environment';
import CalendarTable from './CalendarTable';
import CalendarCreate from './CalendarCreate';

type CalendarData = {
    firstName: string,
    lastName: string,
    projectName: string,
    description: string,
    location: string,
    date: string,
    projectId: number,
    data: []
}


type PropsItems = {
    Token: string, 
}

class CalendarIndex extends Component<PropsItems, CalendarData> {
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
            data: []
        }
    }


    fetchCalendarIndex = () => {
        const url = `${APIURL}/calendar/`
        fetch(url, {
            method: 'GET',
            // body: JSON.stringify({firstName: this.state.firstName, lastName: this.state.lastName, projectName: this.state.projectName, description: this.state.description, location: this.state.location, date: this.state.date, projectId: this.state.projectId, data: this.state.data }),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: this.props.Token
            })
        })
    }

    componentDidMount(){
        this.fetchCalendarIndex();
    }

    render(){
        return(
            <div style={{fontFamily: "Montserrat"}} >
                <CalendarCreate Token={this.props.Token} fetchCalendarIndex={this.fetchCalendarIndex}/>
                <CalendarTable Token={this.props.Token} fetchCalendarIndex={this.fetchCalendarIndex} />
            </div>
        )    
    }


}

export default CalendarIndex;
