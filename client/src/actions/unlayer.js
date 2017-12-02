import {
  UPLOAD_TEMPLATE,
  GET_TEMPLATE,
  GET_TEMPLATES,
  EDIT_TEMPLATE,
  DELETE_TEMPLATE,
} from './types';
import axios from 'axios';

export const getTemplate = name => async dispatch => {
  console.log (name);
  const res = await axios.get ('/api/template/' + name);
  dispatch ({
    payload: res.data,
    type: GET_TEMPLATE,
  });
};

export const getTemplates = (json, name) => async dispatch => {
  dispatch ({
    payload: {},
    type: GET_TEMPLATES,
  });
};

export const uploadTemplate = (json, name) => async dispatch => {
  const res = await axios.post ('/api/template/upload', {json, name});
  dispatch ({
    payload: res.data,
    type: UPLOAD_TEMPLATE,
  });
};

export const editTemplate = (json, name) => {
  return dispatch => {
    dispatch ({
      payload: {},
      type: EDIT_TEMPLATE,
    });
  };
};

export const deleteTemplate = (json, name) => {
  return dispatch => {
    dispatch ({
      payload: {},
      type: DELETE_TEMPLATE,
    });
  };
};
