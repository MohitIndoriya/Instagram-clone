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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addnewpost } from "../../redux/actions/post.actions";
let init = {
    caption: "",
    image: " "
}

function CreatePost(props) {
    let [data, setdata] = useState(init)
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
    function handleInputs(e) {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    let dispatch = useDispatch()

    function handleUpload() {
        // Handle image upload here
        dispatch(addnewpost({ ...data }))
        // You could also call props.onUpload(imageUrl) to pass the image URL back to the parent component
        closeModal();
    }

    return (
        <>
            <Button variant="unstyled" onClick={openModal}>Create</Button>
            <Modal size="lg" isOpen={isOpen} onClose={closeModal} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Post</ModalHeader>
                    <ModalBody >
                        <FormControl>
                            <FormLabel>Image URL</FormLabel>
                            <Input
                                type="text"
                                name="image"
                                value={data.image}
                                onChange={handleInputs}
                            />
                            <Input placeholder="Enter caption " name="caption" value={data.caption} onChange={handleInputs}></Input>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={closeModal} mr={3}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue" onClick={handleUpload}>
                            Post
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CreatePost;
