import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    Skeleton, Switch, Card, Icon, Avatar, Button, Row, Col
} from 'antd';
import { Link, withRouter } from 'react-router-dom'
import { handleDeleteComment, handleUpdateComment } from './../actions/comments';
const { Meta } = Card;


class CommentDetail extends Component {
    state = {
        text: ''
    }

    constructor(props) {
        super(props)

        this.handleDeleteCommentButton = this.handleDeleteCommentButton.bind(this)
        this.addVote = this.addVote.bind(this)
        this.removeVote = this.removeVote.bind(this)

        const { comment } = props
        if (comment)
            this.state = {
                text: comment.body
            }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.comment !== this.props.comment) {
            const { comment } = nextProps
            console.log(comment, 'comment')
            this.setState(() => ({
                text: comment.body
            }))
        }
    }

    handleChange = (e) => {
        const text = e.target.value
        this.setState(() => ({
            text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { text } = this.state
        const { dispatch, comment } = this.props

        dispatch(handleUpdateComment(comment.id, text, comment.voteScore))
    }

    handleDeleteCommentButton() {
        const { dispatch } = this.props
        dispatch(handleDeleteComment(this.props.comment.id))
    }

    addVote() {
        const { comment, dispatch } = this.props
        dispatch(handleUpdateComment(comment.id, comment.body, ++comment.voteScore))
    }

    removeVote() {
        const { comment, dispatch } = this.props
        dispatch(handleUpdateComment(comment.id, comment.body, --comment.voteScore))
    }

    render() {
        const { text } = this.state
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
                    <label>voteScore:</label> <Button type='primary' onClick={this.addVote}>+</Button>  {this.props.comment.voteScore} <Button type='danger' onClick={this.removeVote}>-</Button>
                </p>
                <p>
                    <label>Created At:</label>{this.props.comment.timestamp}
                </p>
                <Row>
                    <Col>
                        <textarea
                            placeholder="Text?"
                            value={text}
                            onChange={this.handleChange}
                            className='textarea'
                            maxLength={280}
                        />
                    </Col>
                </Row>
                <p>
                </p>
                <Row>
                    <Col span={12}>
                        {/* <Link to'/post={this.handleDeleteCommentButton}>Delete Comment</Button> */}
                        <Button type="primary" onClick={this.handleSubmit}>Save Comment</Button></Col>
                        <Col span={12}>
                        {/* <Link to'/post={this.handleDeleteCommentButton}>Delete Comment</Button> */}
                        <Button type="danger" onClick={this.handleDeleteCommentButton}>Delete Comment</Button></Col>
                </Row>
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