const api = "http://localhost:3001"

let token = localStorage.token
const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(json => json.categories);

