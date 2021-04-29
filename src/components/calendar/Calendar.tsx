import React, { Component } from 'react'
import {Calendar} from 'antd';
import CalendarForm from './CalendarForm'



type PropsItems = {
    updateToken: (newToken: string) => void,
}

class CalendarMain extends Component<PropsItems,{}>{
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
        <div style={{fontFamily: "Montserrat"}}>
            <CalendarForm updateToken={this.props.updateToken}/>
            <Calendar onPanelChange={this.onPanelChange}/>
        </div>
    )
}


}

export default CalendarMain;