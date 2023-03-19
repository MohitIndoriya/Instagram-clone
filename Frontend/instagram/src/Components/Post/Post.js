import { Avatar, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { AiOutlineComment, AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
const posts = [
    {
        id: 1,
        username: "johndoe",
        imageUrl: "https://picsum.photos/600/600",
        likes: 143,
        comments: 23,
        caption: "This is a test caption",
    },
    {
        id: 2,
        username: "janedoe",
        imageUrl: "https://picsum.photos/600/601",
        likes: 123,
        comments: 17,
        caption: "Another test caption",
    },
];

function Post() {
    return (
        <Box maxW="100%" mx="auto" p={4}>
            {posts.map((post) => (
                <Box key={post.id} mb={4}>
                    <Flex alignItems="center">
                        <Avatar size="sm" name={post.username} mr={2} />
                        <Text fontWeight="bold">{post.username}</Text>
                    </Flex>
                    <Image w="100%" src={post.imageUrl} alt="post image" my={2} />
                    <Flex alignItems="center" justifyContent="space-between" mb={2}>
                        <Box>
                            <Button variant="ghost" size="sm">
                                <AiOutlineHeart />      <Text fontWeight="bold" ml="10px">{post.likes} likes</Text>
                            </Button>
                            <Button variant="ghost" size="sm" ml={2}>
                                <AiOutlineComment />  <Text fontWeight="bold" ml="10px">{post.comments} comments</Text>
                            </Button>
                        </Box>
                        <Box>
                            <Button variant="ghost" size="sm">
                                <AiOutlineSend />   <Text fontWeight="bold" ml="10px">Share</Text>
                            </Button>
                        </Box>
                    </Flex>
                    <Text fontWeight="bold">{post.username}</Text>
                    <Text>{post.caption}</Text>
                    <hr />
                </Box>

            ))}
        </Box>
    );
}
export default Post 