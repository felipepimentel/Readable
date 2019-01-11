import React, { Component, Fragment } from 'react'
import { Col, Row } from 'antd'
import CategoryList from '../components/CategoryList';
import PostList from './../components/PostList';
import SortList from './../components/SortList';

const Home = () => {
  return (
    <Fragment>
      <Row gutter={16}>
        <Col className="gutter-row" span={12}>
          <div className="gutter-box" style={{ padding: '24px 24px 7px 24px' }}>
            <SortList />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className="gutter-box" style={{ padding: '24px 24px 7px 24px' }}>
            <CategoryList />
          </div>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row" span={24} >
          <div className="gutter-box" style={{ padding: '7px 24px' }}>
            <PostList />
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Home