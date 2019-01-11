import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    Skeleton, Switch, Card, Icon, Avatar, Button
} from 'antd';
import { Link, withRouter } from 'react-router-dom'
import { handleUpdatePost } from './../actions/posts';
import { formatDate } from '../utils/helpers';


class PostDetail extends Component {
    constructor(props) { 
        super(props)
        this.addVote = this.addVote.bind(this)
        this.removeVote = this.removeVote.bind(this)
    }

    addVote() {
        const { post, dispatch } = this.props
        dispatch(handleUpdatePost(post.title, post.body, post.category, post.id, ++post.voteScore))
    }

    removeVote() {
        const { post, dispatch } = this.props
        dispatch(handleUpdatePost(post.title, post.body, post.category, post.id, --post.voteScore))
    }

    render() {
        const { post } = this.props


        if (!post) {
            return <p>This Post doesn't existd</p>
        }

        const {
            id, timestamp
        } = post

        
        const dateFormated = formatDate ( timestamp )

        return (

            <Card style={{ marginTop: 16 }} loading={false} title={<Link to={`/post/${id}`}>{this.props.post.title}</Link>} extra={<Link to={`/edit-post/${id}`}>Editar</Link>}>
                <p>
                    <label>Author:</label> {this.props.post.author}
                </p>
                <p>
                    <label>Category:</label> {this.props.post.category}
                </p>
                <p>
                    <label>voteScore:</label> <Button type='primary' onClick={this.addVote}>+</Button>  {this.props.post.voteScore} <Button type='danger' onClick={this.removeVote}>-</Button>
                </p>
                <p>
                    <label>Comments:</label> {this.props.post.commentCount}
                </p>
                <p>
                    <label>Created At:</label> {dateFormated}
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