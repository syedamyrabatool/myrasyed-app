import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import postsReducer from "./reducers/postsReducer";
import usersReducer from "./reducers/usersReducer";
const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));
export default store;