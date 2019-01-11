import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddPost, handleUpdatePost } from '../actions/posts';
import { Row, Col } from 'antd';
import CategoryList from '../components/CategoryList';
import { createUUID } from './../utils/helpers';
import PostDeleted from './PostDeleted';

class NewPostPage extends Component {
  state = {
    title: '',
    text: '',
    category: null,
    toHome: false,
  }

  constructor(props) {
    super(props)
    const { post } = props
    if (post)
      this.state = {
        title: post.title,
        text: post.body,
        category: post.category,
        toHome: false
      }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.post !== this.props.post) {
      const { post, id } = nextProps
      this.setState(() => ({
        id: id,
        title: post.title,
        text: post.body,
        category: post.category,
        toHome: false
      }))
    }
  }

  changePost = function () {
    console.log('ola')
  }

  handleChange = (e) => {
    const text = e.target.value
    this.setState(() => ({
      text
    }))
  }
  handleChangeTitle = (e) => {
    const title = e.target.value
    this.setState(() => ({
      title
    }))
  }
  handleChangeCategory = (e) => {
    const category = e
    this.setState(() => ({
      category
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { text, title, category } = this.state
    const { dispatch } = this.props
    let { id } = this.props
    const isNew = true

    if (!id) {
      id = createUUID()
      dispatch(handleAddPost(title, text, category, id))
    } else {
      dispatch(handleUpdatePost(title, text, category, id))
    }

    this.setState(() => ({
      title: '',
      text: '',
      category: null,
      toHome: true
    }))
  }
  render() {
    const { text, title, category, toHome } = this.state
    const { post } = this.props

    if (!post || post.deleted) {
      return <PostDeleted />
    }


    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3 className='center'>New Post</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <input placeholder="Title?" value={title} onChange={this.handleChangeTitle} />
            </Col>
          </Row>
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
          <Row>
            <Col>
              <CategoryList label='Category' id={category} onChange={this.handleChangeCategory} />
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

function mapStateToProps({ posts, cagtegories }, props) {
  const { id } = props.match.params
  return {
    id: id,
    post: id ? posts[id] : {}
  }
}
export default connect(mapStateToProps)(NewPostPage)