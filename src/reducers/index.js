import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES
    // NEW_POST,
    // EDIT_POST,
    // DELETE_POST
} from '../actions/categories'

const initialState = {
  categories: []
}

function category (state = initialState, action) {
  switch (action.type) {
    case REQUEST_CATEGORIES :
    console.log('reducer1')
      return state

    case RECEIVE_CATEGORIES :
    console.log('reducer2')
      return Object.assign({}, state, {
        categories: action.categories
      }) 

    default :
      return state
  }
}

// // import * as actionCreators from '../actions'

// const initialPosts = []

// function posts (state = initialPosts, action) {
//   switch (action.type) {
//     case NEW_POST :
//       const { post } = action

//       return (
//         // ...state,
//         state.concat(post)
//       )

//     default :
//       return state
//   }
// }

export default category;