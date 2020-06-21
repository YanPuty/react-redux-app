import axios from "axios";
import { GET_BUSINESS_REQUEST } from "../module/HomePage/constants/Index";


export const getAllBusiness = () => (dispatch, getState) => {

    const getListSuccess = (objectIds) => {
      return {
        type: `${GET_BUSINESS_REQUEST}_SUCCESS`,
        payload: objectIds
      };
    };

    dispatch(setRequestInProcess(true, GET_BUSINESS_REQUEST));
    axios.request({
        url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer",
        method: "GET",
        headers: {
          "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": "334f098218msh4f0c5ee19e4c590p19e13cjsn418cb7613940",
          "useQueryString": true
        },
    }).then((response) => {
        dispatch(setRequestInProcess(false, GET_BUSINESS_REQUEST));
        dispatch(getListSuccess(response));
    }).catch((err) => {
        console.log(err);
    });
}

export function setRequestInProcess(inProcess, requestType) {
  return {
    type: "SET_REQUEST_IN_PROCESS",
    requestType,
    inProcess
  };
}