import React from "react";
import { useReducer } from "react";

const UseReduse = () => {
  const initialState = 0;
  function reducer(state, action) {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  }

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Use Reduse</h1>
      <p> count = <h1>{count}</h1> </p>
      <button onClick={() => dispatch("increment")}> increment</button>
      <button onClick={() => dispatch("decrement")}> decrement</button>
      <button onClick={() => dispatch("reset")}> reset</button>
    </div>
  );
};

export default UseReduse;
