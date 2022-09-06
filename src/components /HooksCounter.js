import { useDispatch } from "react-redux";
import { decrement, increment, remove } from "../redux/counter/actions";

function HooksCounter({ id, count }) {
  const dispatch = useDispatch();

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => dispatch(increment(count, id))}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => dispatch(decrement(count, id))}
        >
          Decrement
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => dispatch(remove(id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default HooksCounter;
