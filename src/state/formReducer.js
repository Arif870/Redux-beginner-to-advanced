import { actionTypes } from "./actionTypes";

export const initialState = {
  firstName: "",
  lastName: "",
  gmail: "",
  state: "",
  count: 0,
  gender: "",
  agree: false,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case actionTypes.TOGGLE:
      return {
        ...state,
        agree: !state.agree,
      };

    default:
      return state;
  }
};
