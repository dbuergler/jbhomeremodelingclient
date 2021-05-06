import React, { Component } from 'react'
import APIURL from '../../helpers/environment';

type PropsItems = {
    Token: string,
    fetchPaymentIndex: () => void
}

class PaymentDelete extends Component<PropsItems, {}>{
    constructor(props: PropsItems){
        super(props);
        this.state = {

        }
    }

    fetchCalenderDelete = () => {
        const url = `${APIURL}/payment/:id`
        fetch(url, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: this.props.Token
            })
        })
        .then(() => this.props.fetchPaymentIndex())
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default PaymentDelete;