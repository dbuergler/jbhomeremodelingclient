import React, { Component } from 'react';
import { Carousel, Card, Col, Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';





type Token ={
    token: string
}


class Home extends Component <Token>{
    

    
    render(){
        return(
        <div style={{backgroundColor: '#8c8c8c', width: 'auto', height:'100vh', fontFamily: "Montserrat"}}>
            <h1 style={{textAlign:"center", padding:'1%', color: 'white', textDecoration: 'underline'}}>Welcome to JB Home Remodeling!</h1>
            <Carousel style={{marginTop: '3%', width: '50vw', marginLeft: '25%'}} autoplay>
                <div>
                <h3 style={{height: '50vh', color: '#fff', lineHeight: '160px', textAlign: 'center', background: '#364d79',}}>
                    <img style={{width: '50vw', height: '50vh'}} src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVtb2RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""></img>
                </h3>
                </div>
                <div>
                <h3 style={{height: '50vh', color: '#fff', lineHeight: '160px', textAlign: 'center', background: '#364d79',}}>
                <img style={{width: '50vw', height: '50vh'}} src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRvb2xzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/> 
                </h3>
                </div>
                <div>
                <h3 style={{height: '50vh', color: '#fff', lineHeight: '160px', textAlign: 'center', background: '#364d79',}}>
                <img style={{width: '50vw', height: '50vh'}} src="https://images.unsplash.com/photo-1505855796860-aa05646cbf1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVtb2RlbGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                </h3>
                </div>
                <div>
                <h3 style={{height: '50vh', color: '#fff', lineHeight: '160px', textAlign: 'center', background: '#364d79',}}>
                <img style={{width: '50vw', height: '50vh'}} src="https://images.unsplash.com/photo-1458829267686-b15150d4a28e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                </h3>
                </div>
                <div>
                <h3 style={{height: '50vh', color: '#fff', lineHeight: '160px', textAlign: 'center', background: '#364d79',}}>
                <img style={{width: '50vw', height: '50vh'}} src="https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dG9vbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
                </h3>
                </div>
            </Carousel>,
            <h1 style={{textAlign:"center", color: 'white', textDecoration: 'underline', marginBottom: '1%'}}>How it works:</h1>
            <div>
            <Row style={{padding: '1%'}} gutter={16}>
                <Col style={{marginLeft: '8.5%'}} span={5}>
                    <Card style={{backgroundColor: '#A5A58D', color:'#183446'}} title="Creating an Account" bordered={true}>
                        Creating an account is simple and easy! Click the 'Start Account' link on the NavBar to create an account or toggle to login to an existing account.
                    </Card>
                </Col>
                <Col span={5}>
                    <Card  style={{backgroundColor: '#A5A58D', color:'#183446'}} title="Building a Project" bordered={true}>
                        You will be redirected to the Projects page. To create a project, simply fill out the form and the project will display in the table. 
                    </Card>
                </Col>
                <Col span={5}>
                    <Card style={{backgroundColor: '#A5A58D', color:'#183446'}} title="Scheduling a Meeting" bordered={true}>
                        Scheduling a meeting is fast and efficient! Click the 'Calendar' link in the NavBar and set up your meeting on the Calendly home page. 
                    </Card>
                </Col>
                <Col span={5}>
                    <Card  style={{backgroundColor: '#A5A58D', color:'#183446'}} title="Making a Payment" bordered={true}>
                        We accept many forms of payment. To pay online, go to the 'Payment' link in the NavBar and enter your payment information. 
                    </Card>
                </Col>
            </Row>   

            </div>
        </div>
        )
    }
}


export default Home;
