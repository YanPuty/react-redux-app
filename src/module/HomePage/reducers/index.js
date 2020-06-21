import { func } from "prop-types";
import { GET_BUSINESS_REQUEST_SUCCESS } from "../constants/Index";

const initialState = {
    list: [],
};

export default function (state= initialState, action) {
    switch (action.type) {
        case GET_BUSINESS_REQUEST_SUCCESS:
            return {
                ...state,
                list: action
            };
        default:
            return state;
    }
};