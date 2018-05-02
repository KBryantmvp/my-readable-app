import { combineReducers } from 'redux'

import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
} from '../actions/categories'

import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  CHANGE_VOTE_SCORE
} from '../actions/posts'

// const initialState = {
//   categories: [],
//   posts: []
// }

function category (state = {}, action) {
  switch (action.type) {
    case REQUEST_CATEGORIES :
      return state

    case RECEIVE_CATEGORIES :
      return Object.assign({}, state, {
        categories: action.categories
      }) 

    default :
      return state
  }
}

function post (state = [], action) {
  switch (action.type) {
    case REQUEST_POSTS :
      return state

    case RECEIVE_POSTS :
      return Object.assign({}, state, {
        byId: action.posts.reduce((postObj, post) => {
          // console.log('postObj: ', postObj[post.id])
          postObj[post.id] = postObj[post.id] || post;
          return postObj;
        }, {}),
        allIds: action.posts.map(post => post.id)
      })
      // return Object.assign({}, state, {
      //   posts: action.posts
      // })
      // console.log(action.posts)
      // return action.posts.map(post => console.log(post))

    case CHANGE_VOTE_SCORE :
      // console.log(state.byId[action.postId].voteScore)
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.postId]: {
            ...state.byId[action.postId],
            voteScore: action.text === "upVote"
              ? state.byId[action.postId].voteScore + 1
              : state.byId[action.postId].voteScore - 1
          }
        }
        // [state.posts]: action.postId
      }

    default :
      return state
  }
}

const rootReducer = combineReducers({
  category,
  post
})

export default rootReducer;