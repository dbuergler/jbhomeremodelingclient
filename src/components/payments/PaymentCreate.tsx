import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Button, Form, Input, notification } from 'antd';
import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import APIURL from '../../helpers/environment';
import PaymentForm from './PaymentForm';



const stripePromise = loadStripe('pk_test_51IjyM9DDEirNYEmUo722uaBLZ9Jjy6NPE4ZKYRgpCAnIVYgQYZwF6q6bqRezaRntvOkJ1gdRU5V6dwa0QEPBhJES00RhXKr7nJ')

interface PaymentData  {
    address: string,
    city: string,
    state: string,
    zipcode: string,
    name: string,
    amount: string,
    id: number
    
}

type PropsItems = {
    Token: string,
    fetchPaymentIndex: () => void
}

class PaymentCreate extends Component<PropsItems, PaymentData> {
    
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
        }
    }

    fetchPaymentCreate = () => {
        const url =`${APIURL}/payment/create`
        fetch (url, {
            method: 'POST',
            body: JSON.stringify({address: this.state.address, city: this.state.city, state: this.state.state, zipcode: this.state.zipcode, amount: this.state.amount}),
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
            <Form onFinish={this.fetchPaymentCreate} style={{textAlign: 'center', fontFamily: 'Montserrat'}}
                        labelCol={{ span: 9}}
                        wrapperCol={{ span: 8}}
                        layout="horizontal">
            <h1 style={{textAlign: 'center', textDecoration: 'underline', color: 'white', fontFamily: "Montserrat"}}>Billing Address</h1>
                    <Form.Item style={{textAlign: 'center', marginLeft: '40%'}} required>
                    <Input placeholder="Address"/>
                    
                    </Form.Item>
                    <Form.Item style={{textAlign: 'center', marginLeft: '40%'}} required>
                    <Input placeholder="City"/>
                    
                    </Form.Item>
                    <Form.Item style={{textAlign: 'center', marginLeft: '40%'}} required>
                    <Input placeholder="State"/>
                    
                    </Form.Item>
                    <Form.Item style={{textAlign: 'center', marginLeft: '40%'}} required>
                    <Input placeholder='ZipCode'/>
                    </Form.Item>
            </Form>
            <Button>
                
            </Button>
            <Elements stripe={stripePromise}>
            <PaymentForm/>
            </Elements>
            
        </div>
        )
    }
}




export default PaymentCreate;


