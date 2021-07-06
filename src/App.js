import React, {useState} from "react";
import './App.css';
import {connect} from "react-redux";
import ContactItem from "./ContactItem";
import {Button} from "reactstrap";
import AddContactModal from "./AddContactModal";
import DeleteModal from "./DeleteModal";

function App(props) {
  const [modalActive, setModalActive] = useState(false)
    let count = 100;
  return (
    <div className="App">
      <h1>Contact book</h1>
<AddContactModal/>
      <table className="table  table-dark table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">NAME</th>
          <th scope="col">PHONE</th>
          <th scope="col">EMAIL</th>
          <th scope="col">DELETE</th>
          <th scope="col">EDIT</th>
        </tr>
        </thead>
        <tbody>
        {
          props.contacts.map( el => <ContactItem key = {el.id}
              {...el} count = {++count}
              />
          )}

        </tbody>
      </table>
    </div>
  );
}
const mapStateToProps = (state) => ({
contacts: state.contacts
})

export default connect(mapStateToProps) (App);

