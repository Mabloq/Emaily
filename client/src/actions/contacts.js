import axios from 'axios';
import {
  GET_CONTACT,
  GET_CONTACTS,
  CREATE_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  CONTACT_DROPDOWN,
} from './types';

export const fetchContacts = () => async dispatch => {
  const res = await axios.get ('/api/contacts');
  dispatch ({type: GET_CONTACTS, payload: res.data});
};

export const fetchContact = id => async dispatch => {
  const res = await axios.get (`/api/contact/${id}`);
  dispatch ({type: GET_CONTACT, payload: res.data});
};

export const createContact = contact => async dispatch => {
  const res = await axios.post ('/api/contacts', contact);
  dispatch ({type: CREATE_CONTACT, payload: res.data});
};

export const deleteContact = id => async dispatch => {
  const res = await axios.delete (`/api/contacts/${id}`, id);
  dispatch ({type: DELETE_CONTACT, payload: res.data});
};

export const updateContact = id => async dispatch => {
  const res = await axios.patch (`/api/contacts/${id}`, id);
  dispatch ({type: UPDATE_CONTACT, payload: res.data});
};
export const fetchContactDropdown = id => async dispatch => {
  const res = await axios.get ('/api/contacts/dropdown');
  dispatch ({type: CONTACT_DROPDOWN, payload: res.data});
};
