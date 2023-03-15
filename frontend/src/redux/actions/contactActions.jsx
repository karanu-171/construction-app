import { toast, } from "react-toastify";
import * as api from "../../api/contactIndex";
import { actionTypes } from "./types";


export const saveContact = (contact) => async (dispatch) => {
  try {
    console.log(contact)
    const response = await api.saveContact(contact);

    dispatch({
      type: actionTypes.SAVE_CONTACT,
      payload: response.data
    });
  } catch (error) {
    console.log(error.response.data);
   toast.error(error,{
    position: toast.POSITION.BOTTOM_RIGHT
   })
 }
}

export const getContact = () => async (dispatch) => {
    try {
      console.log(contact)
      const response = await api.getContact();
  
      dispatch({
        type: actionTypes.GET_CONTACT,
        payload: response.data
      });
    } catch (error) {
      console.log(error.response.data);
     toast.error(error,{
      position: toast.POSITION.BOTTOM_RIGHT
     })
   }
  }