import React, { Component } from 'react';
import { Carousel } from 'antd';




type Token ={
    token: string
}


class Home extends Component <Token>{
    
    render(){
        return(
        <div style={{backgroundColor:"#E2E2E2"}}>
            <Carousel autoplay>
                <div>
                    <h3 style={{height: '50vh', color: '#fff', lineHeight: '160px', textAlign: 'center', background: '#364d79',}}>1</h3>
                </div>
                <div>
                <h3 style={{height: '50vh', color: '#fff', lineHeight: '160px', textAlign: 'center', background: '#364d79',}}>2</h3>
                </div>
                <div>
                <h3 style={{height: '50vh', color: '#fff', lineHeight: '160px', textAlign: 'center', background: '#364d79',}}>3</h3>
                </div>
                <div>
                <h3 style={{height: '50vh', color: '#fff', lineHeight: '160px', textAlign: 'center', background: '#364d79',}}>4</h3>
                </div>
            </Carousel>,
        </div>
        )
    }
}


export default Home;
