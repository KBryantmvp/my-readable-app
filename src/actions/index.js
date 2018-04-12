export const NEW_POST = 'NEW_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const newPost = (post) => ({
    type: NEW_POST,
    post
})

export const editPost = (id, post) => ({
    type: EDIT_POST,
    id,
    post
})

export const deletePost = (id, post) => ({
    type: DELETE_POST,
    id,
    post
})