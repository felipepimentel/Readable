import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    Skeleton, Switch, Card, Icon, Avatar,
} from 'antd';
import { Link, withRouter } from 'react-router-dom'
const { Meta } = Card;


class CommentDetail extends Component {
    render() {
        const { comment } = this.props


        if (!comment) {
            return <p>This Comment doesn't existd</p>
        }

        const {
            id
        } = comment

        return (

            <Card style={{ marginTop: 16 }} loading={false}>
                <p>
                    <label>Author:</label>{this.props.comment.author}
                </p>
                <p>
                    <label>voteScore:</label>{this.props.comment.voteScore}
                </p>
                <p>
                    <label>Created At:</label>{this.props.comment.timestamp}
                </p>
                <p>
                    {this.props.comment.body}
                </p>
            </Card>

        )
    }
}

function mapStateToProps({ comments }, { id }) {
    return {
        comment: comments[id]
    }
}

export default withRouter(connect(mapStateToProps)(CommentDetail))