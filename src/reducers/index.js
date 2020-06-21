import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import business from "../module/HomePage/reducers"
import request from "./request"

export default combineReducers({
  form: formReducer,
  business,
  request
});