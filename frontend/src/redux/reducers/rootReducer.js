import { combineReducers } from "redux";
import employerReducer from "./employerReducer";
import technicianReducer from "./technicianReducer";
import chatReducer from "./chatReducer"


export const reducers = combineReducers({
    employerReducer,
    technicianReducer,
    chatReducer
});
