import { combineReducers } from "redux";
import AllpostReducer from "./reducer-Allpost";

const rootReducer=combineReducers({
    allPost=AllpostReducer,
})

export default rootReducer;