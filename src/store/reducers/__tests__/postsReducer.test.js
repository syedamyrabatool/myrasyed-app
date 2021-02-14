import postsReducer from "../postsReducer";

import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED
} from "../../types";

describe("reducers", () => {
  it("should return the initial state", () => {
    expect(postsReducer(undefined, {})).toEqual(
      {
        isLoading: false,
        posts: [],
        errorMsg: ''
      }
    )
    expect(postsReducer(undefined, GET_POSTS)).toMatchSnapshot();
  });
  it('should return the updated state', () => {
    expect(postsReducer([], {
      type: GET_POSTS
    })).toEqual(
      {isLoading: true}
    );

    expect(postsReducer([], {
      type: GET_POSTS_SUCCESS
    })).toEqual(
      {
        posts: undefined,
        errorMsg: '',
        isLoading: false,
      }
    );

    expect(postsReducer([], {
      type: GET_POSTS_FAILED
    })).toEqual(
      {
        posts: [],
        errorMsg: undefined,
        isLoading: false,
      }
    );
  });
})