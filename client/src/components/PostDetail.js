import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    Skeleton, Switch, Card, Icon, Avatar, Button,
} from 'antd';
import { Link, withRouter } from 'react-router-dom'
const { Meta } = Card;


class PostDetail extends Component {
    render() {
        const { post } = this.props
        

        if (!post) {
            return <p>This Post doesn't existd</p>
        }

        const {
            id
        } = post

        return (
            
            
                <Card style={{ marginTop: 16 }} loading={false} title={<Link to={`/post/${id}`}>{this.props.post.title}</Link>} extra={<Link to={`/edit-post/${id}`}>Editar</Link>}>
                    <p>
                        <label>Author:</label>{this.props.post.author}
                    </p>
                    <p>
                        <label>Category:</label>{this.props.post.category}
                    </p>
                    <p>
                        <label>voteScore:</label>{this.props.post.voteScore}
                    </p>
                    <p>
                        <label>Comments:</label>{this.props.post.commentCount}
                    </p>
                    <p>
                        <label>Created At:</label>{this.props.post.timestamp}
                    </p>
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

export default withRouter(connect(mapStateToProps)(PostDetail))