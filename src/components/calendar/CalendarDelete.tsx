import React, { Component } from 'react'
import APIURL from '../../helpers/environment';

type PropsItems = {
    Token: string,
    fetchCalendarIndex: () => void
}

class CalendarDelete extends Component<PropsItems>{
    constructor(props: PropsItems){
        super(props);
        this.state = {

        }
    }

    fetchCalenderDelete = () => {
        const url = `${APIURL}/calender/delete`
        fetch(url, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: this.props.Token
            })
        })
        .then(() => this.props.fetchCalendarIndex())
    }

    render(){
        return(
            <div></div>
        )
    }


}

export default CalendarDelete;