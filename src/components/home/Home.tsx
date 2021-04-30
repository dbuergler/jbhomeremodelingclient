import React, { Component } from 'react';
import { Carousel } from 'antd';





type Token ={
    token: string
}


class Home extends Component <Token>{
    
    render(){
        return(
        <div style={{backgroundImage: `url(/gray-parquet.jpg)`, width: 'auto', height:'100vh'}}>
            <h1 style={{textAlign:"center", padding:'20px'}}>Welcome!</h1>
            <Carousel style={{marginTop: '10%', width: '50vw', marginLeft: '25%'}} autoplay>
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
        </div>
        )
    }
}


export default Home;
