import {
  UPLOAD_TEMPLATE,
  GET_TEMPLATE,
  GET_TEMPLATES,
  UPDATE_TEMPLATE,
  DELETE_TEMPLATE,
  FETCH_DROPDOWN,
} from '../actions/types';

const INITIAL_STATE = {
  currentTemplate: {},
  templateJson: {},
  templates: [],
  dropdown: [],
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
        templates: [...state.templates, action.payload],
      };
    case GET_TEMPLATE:
      return {
        ...state,
        currentTemplate: action.payload._doc,
        templateJson: action.payload.json,
      };
    case GET_TEMPLATES:
      return {
        ...state,
        templates: action.payload,
      };
    case UPDATE_TEMPLATE:
      return {
        ...state,
        ...action.payload,
      };
    case DELETE_TEMPLATE:
      //create copy of the curreny state of templates
      const currentTemplateToDelete = [...state.templates];
      //determine at wich index in template array a template is to be deleted
      const indexToDelete = currentTemplateToDelete.findIndex (template => {
        return template._id == action.payload;
      });
      return {
        ...state,
        templates: [
          ...currentTemplateToDelete.slice (0, indexToDelete),
          ...currentTemplateToDelete.slice (indexToDelete + 1),
        ],
      };
    case FETCH_DROPDOWN:
      return {
        ...state,
        dropdown: action.payload,
      };
    default:
      return state;
  }
};
