import React, { Component } from 'react';
// import {GOOGLE_API_KEY, CALENDAR_ID} from '../config.js';




type PropsItems = {
    updateToken: (newToken: string) => void,
}

class Calendar extends Component<PropsItems, {} >{
    constructor(props: PropsItems){
        super(props)
        this.state = {
            events: []
        }
    }

//     getEvents(){
//         let that = this;
//   function start() {
//     gapi.client.init({
//       'apiKey': GOOGLE_API_KEY
//     }).then(function() {
//       return gapi.client.request({
//         'path': `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
//       })
//     }).then( (response) => {
//       let events = response.result.items
//       that.setState({
//         events
//       }, ()=>{
//         console.log(that.state.events);
//       })
//     }, function(reason) {
//       console.log(reason);
//     });
//   }
//   gapi.load('client', start)
// }
//     }
}


export default Calendar;