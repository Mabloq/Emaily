import {
  UPLOAD_TEMPLATE,
  GET_TEMPLATE,
  GET_TEMPLATES,
  EDIT_TEMPLATE,
  DELETE_TEMPLATE,
} from '../actions/types';

const INITIAL_STATE = {
  currentTemplate: {},
  templates: [],
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPLOAD_TEMPLATE:
      return {
        ...state,
        ...action.payload,
      };
    case GET_TEMPLATE:
      return {
        ...state,
        currentTemplate: action.payload,
      };
    case GET_TEMPLATES:
      return {
        ...state,
        ...action.payload,
      };
    case EDIT_TEMPLATE:
      return {
        ...state,
        ...action.payload,
      };
    case DELETE_TEMPLATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
