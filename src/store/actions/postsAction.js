import axios from "axios";
import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILED } from "../types";

export const loadPosts = (uid) => {
  return dispatch => {
    dispatch(getPosts());
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          userId: uid
        }
      })
      .then(res => {
        dispatch(getPostsSuccess(res.data));
      })
      .catch((error) => {
        dispatch(getPostsFailed(error.message));
      });
  };
};

const getPosts = () => {
  return {
    type: GET_POSTS,
    isLoading: true
  };
};

const getPostsSuccess = posts => {
  return {
    type: GET_POSTS_SUCCESS,
    posts
  };
};

const getPostsFailed = errorMsg => {
  return {
    type: GET_POSTS_FAILED,
    errorMsg
  };
};