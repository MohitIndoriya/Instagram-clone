import { Box, Flex, Avatar, IconButton, useTheme, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

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

const Topbar = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const theme = useTheme();

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + avatars.length) % avatars.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % avatars.length);
    };

    return (
        <Flex ml="30%" maxW="30%" alignItems="center" border="1px solid">
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
            <Box overflow="hidden">
                <Flex
                    transition="transform 0.2s"
                    transform={`translateX(-${currentIndex * 100}%)`}
                >
                    {avatars.map((avatar, index) => (
                        <Box>  <Avatar
                            fontSize={"lg"}
                            key={index}
                            name={avatar.name}
                            src={avatar.imageUrl}
                            borderRadius="full"
                            boxShadow="sm"
                            mr={2}
                        /><Text fontSize="10px">{avatar.name}</Text></Box>
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
    );
};

export default Topbar;
