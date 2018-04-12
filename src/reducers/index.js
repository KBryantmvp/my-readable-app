import {
    NEW_POST,
    // EDIT_POST,
    // DELETE_POST
} from '../actions'

const initialPosts = ['a', 'b', 'c']

function posts (state = initialPosts, action) {
  switch (action.type) {
    case NEW_POST :
      const { post } = action

      return (
        // ...state,
        state.concat(post)
      )
    default :
      return state
  }
}

export default posts;