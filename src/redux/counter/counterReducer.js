import { ADD_COUNTER, DECREMENT, INCREMENT, RESET } from "./actionTypes";

const initialState = [
  {
    id: 1,
    count: 5,
  },
];

const counterReducer = (state = initialState, action) => {
  //console.log("action_id", action.id);
  //console.log("state", state);
  // console.log("state length", state.length);
  // console.log("state[index] value", state[0]);
  switch (action.type) {
    case INCREMENT:
      // return state.map((c) => {
      //   return {
      //     ...c,
      //     count: (c.count = 0),
      //   };
      // })
      // console.log(state);
      // return {
      //   ...state,
      //   count: state.map((counter) =>
      //     counter.id === action.id ? { ...counter, count: count + 1 } : counter
      //   ),
      // };

      return state.map((counter) =>
        counter.id === action.id
          ? { ...counter, count: counter.count + 1 }
          : counter
      );
    // state.map((c) => {
    //   console.log(c);
    //   if (c.id === action.id) {
    //     console.log(c);
    //   }

    // if (c.id === action.id) {
    //   let item = [...c, { count: c.count + action.payload }];
    //   console.log(item);
    //   return {
    //     ...c,
    //     count: c.count + action.payload,
    //   };
    // }
    // });
    // return state;
    // state = [...state];
    // return state.map((c) => {
    //   if (c.id === action.id) {
    //     return {
    //       ...c,
    //       count: c.count + action.payload,
    //     };
    //   }
    // });

    case DECREMENT:
      return state.map((counter) =>
        counter.id === action.id
          ? { ...counter, count: counter.count - 1 }
          : counter
      );
    // return state.map((c) => {
    //   if (c.id === action.id) {
    //     return {
    //       ...c,
    //       count: c.count - action.payload,
    //     };
    //   }
    // });
    case RESET:
      return state.map((c) => {
        return {
          ...c,
          count: (c.count = 0),
        };
      });
    // case RESET:
    //   console.log("bloody motherf*** state", state);
    //   return state;
    case ADD_COUNTER:
      let item = [
        ...state,

        {
          id: state[state.length - 1].id + 1,
          count: 5,
        },
      ];
      //console.log("item", item);
      //console.log(state[state.length - 1].id);
      return item;
    // [
    //   ...state,
    //   {
    //     id: state[state.length - 1].id + 1,
    //     count: 0,
    //   },
    // ];

    default:
      return state;
  }
};

export default counterReducer;
