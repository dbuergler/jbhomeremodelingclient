import { CopyrightOutlined } from '@ant-design/icons';
import React, { Component } from 'react'


class Footer extends Component {

    render(){
        return(
            <div style={{textAlign: 'center', fontFamily: "Montserrat", backgroundImage: `url(/gray-parquet.jpg)`}}>
                <h3>JB Home Remodeling created by Daniel Buergler </h3> 
                <p>Copyright &copy; 2021</p>
            </div>
        )
    }
}

export default Footer;
