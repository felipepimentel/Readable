import { Button } from 'antd';
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PostDetail from '../components/PostDetail';
import { withRouter } from 'react-router-dom'
import { handleLoadCommentByPost } from './../actions/comments';
import CommentDetail from './../components/CommentDetail';
import NewComment from '../components/NewComment';
import { Redirect } from 'react-router-dom'
import { handleDeletePost } from '../actions/posts';

class PostPage extends Component {
    constructor(props) { 
        super(props)
        this.handleDeleteButton = this.handleDeleteButton.bind(this)
    }
    componentDidMount() {
        const { dispatch, id } = this.props
        dispatch(handleLoadCommentByPost(id))
    }

    handleDeleteButton(e) {
        e.preventDefault()

        const { dispatch, id } = this.props
        dispatch(handleDeletePost(id))
    }
    render() {
        const { id, comments, commentIds, post } = this.props

            
        if(!post || post.deleted){
            return <Redirect to='/' />
        }
            
        return (
            <Fragment>
                <Button type="danger" onClick={this.handleDeleteButton}>Delete Post</Button>
                <PostDetail id={id} />

                <NewComment parentId={id}/>
                <center> <h1>Comments</h1> </center>
                
                <div>
                    {!commentIds ? null : commentIds.map((commentId) => (
                        <CommentDetail key={commentId} id={commentId} />
                    ))}
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps({ posts, comments }, props) {
    const { id } = props.match.params
    return {
        id,
        post: posts[id],
        commentIds: comments ? (
            Object.keys(comments).sort((a, b, ) => comments[b].timestamp - comments[a].timestamp)
            .filter(commentId => !comments[commentId].deleted)
        ) : [],
        comments
        // post: !tweets[id]
        //     ? []
        //     : tweets[id].replies.sort((a, b, ) => tweets[b].timestamp - tweets[a].timestamp)
    }
}
export default withRouter(connect(mapStateToProps)(PostPage))