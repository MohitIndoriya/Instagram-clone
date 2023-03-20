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
import EditPofile from './Editprofile'
function Editprofilemodel({ username }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen} variant="unstyled">{username}</Button>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size="xxl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>


                    </ModalBody>
                    <EditPofile />
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
export default Editprofilemodel