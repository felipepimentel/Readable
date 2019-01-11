import React, { Component, Fragment } from 'react'
import { Col, Row } from 'antd'
import CategoryList from '../components/CategoryList';
import PostList from './../components/PostList';
import SortList from './../components/SortList';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
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
              <CategoryList id={this.props.category}  />
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={24} >
            <div className="gutter-box" style={{ padding: '7px 24px' }}>
              <PostList category={this.props.category} />
            </div>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

function mapStateToProps({ }, props) {
  const { category } = props.match.params
  return {
    category
  }
}
export default connect(mapStateToProps)(Home)