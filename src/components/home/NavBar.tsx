import React, { Component } from 'react';
import {Button, Menu} from 'antd';
import {
HomeOutlined,
CalendarOutlined,
DollarCircleOutlined,
ProjectOutlined,
UserOutlined,
AccountBookOutlined, 
LogoutOutlined
} from '@ant-design/icons';
import {Link, NavLink} from 'react-router-dom';
import Auth from '../auth/Auth';
import Home from './Home';
import Calendar from '../calendar/CalendarTable';
import { Header } from 'antd/lib/layout/layout';


const { SubMenu } = Menu;

type PropsItems ={
    updateToken: Function
    clearToken: () => void
}


class NavBar extends Component<PropsItems, {}> {
    state = {
        current: 'home',
        showLogin: true,
        
    };

    handleClick = (e: any) => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

            render() {
            const { current } = this.state;
                return (
                    <div id='navBar' style={{fontFamily: 'Montserrat', textAlign: 'center'}}>
                    <Header style={{color: 'white', fontSize: '4em', backgroundColor: '#183446', textAlign: 'center', fontFamily: "Montserrat"}}>JB Home Remodeling
                    </Header>
                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{textAlign:"center", fontSize:'1.2em', backgroundColor:"#A5A58D", color:'#183446', }}>
                        <Menu.Item key="home" icon={<HomeOutlined />}>
                            <Link to="/">
                                <NavLink to='/'>Home</NavLink>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="account" icon={<AccountBookOutlined/>}>
                        <Link to="/account">
                                <NavLink to='/account'>Start Account</NavLink>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="projects" icon={<ProjectOutlined/>} style={{fontFamily:'Montserrat'}}>
                            <Link to="/projects">
                                <NavLink to='/projects'>Projects</NavLink>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="calendar" icon={<CalendarOutlined/>}>
                        <Link to="/calendar">
                                <NavLink to='/calendar'>Calendar</NavLink>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="payment" icon={<DollarCircleOutlined/>}>
                        <Link to="/payment">
                                <NavLink to='/payment'>Payment</NavLink>
                            </Link>
                        </Menu.Item>
                        <Menu.Item icon={<LogoutOutlined />}>
                        <Link to='/' onClick={this.props.clearToken}>Logout</Link>
                        </Menu.Item>
                    </Menu>
                    </div>
                );
            }
} 


export default NavBar;



