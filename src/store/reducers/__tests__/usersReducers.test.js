import usersReducer from "../usersReducer";

import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED
} from "../../types";

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual(
      {
        isLoading: false,
        users: [],
        errorMsg: ''
      }
    )
    expect(usersReducer(undefined, GET_USERS)).toMatchSnapshot();
  });
  it('should return the updated state', () => {
    expect(usersReducer([], {
      type: GET_USERS
    })).toEqual(
      {isLoading: true}
    );

    expect(usersReducer([], {
      type: GET_USERS_SUCCESS
    })).toEqual(
      {
        users: undefined,
        errorMsg: '',
        isLoading: false,
      }
    );

    expect(usersReducer([], {
      type: GET_USERS_FAILED
    })).toEqual(
      {
        users: [],
        errorMsg: undefined,
        isLoading: false,
      }
    );
  });
})