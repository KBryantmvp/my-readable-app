import * as MyAPI from '../utils/api'

// export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export function requestCategories() {
  return {
    type: REQUEST_CATEGORIES,
  }
}

export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}


export function fetchCategories() {
  return dispatch => {
      dispatch(requestCategories());

      return MyAPI.getCategories()
        .then(categories => dispatch(receiveCategories(categories)));
        // .then(algo => console.log('algo', algo));
      
  //   dispatch(requestPosts(subreddit))
  //   return fetch(`https://www.reddit.com/r/${subreddit}.json`)
  //     .then(response => response.json())
  //     .then(json => dispatch(receivePosts(subreddit, json)))
  // }
  }
}