import React, { Component } from 'react'
import {CardElement, ElementsConsumer} from '@stripe/react-stripe-js'
import { Form, Input, InputNumber, notification } from 'antd';
import PaymentCard from './PaymentCard';


type PropsItems = {
    stripe: any,
    elements: any,
}

class PaymentForm extends Component<PropsItems>{


handleSubmit = async (event: {preventDefault: () => void}) => {
    event.preventDefault();
    
    const {stripe, elements} = this.props;
    if (!stripe || !elements) {
        return;
    }
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if(result.error){
        console.log(result.error.message)
    } else {
        console.log(result.token)
    }
    notification.info({
        message: 'You have successfully paid'
    })
}        
        
onChange = (value: any) => {
    console.log('changed', value);
}


    render(){;
        return(
            <div>
                    <form onSubmit={this.handleSubmit}>
                    <h1 style={{textAlign: 'center', textDecoration: 'underline', color: 'white', fontFamily: "Montserrat"}}>Payment Details</h1>
                    <Form.Item style={{textAlign: 'center', marginLeft: '40%', fontFamily: 'Montserrat'}} labelCol={{ span: 9}}
                        wrapperCol={{ span: 8}}>
                    <Input placeholder="Name"/>
                    </Form.Item>
                    <Form.Item style={{textAlign: 'center', marginLeft: '40%', fontFamily: 'Montserrat'}} labelCol={{ span: 9}}
                        wrapperCol={{ span: 8}}>
                    <InputNumber placeholder="Amount" formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    onChange={this.onChange} defaultValue={0} min={0}/>
                    </Form.Item>
                    <Form.Item style={{textAlign: 'center', marginLeft: '40%', fontFamily: 'Montserrat'}} labelCol={{ span: 9}}
                        wrapperCol={{ span: 8}}>
                        <PaymentCard />
                    <br></br>
                    <button style={{backgroundColor: '#183446', color: 'white', border: '1px solid white', borderRadius: '5px', textAlign: 'center'}} disabled={!this.props.stripe}>Pay</button>
                    </Form.Item>
                    </form>
                <br></br>
                <div style={{fontFamily: "Montserrat", textAlign: 'center', color: 'white'}} >
                    <h2 style={{fontFamily: "Montserrat", textAlign: 'center', color: 'white'}}>Thank you for your business!</h2>
                    
                </div>
                <div>
            
            </div>

            </div>
        )
    }
} 

export default function InjectedPaymentForm() {
    return (
        <ElementsConsumer>
            {({stripe, elements}) => (
                <PaymentForm stripe={stripe} elements={elements}/>
            )}
        </ElementsConsumer>
    )

}
