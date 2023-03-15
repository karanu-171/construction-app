import { toast, } from "react-toastify";
import * as api from "../../api/employerIndex";
import { actionTypes } from "./types";


export const registerEmployer = (employer) => async (dispatch) => {
  try {
    const response = await api.createEmployer(employer);
    localStorage.setItem("token", response.data);
    dispatch({
      type: actionTypes.REGISTER_EMPLOYER,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response.data);
   toast.error(error.response?.data,{
    position: toast.POSITION.BOTTOM_RIGHT
   })
  }
};

export const loginEmployer = (employer) => async (dispatch) => {
  try {
    console.log(employer)
    const response = await api.loginEmployer(employer);
    localStorage.setItem("token", response.data);
    dispatch({
      type: actionTypes.LOGIN_EMPLOYER,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.response.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export const getEmployers = () => async (dispatch) => {
  try {
    const response = await api.allEmployers();

    dispatch({
      type: actionTypes.ALL_EMPLOYERS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
  }
};

export const deleteEmployer = (id) => async (dispatch) => {
  try {
    await api.deleteEmployer(id);

    dispatch({
      type: actionTypes.DELETE_EMPLOYER,
      payload: id,
    });
  } catch (error) {
    console.log(error);
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
  }
  dispatch(getEmployers());
};

export const signOutEmployer = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SIGN_OUT_EMPLOYER,
    });
  };
};
