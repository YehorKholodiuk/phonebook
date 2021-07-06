import React from "react";
import DeleteModal from "./DeleteModal";
import EditContact from "./EditContact";

function ContactItem(props){
    const {name,id,phone, email} = props;

    const deleteContact = (props) => {
        props.contacts.filter(el => el.id ==='')
    }
    return (<tr>
        <th scope="row">{props.count}</th>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>
            <DeleteModal contactName = {props.name} id ={props.id }/>


        </td>
        <td>
            <EditContact contact={props.contacts} id ={props.id }/>
        </td>

    </tr>
)
}
export default ContactItem;

