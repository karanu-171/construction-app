import { toast, } from "react-toastify";
import * as api from "../../api/technicianIndex";
import { actionTypes } from "./types";


export const registerTechnician = (technician) => async (dispatch) => {
  try {
    const response = await api.createTechnician(technician);
    localStorage.setItem("token", response.data);
    dispatch({
      type: actionTypes.REGISTER_TECHNICIAN,
      payload: response.data
    });
  } catch (error) {
    console.log(error.response.data);
   toast.error(error,{
    position: toast.POSITION.BOTTOM_RIGHT
   })
  }
};

export const loginTechnician = (technician) => async (dispatch) => {
  try {
    console.log(technician)
    const response = await api.loginTechnician(technician);
    console.log(response.data)
    localStorage.setItem("token", response.data);
    dispatch({
      type: actionTypes.LOGIN_TECHNICIAN,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response.data);
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export const getTechnicians = () => async (dispatch) => {
  try {
    const response = await api.allTechnicians();

    dispatch({
      type: actionTypes.ALL_TECHNICIANS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
  }
};

export const deleteTechnician = (id) => async (dispatch) => {
  try {
    await api.deleteTechnician(id);

    dispatch({
      type: actionTypes.DELETE_TECHNICIAN,
      payload: id,
    });
  } catch (error) {
    console.log(error);
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
  }
  dispatch(getTechnicians());
};


export const signOutTechnician = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: actionTypes.LOGOUT_TECHNICIAN,
  });
};

export const getTechnician = () => async (dispatch) => {
  try {
    const response = await api.getTechnician();

    dispatch({
      type: actionTypes.ONE_TECHNICIAN,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
  }
};