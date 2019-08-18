import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  FILTER_CONTACTS,
  UPDATE_CONTACT
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Patricio Serrano',
        email: 'patricio@gmail.com',
        phone: '333-333-333',
        type: 'professional'
      },
      {
        id: 2,
        name: 'Ernesto Morante',
        email: 'ernesto@gmail.com',
        phone: '333-333-333',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Harry white',
        email: 'harry@gmail.com',
        phone: '333-333-333',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // add contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // update contact

  // filter contacts

  // clear filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
