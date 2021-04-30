import React, { Component } from 'react'
import {Calendar} from 'antd';
import APIURL from '../../helpers/environment';
import CalendarUpdate from './CalendarUpdate';
import CalendarDelete from './CalendarDelete';




type PropsItems = {
    Token: string
    fetchCalendarIndex: () => void
}

class CalendarTable extends Component<PropsItems,{}>{
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


onPanelChange = (value: { format: (arg0: string) => any; }, mode: any) => {
        console.log(value.format('YYYY-MM-DD'), mode);
} 
    render(){
    return(
        <div style={{fontFamily: "Montserrat", textAlign: 'center', width: 'auto', height: '100vh'}}>
            <Calendar  onPanelChange={this.onPanelChange}/>
            <CalendarUpdate Token={this.props.Token} fetchCalendarIndex={this.props.fetchCalendarIndex}/>
            <CalendarDelete Token={this.props.Token} fetchCalendarIndex={this.props.fetchCalendarIndex}/>
        </div>
    )
}


}

export default CalendarTable;