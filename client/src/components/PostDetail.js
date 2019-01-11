import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    Skeleton, Switch, Card, Icon, Avatar,
} from 'antd';
const { Meta } = Card;


class PostDetail extends Component {
    render() {
        return (
            <Card style={{  marginTop: 16 }} loading={false} title={this.props.post.title}>
                <p>
                    {this.props.post.body}
                </p>
            </Card>
        )
    }
}

function mapStateToProps({ posts }, { id }) {
    return {
        post: posts[id]
    }
}

export default connect(mapStateToProps)(PostDetail)