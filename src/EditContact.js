import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    InputGroup,
    InputGroupAddon,
    InputGroupText, Input
} from 'reactstrap';
import {connect} from "react-redux";

function EditContact (props) {

    const [modal, setModal] = useState(false);

    const [name,setName] = useState(props.name)
    const [phone,setPhone] = useState(props.phone)
    const [email,setEmail] = useState(props.email)

    const toggle = () => setModal(!modal);

    const submitButtonHandler = () =>{
    props.editContact( props.id,name,phone,email)
        toggle()
    }

    return (
        <div>
            <Button color="primary" onClick={toggle}>Edit</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Edit Contact</ModalHeader>
                <ModalBody>

                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Name</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="username" value={name} onChange = {e => setName(e.target.value)}/>
                    </InputGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Phone</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="username"value={phone} onChange = {e => setPhone(e.target.value)} />
                    </InputGroup>

                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Email</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="username" value={email} onChange = {e => setEmail(e.target.value)}/>
                    </InputGroup>







                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={submitButtonHandler}>Submit</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    editContact:(id,name,phone,email) => dispatch ({
        type:"EDIT_CONTACT",
        payload:{
            id,
            name,
            phone,
            email
        }
    })
})
export default connect(null,mapDispatchToProps)(EditContact);
