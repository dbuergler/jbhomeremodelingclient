import { Button, Form, Input, Modal } from 'antd';
import React, { Component } from 'react'
import { ModalBody, ModalHeader } from 'reactstrap';
import APIURL from '../../helpers/environment';

type PaymentData = {
    address: string,
    city: string,
    state: string,
    zipcode: string,
    name: string,
    amount: string,
    loading: boolean,
    visible: boolean

}

type PropsItems = {
    Token: string,
    fetchPaymentIndex: () => void
    payments: number
}

class PaymentUpdate extends Component<PropsItems, PaymentData>{
    constructor(props:PropsItems){
        super(props);
        this.state = {
            address: '',
            city: '',
            state: '',
            zipcode: '',
            name: '',
            amount: '',
            loading: false,
            visible: false
        }
    }

    fetchPaymentUpdate = () => {
        const url = `${APIURL}/payment/${this.props.payments}`
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({address: this.state.address, city: this.state.city, state: this.state.state, zipcode: this.state.zipcode, name: this.state.name}),
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
        this.fetchPaymentUpdate();
    }

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = () => {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false, visible: false});
        }, 3000)
    }

    handleCancel = () => {
        this.setState({visible: false})
    }

    render(){
        return(
            <div>
                <Button style={{backgroundColor: '#A5A58D', color: 'white', border: '1px solid white', borderRadius: '5px'}} onClick={this.showModal}>
                    Update
                </Button>
                <Modal visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <ModalHeader></ModalHeader>
                        <ModalBody>
                        <Form 
                        style={{textAlign: 'center'}}
                        labelCol={{ span: 9}}
                        wrapperCol={{ span: 8 }}
                        layout="horizontal">
                            <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                            <Input  onChange={(e) => this.setState({address: e.target.value})} placeholder="Address"/>
                            </Form.Item>
                            <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                            <Input onChange={(e) => this.setState({city: e.target.value})}placeholder="City" />
                            </Form.Item>
                            <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                            <Input onChange={(e) => this.setState({state: e.target.value})} placeholder="State"/>
                            </Form.Item>
                            <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                            <Input onChange={(e) => this.setState({zipcode: e.target.value})} placeholder="ZipCode"/>
                            </Form.Item>
                            <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                            <Input onChange={(e) => this.setState({amount: e.target.value})} placeholder="Name" />
                            </Form.Item>
                            <Form.Item style={{textAlign: 'center', marginLeft: '40%'}}>
                            <Input onChange={(e) => this.setState({amount: e.target.value})} placeholder="Amount" />
                            </Form.Item>
                        </Form>
                        </ModalBody>
                </Modal>
            </div>
        )
    }


}

export default PaymentUpdate;