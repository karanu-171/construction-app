import { toast } from "react-toastify";
import { actionTypes } from "../actions/types";
import jwtDecode from "jwt-decode";

const initialState = {
  technicians: [],
  technician: {
    token: localStorage.getItem("token"),
  },
};

const technicianReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALL_TECHNICIANS:
      return {
        technicians: action.payload,
      };

    case actionTypes.ONE_TECHNICIAN:
       return {
        technician: action.payload,
       }

    case actionTypes.REGISTER_TECHNICIAN:
      toast("welcome...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      const authTechnician = jwtDecode(action.payload);
      return {
        technician: {
          ...state,
          token: action.payload,
          fullName: authTechnician.fullName,
          email: authTechnician.email,
          phoneNumber: authTechnician.phoneNumber,
          location: authTechnician.location,
          _id: authTechnician._id,
        },
      };

    case actionTypes.LOGIN_TECHNICIAN:
      const validTechnician = jwtDecode(action.payload);
      toast.success("Welcome Back...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      return {
        technician: {
          ...state,
          token: action.payload,
          fullName: validTechnician.fullName,
          email: validTechnician.email,
          phoneNumber: validTechnician.phoneNumber,
          location: validTechnician.location,
          _id: validTechnician._id,
        },
      };

    case actionTypes.DELETE_TECHNICIAN:
      toast("Technician deleted...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        technicians: state.filter((deleteTechnician) => deleteTechnician._id !== state._id),
      };

    case actionTypes.SIGN_OUT_TECHNICIAN:
      toast("Logging out..", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      return {};

    default:
      return state;
  }
};

export default technicianReducer;
