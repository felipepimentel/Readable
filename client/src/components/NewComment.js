import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddPost } from '../actions/posts';
import { Row, Col } from 'antd';
import CategoryList from '../components/CategoryList';
import { createUUID } from './../utils/helpers';
import { handleAddComment } from '../actions/comments';

class NewComment extends Component {
    state = {
        text: ''
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
        const { dispatch, id } = this.props

        dispatch(handleAddComment(id, text))

        this.setState(() => ({
            text: '',
        }))
    }
    render() {
        const { text } = this.state


        return (
            <div>
                <center> <h1>New Comment</h1> </center>
                <form className='new-tweet' onSubmit={this.handleSubmit}>

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

                    <button
                        className='btn'
                        type='submit'
                        disabled={text === ''}>
                        Submit
          </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({}, props){ 
    return{ 
        id: props.parentId
    }
}
export default connect(mapStateToProps)(NewComment)