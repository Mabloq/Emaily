import {combineReducers} from 'redux';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';
import landingTitle from './UI_Reducers/landingTitle';

import templateReducer from './templateReducer';
import {reducer as reduxForm} from 'redux-form';

export default combineReducers ({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer,
  landingTitle: landingTitle,
  template: templateReducer,
});
