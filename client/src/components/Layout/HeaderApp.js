import React, { Component } from 'react'
import { Layout, Menu, Row, Col } from 'antd'
import { withRouter, NavLink } from 'react-router-dom'

const { Header, Content, Footer } = Layout;

class HeaderApp extends Component {
    render() {
        const { location } = this.props;
        return (
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['/']}
                    selectedKeys={[location.pathname]}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="/"><NavLink to='/'>Home</NavLink></Menu.Item>
                    <Menu.Item key="/new-post"><NavLink to='/new-post'>New Post</NavLink></Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default withRouter(HeaderApp)
