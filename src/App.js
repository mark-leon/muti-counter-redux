import { useDispatch, useSelector } from "react-redux";
import HooksCounter from "./components /HooksCounter";
import { addCounter, reset } from "./redux/counter/actions";

export default function App() {
  const state = useSelector((state) => state);
  //console.log(typeof state);
  const dispatch = useDispatch();

  const addCounterHandler = () => {
    dispatch(addCounter());
  };
  const resetHandler = () => {
    dispatch(reset());
  };
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      {state.map((count) => (
        <div className="max-w-md mx-auto mt-10 space-y-5">
          <HooksCounter id={count.id} key={count.id} count={count.count} />
        </div>
      ))}
      <button
        class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
        onClick={() => addCounterHandler()}
      >
        Add Counter
      </button>
      <button
        class="bg-indigo-400 text-white px-3 py-2 rounded shadow ml-6"
        onClick={() => resetHandler()}
      >
        Reset
      </button>
    </div>
  );
}
