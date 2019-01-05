import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import './layout-module.css';

import {
    Avatar, Icon, Layout, Menu, Tooltip,
} from 'antd';

import dollar from './pages/dollar';
import product from './pages/product';
import savings from './pages/savings';
import user from './pages/user';
import withdraw from './pages/withdraw';

const routes = [{
    component: savings,
    exact: true,
    path: "/savings",
},
{
    component: withdraw,
    path: "/withdraw",
},{
    component: user,
    path: "/user",
},{
    component: dollar,
    path: "/dollar",
},{
    component: product,
    path: "/product",
},

];

const {
    Header, Content, Sider,
} = Layout;



class LayoutModule extends React.Component {
    public state = {
        collapsed: false,
    };

    public onCollapse = (collapsed: any) => {
        this.setState({ collapsed });
    }

    public render() {
        return (
            <BrowserRouter>
                <Layout className="mainLayout" style={{ minHeight: '100vh' }}>
                    <Sider collapsible={true} collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <Tooltip placement="right" title={'普通用户'}>
                            <Avatar className="avatar" icon="user" />
                        </Tooltip>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Link to="savings">
                                    <Icon type="download" />
                                    <span>存款</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="withdraw">
                                    <Icon type="upload" />
                                    <span>取款</span>
                                </Link>
                            </Menu.Item>
                            {/* <Menu.Item key="3">
                                <Link to="product">
                                    <Icon type="shopping-cart" />
                                    <span>理财产品</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="dollar">
                                    <Icon type="dollar" />
                                    <span>外币</span>
                                </Link>
                            </Menu.Item> */}
                            <Menu.Item key="5">
                                <Link to="user">
                                    <Icon type="user" />
                                    <span>用户信息</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header className="layoutHeader" style={{ background: '#fff' }}>个人银行管理数据库</Header>
                        <Content style={{ margin: '16px 16px', height: '100%' }}>
                            {/* <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb> */}
                            <div style={{ padding: 24, background: '#fff', minHeight: 360, height: '100%' }}>
                                {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.component}
                                    />
                                ))}
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </BrowserRouter>
        );
    }
}


export default LayoutModule;
