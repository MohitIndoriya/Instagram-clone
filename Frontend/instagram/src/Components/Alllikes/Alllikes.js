import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Flex,
    Avatar,
    Text,
    Box,
} from '@chakra-ui/react'
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
function Alllikes() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}> Likes</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>All Likes</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box gap="5"
                            transition="transform 0.2s"
                            transform={`translateX(-%)`}
                            flexDirection="coulmn"
                            overflowY="scroll"

                        >
                            {avatars.map((avatar, index) => (
                                <Box display="flex" flexDirection="row" gap="3" mb="5">  <Avatar

                                    key={index}
                                    name={avatar.name}
                                    src={avatar.imageUrl}
                                    borderRadius="full"
                                    boxShadow="sm"
                                    mr={2}
                                /><Text fontSize="17px" fontWeight="bold">{avatar.name}</Text></Box>
                            ))}
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default Alllikes