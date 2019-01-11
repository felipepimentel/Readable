import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddPost } from '../actions/posts';
import { Row, Col } from 'antd';
import CategoryList from '../components/CategoryList';

class NewPostPage extends Component {
  state = {
    title: '',
    text: '',
    category: null,
    toHome: false,
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
    const { dispatch, id } = this.props

    dispatch(handleAddPost(title, text, category, id))

    this.setState(() => ({
      title: '',
      text: '',
      category: null,
      toHome: id ? false : true,
    }))
  }
  render() {
    const { text, title, category, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3 className='center'>New Post</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <input placeholder="Title?" value={title} onChange={this.handleChangeTitle}/>
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
              <CategoryList label='Category' id={category} onChange={this.handleChangeCategory}/>
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

export default connect()(NewPostPage)