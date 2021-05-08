import { Button } from 'antd';
import React, { Component } from 'react'
import APIURL from '../../helpers/environment';
import {StripeProvider, Elements} from 'react-stripe-elements'
import PaymentCreate from './PaymentCreate';
import PaymentForm from './PaymentForm';
import PaymentTable from './PaymentTable';





type PaymentData = {
    address: string,
    city: string,
    state: string,
    zipcode: string,
    name: string,
    amount: string,
    paymentsData: []
    loaded: boolean
    
    

}

type PropsItems = {
    Token: string, 
    fetchPaymentIndex: () => void
    stripe: any
    elements: any
    
}


class PaymentIndex extends Component<PropsItems, PaymentData> {
    constructor(props:PropsItems){
        super(props);
        this.state = {
            address: '',
            city: '',
            state: '',
            zipcode: '',
            name: '',
            amount: '',
            paymentsData: [],
            loaded: false
            
        }
    }

    fetchPaymentIndex = () => {
        const url = `${APIURL}/payment/`
        fetch(url, {
            method:'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `${localStorage.getItem('token')}`
            })
        })
    }


    
    

    componentDidMount(){
        this.fetchPaymentIndex();
}

    render(){
        return(
            <div>
                
                <PaymentTable Token={this.props.Token} fetchPaymentIndex={this.fetchPaymentIndex} paymentsData={this.state.paymentsData}/>
            </div>
        )
    }


}


export default PaymentIndex;