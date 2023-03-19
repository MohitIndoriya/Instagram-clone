import { ADDCOMMENT, ADDNEWPOST, ERROR, GETALLPOST, LIKEAPOST, LOADING } from "../actiontypes/post.actionTypes"
let init = {
    posts: [],
    isError: false,
    isLoading: false
}

export const postReducer = (state = init, { type, payload }) => {
    switch (type) {
        case ADDCOMMENT:
            let findpost = state.posts.find((p) => p._id === payload._id)

            return {
                ...state,
                posts: {
                    ...state.posts,
                    comments: [payload, ...state.posts.comments]
                }
            }
        case GETALLPOST: return {
            ...state, posts: [...payload]
        }
        case ADDNEWPOST: return {
            ...state, posts: [payload, ...state.posts]
        }
        case LIKEAPOST:
            let liked = state.posts.find((post) => post._id === payload._id)
            liked.likes.push({ username: payload.username, image: payload.image })
            console.log(liked)
            return {
                ...state, posts: [liked, ...state.posts]
            }
        default: return state
    }
}