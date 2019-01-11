import { getPostsByCategory, getPosts } from "../utils/api";
import { hideLoading, showLoading } from 'react-redux-loading';
import { savePost } from './../utils/api';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POSTS_BY_CATEGORY = 'RECEIVE_POSTS_BY_CATEGORY';
export const SORT_POST = 'SORT_POST';

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function receivePostsByCategory(posts) {
  return {
    type: RECEIVE_POSTS_BY_CATEGORY,
    posts
  }
}

export function handleSortPost(sortBy) {
  return {
    type: SORT_POST,
    sortBy
  }
}


export function handleAddPost(title, post, category, id) {
  return (dispatch) => {
    return savePost({
      title,
      timestamp: Date.now(),
      body: post,
      category,
      voteScore: 1,
      deleted: false,
      author: 'Felipe Pimentel'
    }).then(({ posts }) => {
      dispatch(receivePosts(posts))
    })
  }
}

export function handleFilterPostsByCategory(category) {
  return (dispatch) => {
    dispatch(showLoading())
    if (!category) {
      return getPosts()
        .then(posts => {
          dispatch(receivePosts(posts))
          dispatch(hideLoading())
        })
    }

    return getPostsByCategory(category)
      .then(posts => {
        dispatch(receivePostsByCategory(posts))
        dispatch(hideLoading())
      })
  }
}