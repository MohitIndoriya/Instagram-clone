import React from "react"
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
    Image,
    Heading,
} from '@chakra-ui/react'

function Allcomment({ post }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)

    return (
        <>


            <Button mt={4} onClick={onOpen} variant="unstyled">
                Comments
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size="xxl" >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>All comments</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box display="flex" flexDirection="coulmn" justifyContent="start">
                            <Box><Image width="500px" src={post.image} mr={7} /></Box><Box>
                                {
                                    post.comments?.map((comment) => <Box key={comment._id} mb="4">
                                        <Box display="flex" flexDirection="coulmn"><Avatar src={comment.user.image} name={comment.user.username} mr={2} /> <Heading>{comment.user.username}</Heading> </Box>

                                        <Text ml={6}>{comment.text}</Text>
                                    </Box>)
                                }
                            </Box>
                        </Box>
                    </ModalBody>

                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default Allcomment