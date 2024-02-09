import { useState } from "react";
import "./Box.css";
function Box() {
  const [number, setnumber] = useState(0);
  function decrement() {
    setnumber(number - 1);
    console.log("number");
  }
  function increment() {
    setnumber(number + 1);
    console.log("number");
  }
  function clear() {
    setnumber(0);
    console.log("clear kro");
  }

  return (
    <div className="bigbox">
      <div className="heading">
        <h2>Increment-Decrement</h2>
      </div>
      <div className="middle">
        <button onClick={decrement} className="middle-child">
          -
        </button>
        {/* <input className="middle-child" value={number} type="text"></input> */}
        <p className="middle-child">{number}</p>
        <button onClick={increment} className="middle-child">
          +
        </button>
      </div>
      <div className="bottom">
        <button onClick={clear}>Reset</button>
      </div>
    </div>
  );
}
export default Box;
