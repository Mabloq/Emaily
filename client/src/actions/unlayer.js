import {
  UPLOAD_TEMPLATE,
  GET_TEMPLATE,
  GET_TEMPLATES,
  UPDATE_TEMPLATE,
  DELETE_TEMPLATE,
} from './types';
import axios from 'axios';

export const getTemplate = (id, name) => async dispatch => {
  const res = await axios.get (`/api/template/${id}/${name}`);
  dispatch ({
    payload: res.data,
    type: GET_TEMPLATE,
  });
};

export const getTemplates = () => async dispatch => {
  const res = await axios.get ('/api/templates');
  dispatch ({
    payload: res.data,
    type: GET_TEMPLATES,
  });
};

export const uploadTemplate = (
  html,
  json,
  {name, category}
) => async dispatch => {
  const res = await axios.post ('/api/template/upload', {
    html,
    json,
    form: {name, category},
  });

  dispatch ({
    payload: res.data,
    type: UPLOAD_TEMPLATE,
  });
};

export const updateTemplate = (json, name) => {
  return dispatch => {
    dispatch ({
      payload: {},
      type: UPDATE_TEMPLATE,
    });
  };
};

export const deleteTemplate = (id, name) => async dispatch => {
  const res = await axios.delete (`/api/template/${id}/${name}`);
  dispatch ({
    payload: res.data,
    type: DELETE_TEMPLATE,
  });
};
