import {NEXT_TITLE, NEXT_LOAD} from '../types';

export const nextTitle = current => dispatch => {
  dispatch ({type: NEXT_TITLE, payload: current});
};

export const nextLoad = current => dispatch => {
  dispatch ({type: NEXT_LOAD, payload: current});
};
