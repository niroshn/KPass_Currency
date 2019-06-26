import * as actions from '../actions';

const initialState = {
  fetching: false,
  loaded: false,
  data: {},
  error: {}
};

const startFormSubmit = (state, action) => {
  return { ...state, fetching: true, data: action };
};

const currencyReceived = (state, action) => {
  return { ...state, loaded: true, data: action.data };
};

const error = (state, action) => {
  return { ...state, error: action.data };
};

const handlers = {
  [actions.SUBMIT_FORM_START]: startFormSubmit,
  [actions.SUBMIT_FORM_SUCCESS]: currencyReceived,
  [actions.API_ERROR]: error
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === 'undefined') return state;
  return handler(state, action);
};
