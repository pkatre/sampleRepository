import React, { useState } from "react";

export default function Example() {
  
  let [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>

      {/* <button
        onClick={() => {
          count = count + 1;
        }}
      ></button>*/}
    </div>
  );
}
