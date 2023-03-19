import { Box, Flex, Input, Button, Text, Image, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../Photos/instalogo.png"
import instamobile from "../../Photos/instamobile.jpg"
import { authLogin } from '../../redux/actions/auth.actions';
let init = {
    email: "",
    password: ""
}
function Signin() {
    let [data, setdata] = useState(init)
    let auth = useSelector((store) => store.auth)
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let toast = useToast()
    function handleInputs(e) {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    function handleSignin() {
        dispatch(authLogin({ navigate, toast, ...data }))
    }
    console.log(auth)
    return (
        <Flex
            direction="row"
            align="center"
            justify="center"
            h="100vh"
            bg="#fafafa"
            marginTop={10}
        >
            <Box w={{ base: '40%', md: '40%', }} mr={10} ><Image minW="100%" src="https://media.gcflearnfree.org/content/633d944b3823fb02e84dce55_10_05_2022/Screen%20Shot%202022-10-10%20at%202.28.19%20PM.png" /></Box>
            <Box w={{ base: '60%', md: '25%', }} border="1px solid lightgray">
                <Image src={logo} minW="50%" marginLeft="25%" pt={10} />
                <Box bg="#fff" borderRadius={8} p={8} pt={0} >




                    <Input
                        placeholder="Email,Username"
                        variant="outline"
                        mb={4}
                        size="lg"
                        borderRadius={3}
                        name="email"
                        value={data.email}
                        onChange={handleInputs}
                    />

                    <Input
                        type="password"
                        placeholder="Password"
                        variant="outline"
                        mb={4}
                        size="lg"
                        borderRadius={3}
                        name="password"
                        value={data.password}
                        onChange={handleInputs}
                    />

                    <Button isDisabled={auth.isLoading ? true : false} onClick={handleSignin} colorScheme="blue" mb={0} size="lg" w="100%" borderRadius={8} h="8" p={5}>
                        Log In
                    </Button>
                </Box>
                <Box m={3} display="flex" justifyContent="space-around"><hr style={{ width: "40%" }} /><Text size="lg" mt={-3}>or</Text><hr style={{ width: "40%" }} /></Box>

                <Box bg="#fff" p={8} borderRadius={8} mt={0}>

                    <Text fontSize="sm">
                        Don't Have an account?{' '}
                        <Box as="a" href="#" color="blue.500">
                            <Link to="/Signup">
                                Signup
                            </Link>
                        </Box>
                    </Text>
                </Box>
            </Box>
        </Flex >
    );
}

export default Signin;

