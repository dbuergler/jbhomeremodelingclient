import { CopyrightOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

import React, { Component } from 'react'


class Footer extends Component {

    render(){
        return(
            <div style={{textAlign: 'center', fontFamily: "Montserrat", backgroundImage: `url(/gray-parquet.jpg)`}}>
                <Divider style={{backgroundColor: '#183446', color:'white'}}>

                <h3 style={{color: 'white'}}>JB Home Remodeling created by Daniel Buergler</h3> 
                <p>Copyright &copy; 2021</p>
                
                </Divider>
            </div>
        )
    }
}

export default Footer;
