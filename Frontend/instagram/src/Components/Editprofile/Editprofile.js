import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Input,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { UplodeFile } from '../CreatePost/upload';
async function fetchprofile({ id, username, image }) {
    return await axios.post(`http://localhost:8080/user/profile/${id}`, { username, image }, {
        headers: {
            Authorization: JSON.parse(localStorage.getItem("auth")).token
        }
    })
}
export default function EditPofile() {
    let auth = useSelector((s) => s.auth)
    let [pic, setPic] = useState("")
    let [username, setUsername] = useState("")
    function handleChange() {
        fetchprofile({ image: pic, username, id: auth.id }).then(() => {
            alert("update successfull")
        }).catch((e) => {

        })
    }

    return (
        <Center py={6}>
            <Box
                maxW={'50%'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                    h={'120px'}
                    w={'full'}
                    src={
                        'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    }
                    objectFit={'cover'}
                />
                <Flex justify={'center'} mt={12}>
                    <Avatar
                        size={'xl'}
                        src={auth.image || auth.username}
                        alt={'dp'}
                        css={{
                            border: '2px solid white',
                        }}

                    />
                    <Text> Chanege Profile pic</Text>
                    <Input type="file"
                        accept="image/*"
                        onChange={(e) => UplodeFile(e.target.files[0], setPic)}
                        placeholder="upload new pic" />
                </Flex>

                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            {auth.user.username}

                        </Heading>
                        <Text> Chanege username</Text>
                        <Input type="text" placeholder="update username" value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                        <Button color={'gray.500'} onClick={handleChange}>Submit</Button>
                    </Stack>




                </Box>
            </Box>
        </Center>
    );
}