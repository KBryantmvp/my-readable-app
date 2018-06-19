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

export const postNewPost = (postInfo) => {
  console.log(postInfo);
  fetch(`${api}/posts`, {
    method: 'POST',
    headers,
    body: postInfo
  })
  .then(res => res.json())
  // .then(res => console.log(res))
}

// let postBody = JSON.stringify({
//   'author': 'El autor',
//   'title': 'Vaya titulazo',
//   'body': 'some body',
//   'id': 99999997,
//   'category': 'react',
//   'timestamp': Date.now()
// });

// postNewPost(postBody);