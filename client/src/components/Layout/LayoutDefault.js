import React, { Component } from 'react'
import HeaderApp from './HeaderApp'
import FooterApp from './FooterApp'
import { Layout, } from 'antd'
const { Content } = Layout;

class LayoutDefault extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderApp />
                <Layout className="layout">
                    <Content>
                        {this.props.children}
                    </Content>
                </Layout>
                <FooterApp />
            </React.Fragment>
        )
    }
}

export default LayoutDefault
