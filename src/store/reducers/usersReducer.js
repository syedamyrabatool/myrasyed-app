import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILED } from "../types";

const initialState = {
  isLoading: false,
  users: [],
  errorMsg: '',
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.users,
        errorMsg: '',
      };
    case GET_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        users: [],
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
};

export default usersReducer;