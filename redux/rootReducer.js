import { combineReducers } from 'redux';
import user from "./reducers/user";
import ivents from "./reducers/ivents";
import categories from "./reducers/categories";
import innnerC from "./reducers/innerC";
import outerC from "./reducers/outerC";

const rootReducer = combineReducers(
  {
    user: user,
    ivents:ivents,
    categories:categories
  }
)

export default rootReducer;