import * as RequestConstants from "../../constants/request";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
  case RequestConstants.SET_REQUEST_IN_PROCESS:
    return setRequestInProcess(state, action);
  }
  return state;
}

function setRequestInProcess(state, action) {
  const { inProcess, requestType } = action;
  const requestObject = {};
  requestObject[requestType] = inProcess;
  return Object.assign({}, state, requestObject);
}