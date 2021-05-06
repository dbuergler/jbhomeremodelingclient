import React, { Component } from 'react'

type PropsItems = {
    Token: string
    fetchPaymentIndex: () => void
}
class PaymentTable extends Component<PropsItems, {} >{
    constructor(props:PropsItems){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default PaymentTable;