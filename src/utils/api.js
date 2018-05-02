const api = "http://localhost:3001"

let token = localStorage.token
const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(json => json.categories);

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json());

export const postVote = (postId, voteText) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: voteText })
   })
   .then(res => res.json())
  //  .then(json => console.log(json))

  //  postVote('8xf0y6ziyjabvozdd253nd', 'upVote')
  //  postVote('8xf0y6ziyjabvozdd253nd', 'upVote')