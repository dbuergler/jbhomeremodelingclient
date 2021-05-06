import React, { Component } from 'react'
import APIURL from '../../helpers/environment';


type PaymentData = {
    firstName: string,
    lastName: string,
    projectName: string,
    dateofpayment: string,
    amount: number,
    data: []
    loaded: boolean

}

type PropsItems = {
    Token: string, 
}


class PaymentIndex extends Component<PropsItems, PaymentData> {
    constructor(props:PropsItems){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            projectName: '',
            dateofpayment: '',
            amount: 0,
            data: [],
            loaded: false
        }
    }

    fetchPaymentIndex = () => {
        const url = `${APIURL}/payment/`
        fetch(url, {
            method:'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: this.props.Token
            })
        })
    }


    componentDidMount(){
        this.fetchPaymentIndex();
        let sqPaymentScript = document.createElement('script')
        sqPaymentScript.src = "https://js.squareup.com/v2/paymentform";
        sqPaymentScript.type = "text/javascript";
    sqPaymentScript.async = false;
    sqPaymentScript.onload = () => {
    this.setState({
        loaded: true
    });
    };
    document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
}


    render(){
        return(
            <div>
                
            </div>
        )
    }


}


export default PaymentIndex;