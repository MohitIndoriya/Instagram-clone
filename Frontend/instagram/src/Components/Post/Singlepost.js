import React from 'react'
import { Avatar, Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineComment, AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux"
import { addcomment, getallposts, likeapost } from "../../redux/actions/post.actions";
import Alllikes from "../Alllikes/Alllikes";
export default function Singlepost({ post, setlike, dispatch }) {
    const [comment, handelComment] = useState("")
    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            // 👇 Get input value
            dispatch(addcomment({ _id: post._id, text: comment }))
            handelComment("")
        }
    }
    return (
        <Box key={post._id} mb={4}>
            <Flex alignItems="center">
                <Avatar size="sm" name={post.user.username} mr={2} />
                <Text fontWeight="bold">{post.user.username}</Text>
            </Flex>
            <Image w="100%" src={post.image} alt="post image" my={2} />
            <Flex alignItems="center" justifyContent="space-between" mb={2}>
                <Box>
                    <Button variant="ghost" size="sm">
                        <AiOutlineHeart onClick={() => {
                            dispatch(likeapost(post._id))
                            setlike((pre) => pre + 1)
                        }} />      <Text fontWeight="bold" ml="10px">{post.likes.length} <Alllikes avatars={post.likes} /></Text>
                    </Button>
                    <Button variant="ghost" size="sm" ml={2}>
                        <AiOutlineComment />  <Text fontWeight="bold" ml="10px">{post.comments.length} comments</Text>
                    </Button>
                </Box>
                <Box>
                    <Button variant="ghost" size="sm">
                        <AiOutlineSend />   <Text fontWeight="bold" ml="10px">Share</Text>
                    </Button>
                </Box>
            </Flex>
            <Text fontWeight="bold">{post.user.username}</Text>
            <Text>{post.caption}</Text>
            <Input type="text" variant="unstyled" placeholder="write a comment " value={comment} onChange={(e) => handelComment(e.target.value)} onKeyDown={handleKeyDown} />
            <hr />
        </Box>
    )
}
