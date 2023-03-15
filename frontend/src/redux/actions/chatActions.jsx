import { actionTypes } from './types';
import * as api from '../../api/chatApi';


export const saveChat = (chatting) => async (dispatch) =>{
    try {
        const response  = await api.saveChat(chatting)
        
        dispatch({ type:actionTypes.SAVE_CHAT, payload: response.data})
    } catch (error) {
        console.log(error?.response?.data)
    }

}

export const getRoomChat = (room) => async (dispatch) =>{
    try {
        const response = await api.getRoomChat(room)
console.log({response})
// if(response.data.length == 0) return
        dispatch({ type: actionTypes.GET_ROOM_CHAT, payload: response.data})
    } catch (error) {
        console.log(error)
    }
}