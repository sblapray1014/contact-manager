import React, { Component, Fragment } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Spencer LaPray",
        email: "sblapray1@gmail.com",
        phone: "801-674-3059"
      },
      {
        id: 2,
        name: "John Doe",
        email: "john@gmail.com",
        phone: "801-855-8555"
      },
      {
        id: 3,
        name: "Jane Doe",
        email: "jane@gmail.com",
        phone: "801-833-8333"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </Fragment>
    );
  }
}

export default Contacts;
