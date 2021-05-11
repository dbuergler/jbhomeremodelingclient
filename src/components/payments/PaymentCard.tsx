import React, { Component } from 'react'
import {CardElement} from "@stripe/react-stripe-js";
import { notification } from 'antd';


class PaymentCard extends Component{
    
    CARD_ELEMENT_OPTIONS = {
        style: {
        base: {
            iconColor: "#183446",
            color: "#183446",
            fontSize: "16px",
            backgroundColor: 'white',
            borderRadius: "5px",
            fontFamily: 'Montserrat',
            fontSmoothing: "antialiased",
            "::placeholder": {
            color: "#CFD7DF"
            }
        },
        invalid: {
            color: "#e5424d",
            ":focus": {
            color: "#303238"
            }
        }
        }
    };

    
render(){
    return(
        <CardElement options={this.CARD_ELEMENT_OPTIONS}/>
    )
}

    
}

export default PaymentCard;