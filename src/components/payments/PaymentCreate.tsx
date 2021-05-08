import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import APIURL from '../../helpers/environment';
import PaymentForm from './PaymentForm';




interface PaymentData  {
    firstName: string,
    lastName: string,
    projectName: string,
    dateofpayment: string,
    amount: string,
    
}

type PropsItems = {
    Token: string,
    fetchPaymentIndex: () => void
}

class PaymentCreate extends Component<PropsItems, PaymentData> {
    
    constructor(props:PropsItems){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            projectName: '',
            dateofpayment: '',
            amount: '',
        }
    }

    fetchPaymentCreate = () => {
        const url =`${APIURL}/payment/create`
        fetch (url, {
            method: 'POST',
            body: JSON.stringify({firstName: this.state.firstName, lastName: this.state.lastName, projectName: this.state.projectName, dateofpayment: this.state.dateofpayment, amout: this.state.amount}),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `${localStorage.getItem('token')}`
            })
        }).then(
            (response) => response.json()
            ).then((data) => {
                console.log(data);
                this.props.fetchPaymentIndex();
            })
        }
        
        
    
    
        componentDidMount(){
        this.fetchPaymentCreate();
    }

render(){
    
    return(
        <div>
            
            
        </div>
        )
    }
}




export default PaymentCreate;


