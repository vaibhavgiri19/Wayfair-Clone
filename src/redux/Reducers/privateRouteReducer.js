import { Authentication, logout } from "../actionTypes";


let isUser = JSON.parse(localStorage.getItem("credentials"));

let isLoginPresent = isUser ? true : false;

const initialState = {
  isAuth: isLoginPresent,
};

export const privateRouteReducer = (state = initialState, { type }) => {
  switch (type) {
    case Authentication:
      return { isAuth: true };
    case logout:
      return {isAuth: false};
    default:
      return state;
  }
};