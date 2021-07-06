import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from "react-redux";

const DeleteModal = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const deleteButtonHandler = () => {
     props.deleteContact(props.id)
        toggle()
    }

    return (
        <div>
            <Button color="danger" onClick={toggle}>DELETE</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Delete Window</ModalHeader>
                <ModalBody>
              Do you want to delete it {props.contactName}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={deleteButtonHandler}>Confirm</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    deleteContact: (id) => dispatch({type:'DELETE_CONTACT',
    payload:id})
})
export default connect(null,mapDispatchToProps) (DeleteModal);


