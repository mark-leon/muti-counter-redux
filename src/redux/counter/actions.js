import { ADD_COUNTER, DECREMENT, INCREMENT, RESET } from "./actionTypes";

export const increment = (value, id) => {
  //console.log("actionTypes", id);
  return {
    type: INCREMENT,
    payload: value,
    id: id,
  };
};

export const decrement = (value, id) => {
  //console.log("actionTypes", id);
  return {
    type: DECREMENT,
    payload: value,
    id: id,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const addCounter = () => {
  return {
    type: ADD_COUNTER,
  };
};
