import {
  ADD_COUNTER,
  DECREMENT,
  INCREMENT,
  REMOVE_COUNTER,
  RESET,
  TOTAL,
} from "./actionTypes";

export const increment = (value, id) => {
  return {
    type: INCREMENT,
    payload: value,
    id: id,
  };
};

export const decrement = (value, id) => {
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

export const total = () => {
  return {
    type: TOTAL,
  };
};
export const remove = (id) => {
  return {
    type: REMOVE_COUNTER,
    id: id,
  };
};
