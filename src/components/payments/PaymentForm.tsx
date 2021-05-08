import React, { Component } from 'react'
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js';
import { Button, Form, Input } from 'antd';

type PaymentData = {
    stripe: any,
    elements: any,
}

type FormData ={
    displayForm: boolean,
    error: boolean
}

type PropsItems = {
    Token: string,
    fetchPaymentIndex: () => void
}

class PaymentForm extends Component<PaymentData, FormData, PropsItems>{
    constructor(props: PaymentData){
        super(props);
        this.state = ({
            displayForm: true,
            error: false
        })  
    }

handleSubmit = async () => {
    // event.preventDefault();
    console.log('On Submit')
    const {stripe, elements} = this.props;
    if (stripe) {
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
        if(error) {
            console.log('[error]', error);
            this.setState({error: true})
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            this.setState({
                displayForm: false
            })
        }
    }
}



    render(){
        const {stripe} = this.props;
        return(
            <div>
                {this.state.displayForm} ?
                <Form onFinish={this.handleSubmit} labelCol={{ span: 9}} wrapperCol={{ span: 8 }} layout="horizontal" style={{textAlign: 'center'}}>
                    <h1 style={{textAlign: 'center', textDecoration: 'underline', color: 'white', fontFamily: "Montserrat"}}>Billing Address</h1>
                    <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                    <Input placeholder="Address"/>
                    
                    </Form.Item>
                    <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                    <Input placeholder="City"/>
                    
                    </Form.Item>
                    <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                    <Input placeholder="State"/>
                    
                    </Form.Item>
                    <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                    <Input placeholder='ZipCode'/>
                    
                    </Form.Item>
                    <h1 style={{textAlign: 'center', textDecoration: 'underline', color: 'white', fontFamily: "Montserrat"}}>Payment Details</h1>
                    <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                    <Input placeholder="Name"/>
                    </Form.Item>
                    <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                        
                    <CardElement options={{
                                iconStyle: 'solid',
                                style: {
                                    base: {
                                        backgroundColor: 'white',
                                        fontSize: '16px',
                                        color: 'black',
                                        '::placeholder': {
                                            color: '#fffff',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}/>
                        
                    </Form.Item>
                    <Button htmlType='submit'  style={{backgroundColor: '#183446', color: 'white', border: '1px solid white', borderRadius: '5px'}} disabled={!stripe}>Pay</Button>
                </Form>
                <br></br>
                <div style={{fontFamily: "Montserrat", textAlign: 'center', color: 'white'}} >
                    {!this.state.error ? <h2 style={{fontFamily: "Montserrat", textAlign: 'center', color: 'white'}}>Thank you for your business!</h2>
                    : <h2 style={{fontFamily: "Montserrat", textAlign: 'center', color: 'white'}}>Oops! Something went wrong! Please try again.</h2>}
                </div>
            </div>
        )
    }
}

export default PaymentForm;