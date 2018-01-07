import {
  GET_CONTACT,
  GET_CONTACTS,
  CREATE_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  CONTACT_DROPDOWN,
} from '../actions/types';

const INITIAL_STATE = {
  contacts: [],
  contact: {},
  dropdown: [],
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case CONTACT_DROPDOWN:
      return {
        ...state,
        dropdown: action.payload,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};
