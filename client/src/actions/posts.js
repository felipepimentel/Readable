import { getPostsByCategory, getPosts, updatePost } from "../utils/api";
import { savePost, deletePost } from './../utils/api';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POSTS_BY_CATEGORY = 'RECEIVE_POSTS_BY_CATEGORY';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const ADD_COMMENT_TO_POST = 'ADD_COMMENT_TO_POST'
export const ADD_VOTE = 'ADD_VOTE'
export const REMOVE_VOTE = 'REMOVE_VOTE'
export const REMOVE_COMMENT_TO_POST = 'REMOVE_COMMENT_TO_POST'

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  }
}

export function updatePostAction(post) {
  return {
    type: UPDATE_POST,
    post
  }
}

export function deletePostAction(postId) {
  return {
    type: DELETE_POST,
    id: postId
  }
}

export function addCommentToPostAction(id) {
  return {
    type: ADD_COMMENT_TO_POST,
    id
  }
}

export function removeCommentToPostAction(id) {
  return {
    type: REMOVE_COMMENT_TO_POST,
    id
  }
}

export function receivePostsByCategory(posts) {
  return {
    type: RECEIVE_POSTS_BY_CATEGORY,
    posts
  }
}


export function handleAddPost(title, post, category, id) {
  return (dispatch) => {
    return savePost({
      id,
      title,
      timestamp: Date.now(),
      body: post,
      category,
      voteScore: 1,
      deleted: false,
      author: 'Felipe Pimentel'
    }).then((post) => {
      dispatch(addPost(post))
    })
  }
}

export function handleUpdatePost(title, post, category, id, voteScore) {
  return (dispatch) => {
    return updatePost({
      id,
      title,
      timestamp: Date.now(),
      body: post,
      category,
      voteScore: voteScore ? voteScore : 1,
      deleted: false,
      author: 'Felipe Pimentel'
    }).then((post) => {
      dispatch(updatePostAction(post))
    })
  }
}

export function handleDeletePost(id) {
  return (dispatch) => {
    return deletePost(id).then(deletedObj => {
      dispatch(deletePostAction(deletedObj.id))
    })
  }
}

export function handleFilterPostsByCategory(category) {
  return (dispatch) => {
    if (!category) {
      return getPosts()
        .then(posts => {
          dispatch(receivePosts(posts))
        })
    }

    return getPostsByCategory(category)
      .then(posts => {
        dispatch(receivePostsByCategory(posts))
      })
  }
}