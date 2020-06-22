import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import request from "./request"
import entities from "./entities";


import business from "../module/HomePage/reducers"

export default combineReducers({
  form: formReducer,
  business,
  entities,
  request
});