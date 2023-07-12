import React, { Component } from 'react'
import {Button, notification} from 'antd';
import CalendarUpdate from './CalendarUpdate';
import CalendarDelete from './CalendarDelete';
import {InlineWidget} from "react-calendly";
import { NotificationOutlined } from '@ant-design/icons';




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

    openNotification = () => {
        notification.open({
        message: 'Need more time?',
        description:
            'No problem! Call me directly at 1(800) 123-HOME!',
        icon: <NotificationOutlined />,
        onClick: () => {
            console.log('Notification Clicked!');
        },
        });
    };


onPanelChange = (value: { format: (arg0: string) => any; }, mode: any) => {
        console.log(value.format('YYYY-MM-DD'), mode);
} 
    render(){
    return(
        <div style={{fontFamily: "Montserrat", textAlign: 'center', width: 'auto', height: 'auto'}}>
            <h1 style={{margin: '2%', color: 'white', textDecoration: 'underline'}}>Calendly Meetings</h1>
            <InlineWidget url="https://calendly.com/jbhomeremodeling421"/>
            <br></br>
            <Button style={{backgroundColor: '#183446', border: '1px solid white', borderRadius: '5px', color: 'white', marginTop: '1%'}} onClick={this.openNotification}>Need More Time to Talk?</Button>
            
            {/* <Calendar  onPanelChange={this.onPanelChange}/> */}
            {/* <CalendarUpdate Token={this.props.Token} fetchCalendarIndex={this.props.fetchCalendarIndex}/>
            <CalendarDelete Token={this.props.Token} fetchCalendarIndex={this.props.fetchCalendarIndex}/> */}

        </div>
    )
}


}

export default CalendarTable;