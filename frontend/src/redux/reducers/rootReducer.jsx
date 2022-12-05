import { combineReducers } from "redux";
import employerReducer from "./employerReducer";
import technicianReducer from "./technicianReducer";
import chatReducer from "./chatReducer";
import contactReducer from './contactReducer';


export const reducers = combineReducers({
    employerReducer,
    technicianReducer,
    contactReducer,
    chatReducer
});
