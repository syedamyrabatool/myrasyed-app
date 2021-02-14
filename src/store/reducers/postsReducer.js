import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILED } from "../types";

const initialState = {
  isLoading: false,
  posts: [],
  errorMsg: '',
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.posts,
        errorMsg: '',
      };
    case GET_POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        posts: [],
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
};

export default postsReducer;