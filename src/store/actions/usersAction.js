import axios from "axios";
import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILED } from "../types";

export const loadUsers = () => {
  return dispatch => {
    dispatch(getUsers());
    axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then(res => {
        dispatch(getUsersSuccess(res.data));
      })
      .catch((error) => {
        dispatch(getUsersFailed(error.message));
      });
  };
};

const getUsers = () => {
  return {
    type: GET_USERS,
    isLoading: true
  };
};

const getUsersSuccess = users => {
  return {
    type: GET_USERS_SUCCESS,
    users
  };
};

const getUsersFailed = errorMsg => {
  return {
    type: GET_USERS_FAILED,
    errorMsg
  };
};