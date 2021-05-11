import { Button, Drawer } from 'antd';
import React, { Component } from 'react'
import PaymentDelete from './PaymentDelete';
import PaymentUpdate from './PaymentUpdate';

type PaymentData = {
    address: string,
    city: string,
    state: string,
    zipcode: string,
    name: string,
    amount: string
    id: number,
    visible: boolean
}

type PropsItems = {
    Token: string
    fetchPaymentIndex: () => void
    paymentsData: []
}
class PaymentTable extends Component<PropsItems, PaymentData >{
    constructor(props:PropsItems){
        super(props);
        this.state = {
            address: '',
            city: '',
            state: '',
            zipcode: '',
            name: '',
            amount: '',
            id: 0,
            visible: false
            
        }
    }

    

    componentDidMount(){
        this.paymentMapper()
    }
    showDrawer = () => {
        this.setState({
            visible: true
        })
    }

    onClose = () => {
        this.setState({
            visible: false
        })
    }

    paymentMapper = () => {
        return this.props.paymentsData.map((payments:PaymentData, index: number) => {
            return(
                <div>
                    <h1>Payment Details</h1>
                    <p>{payments.id}</p>
                    <p>{payments.address}</p>
                    <p>{payments.city}</p>
                    <p>{payments.state}</p>
                    <p>{payments.zipcode}</p>
                    <p>{payments.name}</p>
                    <p>{payments.amount}</p>

                    <PaymentUpdate Token={this.props.Token} fetchPaymentIndex={this.props.fetchPaymentIndex} payments={payments.id}/>
                    <br></br>
                    <PaymentDelete Token={this.props.Token} fetchPaymentIndex={this.props.fetchPaymentIndex} payments={payments.id}/>
                </div>
            )
        })
    }

    render(){
        return(
            <div>
            <Drawer
            placement='right'
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}  
            >
            <p>{this.paymentMapper()}</p>
            </Drawer>
            

            
            </div>
        )
    }
}

export default PaymentTable;