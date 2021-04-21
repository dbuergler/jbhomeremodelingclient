import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import {
HomeOutlined,
CalendarOutlined,
DollarCircleOutlined,
ProjectOutlined,
UserOutlined,
LoginOutlined
} from '@ant-design/icons';
import {Switch, Route, Link, NavLink} from 'react-router-dom';
import SignUp from '../auth/SignUp';
import Login from '../auth/Login';
import Auth from '../auth/Auth';
import Home from './Home';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

type PropsItems ={
    updateToken: (newToken: string) => void
    clearToken: () => void
}


class NavBar extends Component<PropsItems, {}> {
    state = {
        collapsed: false,
        showLogin: true,
        
    };

    onCollapse = (collapsed: any) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };



    render() {
        const { collapsed } = this.state;
        return (
            <div>
                <Header style={{color: 'white', fontSize: '3em', backgroundColor: '#183446'}}>JB Home Remodeling</Header>
            <Layout style={{ minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} style={{backgroundColor: '#183446'}}>
                <div className="logo" />
                <Menu style={{backgroundColor: '#183446'}} theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="/home">Home
                    </Link>
                    </Menu.Item>
                    <Menu.Item key="9" icon={<CalendarOutlined />}>
                        <Link to="/calendar">
                            <NavLink to ="/calendar" style={{color: 'white'}}>Calendar</NavLink>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                    <Menu.Item key="3" icon={<ProjectOutlined />}>My Projects</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6" icon={<DollarCircleOutlined />} title="Payment">
                        Payment
                    </Menu.Item>
                <Menu.Item icon={<LoginOutlined />}onClick={this.props.clearToken}>Logout</Menu.Item>
                    
                </Menu>
                </Sider>
                <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0, backgroundColor: '#183446'}} />
                <Content style={{ margin: '0 16px' }}>
                    <Switch>
                    <Route exact path = '/home'  component={() => <SignUp updateToken={this.props.updateToken}/>}/>
                    </Switch>
                </Content>
                <Footer style={{ textAlign: 'center' }}>JB Home Remodeling Created by Daniel Buergler </Footer>
                </Layout>
            </Layout>
            </div>
        );
    }
}



export default NavBar;

function showLogin(arg0: boolean) {
    throw new Error('Function not implemented.');
}

