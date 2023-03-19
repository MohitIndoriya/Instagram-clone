import axios from "axios"
import { GETALLPOST, ADDCOMMENT, ADDNEWPOST, ERROR, LIKEAPOST } from "../actiontypes/post.actionTypes"

export const getallposts = () => async (dispatch) => {
    let { token } = JSON.parse(localStorage.getItem("auth"))
    try {
        let res = await axios.get("http://localhost:8080/post/allposts", {
            headers: {
                Authorization: token
            }
        })
        console.log(res)
        return dispatch({ type: GETALLPOST, payload: res.data })
    } catch (error) {

    }
}
export const addnewpost = (data) => async (dispatch) => {
    let { token } = JSON.parse(localStorage.getItem("auth"))
    try {
        let res = await axios.post("http://localhost:8080/post/newpost", { ...data }, {
            headers: {
                Authorization: token
            }
        })
        return dispatch({ type: ADDNEWPOST, payload: res.data })
    } catch (error) {

    }
}

export const likeapost = (_id) => async (dispatch) => {
    let { token, username } = JSON.parse(localStorage.getItem("auth"))
    try {
        let res = await axios.patch(`http://localhost:8080/post/like/${_id}`, {}, {
            headers: {
                Authorization: token
            }
        })
        console.log(res)
        return dispatch({ type: ADDNEWPOST, payload: { _id, username, image: username } })
    } catch (error) {
        console.log(error)
    }
}