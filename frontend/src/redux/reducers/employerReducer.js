import { toast } from "react-toastify";
import { actionTypes } from "../actions/types";
import jwtDecode from "jwt-decode";

const initialState = {
  employers: [],
  employer: {
    token: localStorage.getItem("token"),
  },
};

const employerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALL_EMPLOYERS:
      return {
        employers: action.payload,
      };

    case actionTypes.REGISTER_EMPLOYER:
      toast("Registration successful...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      const authEmployer = jwtDecode(action.payload);
      return {
        employer: {
          ...state,
          token: action.payload,
          fullName: authEmployer.fullName,
          email: authEmployer.email,
          _id: authEmployer._id,
        },
      };

    case actionTypes.SIGN_EMPLOYER:
      const validEmployer = jwtDecode(action.payload);
      toast.success("Login successful...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      return {
        employer: {
          ...state,
          token: action.payload,
          fullName: validEmployer.fullName,
          email: validEmployer.email,
          _id: validEmployer._id,
        },
      };

    case actionTypes.DELETE_EMPLOYER:
      toast("Employer deleted...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        employers: state.filter((deleteEmployer) => deleteEmployer._id !== state._id),
      };

    case actionTypes.SIGN_OUT_EMPLOYER:
      localStorage.removeItem("token");
      toast("Logging out..", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      return {
        token: null,
        fullName: null,
        email: null,
        _id: null,
      };

    default:
      return state;
  }
};

export default employerReducer;
