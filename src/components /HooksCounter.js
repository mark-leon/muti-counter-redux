import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

function HooksCounter({ id, count }) {
  //const count2 = useSelector((state) => state);
  //console.log(count2);
  //const count = useSelector((state) => state.count);
  //console.log(id); // 1
  //console.log(count); //0

  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increment(value, id));
  };

  const decrementHandler = (value) => {
    dispatch(decrement(value, id));
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => incrementHandler(5)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => decrementHandler(2)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default HooksCounter;
