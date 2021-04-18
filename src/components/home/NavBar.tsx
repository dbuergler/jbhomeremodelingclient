import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
DesktopOutlined,
HomeOutlined,
CalendarOutlined,
DollarCircleOutlined,
ProjectOutlined,
UserOutlined,
} from '@ant-design/icons';
import {Route, Link} from 'react-router-dom';
import SignUp from '../auth/SignUp';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

type PropsItems ={
    updateToken: (newToken: string) => void
}


class NavBar extends Component<PropsItems, {}> {
    state = {
        collapsed: false,
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
                    Home
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                    Sign Up/Log In
                    </Menu.Item>
                    <Menu.Item key="9" icon={<CalendarOutlined />}>
                    Calendar
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                    <Menu.Item key="3" icon={<ProjectOutlined />}>My Projects</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6" icon={<DollarCircleOutlined />} title="Payment">
                        Payment
                    </Menu.Item>
                    
                </Menu>
                </Sider>
                <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0, backgroundColor: '#183446'}} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }}>
                    Bill is a cat.
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>JB Home Remodeling Create by Daniel Buergler </Footer>
                </Layout>
            </Layout>
            </div>
        );
    }
}



export default NavBar;

