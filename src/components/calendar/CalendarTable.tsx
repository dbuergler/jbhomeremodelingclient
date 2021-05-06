import React, { Component } from 'react'
import {Calendar, Modal} from 'antd';
import CalendarUpdate from './CalendarUpdate';
import CalendarDelete from './CalendarDelete';
import {InlineWidget} from 'react-calendly';




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



onPanelChange = (value: { format: (arg0: string) => any; }, mode: any) => {
        console.log(value.format('YYYY-MM-DD'), mode);
} 
    render(){
    return(
        <div style={{fontFamily: "Montserrat", textAlign: 'center', width: 'auto', height: '100vh'}}>
            <h1 style={{margin: '2%', color: 'white', textDecoration: 'underline'}}>Calendly Meetings</h1>
            <InlineWidget url="https://calendly.com/jbhomeremodeling421"/>
            {/* <Calendar  onPanelChange={this.onPanelChange}/> */}
            {/* <CalendarUpdate Token={this.props.Token} fetchCalendarIndex={this.props.fetchCalendarIndex}/>
            <CalendarDelete Token={this.props.Token} fetchCalendarIndex={this.props.fetchCalendarIndex}/> */}

        </div>
    )
}


}

export default CalendarTable;