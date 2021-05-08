import { CopyrightOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

import React, { Component } from 'react'


class Footer extends Component {

    render(){
        return(
            <div style={{textAlign: 'center', fontFamily: "Montserrat"}}>
                <h3 style={{color: 'white', backgroundColor: '#183446', padding: '3%'}}>JB Home Remodeling created by Daniel Buergler
                <p style={{color: 'white', backgroundColor: '#183446'}}>Copyright &copy; 2021</p>
                </h3> 
            </div>
        )
    }
}

export default Footer;
