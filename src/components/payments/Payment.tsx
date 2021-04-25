import React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const stripe = loadStripe(
    '{pk_test_51IjyM9DDEirNYEmUfxKLca1fQufgCr1FlF6W9dGzc4zeC4QGyNNreMVLO0JIicQf6NgVNRWpzs7TjfDVFx9yCguP00kAqKpZOg}'
)


const Payment = () => {
    return (
        <Elements stripe={stripe}>
            
        </Elements>
    )

}



export default Payment;