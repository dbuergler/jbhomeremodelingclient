import React from 'react'
import {ElementsConsumer, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements()

    const handleSubmit = async (event: any) => {
        event.preventDefualt();
    }
    
}

export default PaymentForm;