import { Button } from 'antd';
import React, { Component } from 'react'
import APIURL from '../../helpers/environment';

type PropsItems = {
    Token: string,
    fetchPaymentIndex: () => void
    payments: number
}

class PaymentDelete extends Component<PropsItems, {}>{
    constructor(props: PropsItems){
        super(props);
        this.state = {

        }
    }

    fetchPaymentDelete = () => {
        const url = `${APIURL}/payment/:id`
        fetch(url, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `${localStorage.getItem('token')}`
            })
        })
        .then(() => this.props.fetchPaymentIndex())
    }

    render(){
        return(
            <div>
                <div>
                <Button style={{backgroundColor: '#A5A58D', color: 'white', border: '1px solid white', borderRadius: '5px'}} onClick={this.fetchPaymentDelete}>Delete</Button>
            </div>
            </div>
        )
    }
}

export default PaymentDelete;