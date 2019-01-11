import { showLoading, hideLoading } from 'react-redux-loading'
import { receivePosts } from './posts';
import { receiveCategories } from './categories';
import { getInitialData } from './../utils/api';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ categories, posts }) => {
        dispatch(receiveCategories(categories))
        dispatch(receivePosts(posts))
        dispatch(hideLoading())
      })
  }
}