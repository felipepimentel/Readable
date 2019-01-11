import { getCommentsByPost, saveComment, deleteComment, updateComment } from './../utils/api';
import { createUUID } from './../utils/helpers';
import { addCommentToPostAction, removeCommentToPostAction } from './posts';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

export function updateCommentAction(comment){ 
  return { 
    type: UPDATE_COMMENT,
    comment
  }
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function deleteCommentAction(id) {
  return {
    type: DELETE_COMMENT,
    id
  }
}


export function handleDeleteComment(id) { 
  return (dispatch) => {
    return deleteComment(id).then(comment => { 
      dispatch(deleteCommentAction(comment.id))
      dispatch(removeCommentToPostAction(comment.parentId))
    })
  }
}

export function handleUpdateComment(id, body, voteScore) { 
  return (dispatch) => {
    return updateComment({
      id,
      body,
      body: body,
      voteScore: voteScore ? voteScore : 1,
      deleted: false
    }).then((comment) => {
      dispatch(updateCommentAction(comment))
    })
  }
}

export function handleLoadCommentByPost(postId) {
  return (dispatch) => {
    return getCommentsByPost(postId).then(comments => {
      dispatch(receiveComments(comments))
    })
  }
}

export function handleAddComment(postId, text) {
  console.log(postId)
  return (dispatch) => {
    return saveComment({
      id: createUUID(),
      body: text,
      author: 'Felipe Pimentel',
      deleted: false,
      timestamp: Date.now(),
      parentId: postId,
      voteScore: 1
    }).then((comment) => {
      dispatch(addComment(comment))
      dispatch(addCommentToPostAction(postId))
    })
  }
}