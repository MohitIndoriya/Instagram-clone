import { Avatar, Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineComment, AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux"
import { getallposts, likeapost } from "../../redux/actions/post.actions";
import Alllikes from "../Alllikes/Alllikes";
import Singlepost from "./Singlepost";
// const posts = [
//     {
//         id: 1,
//         username: "johndoe",
//         imageUrl: "https://picsum.photos/600/600",
//         likes: 143,
//         comments: 23,
//         caption: "This is a test caption",
//     },
//     {
//         id: 2,
//         username: "janedoe",
//         imageUrl: "https://picsum.photos/600/601",
//         likes: 123,
//         comments: 17,
//         caption: "Another test caption",
//     },
// ];

function Post() {
    let posts = useSelector((s) => s.post.posts)
    let [comment, setcomment] = useState("")
    let [like, setlike] = useState(0)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getallposts())
    }, [like])
    let handelComment = (e) => {
        if (e.target.onKeyDown == "Enter") {
        }
        console.log(e.target)
        setcomment(e.target.value)
    }
    return (
        <Box w="60%" mx="auto" p={4}>
            {posts?.map((post) => <Singlepost post={post} setlike={setlike} dispatch={dispatch} />)}
        </Box>
    );
}
export default Post 