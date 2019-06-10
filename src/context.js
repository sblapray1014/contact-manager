import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
