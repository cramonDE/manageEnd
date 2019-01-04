import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './layout-module.css';

import {
    Avatar, Icon, Layout, Menu, Tooltip,
} from 'antd';
import savings from './pages/savings';
import withdraw from './pages/withdraw';
const routes = [{
    component: savings,
    exact: true,
    path: "/savings",
},
{
    component: withdraw,
    path: "/withdraw",
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
                                <Icon type="download" />
                                <Link to="/savings">存款</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="upload" />
                                <Link to="/savings">取款</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="shopping-cart" />
                                <span>理财产品</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="dollar" />
                                <span>外币</span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon type="user" />
                                <span>用户信息</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header className="layoutHeader" style={{ background: '#fff' }}>银行个人金融产品管理数据库</Header>
                        <Content style={{ margin: '16px 16px' }}>
                            {/* <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb> */}
                                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
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
