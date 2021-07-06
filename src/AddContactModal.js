import React,{useState} from "react";
import {Button,Modal, ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import {connect} from "react-redux";
import {v4 as uuidv4} from 'uuid';

const AddContactModal = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')

    const okButtonHandler = () => {
        const contact = {name,phone,email,id: uuidv4()};
        props.addNewContact(contact);
        toggle();
    }
    return (
        <div>
            <Button color="danger" onClick= {toggle}>Add New contact </Button>
            <Modal isOpen ={modal} toggle ={toggle}>
                <ModalHeader toggle={toggle}>Add New contact</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Name</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                               aria-describedby="basic-addon1" value ={name} onChange={e => setName(e.target.value)}/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Phone</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                               aria-describedby="basic-addon1"value ={phone} onChange={e => setPhone(e.target.value)}/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Email</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                               aria-describedby="basic-addon1"value ={email} onChange={e => setEmail(e.target.value)}/>
                    </div>


                </ModalBody>

                <ModalFooter>
                    <Button color = "primary" onClick={okButtonHandler}>Ok</Button>
                    {' '}
                    <Button color = "secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>

            </Modal>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    addNewContact: (contact) => {
        dispatch ({
            type:"ADD_CARD",payload:contact
        });
    }
})
export default connect (null,mapDispatchToProps)(AddContactModal);