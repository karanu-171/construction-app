import {actionTypes} from '../actions/types';


const initialState = {
    error: 'False',
    chat: '',
    chats: '',   
}

const chatReducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.ERROR:
            return{
                ...state,
                error: action.payload
            }
        case actionTypes.SAVE_CHAT: 
          return{
            ...state,
            chat: action.payload
          }
        case actionTypes.GET_ROOM_CHAT:
            return{
                ...state,
                chats: action.payload
            }
          default:
            return state;
    }
} 
export default chatReducer;