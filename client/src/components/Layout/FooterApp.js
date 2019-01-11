import React from 'react'
import { Layout, Row, Col } from 'antd'
const { Footer } = Layout;

const FooterApp = () => {
    const year = new Date().getFullYear()
    return (
        <Footer style={{ textAlign: 'center' }}>
            &copy; {year}. Felipe Pimentel
        </Footer>
    );
}
export default FooterApp
