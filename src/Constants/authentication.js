
export const CLIENT_CREDENTIAL_TYPE = "CLIENT_CREDENTIAL";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_TYPE = "LOGIN_CREDENTIAL";
export const LOGOUT = "LOGOUT";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const USER_LOGOUT = "USER_LOGOUT";

export const LOGIN_REQUEST_RULES = {
  username: {
    required: true,
  },
  password: {
    required: true,
  },  
};
  