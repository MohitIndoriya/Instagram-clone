import { Box, Flex, Input, Button, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from "../../Photos/instalogo.png"

function Signup() {
    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            h="100vh"
            bg="#fafafa"
            marginTop={130}
        >
            <Box w={{ base: '60%', md: '25%', }} border="1px solid lightgray">
                <Image src={logo} minW="50%" marginLeft="25%" pt={10} />
                <Box bg="#fff" borderRadius={8} p={8} pt={4}>

                    <Text fontSize="l" fontWeight="bold" mb={6} color="rgba(var(--f52, 142, 142, 142), 1)">
                        Sign up to see photos and videos from your friends.
                    </Text>
                    <Button colorScheme="blue" mb={4} size="lg" w="100%" borderRadius={8} h="8" p={5}>
                        Login with Facebook
                    </Button>
                    <Box m={3} display="flex" justifyContent="space-around"><hr style={{ width: "40%" }} /><Text size="lg" mt={-3}>or</Text><hr style={{ width: "40%" }} /></Box>
                    <Input
                        placeholder="Email"
                        variant="outline"
                        mb={4}
                        size="lg"
                        borderRadius={3}
                    />
                    <Input
                        placeholder="Full Name"
                        variant="outline"
                        mb={4}
                        size="lg"
                        borderRadius={3}
                    />
                    <Input
                        placeholder="Username"
                        variant="outline"
                        mb={4}
                        size="lg"
                        borderRadius={3}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        variant="outline"
                        mb={4}
                        size="lg"
                        borderRadius={3}
                    />
                    <Text fontSize="sm" mb={15} color="rgba(var(--f52, 142, 142, 142), 1)">
                        People who use our service may have uploaded  your contact information to Instagram. Learn  More<br />
                        By signing up, you agree to our Terms , Data Policy and Cookies
                        Policy .
                    </Text>
                    <Button colorScheme="blue" mb={4} size="lg" w="100%" borderRadius={8} h="8" p={5}>
                        Sign Up
                    </Button>
                </Box>
                <hr />
                <Box bg="#fff" p={8} borderRadius={8} mt={0}>

                    <Text fontSize="sm">
                        Have an account?{' '}
                        <Box as="a" href="#" color="blue.500">
                            <Link to="/Signin">
                                Log in
                            </Link>
                        </Box>
                    </Text>
                </Box>
            </Box>
        </Flex >
    );
}

export default Signup;

