import * as MyAPI from '../utils/api'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const CHANGE_VOTE_SCORE = 'CHANGE_VOTE_SCORE'

export function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts());

    return MyAPI.getPosts()
      .then(posts => dispatch(receivePosts(posts)));
      // .then(posts => console.log(posts));
  }
}

export function changeVoteScore(postId, text) {
  return {
    type: CHANGE_VOTE_SCORE,
    postId,
    text
  }
}

export function pushVoteScore(postId, voteText) {
  return dispatch => {
    MyAPI.postVote(postId, voteText)
      .then(() => dispatch(changeVoteScore(postId, voteText)))
  }
}

export function postPost(postInfo) {
  console.log(postInfo);
  return dispatch => {
    MyAPI.postNewPost(postInfo)
      .then(() => dispatch(fetchPosts()))
      // .then(res => console.log(res))
  }
}