import { Box, Flex, Avatar, Text, IconButton, Image } from "@chakra-ui/react";
import { AiFillHome, AiOutlineHeart, AiOutlineCompass, AiOutlineSearch, AiFillMessage, AiOutlineMessage, AiFillFileAdd, AiOutlinePlus, AiOutlinePlusCircle, AiOutlinePlusSquare } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";
import logo from "../../Photos/instalogo.png"
const Sidebar = () => {
    return (
        <Box minH="100vh" position="sticky" ml="10" left="0" top="0" maxWidth="15%" h="100%" display="flex" flexDirection="column" justifyContent="space-around" borderRight="1px solid lightgray" >
            <Image src={logo} w="60%" />

            <Box display="flex" flexDirection="row" minw="100%" alignItems="center" fontSize="20px"
            >
                <IconButton
                    aria-label="Home"
                    icon={<AiFillHome />}
                    fontSize="20px"

                    mr="2"
                    variant="ghost"
                    size="lg"
                >

                </IconButton><Text> Home</Text></Box>

            <Box display="flex" flexDirection="row" w="100%" alignItems="center" fontSize="20px"
            >
                <IconButton
                    aria-label="Home"
                    icon={<AiOutlineSearch />}
                    fontSize="20px"

                    mr="2"
                    variant="ghost"
                    size="lg"
                >

                </IconButton><Text> Search</Text></Box>
            <Box display="flex" flexDirection="row" w="100%" alignItems="center" fontSize="20px"
            ><IconButton
                aria-label="Explore"
                icon={<AiOutlineCompass />}

                mr="2" fontSize="20px"

                variant="ghost"
                size="lg"
            >
                    Explore
                </IconButton><Text>Explore</Text></Box>
            <Box display="flex" flexDirection="row" w="100%" alignItems="center" fontSize="20px"
            > <IconButton
                aria-label="Activity"
                icon={<AiOutlineHeart />}
                fontSize="20px"

                mr="2"
                variant="ghost"
                size="lg"
            >
                    Activity
                </IconButton><Text>Activity</Text></Box>
            <Box display="flex" flexDirection="row" w="100%" alignItems="center" fontSize="20px"
            > <IconButton
                aria-label="Direct Messages"
                icon={<AiOutlineMessage />}

                mr="2"
                variant="ghost"
                fontSize="20px"

            >
                    Direct
                </IconButton><Text>Messages</Text></Box>
            <Box display="flex" flexDirection="row" w="100%" alignItems="center" fontSize="20px"> <IconButton
                aria-label="Direct Messages"
                icon={<AiOutlinePlusSquare />}

                mr="2"
                variant="ghost"
                fontSize="20px"


            >
                Direct
            </IconButton><Text>Create</Text></Box>

            <Flex alignItems="center" mb="4" fontSize="20px"
            >
                <Avatar
                    size="sm"
                    name="John Doe"
                    src="https://bit.ly/dan-abramov"
                    mr="4"

                />
                <Text fontWeight="bold">Profile</Text>
            </Flex>


        </Box>
    );
};

export default Sidebar;