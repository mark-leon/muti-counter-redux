import {
  ADD_COUNTER,
  DECREMENT,
  INCREMENT,
  REMOVE_COUNTER,
  RESET,
  TOTAL,
} from "./actionTypes";

const initialState = [
  {
    id: 1,
    count: 0,
  },
];

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state.map((counter) =>
        counter.id === action.id
          ? { ...counter, count: counter.count + 1 }
          : counter
      );

    case DECREMENT:
      return state.map((counter) =>
        counter.id === action.id
          ? { ...counter, count: counter.count - 1 }
          : counter
      );

    case RESET:
      return state.map((c) => {
        return {
          ...c,
          count: (c.count = 0),
        };
      });

    case ADD_COUNTER:
      let item = [
        ...state,

        {
          id: state[state.length - 1].id + 1,
          count: 0,
        },
      ];

      return item;
    case TOTAL:
      return state.reduce((total, counter) => total + counter.count, 0);

    case REMOVE_COUNTER:
      if (state.length == 1) {
        return initialState;
      } else {
        return state.filter((counter) => counter.id != action.id);
      }

    default:
      return state;
  }
};

export default counterReducer;
