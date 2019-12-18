import {
    EXAMPLE_RESPONSE,
    EXAMPLE_LOADING,
    EXAMPLE_ERROR
} from "../actions/actionsExample/actionTypesExample";

const initialState = {
    loading:false,
    response:'',
    error:'',
};
export function reducerExample(state = initialState, action){
  switch (action.type) {
    case EXAMPLE_RESPONSE:
      return {
          ...state,
          response: action.response
      };
    case EXAMPLE_LOADING:
      return {
          ...state,
          loading: action.loading
      };
    case EXAMPLE_ERROR:
      return {
          ...state,
          error: action.error
      };
    default:
      return state;
  }
};
