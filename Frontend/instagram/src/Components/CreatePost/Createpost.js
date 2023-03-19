import { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";

function CreatePost(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState("");

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleImageUrlChange(event) {
        setImageUrl(event.target.value);
    }

    function handleUpload() {
        // Handle image upload here
        // You could also call props.onUpload(imageUrl) to pass the image URL back to the parent component
        closeModal();
    }

    return (
        <>
            <Button onClick={openModal}>Upload Image</Button>
            <Modal size="lg" isOpen={isOpen} onClose={closeModal} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Upload Image</ModalHeader>
                    <ModalBody >
                        <FormControl>
                            <FormLabel>Image URL</FormLabel>
                            <Input
                                type="file"
                                value={imageUrl}
                                onChange={handleImageUrlChange}
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={closeModal} mr={3}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue" onClick={handleUpload}>
                            Upload
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CreatePost;
