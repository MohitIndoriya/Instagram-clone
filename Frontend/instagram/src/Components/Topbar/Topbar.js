import { Box, Flex, Avatar, IconButton, useTheme, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

const avatars = [
    {
        name: "John Smith",
        imageUrl: "https://picsum.photos/100/100?random=1",
    },
    {
        name: "Jane Doe",
        imageUrl: "https://picsum.photos/100/100?random=2",
    },
    {
        name: "Michael Johnson",
        imageUrl: "https://picsum.photos/100/100?random=3",
    },
    {
        name: "Emily Williams",
        imageUrl: "https://picsum.photos/100/100?random=4",
    },
    {
        name: "William Davis",
        imageUrl: "https://picsum.photos/100/100?random=5",
    },
];
const fetchusers = async () => {
    return await axios.get("http://localhost:8080/user/alluser")
}

const Topbar = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    let [users, setusers] = useState([])
    useEffect(() => {
        fetchusers().then((res) => {
            setusers([...res.data])
        })
    }, [])
    const theme = useTheme();

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + avatars.length) % avatars.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % avatars.length);
    };

    return (
        <Box minWidth="700px" >
            <Flex alignItems="center" justifyContent="space-around" >
                <IconButton
                    icon={<ChevronLeftIcon />}
                    aria-label="Previous Avatar"
                    onClick={handlePrevClick}
                    disabled={currentIndex === 0}
                    bg={theme.colors.gray[200]}
                    color={theme.colors.gray[800]}
                    borderRadius="full"
                    mr={2}
                />
                <Box overflow="hidden" >
                    <Flex gap="20px"
                        transition="transform 0.2s"
                        transform={`translateX(-${currentIndex * 100}%)`}
                    >
                        {users?.map((avatar, index) => (
                            <Box key={avatar._id}>  <Avatar
                                width={"90px"}
                                height="90px"
                                key={index}
                                name={avatar.username}
                                src={avatar.image}
                                borderRadius="full"
                                boxShadow="sm"
                                mr={2}
                            /><Text fontSize="13px">{avatar.username}</Text></Box>
                        ))}
                    </Flex>
                </Box>
                <IconButton
                    icon={<ChevronRightIcon />}
                    aria-label="Next Avatar"
                    onClick={handleNextClick}
                    disabled={currentIndex === avatars.length - 1}
                    bg={theme.colors.gray[200]}
                    color={theme.colors.gray[800]}
                    borderRadius="full"
                    ml={2}
                />
            </Flex>
        </Box>
    );
};

export default Topbar;
