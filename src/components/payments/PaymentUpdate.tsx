import React, { Component } from 'react'
import APIURL from '../../helpers/environment';

type PaymentData = {
    firstName: string,
    lastName: string,
    projectName: string,
    dateofpayment: string,
    amount: number

}

type PropsItems = {
    Token: string,
    fetchPaymentIndex: () => void
}

class PaymentUpdate extends Component<PropsItems, PaymentData>{
    constructor(props:PropsItems){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            projectName: '',
            dateofpayment: '',
            amount: 0
        }
    }

    fetchPaymentUpdate = () => {
        const url = `${APIURL}/payment/:id`
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({firstName: this.state.firstName, lastName: this.state.lastName, projectName: this.state.projectName, dateofpayment: this.state.dateofpayment, amout: this.state.amount}),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: this.props.Token
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
            this.props.fetchPaymentIndex();
        })
    }

    componentDidMount(){
        this.fetchPaymentUpdate();
    }

    render(){
        return(
            <div></div>
        )
    }


}

export default PaymentUpdate;