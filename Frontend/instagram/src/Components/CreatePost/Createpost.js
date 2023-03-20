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
import { UplodeFile } from "./upload";
let init = {
    caption: "",
}

function CreatePost(props) {
    let [data, setdata] = useState(init)
    let [pic, setPic] = useState("")
    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    function handleInputs(e) {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    let dispatch = useDispatch()

    function handleUpload() {
        // Handle image upload here
        dispatch(addnewpost({ ...data, image: pic }))
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
                                type="file"
                                p={1.5}
                                accept="image/*"
                                onChange={(e) => UplodeFile(e.target.files[0], setPic)}
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
