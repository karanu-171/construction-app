import { toast } from "react-toastify";
import { actionTypes } from "../actions/types";


const initialState = {
    contacts: '',
    contact: ''
}

const contactReducer = (state = initialState, action) =>{
    switch(action.type){
        
        case actionTypes.SAVE_CONTACT: 
          return{
            ...state,
            contact: action.payload
          }
        case actionTypes.GET_CONTACT:
            return{
                ...state,
                contacts: action.payload
            }
          default:
            return state;
    }
} 
export default contactReducer;
    