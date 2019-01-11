import { receivePosts } from './posts';
import { receiveCategories } from './categories';
import { getInitialData } from './../utils/api';
import { initSettings, initSystem } from './settings';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ categories, posts }) => {
        dispatch(initSettings({ 
          sortBy: 1
        }))
        dispatch(receiveCategories(categories))
        dispatch(receivePosts(posts))
        dispatch(initSystem())
      })
  }
}