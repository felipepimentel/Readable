import { getCommentsByPost, saveComment } from './../utils/api';
import { createUUID } from './../utils/helpers';
import { addCommentToPostAction } from './posts';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';

export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
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