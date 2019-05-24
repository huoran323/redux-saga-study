import { combineReducers } from "redux";

import users from "./users";
import counterReducer from "./counter";

export default combineReducers({
  users,
  counterReducer
});
