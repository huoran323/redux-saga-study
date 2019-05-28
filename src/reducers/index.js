import { combineReducers } from "redux";

import user from "./users";
import counterReducer from "./counter";

export default combineReducers({
  user,
  counterReducer
});
