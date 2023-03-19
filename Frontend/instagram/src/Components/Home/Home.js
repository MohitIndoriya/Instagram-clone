import { Box, Flex, Image, IconButton, Text, Stack, Badge } from '@chakra-ui/react';
import { FiHeart, FiMessageCircle, FiSend, FiBookmark } from 'react-icons/fi';

function Home() {
    return (
        <Flex flexDirection="column" height="100vh">
            <Box
                p={4}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom="1px solid #ddd"
            >
                <Image src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram" />
                <IconButton aria-label="Direct" icon={<FiSend />} />
            </Box>

            <Flex flexDirection="column" flexGrow={1} overflowY="scroll">
                <Stack spacing={4} p={4}>
                    {/* Post 1 */}
                    <Box borderWidth="1px" borderColor="gray.200" borderRadius="md">
                        <Image src="https://source.unsplash.com/random/600x600" alt="Post" />

                        <Box p={4}>
                            <Flex alignItems="center">
                                <Image src="https://source.unsplash.com/random/40x40" alt="User" borderRadius="full" mr={2} />
                                <Text fontWeight="bold">johndoe</Text>
                            </Flex>

                            <Flex alignItems="center" mt={2}>
                                <IconButton aria-label="Like" icon={<FiHeart />} mr={2} />
                                <IconButton aria-label="Comment" icon={<FiMessageCircle />} mr={2} />
                                <IconButton aria-label="Save" icon={<FiBookmark />} />
                            </Flex>

                            <Text mt={2}>
                                <Text fontWeight="bold" mr={1}>johndoe</Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam eu diam interdum dictum eu eu nunc.
                            </Text>

                            <Badge colorScheme="blue" mt={2}>#nature</Badge>
                        </Box>
                    </Box>

                    {/* Post 2 */}
                    <Box borderWidth="1px" borderColor="gray.200" borderRadius="md">
                        <Image src="https://source.unsplash.com/random/600x601" alt="Post" />

                        <Box p={4}>
                            <Flex alignItems="center">
                                <Image src="https://source.unsplash.com/random/41x41" alt="User" borderRadius="full" mr={2} />
                                <Text fontWeight="bold">janedoe</Text>
                            </Flex>

                            <Flex alignItems="center" mt={2}>
                                <IconButton aria-label="Like" icon={<FiHeart />} mr={2} />
                                <IconButton aria-label="Comment" icon={<FiMessageCircle />} mr={2} />
                                <IconButton aria-label="Save" icon={<FiBookmark />} />
                            </Flex>

                            <Text mt={2}>
                                <Text fontWeight="bold" mr={1}>janedoe</Text>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Text>

                            <Badge colorScheme="red" mt={2}>#travel</Badge>
                        </Box>
                    </Box>
                </Stack>
            </Flex>
        </Flex>
    );
}

export default Home;

